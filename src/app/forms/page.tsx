"use client";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "../../../../design-system/components";
import { UploadFileSelectorForm } from "./form";

const schema = z.object({
  image: z.any().optional(),
});

export type SchemaType = z.infer<typeof schema>;

export default function Forms() {
  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      image: undefined,
    },
  });

  const onSubmit = (data: SchemaType) => console.log(data);

  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <UploadFileSelectorForm />
          <Button.Root type="submit" variant="primary" className="mt-3">
            Enviar
          </Button.Root>
        </form>
      </FormProvider>
    </div>
  );
}
