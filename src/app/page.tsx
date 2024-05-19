"use client";
import { z } from "zod";
import {
  Select,
  SelectSearch,
  SelectBadge,
  SelectLabel,
  Button,
  Input,
  CheckToggle,
  UploadFileSelector,
} from "../../../design-system/components";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  country: z.object({
    id: z.string(),
    name: z.string(),
  }),
});

type SchemaType = z.infer<typeof schema>;

export default function Page() {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const form = useForm<SchemaType>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: SchemaType) => console.log(data);
  console.log(form.watch("country")); // watch input value by passing the name of it

  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-10">
      <h1 className="mb-10 ">Examples Design System</h1>
      <div className="flex flex-col gap-3 justify-start items-start">
        <p>Money</p>
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
        <Button.Root variant="primary">Primary</Button.Root>
        <Button.Root variant="secondary">Secondary</Button.Root>
        <Button.Root variant="success">Green</Button.Root>
        <Button.Root variant="error">Error</Button.Root>
        <Button.Root variant="outline">outline</Button.Root>
        <Select items={[]} />
        <SelectBadge
          type="default"
          badge="Bade"
          items={[
            { id: "1", name: "John" },
            { id: "2", name: "Jane" },
          ]}
          fieldValue="id"
          fieldLabel="name"
        />
        <SelectLabel type="searchable" label="Label" items={[]} />
        <SelectSearch
          items={[
            { id: "1", name: "John" },
            { id: "2", name: "Jane" },
          ]}
          fieldValue="id"
          fieldLabel="name"
        />
        <SelectSearch
          items={[
            { id: "1", name: "John" },
            { id: "2", name: "Jane 2" },
            { id: "3", name: "Jane 3" },
            { id: "4", name: "Jane 4" },
            { id: "5", name: "Jane 5" },
            { id: "6", name: "Jane 6" },
            { id: "7", name: "Jane 7" },
            { id: "8", name: "Jane 8" },
            { id: "9", name: "Jane ft" },
            { id: "10", name: "Jane angola" },
            { id: "11", name: "Jane luanda" },
            { id: "12", name: "Jane paulo" },
            { id: "13", name: "Jane minga" },
            { id: "14", name: "Jane sei la" },
            { id: "15", name: "Jane bla bla" },
            { id: "16", name: "Jane sss" },
            { id: "17", name: "Jane bbb" },
            { id: "18", name: "Jane ss" },
            { id: "19", name: "Jane aa " },
            { id: "20", name: "Jane q" },
            { id: "21", name: "Jane lglg" },
          ]}
          fieldValue="id"
          fieldLabel="name"
          offlineSearch={true}
        />

        <CheckToggle />

        <UploadFileSelector />
      </div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <SelectSearch
            items={[
              { id: "1", name: "John" },
              { id: "2", name: "Jane" },
            ]}
            fieldValue="id"
            fieldLabel="name"
          />

          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}
