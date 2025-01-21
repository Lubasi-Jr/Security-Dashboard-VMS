import React, { useEffect, useState } from "react";
import Details from "../Buttons/Details";
import { Link } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";

const VisitCard = ({ id, visit }) => {
  /*  const { visitor, visitor_id, employee, visit_date } = visit;



  const employeeBeingVisited = `${employee?.first_name} ${employee?.last_name}`;
  const visitorFullName = `${visitor?.first_name} ${visitor?.last_name}`; */

  const [idDetails, setIdDetails] = useState("");

  useEffect(() => {
    //console.log("Visit:-");
    //console.log(visit);
    getIdDetails();
  }, []);

  async function getIdDetails() {
    try {
      const response = await axiosInstance.get(
        `/IDStorages/${visit?.visitor?.visitor_id}`
      );
      setIdDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div
      id="child"
      className="w-full col-span-1 rounded-md h-64 bg-white px-4 py-4 flex flex-col justify-between"
    >
      <div className="flex flex-col gap-1 font-oxygen">
        <h1 className="truncate md:text-lg text-base  ">
          {`${visit?.visitor?.first_name} ${visit?.visitor?.last_name}`}
        </h1>
        <h1 className="font-bold text-3xl truncate">{`ID: ${idDetails?.id_number}`}</h1>
        <h2 className="text-neutral-500 text-base truncate">
          Employee:{" "}
          {`${visit?.employee?.first_name} ${visit?.employee?.last_name}`}
        </h2>
        <h2 className="text-neutral-500 text-base truncate">
          {visit?.visit_date}
        </h2>
      </div>

      <div>
        <Link to={"/visits/" + id}>
          <Details />
        </Link>
      </div>
    </div>
  );
};

export default VisitCard;
