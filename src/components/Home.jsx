import { User } from "lucide-react";
import React, { useEffect, useState } from "react";
import VisitCard from "./Cards/VisitCard";
import axiosInstance from "../api/axiosInstance";
import { RefreshCw } from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [loading, setLoading] = useState(true);

  const [allVisits, setAllVisits] = useState(null);
  useEffect(() => {
    getVisits();
  }, []);

  const getVisits = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/Visits");
      setAllVisits(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="lg:w-1/2 w-full flex flex-col lg:flex-row lg:gap-9 gap-2 items-start justify-start px-4 py-2">
        {/* <button
          type="button"
          className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <User size={30} />
          <p>New Visitor</p>
        </button> */}

        <a
          href="http://localhost:3000/"
          target="_blank"
          className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <User size={30} />
          <p>New Visitor</p>
        </a>

        <button
          type="button"
          onClick={getVisits}
          className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <RefreshCw size={30} />
          <p>Refresh</p>
        </button>
      </div>

      {loading ? (
        <div className="lg:w-1/2 w-full flex flex-col lg:flex-row lg:gap-9 gap-2 items-center justify-center px-4 py-2">
          <ClipLoader
            color="#AD7900"
            loading={loading}
            size={150}
            aria-label="Fetching Visits"
          />
        </div>
      ) : (
        <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {/* Visitor Cards For Today */}
          {allVisits ? (
            allVisits.map((visit, index) => (
              <VisitCard key={index} id={visit?.visit_id} visit={visit} />
            ))
          ) : (
            <div className="col-span-1 md:col-span-3 lg:col-span-4 flex flex-col font-raleway ">
              <h1>No Visits to display</h1>
              <p className="text-md text-cecOrange font-raleway">
                Click refresh or Come back later
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
