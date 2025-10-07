"use client";

import Image from "next/image";
import logowhite from "../public/logowhite.png";
import logoblack from "../public/logoblack.png";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { navList } from "@/constants/index";

const mobTitleStyles = "text-lg py-2";

const MobileMenu = () => (
  <Sheet>
    <SheetTrigger className="lg:hidden">
      <MenuIcon className="text-background cursor-pointer" />
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle></SheetTitle>
        <SheetContent>
          <ul>
            {navList.map((item, index) => {
              return (
                <Link key={index} href={item.link}>
                  <motion.li
                    whileHover={{ color: "hsl(var(--primary))" }}
                    className={mobTitleStyles}
                  >
                    <SheetTrigger>{item.title}</SheetTrigger>
                  </motion.li>
                </Link>
              );
            })}
          </ul>
        </SheetContent>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);

const DesktopNav = () => (
  <ul className="hidden gap-12 lg:flex  text-2xl ">
    {navList.map((item, index) => {
      return (
        <Link key={index} href={item.link}>
          <motion.li
            className="transition-colors underline-animation"
            whileHover={{ scale: 1.1 }}
          >
            {item.title}
          </motion.li>
        </Link>
      );
    })}
  </ul>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const HandleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };

    document.addEventListener("scroll", HandleScroll);

    return () => {
      document.removeEventListener("scroll", HandleScroll);
    };
  }, []);

  return (
    <header
      className={`flex justify-center  ${
        scrolled
          ? "bg-background/95 text-primary backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md"
          : "bg-transparent text-background"
      }  fixed top-0 left-0 right-0 z-[10] transition-colors`}
    >
      <nav
        className={`${
          scrolled
            ? ""
            : "border-transparent md:border- md:border-b md:border-background"
        } flex items-center justify-between px-8 py-4 max-w-[100rem] w-full`}
      >
        <DesktopNav />
        <Link href="/" className="">
          <Image
            src={logowhite}
            alt="IVANA PSIHOLOG"
            width={240}
            height={50}
            className={`w-[200px] md:w-[250px] ${scrolled ? "hidden" : ""}`}
          />
          <Image
            src={logoblack}
            alt="IVANA PSIHOLOG"
            width={240}
            height={50}
            className={`w-[200px] md:w-[250px] ${scrolled ? "" : "hidden"}`}
          />
        </Link>
        <MobileMenu />
      </nav>
    </header>
  );
}
