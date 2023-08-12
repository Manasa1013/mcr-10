import { NavLink } from "react-router-dom";

import { getActiveClassName } from "../../Utils/CommonFunctions";
import "./SideNav.css";

export function SideNav() {
  return (
    <div className="fixed overflow-none md:top-0 top-auto bottom-0 w-full md:w-auto left-0 bg-gray-800 text-gray-50">
      <ul className="list-none m-0 md:mt-12 md:mx-0 flex md:flex-col flex-row justify-evenly items-center p-4 ">
        <li className="my-4 mx-2">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li className="my-4 mx-2">
          {" "}
          <NavLink
            to="/departments"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            Departments
          </NavLink>
        </li>
        <li className="my-4 mx-2">
          {" "}
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              getActiveClassName(isActive, isPending)
            }
          >
            Products
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
