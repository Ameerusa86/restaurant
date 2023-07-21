import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 px-4 lg:px-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href={"/"} className="fonst-bold text-xl">
        Resturant
      </Link>
      <p className="uppercase">All Rights reserved </p>
    </div>
  );
};

export default Footer;
