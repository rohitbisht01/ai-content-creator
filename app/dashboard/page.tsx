"use client";

import { useState } from "react";
import DashboardSearch from "./_components/DashboardSearch";
import TemplateList from "./_components/TemplateList";

export default function page() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  return (
    <div>
      <DashboardSearch
        onSearchInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateList userSearchInput={userSearchInput} />
    </div>
  );
}
