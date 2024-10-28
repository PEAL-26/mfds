"use client";
import { z } from "zod";
import { Input, DateTimePicker } from "../../../../design-system/components";
import { useForm } from "react-hook-form";
import { useState } from "react";

const dateSchema = z.object({
  date: z.coerce.date().optional(),
});
type DateSchemaType = z.infer<typeof dateSchema>;

export default function Inputs() {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const form = useForm<DateSchemaType>({
    defaultValues: {
      date: new Date(new Date().setDate(15)),
    },
  });

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
      <Input.WithLabel label="Required" required />
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

      <DateTimePicker
        value={date}
        onChange={(e) => {
          console.log(e.currentTarget.value);
          form.setValue("date", e.currentTarget.value);
          setDate(e.currentTarget.value);
        }}
      />
      <span>{form.formState.errors.date?.message || ""}</span>
      <span>{String(form.watch("date"))}</span>
      <span onClick={() => setDate(undefined)}>Limpar</span>
      <DateTimePicker />
    </div>
  );
}
