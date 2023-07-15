"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="h-[10vh] w-full bg-slate-50 fixed shadow-md px-8">
      <div className="w-[50%] h-[10vh] flex items-center">
        <Link
          href="/"
          className={`${
            pathname === "/" ? " border-blue-500 border-b-2 " : ""
          } px-4`}
        >
          Home
        </Link>
        <Link
          href="/text-editor"
          className={`${
            pathname === "/text-editor" ? " border-blue-500 border-b-2" : ""
          } ml-8 px-4`}
        >
          Text Editor
        </Link>
        <Link
          href="/tree"
          className={`${
            pathname === "/tree" ? " border-blue-500 border-b-2" : ""
          } ml-8 px-4`}
        >
          Tree Structure
        </Link>
        <Link
          href="/soket"
          className={`${
            pathname === "/soket" ? " border-blue-500 border-b-2" : ""
          } ml-8 px-4`}
        >
          Socket
        </Link>
      </div>
    </nav>
  );
}
