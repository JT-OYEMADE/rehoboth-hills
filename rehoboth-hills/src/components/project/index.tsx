import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";
import gsap from "gsap";
import "@/components/testimonials/index.scss"
import { projects } from "@/data/projects";
import PROJECT from "./project";



type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};


const OurProject = ({ setSelectedPage }: Props) => {

  const [doctorsSlide, setDoctorsSlide] = useState(0);
  const scrollDoctorsLeft = () => {
    if (doctorsSlide > 0 && doctorsSlide <= 4) {
      const scrollableContent = document.querySelector(
        ".slide-wrappers.doctorss"
      ) as HTMLElement;
      const Image = document.querySelector(".slides.doctorss") as HTMLElement;
      const slide = doctorsSlide - 1;

      if (scrollableContent && Image) {
        setDoctorsSlide(slide);
        const ImageWidth = Image.offsetWidth;
        //10 for the gap between elements
        const scrollTo = ImageWidth * slide + 10 * slide;

        gsap.to(scrollableContent, { x: -scrollTo, duration: 0.5 });
      }
    }
  };

  const scrollDoctorsRight = () => {
    const max = window.innerWidth > 767.9 ? 2 : 3;
    if (doctorsSlide >= 0 && doctorsSlide < max) {
      const scrollableContent = document.querySelector(
        ".slide-wrappers.doctorss"
      ) as HTMLElement;
      const Image = document.querySelector(".slides.doctorss") as HTMLElement;
      const slide = doctorsSlide + 1;

      if (scrollableContent && Image) {
        setDoctorsSlide(slide);
        const ImageWidth = Image.offsetWidth;
        const scrollTo = ImageWidth * slide + 10 * slide;

        gsap.to(scrollableContent, { x: -scrollTo, duration: 0.5 });
      }
    }

    if (doctorsSlide === max) {
      const scrollableContent = document.querySelector(
        ".slide-wrappers.doctorss"
      ) as HTMLElement;

      if (scrollableContent) {
        setDoctorsSlide(0);

        gsap.to(scrollableContent, { x: 0, duration: 0.5 });
      }
    }
  };
  const scrollDoctorsRight1 = () => {
    const max = window.innerWidth > 0 ? 2 : 3;
    if (doctorsSlide >= 0 && doctorsSlide < max) {
      const scrollableContent = document.querySelector(
        ".slide-wrappers.doctorss"
      ) as HTMLElement;
      const Image = document.querySelector(".slides.doctorss") as HTMLElement;
      const slide = doctorsSlide + 1;

      if (scrollableContent && Image) {
        setDoctorsSlide(slide);
        const ImageWidth = Image.offsetWidth;
        const scrollTo = ImageWidth * slide + 10 * slide * 2;

        gsap.to(scrollableContent, { x: -scrollTo, duration: 0.5 });
      }
    }

    if (doctorsSlide === max) {
      const scrollableContent = document.querySelector(
        ".slide-wrappers.doctorss"
      ) as HTMLElement;

      if (scrollableContent) {
        setDoctorsSlide(0);

        gsap.to(scrollableContent, { x: 0, duration: 0.5 });
      }
    }
  };
  return (
    <section id="ourproduct" className="mx-auto min-h-full  w-5/6 py-10 md:py-20 font-haskoy overflow-x-hidden">

      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurProduct)}
      >
        <h1  className=" font-haskoy text-3xl md:text-5xl font-medium text-[#111] leading-normal -tracking-[1.92px]"> Our Projects </h1>
        <div
          className="md:mt-10 md:w-4/5 flex flex-row  slide-wrappers doctorss"
      
        >


          {projects.map((project, index) => (
            <PROJECT key={index} image={project.image} headT={project.headT} text={project.text} sHeadT={project.sHeadT} list_one={project.list_one} list_two={project.list_two} list_three={project.list_three} location={project.location} price={project.price} className="string" />
          ))}
        </div>
        <div className="flex flex-row item-center gap-3 font-haskoy font-light mt-5 md:-mt-16 md:absolute ">
          <div onClick={scrollDoctorsLeft} className="flex flex-row items-center gap-x-1 cursor-pointer">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7.975 4.94165L2.91667 9.99998L7.975 15.0583" stroke="#111111" stroke-opacity="0.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17.0833 10H3.05833" stroke="#111111" stroke-opacity="0.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <span className="hover:text-[#11111180]  text-[14px]">Previous Project</span>
          </div>
          <div onClick={scrollDoctorsRight} className="cursor-pointer flex flex-row items-center gap-x-1">
            <span className="hover:text-[#11111180] text-[14px]">Next Project</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12.025 15.0583L17.0833 10L12.025 4.94168" stroke="#111111" stroke-opacity="0.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M2.91667 10L16.9417 10" stroke="#111111" stroke-opacity="0.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default OurProject;
