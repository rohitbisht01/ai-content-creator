import React from "react";
import { TemplateProps } from "./TemplateList";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function TemplateCard({
  template,
}: {
  template: TemplateProps;
}) {
  return (
    <Link href={`/dashboard/content/${template.slug}`}>
      <Card className="cursor-pointer shadow-md hover:scale-105 transition-all">
        <CardHeader>
          <CardTitle className="flex flex-col gap-4">
            <Image
              src={template.icon}
              alt={template.name}
              height={50}
              width={50}
            />
            <h1 className="text-xl">{template.name}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="line-clamp-5">{template.description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
