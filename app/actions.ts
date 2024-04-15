"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createEmployee = async (formData: FormData) => {
  const schema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    department: z.string(),
  });

  const data = schema.parse({
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),
    department: formData.get("department"),
  });

  try {
    await sql`
    INSERT INTO employees (first_name, last_name, department)
    VALUES (${data.first_name}, ${data.last_name}, ${data.department})
    `;
    revalidatePath("/employees");
    console.log(`${data.first_name} ${data.last_name} added to employees`);
    return {
      message: `${data.first_name} ${data.last_name} added to employees`,
    };
  } catch (error) {
    console.log(error);
    return { message: "Error adding employee" };
  }
};
