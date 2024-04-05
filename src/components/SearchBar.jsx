import searchData from "../assets/data/searchData";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { userStateContext } from "../contexts/ContextProvider";
// Remember to import words or whatever you're using to store all the words the user can search forOOO
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
const SearchBar = ({ searchClick, setSearchClick }) => {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (e) => {
    const searchWord = e.target.value;
    setWordEntered(searchWord);
    const newFilter = searchData.filter((cloth) => {
      return cloth.name
        .toLocaleLowerCase()
        .includes(searchWord.toLocaleLowerCase());
    });
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };
  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    // setSearchClick(!searchClick);
  };
  return (
    // <div className="absolute xl:block hidden z-50">

    //   <form className="relative w-ful justify-center">
    //     <div className="relative">
    //       <input
    //         type="search"
    //         placeholder="Type Here"
    //         className="w-full p-4 rounded-md bg-slate-800"
    //         onChange={(e) => handleSearch(e)}

    //       />
    //     </div>

    //     {activeSearch.length > 0 && searchClick ? (
    //       <div className="absolute top-20 p-4 bg-slate-800 text-black w-full rounded-xl left-1/2 -translate-x-1/2 flex flex-col gap-2">
    //         {activeSearch.map((s) => (
    //           <span key={s.id}>{s.name}</span>
    //         ))}
    //       </div>
    //     ) : (
    //       searchClick && (
    //         <detailst className="bg-blue-gray-300 ">
    //           {searchData.map((d) => (
    //             <ul key={d.id}>
    //               <li className="hover:bg-purple-400">{d.name}</li>
    //             </ul>
    //           ))}
    //         </detailst>
    //       )
    //     )}
    //   </form>
    // </div>

    // <div className="main z-50 justify-end flex relative top-[1px]">
    //   <input
    //     list="searchData"
    //     onChange={(e) => setVal(e.target.value)}
    //     placeholder="Search"
    //     className="search px-3"
    //   />
    //   <div className="bg-blue-gray-500">
    //     <datalist id="searchData" className="">
    //       {/* <option>One</option>
    //             <option>Two</option>
    //             <option>Three</option>
    //             <option>Four</option> */}
    //       {searchData.map((op) => (
    //         <option key={op.id} className="w-[690px]">
    //           {op.name}
    //         </option>
    //       ))}
    //     </datalist>
    //   </div>
    // </div>
    <div className="absolute z-50 mt-5   mx-auto ml-[680px] ">
      {" "}
      <div className="flex justify-center mx-auto ">
        <input
          value={wordEntered}
          onChange={handleFilter}
          type="text"
          placeholder="Search for brands"
          className="placeholder:text-md text-center outline-none "
        />{" "}
        {filteredData.length != 0 && (
          <IoMdClose
            onClick={clearInput}
            className="text-black group-focus-within:text-darkText duration-200 "
          />
        )}
      </div>
      <div
        className={`absolute ${
          wordEntered.length === 0 ? "hidden" : "bg-orange-500"
        } w-[250px] mx-auto   left-0  justify-center flex-col relative top-10 `}
      >
        {filteredData.length !== 0 ? (
          filteredData.slice(0, 18).map((value) => (
            <div className="p-2 hover:bg-blue-300" key={value.id}>
              <Link
                to={`/product/${value?.id}`}
                onClick={clearInput}
                className="font-semibold"
              >
                {value.name}
              </Link>
            </div>
          ))
        ) : 
        ""}
      </div>{" "}
    </div>
  );
};

export default SearchBar;
