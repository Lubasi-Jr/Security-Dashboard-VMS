import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [invalid, setInvalid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Attempting to login");

    return;
  };
  return (
    <div className="w-full px-20 py-20 bg-cecOrange h-full">
      <div className="z-10 w-full md:w-1/2 bg-white rounded-md h-auto px-10 py-10 mx-auto flex flex-col items-start gap-2">
        <div className="flex gap-12 items-start justify-start w-auto mb-12">
          <img
            src="cec-OG-logo-transparent.png"
            alt="CEC Logo"
            height={100}
            width={100}
          />

          <h1 className="font-bold text-3xl mt-5 md:mt-8 font-raleway">
            VMS Security Dashboard Login
          </h1>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col h-full items-start justify-start gap-3"
        >
          <div className="flex gap-3  justify-center">
            <label htmlFor="username" className="font-semibold font-raleway">
              Username
            </label>
            <input
              className="rounded-md px-2 py-2  focus:border-cecOrange focus:ring-cecOrange"
              type="text"
              name="username"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="flex gap-3  justify-center">
            <label
              htmlFor="password"
              className="mr-1 font-semibold font-raleway"
            >
              Password
            </label>
            <input
              className="rounded-md px-2 py-2  focus:border-cecOrange focus:ring-cecOrange"
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="font-medium bg-cecOrange hover:bg-[#8A5F00] text-white px-2 py-2 rounded-md font-raleway"
          >
            Log in
          </button>
          {invalid && (
            <p className="text-base text-cecRed font-oxygen">
              Invalid Credentials
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
