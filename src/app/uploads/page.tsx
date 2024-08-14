"use client";
import { UploadFileSelector } from "../../../../design-system/components";

export default function Uploads() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <UploadFileSelector crossOrigin="anonymous" />
    </div>
  );
}
