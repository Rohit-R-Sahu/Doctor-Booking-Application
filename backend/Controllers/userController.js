import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
export async function updateUser(req, res) {
  const id = req.params.id;
  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedUser,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Update" });
  }
}

export async function deleteUser(req, res) {
  const id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully Deleted",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Failed to Delete" });
  }
}

export async function getSingleUser(req, res) {
  const id = req.params.id;
  try {
    const user = await User.findById(id).select("-password");
    res.status(200).json({
      success: true,
      message: "User found",
      data: user,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "No user found" });
  }
}

export async function getAllUser(req, res) {
  try {
    const users = await User.find({}).select("-password");
    res.status(200).json({
      success: true,
      message: "Users found",
      data: users,
    });
  } catch (error) {
    res.status(404).json({ success: false, message: "Not found" });
  }
}

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    const { password, ...rest } = user._doc;
    
    res.status(200).json({
      success: true,
      message: "Getting profile information",
      data: { ...rest },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};

export const getMyAppointments = async (req, res) => {
  try {
    // Retrieve appointments from booking
    const bookings = await Booking.find({ user: req.userId });
    // Extract doctor ids from appointment bookings
    const doctorIds = bookings.map((el) => el.doctor.id);
    // Retieve doctors using doctor ids
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    res
      .status(200)
      .json({ success: true, message: "Getting appointments", data: doctors });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong" });
  }
};
