import { Link } from "../../../design-system/components";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-center  min-h-screen p-10">
          <h1 className="mb-10 ">Examples Design System</h1>
          <div className="flex items-center gap-3">
            <Link href="/buttons">buttons</Link>
            <Link href="/checks">checks</Link>
            <Link href="/forms">forms</Link>
            <Link href="/inputs">inputs</Link>
            <Link href="/selects">selects</Link>
            <Link href="/tables">tables</Link>
            <Link href="/uploads">uploads</Link>
            <Link href="/modals">Modals</Link>
          </div>
          <div className="flex-1 pt-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
