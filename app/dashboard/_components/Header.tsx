"use client";

import { SignedIn, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React, { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex items-center justify-between border-b shadow-sm h-20">
      <div className="flex items-center p-2 rounded-md gap-2 border mx-4">
        <Search className="text-gray-400" size={16} />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="outline-none"
        />
      </div>
      <div className="flex gap-4 items-center mx-4">
        <h2 className="text-sm text-white bg-orange-500 rounded-md p-2 cursor-pointer hover:bg-orange-600 font-medium shadow-xl  transition-transform duration-200 ease-in-out hover:scale-[1.02]">
          ✨ Join Membership
        </h2>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
