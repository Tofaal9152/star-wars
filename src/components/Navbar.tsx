import { ModeToggle } from "@/components/ui/ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className=" z-50  bg-opacity-30 backdrop-blur sticky top-0 p-4 border-b">
      <div className="container mx-auto  lg:px-8  flex items-center justify-between">
        {/* logo */}
        <Link href="/" className="font-bold  text-2xl cursor-pointer">
          ScaleBridger
        </Link>
        {/* navitems */}
        <ul className="md:flex space-x-6 hidden">
          <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <FiHome className="text-lg" />
            <span className="  hover:text-gray-600 dark:hover:text-gray-400">
              Home
            </span>
          </Link>
        </ul>
        {/*darkMode & login & sessions */}
        <div className="md:flex hidden">
          <ModeToggle />
        </div>

        {/* For mobile devices */}
        <div className="md:hidden block">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <ModeToggle />
      {/* 3 menubar */}
      <SheetTrigger>
        <svg
          className="w-6 ml-2 h-6 text-black dark:"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </SheetTrigger>
      <SheetContent className="bg-white dark:bg-gray-800">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-center text-black dark:">
            Menu
          </SheetTitle>
          <SheetDescription className="text-center text-gray-500 dark:text-gray-400">
            Explore the site
          </SheetDescription>
        </SheetHeader>
        {/* navitems */}
        <ul className="space-y-4 mt-4">
          <Link
            href="/"
            className="flex items-center space-x-2 cursor-pointer hover:underline"
          >
            <FiHome className="text-lg" />
            <span className="text-black dark: hover:text-gray-600 dark:hover:text-gray-400">
              Home
            </span>
          </Link>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default Navbar;
