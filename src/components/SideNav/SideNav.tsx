"use client";
import React from "react";
import { Suspense } from "react";
import tailwindConfig from "./sideNav.config";
import { classNames } from "@/utils";
import { SideNavProps } from "./sideNav.types";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import Icon from "../Icon/Index";
import { useParams } from "next/navigation";

const LinkItems: Array<any> = [
  { name: "Dashboard", path: "/", icon: "home" },
  { name: "Products", path: "/Products", icon: "products" },
  { name: "Invoices", path: "/Invoices", icon: "invoices" },
  { name: "Statistics", path: "/Statistics", icon: "statistics" },
  { name: "Archive", path: "/Archive", icon: "archive" },
  { name: "Settings", path: "/Settings", icon: "settings" },
];

function Header() {
  return (
    <header
      className={`sticky ms-6 me-3 p-6 h-20 rounded-full bg-white flex items-center justify-between`}>
      <div className="">Yamm</div>
      <div className="flex items-center cursor-pointer p-1 rounded-xl">
        menu
      </div>
    </header>
  );
}

function SideNav({ variant, className, children }: SideNavProps) {
  const [open, setOpen] = React.useState<boolean>(true);
  const classes = React.useMemo(() => {
    return classNames(
      tailwindConfig({
        variant,
      }),
      className
    );
  }, [variant, className]);

  return (
    <div className="relative flex flex-1 py-6 mx-6">
      <div className={`${open ? "md:w-72 md:py-6 md:mx-6" : "md:w-20"} ease-in-out duration-200`}></div>
      <nav
        className={`fixed ${
          open ? "md:w-72" : "md:w-20"
        } md:block top-6 bottom-6 left-6 bg-white rounded-xl hidden ease-in-out duration-200`}>
        <Button
          onClick={() => setOpen(!open)}
          variant="secondary"
          size="small"
          className="group absolute top-1/2 left-[85%]">
          <Icon className="" name="logout" />
        </Button>
        <div className="flex justify-between flex-col h-full p-2">
          {/* <div> */}
          <Image
            className="px-3 pt-10 self-center"
            src={open ? "/logo.svg" : "logo-shape.svg"}
            alt="Yamm Logo"
            width={180}
            height={40}
            priority
          />
          <ul className="">
            {LinkItems.map((link) => (
              <li
                className={`group flex ${
                  !open && "justify-center"
                } my-2 p-2 items-center cursor-pointer font-semibold text-[#939393] hover:bg-gray-200 font hover:text-violet-500 rounded-md`}
                key={link.name}>
                <Icon
                  className={`${
                    open && "me-2"
                  } stroke-[#939393] group-hover:stroke-violet-500`}
                  name={link.icon}
                />
                <Link href={link.path}>{open && link.name}</Link>
              </li>
            ))}
          </ul>
          {/* </div> */}
          <Button
            className={`bg-red-200 text-red-500 enabled:hover:bg-red-100 p-0`}>
            <Icon className="stroke-[#EF4444]" name="logout" />
            <Link href={"/"}>{open && "Logout"}</Link>
          </Button>
        </div>
      </nav>

      <div className="w-full">
        <Header />
        <div className="md:ms-6 mt-6">
          <Suspense>{children}</Suspense>
        </div>
      </div>
    </div>
  );
}

export default SideNav;
