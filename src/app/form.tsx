"use client";
import { useFormContext } from "react-hook-form";
import { UploadFileSelector } from "../../../design-system/components";
import { SchemaType } from "./page";

export function UploadFileSelectorForm() {
  const form = useFormContext<SchemaType>();

  return (
    <div>
      <UploadFileSelector form={form} name="image" />
    </div>
  );
}
