import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col  lg:flex-row">
          {/* --------------- About Image --------------- */}
          <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order2 lg:order-1">
            <img src={aboutImg} alt="" />
            <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* -------------- About Content --------------- */}
          <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
            <h2 className="heading">
              Proud to be one of the nations best{" "}
            </h2>
            <p className="text__para">
             For more than 30 years we have been serving mankind , U.S. News and World recognized us as one of the best public hospitals in the Nation and #1 in India. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis praesentium dolores assumenda cupiditate odit? Ab.
            </p>
            <p className="text__para mt-[30px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id
              labore, nam dicta iure commodi perspiciatis ipsam officiis.
              Officia, nesciunt excepturi. Alias eaque quos cupiditate nostrum
              temporibus. Beatae ipsa a odit?Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Numquam.
            </p>
            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
