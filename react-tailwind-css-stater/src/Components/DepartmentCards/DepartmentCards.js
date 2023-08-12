import { NavLink } from "react-router-dom";

import { DisplayCard } from "../DashboardCards/DashboardCards";

export function DepartmentCards({ state }) {
  const departmentList = state?.products?.reduce(
    (acc, curr) =>
      acc.includes(curr?.department) ? [...acc] : [...acc, curr.department],
    []
  );
  return (
    <section className="p-4 my-12 md:ml-4 md:mr-12">
      <ul className="list-none flex md:flex-row flex-col justify-start items-start p-4 gap-8">
        {departmentList?.map((department) => (
          <li key={department}>
            <DisplayCard
              text={department}
              textStyle={"text-zinc-800 text-bold text-xl"}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
