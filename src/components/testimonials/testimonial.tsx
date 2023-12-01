

export interface TESTIMONIAL {
  text: string;
  name: string;
  state: string;
  image: string;
  className?: string
}

export default function TESTIMONIAL(props: TESTIMONIAL) {

  return (
    <div className="hover:text-white hover:bg-secondary-500  bg-[#F1F1F1] w-[264px] hover:cursor-pointer text-[14px] px-[18px] pt-[30px] pb-[20px] h-fit flex flex-col gap-y-16 rounded-[10px] ">
      <div>
        <p className=" font-light">{props.text}</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
        <img src={props.image} alt={props.name} />
        </div>
        <div className="t font-light flex flex-col justify-start items-start">
          <div className=" font-normal leading-normal h-[15px]">{props.name}</div>
          <div className="font-light leading-normal">{props.state}</div>
        </div>
      </div>
    </div>
  );
}
