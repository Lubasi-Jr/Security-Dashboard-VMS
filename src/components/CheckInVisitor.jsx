import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import BackButton from "./Buttons/BackButton";

let id;
const path = window.location.pathname; // Get the full path, e.g., '/visitor/1'
const parts = path.split("/"); // Split by '/'
id = parts[parts.length - 1];

const CheckInVisitor = () => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    getVisitorDetails(id);
  }, []);

  async function getVisitorDetails(visitor_id) {
    try {
      const response = await axiosInstance.get(`/Visitors/${visitor_id}`);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
        <div className="rounded-md w-full h-auto bg-white px-4 py-4 flex flex-col gap-5">
          <BackButton backTo="/visitor/:visitorId" />
          <h2>{details ? "Details Available" : "Details Unavailable"}</h2>
        </div>
      </div>
    </>
  );
};

export default CheckInVisitor;
