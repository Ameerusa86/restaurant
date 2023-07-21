"use client";

import Image from "next/image";
import React, { useState } from "react";
import { links } from "@/Data/data";
import Link from "next/link";
import CartIcon from "./CartIcon";

const Menu = () => {
  const [open, setOpen] = useState(false);

  // Temp
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src={"/open.png"}
          width={20}
          height={20}
          alt="Logo"
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src={"/close.png"}
          width={20}
          height={20}
          alt="Logo"
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-red-500 text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-3xl gap-8 z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link onClick={() => setOpen(false)} href={"/login"}>
              Login
            </Link>
          ) : (
            <Link onClick={() => setOpen(false)} href={"/orders"}>
              Orders
            </Link>
          )}
          <Link onClick={() => setOpen(false)} href={"/cart"}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
