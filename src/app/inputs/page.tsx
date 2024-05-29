"use client";
import { Input } from "../../../../design-system/components";

export default function Inputs() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <Input.Text
        type="money"
        variant="primary"
        onChange={(e) => {
          console.log({
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
        }}
      />
      <Input.WithLabel
        label="Money With Label"
        error="Error"
        type="money"
        variant="primary"
        defaultValue={"1000.88"}
        value={"1000.88"}
      />
      <Input.Text
        type="literal"
        variant="primary"
        onChange={(e) => {
          console.log("literal", {
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
        }}
      />
      <Input.Text
        variant="primary"
        onChange={(e) => {
          console.log("normal", {
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
        }}
      />
      <Input.Text
        type="number"
        variant="primary"
        onChange={(e) => {
          console.log("number", {
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
        }}
      />
    </div>
  );
}
