"use client";
import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Input } from "../../../../design-system/components";
import { UploadFileSelectorForm } from "./form";

const schema = z.object({
  image: z.any().optional(),
  money: z.coerce.number(),
  number: z.coerce.number(),
  text: z.string(),
  undefined: z.string().optional(),
});

export type SchemaType = z.infer<typeof schema>;

export default function Forms() {
  const [loading, setLoading] = useState(true);
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      image: undefined,
    },
  });

  const onSubmit = (data: SchemaType) => console.log(data);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <UploadFileSelectorForm />

          <Input.Text
            {...form.register("money")}
            placeholder="Money"
            type="money"
            variant="primary"
            value='10000'
            onChange={(e) => {
              form.setValue("money", Number(e.currentTarget.value || 0));
            }}
          />

          <Input.Text
            {...form.register("number").onChange}
            placeholder="Number"
            type="number"
            variant="primary"
            defaultValue='10'
            // onChange={(e) => {
            //   // form.register("number").onChange(Number(e.currentTarget.value || 0));
            // }}
          />

          <Input.Text
            {...form.register("undefined")}
            placeholder="Type undefined"
            variant="primary"
            defaultValue='Default'
          />

          <Input.Text
            {...form.register("text")}
            placeholder="Type text"
            variant="primary"
            type="text"
            defaultValue='Default'
          />

          <Button.Root type="submit" variant="primary" className="mt-3">
            Enviar
          </Button.Root>
        </form>
      </FormProvider>
    </div>
  );
}
