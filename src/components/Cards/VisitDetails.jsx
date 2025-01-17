import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import BackButton from "../Buttons/BackButton";
import { DoorOpen } from "lucide-react";
import { DoorClosed } from "lucide-react";
import CheckInModal from "../Buttons/CheckInModal";

const VisitDetails = () => {
  const { visitId } = useParams();
  const [hideModal, setHideModal] = useState(true);
  const [purpose, setPurpose] = useState("");

  const checkVisitorInOrOut = () => {
    if (purpose == "Check-In") {
      //Execute Check-in route
      console.log("Checking In visitor...");
    } else {
      //Execute Check-out route
      console.log("Checking Out visitor...");
    }

    setHideModal(!hideModal);
  };

  return (
    <div className="flex items-center justify-center text-3xl h-full bg-[#F5F5F5] md:pl-24 md:pt-8 px-20 pt-8 pb-28 md:pb-2">
      <div className="rounded-md w-full h-full bg-white px-4 py-4 flex flex-col gap-5">
        <BackButton backTo="/visits" />
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
            Visit Date:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              03/01/2025
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            PhoneNo:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              +260 78845321
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Employee Visiting:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              Lubasi Milupi
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Purpose:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              Business
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Check-In:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              09:32
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Time-In:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              09:40
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Time-Out:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              N/A
            </span>
          </h1>
          <h1 className="truncate md:text-lg text-base  font-bold ">
            Check-Out:{" "}
            <span className="text-neutral-500 text-base truncate font-normal">
              N/A
            </span>
          </h1>
        </div>
        <button
          type="button"
          purpose="Check-In"
          onClick={() => {
            setPurpose("Check-in");
            setHideModal(!hideModal);
          }}
          className="text-cecOrange w-[250px] hover:text-white border border-cecOrange bg-white hover:bg-cecOrange font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <DoorOpen size={30} />
          <p>Check-in</p>
        </button>
        <button
          purpose="Check-Out"
          onClick={() => {
            setPurpose("Check-out");
            setHideModal(!hideModal);
          }}
          type="button"
          className="text-cecRed w-[250px] hover:text-white border border-cecRed bg-white hover:bg-cecRed font-medium rounded-lg text-sm md:text-md lg:text-lg px-5 py-2.5 text-center me-2 mb-2 flex gap-1 justify-center items-center"
        >
          <DoorClosed size={30} />
          <p>Check-out</p>
        </button>
      </div>
      {/* Modal for CheckIn/CheckOut */}

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          hideModal && "hidden"
        } fixed inset-0 z-[70] flex justify-center items-center backdrop-blur-sm`}
      >
        <div className="z-100 relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Are you sure you want to {purpose} this visitor?
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                /* data-modal-hide="default-modal" */
                onClick={() => {
                  setHideModal(!hideModal);
                }}
              >
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                type="button"
                onClick={checkVisitorInOrOut}
                className="text-white bg-cecOrange hover:bg-[#8A5F00] focus:ring-4 focus:outline-none focus:ring-[#8A5F00] font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Yes
              </button>
              <button
                onClick={() => {
                  setHideModal(!hideModal);
                }}
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cecOrange focus:z-10 focus:ring-4 focus:ring-cecOrange  "
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisitDetails;
