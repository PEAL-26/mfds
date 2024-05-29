"use client";
import { useFormContext } from "react-hook-form";
import { SchemaType } from "./page";
import { UploadFileSelector } from "../../../../design-system/components";

export function UploadFileSelectorForm() {
  const form = useFormContext<SchemaType>();

  return (
    <div>
      <UploadFileSelector form={form} name="image" />
    </div>
  );
}
