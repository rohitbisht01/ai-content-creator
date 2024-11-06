import React from "react";
import Sidebar from "./_components/Sidebar";
import MobileSidebar from "./_components/MobileSidebar";
import Header from "./_components/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div>
        <div className="hidden lg:block lg:w-64 fixed">
          <Sidebar />
        </div>
        <div className="sm:block lg:hidden">
          <MobileSidebar />
        </div>
      </div>
      <div className="lg:ml-64 w-full">
        <Header />
        {children}
      </div>
    </div>
  );
}
