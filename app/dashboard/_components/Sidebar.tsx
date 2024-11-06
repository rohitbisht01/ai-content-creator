import { History, Home, Receipt, Settings, Wallet } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const sidebarLinks = [
  {
    label: "Home",
    icon: Home,
    path: "/dashboard",
  },
  {
    label: "History",
    icon: History,
    path: "/dashboard/history",
  },
  {
    label: "Billing",
    icon: Wallet,
    path: "/dashboard/billing",
  },
  {
    label: "Setting",
    icon: Settings,
    path: "/dashboard/setting",
  },
];

export default function Sidebar() {
  return (
    <div className="h-screen shadow-md border-r flex flex-col">
      <LogoComponent />
      <NavigationLinks />
      <div>Footer</div>
    </div>
  );
}

export const LogoComponent = () => {
  return (
    <div className="flex justify-center my-5">
      <Image src={"/logo.svg"} alt="Logo" width={50} height={50} />
    </div>
  );
};

export const NavigationLinks = () => {
  return (
    <div className="my-10 flex-1">
      {sidebarLinks.map((link) => {
        return (
          <Link
            href={link.path}
            key={link.label}
            className="flex gap-2 p-4 my-2 rounded-md cursor-pointer hover:bg-orange-500 hover:text-white mx-2 transition duration-150 ease-in"
          >
            <link.icon />
            <h2>{link.label}</h2>
          </Link>
        );
      })}
    </div>
  );
};
