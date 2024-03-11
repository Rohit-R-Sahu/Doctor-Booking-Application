import {faqs } from './../../assets/data/faqs';
import FaqItem from './FaqItem';

const FaqList = () => {
  return (
    <div className='mt-[38px]'>
        {
            faqs.map((item, i)=>(<FaqItem item={item} key={i}/>))
        }
    </div>
  )
}

export default FaqList