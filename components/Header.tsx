"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Header() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <header className={`flex justify-between items-center py-4 px-6 md:px-0`}>
      <h1>Logo Here</h1>
      <ul className="flex items-center space-x-4">
        <Link
          href="/"
          className={`${
            pathname === "/" ? "text-green-400" : "text-slate-300"
          }`}
        >
          Home
        </Link>
        <Link
          href="/todos"
          className={`${
            pathname === "/todos" ? "text-green-300" : "text-slate-300"
          }`}
        >
          Todos
        </Link>
      </ul>
    </header>
  );
}
