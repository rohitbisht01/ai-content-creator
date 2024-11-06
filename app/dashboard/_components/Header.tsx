"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import React, { useState } from "react";
import { HeaderLogoComponent, LogoComponent } from "./Sidebar";

interface HeaderProps {
  setIsOpen: (open: boolean) => void;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-between border-b shadow-sm h-20">
      <div className="block sm:hidden ml-2">
        <HeaderLogoComponent />
      </div>
      <div className="flex items-center p-2 rounded-md gap-2 border mx-4 sm:min-w-64 md:min-w-96 lg:min-w-128">
        <Search className="text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none w-full"
        />
      </div>
      <div className="hidden sm:flex gap-4 items-center mx-4">
        <h2 className="text-sm text-white bg-orange-500 rounded-md p-2 cursor-pointer hover:bg-orange-600 font-medium shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
          ✨ Join Membership
        </h2>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div
        className="block sm:hidden cursor-pointer p-1 bg-orange-500 text-white rounded-md mx-4"
        onClick={() => setIsOpen(true)}
      >
        <Menu />
      </div>
    </div>
  );
}
