"use client";

import { createEmployee } from "@/app/actions";
import React, { useRef } from "react";
import { Button } from "./Button";

export function EmployeeAddForm() {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      className="flex flex-col space-y-6 justify-center items-center mt-10 m-auto"
      action={async (fromData) => {
        formRef.current?.reset();
        await createEmployee(fromData);
      }}
      ref={formRef}
    >
      <div className="flex space-x-2 w-full justify-center">
        <input
          placeholder="John"
          type="text"
          name="first_name"
          className="border rounded py-2 px-4"
        />
        <input
          placeholder="Doe"
          type="text"
          name="last_name"
          className="border rounded py-2 px-4"
        />
      </div>
      <label htmlFor="department">Select Department:</label>
      <select
        name="department"
        id=""
        className="outline-none border p-2 rounded w-[400px]"
      >
        <option value="general">General</option>
        <option value="it">IT</option>
        <option value="hr">HR</option>
        <option value="finance">Finance</option>
      </select>
      <Button />
    </form>
  );
}
