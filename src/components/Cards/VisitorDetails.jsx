import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CircleUser } from "lucide-react";
import { Save } from "lucide-react";

import { Trash } from "lucide-react";
import BackButton from "../Buttons/BackButton";
import Times from "./Times";

const VisitorDetails = () => {
  const { visitorId } = useParams();
  const [times, setTimes] = useState({
    checkIn: "00:00",
    checkOut: "00:00",
  });
  const [gatePass, setGetPass] = useState();

  const handleTimeChange = (event) => {
    const { value, name } = event.target;
    setTimes((previous) => {
      return { ...previous, [name]: value };
    });
  };

  const handleGatePassChange = (event) => {
    const number = event.target.value;
    setGetPass(number);
  };

  return (
    <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="rounded-md w-full h-full bg-white px-4 py-4 flex flex-col gap-5">
        <BackButton backTo="/visitor" />
        <div
          id="main-details"
          className="flex items-center justify-center flex-col gap-1 text-center mb-8 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  ">Phil Foden</h1>
          <h1 className="font-bold text-3xl truncate">33456/65/1</h1>
          <h2 className="text-neutral-500 text-base truncate">ABSA Bank Ltd</h2>
        </div>
        <div
          id="generall-info"
          className="flex flex-col gap-1 items-start justify-start mb-16 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Created:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              15/01/2025
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            PhoneNo:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              +260 78845321
            </span>
          </h1>
        </div>
        <div
          id="times"
          className="flex flex-col gap-1 items-start justify-start mb-8 font-oxygen"
        >
          {/*<div>
            <label
              for="number-input"
              class="block mb-2 text-base md:text-lg font-bold "
            >
              Gate Pass Number:
            </label>
            <input
              type="number"
              id="number-input"
              aria-describedby="helper-text-explanation"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 focus:ring-cecOrange focus:border-cecOrange"
              value={gatePass}
              onChange={handleGatePassChange}
            />
          </div>*/}

          {/*<Times times={times} handleTimeChange={handleTimeChange} />*/}
        </div>
        <div
          id="save-button"
          className="flex gap-6 items-end justify-end mb-10"
        >
          {/*<button
            type="button"
            className="text-white hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
          >
            <Save size={30} />
            <p>Save</p>
          </button>*/}
          <button
            type="button"
            className="text-white hover:text-cecRed border border-cecRed bg-cecRed hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
          >
            <Trash size={30} />
            <p>Delete</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VisitorDetails;
