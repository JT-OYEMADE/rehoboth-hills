import { SelectedPage } from "@/shared/types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./index.scss"
import { testimonials } from "@/data/testimonial";
import TESTIMONIAL from "./testimonial";
// import {TESTIMONIALS} from "./testimonial";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Testimonials = ({ setSelectedPage }: Props) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="testimonials" className="w-full bg-primary-100 py-40">
      <div className="mx-auto w-5/6 flex flex-row justify-between items-center">
        <h1 className=" text-[30px] w-1/3">Here is what our clients say about us.</h1>
        <div className="flex flex-row gap-x-3">
          <button className="bg-secondary-500 rounded-full p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
              <path d="M10.07 5.93018L4 12.0002L10.07 18.0702" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M21 12L4.17004 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button className="bg-secondary-500 rounded-full p-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 25 24" fill="none">
              <path d="M14.93 18.0698L21 11.9998L14.93 5.92982" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3.99996 12L20.83 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="mt-3 mb-5 slide-container container-padding">
          <div className="slide-wrapper ten-slides horizontal-scrolling-items flex flex-row">
            {testimonials.map((test) => (
              <TESTIMONIAL key={test.name} name={test.name} image={test.image} text={test.text} state={test.state} className="string"/>
            ))}
            </div>
        </div>

    </section>
  );
};

export default Testimonials;
