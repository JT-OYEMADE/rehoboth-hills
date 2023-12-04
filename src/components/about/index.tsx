import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";
import PText from "@/shared/PText";

// const childVariant = {
//   hidden: { opacity: 0, scale: 0.9 },
//   visible: { opacity: 1, scale: 1 },
// };

type Props = {
  // icon: JSX.Element;
  // title: string;
  // description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutus" className="bg-[#F4FCF6]">
      <div className="mx-auto min-h-full w-5/6 py-20 md:pb-32">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
        >
          <div className="flex flex-col md:flex-row justify-between items-start gap-20">
            <div className="md:mt-16">
              {/* HEADER */}
              <motion.div
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <PText>ABOUT US</PText>
              </motion.div>
              <motion.div
                className="md:my-5 md:w-4/6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <div>
                  <h1 className="basis-3/5 font-haskoy md:text-5xl text-4xl font-medium text-secondary-500 md:leading-[60px] -tracking-[1.92px] ">Rehoboth Hills{" "} <span className="text-black text-4xl md:text-5xl ">International Limited</span></h1>
                </div>
                <div className="flex flex-row md:justify-between mt-3  gap-6">
                  <span>
                    <h1 className=" font-haskoy md:text-5xl font-medium text-secondary-500  -tracking-[1.92px] text-4xl " >300+</h1>
                    <p className=" font-haskoy md:text-[16px] font-light text-[14px]">Customers</p>
                  </span>
                  <span className="">
                    <h1 className=" font-haskoy md:text-5xl font-medium text-secondary-500 -tracking-[1.92px] text-4xl " >1000+</h1 >
                    <p className=" font-haskoy md:text-[16px] font-light text-[14px]">Partners</p>
                  </span>
                  <span>
                    <h1 className=" font-haskoy md:text-5xl font-medium text-secondary-500 -tracking-[1.92px] text-4xl " >50+</h1 >
                    <p className=" font-haskoy md:text-[16px] font-light text-[14px]">Realtors</p>
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="md:mt-16 items-start justify-between gap-20 md:flex  md:w-3/6 md:items-start">
              <div>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <p className="my-5 font-haskoy font-light text-base ">
                    In an ever-evolving real estate landscape, Rehoboth Hills Limited stands out as a beacon of unwavering commitment to crafting not just homes, but lifestyles. We understand that a home isn't merely a structure but a reflection of your dreams and aspirations. With this core philosophy, we've embarked on a journey to create spaces that seamlessly blend modernity, sustainability, and luxury.
                  </p>
                  <p className="mb-5 font-haskoy font-light text-base">
                    In an ever-evolving real estate landscape, Rehoboth Hills Limited stands out as a beacon of unwavering commitment to crafting not just homes, but lifestyles.
                  </p>
                  <p className="mb-5 font-haskoy font-light text-base">
                    In an ever-evolving real estate landscape, Rehoboth Hills Limited stands out as a beacon of unwavering commitment to crafting not just homes, but lifestyles. We understand that a home isn't merely a structure but a reflection of your dreams and aspirations. With this core philosophy, we've embarked on a journey to create spaces that seamlessly blend modernity, sustainability, and luxury.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default AboutUs;

