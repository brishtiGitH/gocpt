import React from "react";
import "./password.css";
import adminPfp from "../../assets/admin.png";
import BackArrow from "../../assets/Vector-arrow.png";
import BackBtn from "../../assets/Vector-back.png";
import VectorPf from "../../assets/Vector-pf.png";
import VectorPfp from "../../assets/Vector-pfp.png";

const PasswordPage = () => {
  return (
    <div className="password-page-container min-h-screen w-full flex flex-col p-10 lg:p-0 gap-10 2xl:gap-20">
      <div className="nav w-full h-auto flex p-3 justify-between items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl">
        <div className="flex justify-center items-center">
          <img src={BackArrow} alt="back button arrow" className="" />
          <img src={BackBtn} alt="back button " />
        </div>

        <h1 className="text-4xl md:text-6xl drop-shadow-2xl font-bold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <div className="flex relative">
          <img src={VectorPf} alt="" />
          <img src={VectorPfp} alt="" className="absolute left-3 top-1" />
        </div>
      </div>
      <div className="password flex flex-col h-[90vh] gap-10 justify-center items-center">
        <div className="password-container bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl  border border-white border-opacity-60 flex flex-col gap-10 justify-center items-center px-10 py-20 h-auto w-full  lg:h-[692px] lg:py-20 lg:px-20 lg:w-[772px] rounded-[50px]">
          <h2 className="uppercase text-4xl md:text-6xl text-center">
            Change Password
          </h2>
          <div className="password-fields flex flex-col gap-6 w-full">
            <div>
              <label className="block text-xl ml-3" htmlFor="old-password">
                Old Password
              </label>
              <input
                className="border border-white bg-transparent outline-none rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="password"
                id="old-password"
                placeholder="Old Password"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="new-password">
                New Password
              </label>
              <input
                className="border border-white bg-transparent outline-none rounded-2xl w-full p-4 text-2xl placeholder:text-2xl "
                type="password"
                id="new-password"
                placeholder="New Password"
              />
            </div>
            <p className="text-xl">Forgot Password?</p>
          </div>

          <button className="text-2xl md:text-4xl text-white p-3 border border-white rounded-2xl uppercase w-full">
            Update Details
          </button>
        </div>
        <button className="back-btn text-3xl">BACK</button>
      </div>
    </div>
  );
};

export default PasswordPage;
