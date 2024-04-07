import React from "react";
import { Link } from "react-router-dom";

function ProductDropdownCom({ title,currentTabDropdown }) {
  return (
    <div className="">
      {" "}
      <Link to={title.path} className="">
        <div
          className={`${
            title.name == "Plasticware"
              ? "rounded-b-[20px] hover:bg-blue-gray-300"
              : "hover:bg-blue-gray-400"
          }  `}
        >
          <ul
            className={`${
              currentTabDropdown === title.name ? "bg-blue-gray-400" : ""
            } 
              ${title.name == "Plasticware"? "rounded-b-[20px]":""}
            
            
            xl:text-[20px] lg:text-[12px] font-bold  text-left font-rosario pl-4 
  
  
  
            `}
          >
            <li className="xl:py-4 lg:py-2 "> {title.name}</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}


export default ProductDropdownCom;
