import React from "react";

export function ListItem({ employee }: { employee: any }) {
  return (
    <li className="flex justify-center border w-[400px] p-4 rounded">
      {employee.first_name} {employee.last_name} - {employee.department}
    </li>
  );
}
