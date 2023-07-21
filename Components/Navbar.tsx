import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import { links } from "@/Data/data";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  // temp
  const user = false;

  return (
    <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24 flex-1 lg:px-20 xl-px-40">
      {/* Left Side Links */}
      <div className="hidden md:flex gap-4">
        {links.map((link, index) => {
          return (
            <Link href={link.url} key={index}>
              {link.title}
            </Link>
          );
        })}
      </div>
      {/* Logo */}
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href={"/"}>Resturant</Link>
      </div>
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* Right side Links */}
      <div className="hidden md:flex gap-4 items-center flex-1">
        <div className="md:absolute top-3 right-2 lg:static flex items-center justify-end gap-2 cursor-pointer bg-orange-300 px-2 rounded-lg">
          <Image src={"/phone.png"} alt="" width={20} height={20} />
          <span>123-123-1234</span>
        </div>
        {!user ? (
          <Link href={"/login"}>Login</Link>
        ) : (
          <Link href={"/order"}>Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
