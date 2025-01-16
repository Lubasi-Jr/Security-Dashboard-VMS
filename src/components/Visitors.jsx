import React from "react";
import VisitorCard from "./Cards/VisitorCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";

const Visitors = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-44 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      {/* <div className=" w-full px-4 py-4">
        <form action="">
          <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cecOrange focus:border-cecOrange block w-1/2 p-2.5     "
                placeholder="John"
              />
            </div>
            <div>
              <label
                for="last_name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                NRC
              </label>
              <input
                type="text"
                id="nrc"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-cecOrange focus:border-cecOrange block w-1/2 p-2.5     "
                placeholder="34457/65/1"
              />
            </div>
            <button
              type="button"
              className="text-white w-1/2 hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
            >
              <Search size={30} />
              <p>Search</p>
            </button>
            <button
              type="button"
              className="text-cecOrange w-1/2 hover:text-white border border-white bg-white hover:bg-cecOrange font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
            >
              <Plus size={30} />
              <p>Create New Visitor</p>
            </button>
          </div>
        </form>
      </div> */}
      <div className="flex items-start justify-start">
        <h2 className="font-oxygen font-bold">Search By:</h2>
      </div>
      <div className="rounded-md w-1/2 h-auto bg-[#F5F5F5] px-4 py-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-base">
            Name
          </label>
          <input
            placeholder="E.g Michael Musonda"
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="" className="text-base">
            NRC
          </label>
          <input
            placeholder="E.g 34458/65/1"
            type="text"
            className="rounded-md focus:border-cecOrange focus:ring-cecOrange truncate w-[250px]"
          />
        </div>
        <div className="flex items-center justify-center gap-6">
          <button
            type="button"
            className="text-white w-1/2 hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
          >
            <Search size={30} />
            <p>Search</p>
          </button>
          <h2>OR</h2>
          <button
            type="button"
            className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
          >
            <Plus size={30} />
            <p>Create New Visitor</p>
          </button>
        </div>
      </div>
      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        <VisitorCard id={1} />
      </div>
    </div>
  );
};

export default Visitors;
