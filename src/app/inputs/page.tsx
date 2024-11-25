"use client";
import { z } from "zod";
import {
  Input,
  DateTimePicker,
  InputCounter,
  CheckBox,
} from "../../../../design-system/components";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const dateSchema = z.object({
  date: z.coerce.date().optional(),
});
type DateSchemaType = z.infer<typeof dateSchema>;

export default function Inputs() {
  const [loading, setLoading] = useState(true);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [disable, setDisable] = useState(false);
  const [valueCounter, setValueCounter] = useState<number | undefined>(1);
  const form = useForm<DateSchemaType>({
    defaultValues: {
      date: new Date(new Date().setDate(15)),
    },
  });

  console.log({ disable });

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="flex flex-col gap-3 justify-start items-start">

      <pre className="bp4-code-block">
        <code className="bp4-running-text">
          {`<InputCounter
            value={valueCounter}
            onChangeValue={(value) => console.log("changeValue", value)}
            onDecrease={(value) => console.log("onDecrease", value)}
            onIncrease={(value) => console.log("onIncrease", value)}
          />`}
        </code>
      </pre>
      <InputCounter
        value={valueCounter}
        onChangeValue={(value) => console.log("changeValue", value)}
        onDecrease={(value) => console.log("onDecrease", value)}
        onIncrease={(value) => console.log("onIncrease", value)}
      />
      <span className="font-bold text-lg">Money Simple</span>
      <Input.Text
        type="money"
        variant="primary"
        onChange={(e) => {
          console.log({
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
          setValueCounter(Number(e.currentTarget.value || 0));
        }}
      />
      <span className="font-bold text-lg">Money Enable\Disable</span>
      <CheckBox onChecked={setDisable} />
      <Input.Text
        disabled={disable}
        type="money"
        variant="primary"
        onChange={(e) => {
          console.log({
            target: e.target,
            currentTarget: e.currentTarget.value,
          });
          setValueCounter(Number(e.currentTarget.value || 0));
        }}
      />

      <span className="font-bold text-lg">Money With Label</span>
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
