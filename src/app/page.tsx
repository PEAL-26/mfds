"use client";
// import { Button, DateTimePicker } from "software-edv-design-system/components"
import { DateTimePicker } from "../../../design-system/components";

export default function Page() {
  return (
    <>
      {/* <Button.Root variant="primary" >Botão padrão</Button.Root>  */}
      <DateTimePicker />
      <DateTimePicker
        startDate={new Date("2024-02-04")}
        endDate={new Date("2024-02-17")}
      />
      <h1>Examples Design System</h1>
    </>
  );
}
