import { UploadFileSelector } from "../../design-system/dist/components/upload-file-selector/index";

export default function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen p-10">
      <h1 className="mb-10 ">Examples Design System</h1>
      <div className="flex flex-col gap-3 justify-start items-start">
        <UploadFileSelector />
      </div>
    </div>
  );
}
