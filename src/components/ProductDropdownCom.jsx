import React from "react";
import { Link } from "react-router-dom";

function ProductDropdownCom({ title,currentTabDropdown }) {
  return (
    <div className="">
      {" "}
      <Link to={title.path} className="">
        <div
          className={`${
            title.name == "Chemical & Regents"
              ? "rounded-b-[20px] hover:bg-blue-gray-400"
              : "hover:bg-blue-gray-400"
          }  `}
        >
          <ul
            className={`${
              currentTabDropdown === title.name ? "bg-blue-gray-400" : ""
            } xl:text-[20px] lg:text-[12px] font-bold  text-left font-rosario pl-4  `}
          >
            <li className="xl:py-4 lg:py-2 "> {title.name}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}


export default ProductDropdownCom;
