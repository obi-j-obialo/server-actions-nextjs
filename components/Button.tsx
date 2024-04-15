import React from "react";
import { useFormStatus } from "react-dom";

export function Button() {
  const { pending } = useFormStatus();
  return (
    <button
      className={`${
        pending
          ? "bg-slate-500 rounded cursor-not-allowed p-2 w-60"
          : "bg-green-400 rounded cursor-pointer p-2 w-60"
      }`}
    >
      {pending ? "Adding employee..." : "Add"}
    </button>
  );
}
