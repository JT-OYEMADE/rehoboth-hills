import useMediaQuery from "@/hooks/useMediaQuery";
import "@/components/testimonials/index.scss"
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';

interface ProjectProps {
  key: number; // or number, depending on your data
  image: string;
  image1?: string;
  text: string;
  className: string;
  list_one: string;
  list_two: string;
  list_three: string;
  location: string;
  headT: string;
  sHeadT: string;
  price: string;
}


const PROJECT: React.FC<ProjectProps> = ({
  image,
  text,
  list_one,
  list_two,
  list_three,
  location,
  headT,
  sHeadT,
  price,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1080px)");
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      {isAboveMediumScreens ? (
        <div className=" slides doctorss relative ">
          <img src={image} alt={headT} className=" md:h-[90%] md:w-[30%]" />
          <div className=" bg-[#FFF] md:w-[487px] px-[22px] pt-[40px] pb-[47px] md:absolute  md:top-[110px] md:border-[0.5px] md:ml-[840px] ">
            <h2 className=" text-[32px] text-[#111]">{headT}</h2>
            <p className=" font-light text-[14px] mb-6">{text}</p>
            <h6 className=" text-xs font-semibold">{sHeadT}</h6>
            <ol className="list-decimal  font-light text-sm leading-normal ml-4 w-[400px] mb-6">
              <li>{list_one}</li>
              <li>{list_two}</li>
              <li>{list_three}</li>
            </ol>
            <div className=" mb-1">
              <span className=" font-light text-[15px]">Location:</span>
              <span className=" font-medium text-[15px]">{location}</span>
            </div>
            <div className=" mb-1">
              <span className=" font-light text-[15px]">Price:</span>
              <span className=" font-medium text-[15px]">{price}</span>
            </div>
            <div className=" mt-11">
              <a href="" className="border-b pb-1 border-[#00000080]" >BUY NOW</a>

            </div>
          </div>
        </div>
      ) : (

<div className=" slides doctorss relative ">
          <img src={image} alt={headT} className=" sm:h-[90%] sm:w-[30%]" />
          <div className=" bg-[#FFF] md:w-[487px] px-[22px] pt-[40px] pb-[47px] md:absolute  md:top-[110px] border-[0.5px] md:ml-[850px] ">
            <h2 className=" text-[32px] text-[#111]">{headT}</h2>
            <p className=" font-light text-[14px] mb-6">{text}</p>
            <h6 className=" text-xs font-semibold">{sHeadT}</h6>
            <ol className="list-decimal  font-light text-sm leading-normal ml-4 w-[400px] mb-6">
              <li>{list_one}</li>
              <li>{list_two}</li>
              <li>{list_three}</li>
            </ol>
            <div className=" mb-1">
              <span className=" font-light text-[15px]">Location:</span>
              <span className=" font-medium text-[15px]">{location}</span>
            </div>
            <div className=" mb-1">
              <span className=" font-light text-[15px]">Price:</span>
              <span className=" font-medium text-[15px]">{price}</span>
            </div>
            <div className=" mt-11">
              <a href="" className="border-b pb-1 border-[#00000080]" >BUY NOW</a>

            </div>
          </div>
        </div>
        

      )}

    </>
  )
}

export default PROJECT

