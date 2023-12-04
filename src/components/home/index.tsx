import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import Dukiya from "@/assets/partners/dukiya.png"
import Landwey from "@/assets/partners/landwey.png"
import Landmark from "@/assets/partners/landmark.png"
import Suji from "@/assets/partners/suji.png"
import { YoutubePlayer } from "./youtube-player";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-10 ">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className=" mt-[50px] mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 md:mt-32 mt-20  md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="relative">
              <h1 className="md:text-[58px] text-[48px] leading-none tracking-[-2.32px] before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                Redefining <span className="text-secondary-500 font-haskoy italic font-medium">wealth</span> <br /> creation in real estate
              </h1>
            </div>

            <p className="mt-6 w-11/12 text-[#252525CC] text-lg font-light">
              We are Rehoboth Hills Limited, a name synonymous with innovation, excellence, and taste. We are revolutionising wealth creation within the Nigerian real estate industry and beyond.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Contact Us
            </ActionButton>
            <AnchorLink
              className="text-base font-normal text-secondary-500 hover:text-black transition duration-500"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.AboutUs}`}
            >
              <p>About Us</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 mt-10 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.9 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <YoutubePlayer videoId='0o_6yxG9wk0' className="h-[325px] md:h-[600px] w-[550px]"/>
        </motion.div>
      </motion.div>

      {/* PARTNERS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] bg-primary-100 py-10 mt-[100px]">
          <div className="mx-auto w-5/6">
            <p className="text-base font-light pb-[30px]">TRUSTED AND PARTNERED BY</p>
            <div className="flex items-center justify-center gap-[115px]">
              <img alt="suji-partnerr" src={Suji} />
              <img alt="landwey-partner" src={Landwey} />
              <img alt="landmark-partner" src={Landmark} />
              <img alt="dukiya-partner" src={Dukiya} />
              <img alt="suji-partnerr" src={Suji} />

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
