import { div } from "motion/react-client";
import { Plus, User, DoorOpen } from "lucide-react";
import React from "react";
import VisitCard from "./Cards/VisitCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-3 justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="w-1/2 flex gap-9 items-start justify-start px-4 py-2">
        <button
          type="button"
          className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <User size={30} />
          <p>New Visitor</p>
        </button>
        <button
          type="button"
          className="text-cecOrange w-1/2 hover:text-white border border-cecOrange bg-white hover:bg-cecOrange  font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <DoorOpen size={30} />
          <p>New Visit</p>
        </button>
      </div>

      <div className="rounded-md w-full h-full bg-[#F5F5F5] px-4 py-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Visitor Cards */}
        <VisitCard id={1} />
      </div>
    </div>
  );
};

export default Home;
