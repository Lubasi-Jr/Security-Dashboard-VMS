import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, CircleUser } from "lucide-react";
import { Save } from "lucide-react";
import axiosInstance from "../../api/axiosInstance";
import { Trash } from "lucide-react";
import BackButton from "../Buttons/BackButton";
import Times from "./Times";
import { del } from "motion/react-client";
import { DoorOpen } from "lucide-react";

const VisitorDetails = () => {
  const navigate = useNavigate();
  //Obtain NRC Number
  const [NRC, setNRCDetails] = useState();
  useEffect(() => {
    let id;
    const path = window.location.pathname; // Get the full path, e.g., '/visitor/1'
    const parts = path.split("/"); // Split by '/'
    id = parts[parts.length - 1];
    getNRCNumber(id);
  }, []);
  async function getNRCNumber(visitor_id) {
    try {
      const response = await axiosInstance.get(`/IDStorages/${visitor_id}`);
      setNRCDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    let id;
    const path = window.location.pathname; // Get the full path, e.g., '/visitor/1'
    const parts = path.split("/"); // Split by '/'
    id = parts[parts.length - 1];
    getDetails(id);
  }, []);

  const [details, setDetails] = useState("");

  const getDetails = async (visitor_id) => {
    try {
      const response = await axiosInstance.get(`/Visitors/${visitor_id}`);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [times, setTimes] = useState({
    checkIn: "00:00",
    checkOut: "00:00",
  });
  const [gatePass, setGetPass] = useState();

  async function deleteVisitor() {
    //Dummy delete function

    console.log(`Deleting Visitor ${details?.visitor_id}`);
    console.log(details);

    /* try {
      const response = await axiosInstance.delete(
        `/Visitors/${details?.visitor_id}`
      );
      console.log("Visitor has been deleted");
      navigate("/visitor")
      
    } catch (error) {
      console.log(error)
      
    } */

    //console.log(details);
  }

  return (
    <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="rounded-md w-full h-full bg-white px-4 py-4 flex flex-col gap-5">
        <BackButton backTo="/visitor" />
        <div
          id="main-details"
          className="flex items-center justify-center flex-col gap-1 text-center mb-8 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  ">{`${details?.first_name} ${details?.last_name}`}</h1>
          <h1 className="font-bold text-3xl truncate">{`NRC: ${NRC?.id_number}`}</h1>
          <h2 className="text-neutral-500 text-base truncate">{`Company Name: ${details?.company_name}`}</h2>
        </div>
        <div
          id="generall-info"
          className="flex flex-col gap-1 items-start justify-start mb-16 font-oxygen"
        >
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Created:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              {details?.created_at
                ? new Date(details?.created_at).toLocaleDateString(undefined, {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                  })
                : "N/A"}
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            PhoneNo:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              {`${details?.phone}`}
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Address:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              {`${details?.address}`}
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Email:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              {`${details?.email}`}
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
          <Link to={`/checkIn/${details?.visitor_id}`}>
            <button
              type="button"
              className="text-white hover:text-cecOrange border border-cecOrange bg-cecOrange hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
            >
              <DoorOpen size={30} />
              <p>Check-In</p>
            </button>
          </Link>
          <button
            type="button"
            onClick={deleteVisitor}
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
