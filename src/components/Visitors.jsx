import React, { useReducer, useState, useEffect } from "react";
import VisitorCard from "./Cards/VisitorCard";
import { Search } from "lucide-react";
import { Plus } from "lucide-react";
import axiosInstance from "../api/axiosInstance";
import { div } from "motion/react-client";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "nrc":
      return { ...state, nrc: action.payload };
    default:
      return state;
  }
}

const STATES = {
  name: "",
  nrc: "",
  visitors: [],
};

const Visitors = () => {
  const [allVisitors, setAllVisitors] = useState([]);
  useEffect(() => {
    getVisitors();
  }, []);

  const getVisitors = async () => {
    try {
      const response = await axiosInstance.get("/Visitors");
      setAllVisitors(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [states, dispatch] = useReducer(reducer, STATES);

  function searchForvisitors() {
    //Dummy search function
    console.log(`Name ${states.name}`);
    console.log(`NRC ${states.nrc}`);
    console.log(allVisitors);
    console.log(`Visitor ID is ${allVisitors[0].visitor_id}`);
  }

  return (
    <div className="flex flex-col items-center gap-5 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="flex items-start justify-start">
        <h2 className="font-oxygen font-bold">Search By:</h2>
      </div>

      <div className=" rounded-md w-full lg:h-[80px] h-auto  px-4 py-4 flex lg:flex-row lg:items-start lg:justify-start gap-3 flex-col justify-start items-start ">
        <div className="flex flex-col gap-1 w-[200px]">
          <p className="text-base">Name</p>
          <input
            value={states.name}
            onChange={(e) => {
              dispatch({ type: "name", payload: e.target.value });
            }}
            type="text"
            placeholder="E.g Michael Musonda"
            className="rounded-md px-1 py-1 focus:ring-cecOrange focus:border-cecOrange h-[41px]"
          />
        </div>
        <div className="flex flex-col gap-1 w-[200px]">
          <p className="text-base">NRC</p>
          <input
            value={states.nrc}
            onChange={(e) => {
              dispatch({ type: "nrc", payload: e.target.value });
            }}
            type="text"
            placeholder="E.g 33564/65/1"
            className="rounded-md px-1 py-1 focus:ring-cecOrange focus:border-cecOrange h-[41px]"
          />
        </div>
        <button
          onClick={searchForvisitors}
          className="w-[40px] bg-cecOrange h-[40px] text-md mt-6 rounded-full flex items-center justify-center px-1 py-4 text-white hover:bg-white hover:text-cecOrange"
        >
          <Search size={25} />
        </button>
        <h2 className="text-[25px] mt-6">OR</h2>
        <button className="border border-cecOrange rounded-md px-2 py-2 w-[170px] text-base mt-6 font-semibold text-center h-[41px] text-cecOrange hover:text-white hover:bg-cecOrange">
          Create New Visitor
        </button>
      </div>

      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {allVisitors ? (
          allVisitors.map((visitor, index) => (
            <VisitorCard
              key={index}
              id={visitor?.visitor_id}
              visitor={visitor}
            />
          ))
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Visitors;
