import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { hasSubscribers } from "diagnostics_channel";
import Link from "next/link";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className="flex  items-center space-x-2 md:space-x-10">
        <h1 className="text-red-500 font-bold text-2xl">Ngekflix</h1>
        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">Tv Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <MagnifyingGlassIcon className="hidden sm:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w-6" />
        <Link href="/account">
          <img
            src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
            alt=""
            className="h-6 w-6"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
