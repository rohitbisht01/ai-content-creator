"use client"

import React, { useState } from "react";
import Sidebar from "./_components/Sidebar";
import MobileSidebar from "./_components/MobileSidebar";
import Header from "./_components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex">
      <div>
        <div className="hidden lg:block lg:w-64 fixed">
          <Sidebar />
        </div>
        <div className="sm:block lg:hidden">
          <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="lg:ml-64 w-full">
        <Header setIsOpen={setIsOpen} />
        {children}
      </div>
    </div>
  );
}
