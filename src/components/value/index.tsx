import { SelectedPage, ValueType } from "@/shared/types";
import { motion } from "framer-motion";
import image1 from "@/assets/values/integrity.svg";
import image2 from "@/assets/values/excellence.svg";
import image3 from "@/assets/values/accountability.svg";
import image4 from "@/assets/values/creditabilty.svg";
import image5 from "@/assets//values/innovation.svg";
import image6 from "@/assets/values/security.svg";

const values: Array<ValueType> = [
  {
    name: "Integrity",
    description:
      "Integrity is the cornerstone of our commitment at Rehoboth Hills Limited. In the realm of real estate, where trust is paramount, we stand unwavering in our dedication to honesty, transparency, and ethical conduct.",
    image: image1,
  },
  {
    name: "Excellence",
    description:
      "At Rehoboth Hills Limited, excellence isn't just a standard; it's our promise. We are dedicated to crafting not just houses but homes of unparalleled quality.",
    image: image2,
  },
  {
    name: "Accountability",
    description:
      "Accountability is the cornerstone of our real estate commitment. From transparent transactions to delivering on promises, we pride ourselves on being accountable every step of the way.",
    image: image3,
  },
  {
    name: "Credibility",
    description:
      "Credibility in real estate is earned through a legacy of transparent dealings, unwavering commitment, and client satisfaction. At Rehoboth Hills, we go beyond transactions — we build trust.",
    image: image4,
  },
  {
    name: "Innovation",
    description: "Innovation is the heartbeat of Rehoboth. We redefine possibilities, infuse creativity, and pioneer new approaches to transform your real estate experience. From cutting-edge technology to revolutionary real estate concepts, we're at the forefront of innovation in the industry.",
    image: image5,
  },
  {
    name: "Security",
    description:
      "Your safety is our commitment in Rehoboth Hills. Your safety is our commitment. Trust in a real estate experience where every transaction is fortified with the highest level of security protocols.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurValues = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourvalues" className="w-full bg-primary-100 py-20 md:py-40 bg-secondary-500 text-white">
      <div className="">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.OurValues)}
        >
          <motion.div
            className="mx-auto w-5/6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="md:w-2/5">
              <div className=" font-haskoy md:text-5xl text-3xl font-medium text-white leading-normal -tracking-[0.8px] ">What <span className="text-secondary-400">Our Values</span> are at Rehoboth Hills Limited</div>
              <p className="pt-2 pr-4 text-base font-light text-[#FFFFFFCC]">
                With this core philosophy, we've embarked on a journey to create spaces that seamlessly blend modernity, sustainability, and luxury.
              </p>
            </div>
          </motion.div>
          <div
            className="mt-[100px] mx-auto w-5/6"
          >
            <ul className="grid md:grid-rows-2 md:grid-cols-3 gap-x-[25px] gap-y-8">

              {values.map((item: ValueType, index) => (
                <motion.div initial="hidden"
                  whileInView='visible'
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ delay: 0.7, duration: 0.7 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }} className="text-white" key={index}>
                  <img src={item.image} alt="" className="mb-8" />
                  <h1 className="text-secondary-400 text-3xl mb-4">{item.name}</h1>
                  <p className="text-base font-light">{item.description} </p>
                </motion.div>
              ))}
            </ul>
          </div>
        </motion.div >
      </div>
    </section>
  );
};

export default OurValues