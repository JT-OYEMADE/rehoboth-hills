import { useState } from 'react'
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'
// import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '@/assets/logo.svg'
import Link from './Link'
import { SelectedPage } from '@/shared/types'
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "transition duration-200 ease-in-out bg-white shadow";
  // const navbarBackground = isTopOfPage ? "" : "transition duration-200 ease-in-out backdrop-filter backdrop-blur-xl bg-opacity-60 shadow";


  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-4 md:py-6 shadow-white`}>
        <div className={`${flexBetween} mx-auto  w-5/6 `}>
          <div>
            <img src={Logo} width={30} alt="Rehoboth Logo" />
          </div>
          {isAboveMediumScreens ? (<div className={`${flexBetween} gap-9 text-[16px] text-[#25252580]`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Values"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Product"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="FAQ"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>) : (
            <button
              className="rounded-full  p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3BottomLeftIcon className="h-6 w-6 text-secondary-500" />
            </button>
          )}
          {isAboveMediumScreens && (<div>
            <a target="_blank"
              rel="noopener noreferrer" className="rounded-[36px] transition duration-500 flex justify-center items-center gap-2.5 w-[150px] text-white bg-secondary-500 py-2.5 hover:bg-black hover:text-secondary-500"
              href="https://instagram.com/rehoboth_hills?igshid=OGQ5ZDc2ODk2ZA=="> <span>Contact us</span>
              <svg className='hover:' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M14.93 18.07L21 12L14.93 5.93" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.99996 12L20.83 12" stroke="white" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
              </svg></a>
          </div>)}
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        // <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
        <div className="md:hidden h-full z-40 w-9/12 fixed right-0 inset-y-0 transition duration-200 ease-in-out backdrop-filter backdrop-blur-xl bg-white shadow">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-secondary-500" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="px-8 pb-16 flex flex-col gap-6 text-xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Values"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />

            <Link
              page="Our Product"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="FAQ"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Testimonials"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar