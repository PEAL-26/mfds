"use client";
import { Button } from "../../../../design-system/components";

export default function Buttons() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <Button.Root variant="primary">Primary</Button.Root>
      <Button.Root variant="secondary">Secondary</Button.Root>
      <Button.Root variant="success">Green</Button.Root>
      <Button.Root variant="error">Error</Button.Root>
      <Button.Root variant="outline">outline</Button.Root>
    </div>
  );
}
