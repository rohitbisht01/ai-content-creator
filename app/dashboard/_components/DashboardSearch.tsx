import { Search } from "lucide-react";
import React from "react";

export default function DashboardSearch({
  onSearchInput,
}: {
  onSearchInput: (value: string) => void;
}) {
  return (
    <div
      className="py-12"
      style={{
        background: "linear-gradient(to right, #ff9966, #ff5e62)",
      }}
    >
      <div className="flex flex-col gap-4 items-center justify-center text-white">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Explore AI-Powered Templates</h1>
          <p className="mt-2">
            Discover templates to streamline content creation for blogs, social
            media, and more. Let AI boost your creativity!
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white p-3 rounded-md w-3/4 sm:w-2/4">
          <Search className="text-gray-400" />
          <input
            type="text"
            onChange={(e) => onSearchInput(e.target.value)}
            placeholder="Search templates by name..."
            className="w-full outline-none text-black"
          />
        </div>
      </div>
    </div>
  );
}
