"use client";
import { HiMagnifyingGlass } from "react-icons/hi2";

const SearchForm = ({ children }) => {
  return (
    <div>
      <div className="relative mt-1 rounded-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <HiMagnifyingGlass />
        </div>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-40 h-10 pl-10 pr-3 border rounded-full md:w-96 sm:text-sm focus:outline-none focus:ring focus:ring-primary-50 bg-slate-50"
          placeholder={children ? children : "Cari"}
        />
      </div>
    </div>
  );
};

export default SearchForm;
