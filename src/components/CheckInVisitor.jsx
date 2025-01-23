import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import BackButton from "./Buttons/BackButton";
import DropDown from "./Filters/DropDown";
import { DoorOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CheckInVisitor = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  const [purpose, setPurpose] = useState("");
  const [employeeVisiting, setEmployee] = useState("");
  const [gatePass, setGatePass] = useState();

  useEffect(() => {
    let id;
    const path = window.location.pathname; // Get the full path, e.g., '/visitor/1'
    const parts = path.split("/"); // Split by '/'
    id = parts[parts.length - 1];
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

  function setPurposeFunction(p) {
    setPurpose(p);
  }

  function handleGatePassChange(event) {
    const { value } = event.target;
    setGatePass(value);
  }

  function handleEmployeeChange(event) {
    const { value } = event.target;
    setEmployee(value);
  }

  async function checkIn() {
    /* console.log(purpose);
    console.log(employeeVisiting);
    console.log(gatePass); */

    if (purpose == "" || gatePass == "") {
      return;
    }

    const checkInBody = {
      visit: {
        purpose: purpose,
        visit_date: new Date().toISOString().slice(0, 10),
        check_in: new Date().toISOString(),

        verified_visit: true,

        employee_id: 1, //To be changed with the help of employee active directory
        visitor_id: details?.visitor_id,
      },
      pass: {
        card_number: gatePass,
        issued_at: new Date().toISOString(),

        status: 1,
        visitor_id: details?.visitor_id,
      },
      visitorId: {
        id_type: details?.id_type,
        id_number: details?.id_number,
        stored_at: new Date().toISOString(),

        visitor_id: details?.visitor_id,
      },
    };
    //console.log(checkInBody);

    try {
      const response = await axiosInstance.post("/Visits/CheckIn", checkInBody);
      console.log("Check in successful", response.data);
      navigate("/visits");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
        <div className="rounded-md w-full h-auto bg-white px-4 py-4 flex flex-col gap-5">
          <BackButton backTo="/visitor/:visitorId" />
          {details ? (
            <>
              <div
                id="main-details"
                className="flex items-center justify-center flex-col gap-1 text-center mb-8 font-oxygen"
              >
                <h1 className="truncate md:text-lg text-base  ">{`${details?.first_name} ${details?.last_name}`}</h1>
                <h1 className="font-bold text-3xl truncate">{`ID: ${details?.id_number}`}</h1>
                <h1 className="font-bold text-2xl truncate">{`Phone: ${details?.phone}`}</h1>
                <h2 className="text-neutral-500 text-base truncate">{`Company Name: ${details?.company_name}`}</h2>
              </div>
              <div className="flex items-center justify-center gap-2 font-oxygen ">
                <p className="text-lg mr-4">Purpose of Visit</p>
                <DropDown setPurpose={setPurposeFunction} />
              </div>
              <div className="flex items-center justify-center gap-2 font-oxygen ">
                <p className="text-lg">Employee Visiting</p>
                <input
                  onChange={handleEmployeeChange}
                  type="text"
                  placeholder="E.g Michael Musonda"
                  className="rounded-md px-1 py-1 focus:ring-cecOrange mt-1 focus:border-cecOrange w-[200px] h-[41px]"
                />
              </div>
              <div className="flex items-center justify-center gap-2 font-oxygen ">
                <p className="text-lg">Gate Pass Number</p>
                <input
                  onChange={handleGatePassChange}
                  type="number"
                  className="rounded-md px-1 py-1 focus:ring-cecOrange mt-1 focus:border-cecOrange w-[200px] h-[41px]"
                />
              </div>
              <div className="flex items-center justify-center gap-2 font-oxygen ">
                <button
                  onClick={checkIn}
                  type="button"
                  className="text-white hover:text-cecOrange border w-[200px] border-cecOrange bg-cecOrange hover:bg-white font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
                >
                  <DoorOpen size={30} />
                  <p>Check-In</p>
                </button>
              </div>
            </>
          ) : (
            <h2>Details Unavailable</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default CheckInVisitor;
