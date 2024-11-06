"use client";

import React, { useState } from "react";
import { TemplateProps } from "../../_components/TemplateList";
import Image from "next/image";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function FormSection({
  template,
  userFormInput,
}: {
  template: TemplateProps;
  userFormInput: any;
}) {
  const [formData, setFormData] = useState<any>();

  const handleGenerateContent = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Card className="p-3">
      <CardTitle>
        <div className="flex flex-col gap-2">
          <Image
            src={template.icon}
            alt={template.name}
            height={50}
            width={50}
          />
          <h1 className="text-xl text-orange-600">{template.name}</h1>
        </div>
      </CardTitle>
      <CardDescription className="my-2">
        <p className="">{template.description}</p>

        <form onSubmit={handleGenerateContent} className="mt-6">
          {template?.form?.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-2 my-2 mb-6">
                <label className="font-bold">{item.label}</label>
                {item.field === "input" ? (
                  <Input
                    name={item.name}
                    required={item.required}
                    onChange={handleInputChange}
                  />
                ) : item.field === "textarea" ? (
                  <Textarea
                    name={item.name}
                    required={item.required}
                    onChange={handleInputChange}
                  />
                ) : null}
              </div>
            );
          })}
          <Button
            className="w-full mt-2 bg-orange-500 hover:bg-orange-600"
            type="submit"
          >
            Generate Content
          </Button>
        </form>
      </CardDescription>
    </Card>
  );
}
