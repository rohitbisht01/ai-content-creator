"use client";

import React, { useEffect, useState } from "react";
import { templates } from "@/app/(data)/template";
import TemplateCard from "./TemplateCard";

export interface TemplateProps {
  name: string;
  description: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FormProps[];
}

export interface FormProps {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

export default function TemplateList({
  userSearchInput,
}: {
  userSearchInput: string;
}) {
  const [templateList, setTemplateList] = useState<TemplateProps[]>(templates);

  useEffect(() => {
    if (userSearchInput) {
      const filteredData = templates.filter((item) =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filteredData);
    } else {
      setTemplateList(templates);
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-5">
      {templateList.map((template: TemplateProps) => (
        <TemplateCard key={template.slug} template={template} />
      ))}
    </div>
  );
}
