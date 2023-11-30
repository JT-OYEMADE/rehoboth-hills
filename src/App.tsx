import Navbar from "@/components/navbar";
import Home from "@/components/home";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import AboutUs from "@/components/about";
import OurValues from "@/components/value";
import FAQ from "./components/faq/faq";
import Footer from "@/components/footer"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Navbar
      isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <AboutUs setSelectedPage={setSelectedPage}/>
      <OurValues setSelectedPage={setSelectedPage}/>
      <FAQ setSelectedPage={setSelectedPage}/>
      <Footer />
    </div>
  )

}

export default App;
