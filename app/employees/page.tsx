import { EmployeeAddForm } from "@/components/EmployeeAddForm";
import { ListItem } from "@/components/ListItem";
import { sql } from "@vercel/postgres";

export default async function EmployeesPage() {
  let data = await sql`SELECT * FROM employees`;
  const { rows } = data;

  return (
    <>
      <h1 className="text-center mt-10">Employees</h1>
      <EmployeeAddForm />

      <div className="flex justify-center mt-14">
        <ul className="space-y-2">
          {rows.map((employee) => (
            <ListItem key={employee.id} employee={employee} />
          ))}
        </ul>
      </div>
    </>
  );
}
