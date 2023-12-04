import Discord from "@/assets/socials/discord.svg"
import Facebook from "@/assets/socials/facebook.svg"
import Instagram from "@/assets/socials/instagram.svg"
import X from "@/assets/socials/x.svg"

type FLink = {
  text: string;
  link: string;
};
const footerLinks: FLink[][] = [
  [
    {
      text: "Home",
      link: "#home",
    },
    {
      text: "Projects",
      link: "#ourproduct",
    },
    {
      text: "About Us",
      link: "#aboutus",
    },
    {
      text: "FAQ",
      link: "#faq",
    },
    {
      text: "Our Values",
      link: "#ourvalues",
    },
    {
      text: "Testimonials",
      link: "#testimonials",
    },
  ],

];



const Footer = () => {
  return (
    <footer className="bg-secondary-500 py-16">
      <div className=" mx-auto w-5/6 gap-[321px] md:flex md:border-b border-white border-opacity-50 pb-12">
        <div className="mt-10 md:mt-0 flex flex-col">
          <h1 className="md:text-4xl text-3xl text-white w-3/5 mb-6">Start Investing today!</h1>
          <form className="flex md:flex-row flex-col md:gap-x-0 gap-y-4 md:border-0 border-b border-white border-opacity-50 pb-6">
            <input type="text" placeholder="Enter your email" className=" placeholder:text-[14px] placeholder:font-haskoy bg-white pt-[11px] pr-[63px] pb-[13px] pl-[27px] rounded-[20px]" />
            <button className="bg-black text-secondary-400 pt-[11px] pb-[13px] px-6 rounded-[20px]">Submit</button> 
          </form>
        </div>
        <div className="flex flex-col md:flex-row items-start md:gap-x-[200px]">
          <div className='text-white '>
            {footerLinks.map((linksArray, index) => (
              <p key={index} className=" grid grid-cols-3 grid-rows-2 md:grid-cols-2 md:grid-rows-3 md:gap-x-[134px] md:mt-0 mt-5 gap-y-6 gap-x-5">
                {linksArray.map((link) => (
                  <a className=" font-light" key={link.text} href={link.link}>
                    {link.text}
                  </a>
                ))}
              </p>
            ))}
          </div>
          <div className="flex flex-row gap-x-[15px] md:mt-0 mt-4">
            <a href="/">
              <img src={X} alt="Twitter" />
            </a>
            <a href="/">
              <img src={Instagram} alt="Instagram" />
            </a>
            <a href="/">
              <img src={Discord} alt="Discord" />
            </a>
            <a href="/">
              <img src={Facebook} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
