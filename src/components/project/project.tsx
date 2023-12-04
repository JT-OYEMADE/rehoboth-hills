import Project from "@/assets/projects/ph.png"
interface ProjectProps {
  key: number; // or number, depending on your data
  image: string;
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
  className,
  list_one,
  list_two,
  list_three,
  location,
  headT,
  sHeadT,
  price,
}) => {

  return (
    <>
      <div className="slides doctorss block md:hidden m-0">
        {/* <img src={Project} alt={headT} /> */}
        <div className="bg-[#FFF] mt-6 first:m-0">
          <h2 className="text-xl md:text-[32px] text-[#111]">{headT}</h2>
          <p className="font-light text-[14px] mb-6 w-[250px]">{text}</p>
          <h6 className="text-xs font-semibold">{sHeadT}</h6>
          <ol className="list-decimal  font-light text-sm w-[280px] leading-normal ml-4 mb-6">
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
          <div className=" my-8">
            <a href="" className="border-b pb-1 border-[#00000080]" >BUY NOW</a>

          </div>

        </div>
      </div>
      <div className=" slides doctorss relative hidden md:block">
        <img src={image} alt={headT} className=" md:h-[90%] md:w-[30%]" />
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
    </>


  )
}

export default PROJECT
//<div className=" bg-[#FFF] w-[487px] px-[22px] pt-[40px] pb-[47px] absolute -right-[25%]  top-[140px] border-[0.5px]">
