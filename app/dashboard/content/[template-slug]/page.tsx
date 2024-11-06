"use client";

import { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { templates } from "@/app/(data)/template";
import { TemplateProps } from "../../_components/TemplateList";

interface TemplateSlugProps {
  params: {
    "template-slug": string;
  };
}

export default function TemplateSlug({
  params: { "template-slug": templateSlug },
}: TemplateSlugProps) {
  const selectedTemplate = templates.find(
    (item: TemplateProps) => item.slug === templateSlug
  ) as TemplateProps;

  const generateAIContent = (formData: any) => {};

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-10 p-5">
      <div className="sm:col-span-1 md:col-span-1">
        <FormSection
          template={selectedTemplate}
          userFormInput={(v: any) => generateAIContent(v)}
        />
      </div>
      <div className="sm:col-span-1 md:col-span-2">
        <OutputSection />
      </div>
    </div>
  );
}
