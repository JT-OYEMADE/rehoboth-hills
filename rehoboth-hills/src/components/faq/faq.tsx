import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { faqcoms } from "@/data/faqs"
import FAQCOM from "./faqcom";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const FAQ = ({ setSelectedPage }: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section id="faq" className=" pt-24 pb-32 bg-[#F9FAF9]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.FAQ)}
        className="mx-auto w-5/6  flex flex-col md:flex-row justify-between gap-x-[126px] items-start "
      >
        {/* HEADER */}
        <motion.div
          className="md:w-2/5 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <h1 className=" text-4xl w-3/5 text-secondary-500">Frequently Asked  Questions</h1>
          <p className="my-5 text-[16px] font-normal w-[80%]">
            We are Rehoboth Hills International Limited, a name synonymous with innovation, excellence, and taste. We are revolutionising wealth creation within the Nigerian real estate industry and beyond.
          </p>
        </motion.div>

        <div className="justify-between gap-8 md:flex md:w-[50%] ">
          <motion.div
            className="mt-10 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            {faqcoms.map((faq, index) => (
              <FAQCOM  key={index}
              {...faq}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)} />
            ))}

          </motion.div>


        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
{/* <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">

            </div>
          </motion.div> */}
