import React, { useEffect, useState } from "react";

import VisitCard from "./Cards/VisitCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import DatePicker from "./Filters/DatePicker";
import DropDown from "./Filters/DropDown";
import axiosInstance from "../api/axiosInstance";

const Visits = () => {
  const [allVisits, setVisits] = useState(null);
  useEffect(() => {
    getVisits();
  }, []);

  async function getVisits() {
    try {
      const response = await axiosInstance.get("/Visits");
      setVisits(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");

  //Dummy search function
  const search = () => {
    console.log(purpose);
    console.log(date);
    console.log(name);
  };

  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="flex items-start justify-start">
        <h2 className="font-oxygen font-bold">Filter By:</h2>
      </div>
      <div className="z-30 rounded-md w-full lg:h-[80px] h-auto  px-4 py-4 flex items-start justify-start flex-col lg:flex-row gap-3 ">
        <div className="flex flex-col gap-1 w-[200px]">
          <DatePicker setDate={setDate} />
        </div>
        <div className="flex flex-col gap-1 w-[200px]">
          <p className="text-base">Purpose</p>
          <DropDown setPurpose={setPurpose} />
        </div>
        <div className="flex flex-col gap-1 w-[210px]">
          <p className="text-base">Name</p>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="E.g Michael Musonda"
            className="rounded-md px-1 py-1 focus:ring-cecOrange mt-1 focus:border-cecOrange w-[200px] h-[41px]"
          />
        </div>
        <button
          onClick={search}
          className="w-[41px] bg-cecOrange h-[41px] text-md mt-8 rounded-full flex items-center justify-center px-1 py-4 text-white hover:bg-white hover:text-cecOrange"
        >
          <Search size={25} />
        </button>
        <h2 className="text-[25px] mt-8">OR</h2>
        <button className="border border-cecOrange rounded-md px-2 py-2 w-[170px]  lg:w-[250px] whitespace-nowrap text-base mt-8 font-semibold text-center h-[41px]  text-cecOrange hover:text-white hover:bg-cecOrange">
          Create New Visit
        </button>
      </div>

      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {allVisits ? (
          allVisits.map((visit, index) => (
            <VisitCard key={index} id={visit?.visit_id} visit={visit} />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Visits;
