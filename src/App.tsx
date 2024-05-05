import { Button } from "../../design-system/dist/components";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-10">
      <h1 className="mb-10 ">Examples Design System</h1>
      <div className="flex flex-col gap-3 justify-start items-start">
        <Button.Root variant="primary">primary</Button.Root>
      </div>
    </div>
  );
}
