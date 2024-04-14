"use client";
import { DateTimePicker } from "../../../design-system/components";
import { CheckBox } from "../../../design-system/components";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="mb-10">Examples Design System</h1>
      <CheckBox onChecked={(state) => console.log(state)} />
      <DateTimePicker />
      <DateTimePicker
        startDate={new Date("2024-02-04")}
        endDate={new Date("2024-02-17")}
      />
    </div>
  );
}
