import React from "react";
import "./note.css";
import adminPfp from "../../assets/admin.png";
import BackArrow from "../../assets/Vector-arrow.png";
import BackBtn from "../../assets/Vector-back.png";
import VectorPf from "../../assets/Vector-pf.png";
import VectorPfp from "../../assets/Vector-pfp.png";
import { useNavigate } from "react-router-dom";

const NotePage = () => {
  const navigate = useNavigate();
  return (
    <div className="note-page-container min-h-screen md:h-auto w-full flex flex-col gap-10">
      <div className="nav w-full h-auto flex p-3 justify-between items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl">
        <div
          onClick={() => navigate("/")}
          className=" flex justify-center items-center hover:cursor-pointer"
        >
          <img src={BackArrow} alt="back button arrow" />
          <img src={BackBtn} alt="back button " />
        </div>

        <h1 className="text-4xl md:text-6xl drop-shadow-2xl font-bold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <div
          onClick={() => navigate("/admin")}
          className=" flex relative hover:cursor-pointer"
        >
          <img src={VectorPf} alt="" />
          <img src={VectorPfp} alt="" className="absolute left-3 top-1" />
        </div>
      </div>
      <div className="note px-10 flex flex-col gap-5 justify-center items-center">
        <div className="first  text-center flex flex-col gap-6 items-center justify-center w-full h-auto p-10 border border-white border-opacity-[0.3] drop-shadow-lg bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter lg:w-[915px] lg:h-[413px] rounded-[30px]">
          <div>
            <h1 className=" text-4xl md:text-5xl text-center">
              Upload your Note
            </h1>
            <p className="text-base md:text-xl">
              (It may take 30-90 seconds to generate report)
            </p>
          </div>
          <div>
            <p className="upload-note text-xl md:text-3xl p-10 bg-white bg-opacity-25 backdrop-filter backdrop-blur-md rounded-2xl">
              Click to upload a Note (pdf or doc file)
            </p>
          </div>
          <div>
            <p className="gradient py-3 px-5 rounded-2xl text-xl md:text-2xl text-center border border-white border-opacity-40 bg-opacity-70 backdrop-filter backdrop-blur-md">
              Generate CPT code <br /> Based upon Medical Decision Making Model
            </p>
          </div>
        </div>
        <div className="second gap-10 flex flex-col w-full h-auto p-5 bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter lg:max-w-[1650px] rounded-[30px]">
          <div className="top flex flex-col h-auto lg:flex-row justify-between items-center gap-5 lg:gap-14">
            <div className="top-div w-full lg:w-1/3 p-3 rounded-2xl flex flex-col xl:flex-row justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter ">
              <p className="text-base md:text-xl text-center">
                Number and Complexity of Problems Addressed
              </p>
              <p className="uppercase text-4xl scale">Medium</p>
            </div>
            <div className="top-div w-full lg:w-1/3  p-3 rounded-2xl flex flex-col xl:flex-row justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter ">
              <p className="text-base md:text-xl text-center">
                Amount and/or Complexity of Data to be Reviewed and Analyzed
              </p>
              <p className="uppercase text-4xl scale">Minimal</p>
            </div>
            <div className="top-div w-full lg:w-1/3 p-3 rounded-2xl flex flex-col xl:flex-row justify-between items-center bg-white bg-opacity-10 backdrop-blur-lg backdrop-filter ">
              <p className="text-base md:text-xl text-center">
                Risk of Complications and/or Morbidity or Mortality of Patient
                Management Decisions
              </p>
              <p className="uppercase text-4xl scale">High</p>
            </div>
          </div>
          <div className="middle flex flex-col gap-7 justify-center items-center ">
            <button className="btn-1 text-2xl lg:text-4xl rounded-2xl lg:w-[850px] p-3  border border-white border-opacity-[0.6]">
              GENERATE MDM CPT CODE
            </button>
            <button className="btn-2 scale  font-semibold text-2xl lg:text-4xl  border border-white border-opacity-[0.6] bg-white bg-opacity-20 backdrop-blur-xl backdrop-filter rounded-2xl lg:w-[670px] p-3 lg:p-1">
              MEDIUM
            </button>
          </div>
          <div className="bottom flex flex-col md:flex-row w-full gap-10">
            <div className="bottom-left w-full md:w-1/2 flex flex-col items-center gap-3 ">
              <p className="text-base lg:text-2xl">New or Existing Patient</p>
              <button className=" w-full py-2 px-5 text-left text-base lg:text-2xl lg:max-w-[750px] bg-white bg-opacity-20 backdrop-blur-xl backdrop-filter rounded-xl border-white border-opacity-[0.6]">
                Choose an Option
              </button>
              <button className="gradient bg-opacity-80 w-full text-2xl lg:text-4xl p-1 lg:max-w-[750px] rounded-xl border-white border-opacity-[0.6]">
                SUBMIT
              </button>
              <button className="w-full text-2xl lg:text-4xl lg:max-w-[750px] p-1 bg-white bg-opacity-10 backdrop-blur-xl backdrop-filter rounded-xl border-white border-opacity-[0.6]">
                99214
              </button>
            </div>
            <div className="bottom-right w-full md:w-1/2 flex flex-col items-center gap-3">
              <p className="text-base lg:text-2xl">Get Code Based Upon Time</p>
              <button className=" w-full py-2 px-5 text-left text-base lg:text-2xl lg:max-w-[750px] bg-white bg-opacity-20 backdrop-blur-xl backdrop-filter rounded-xl border-white border-opacity-[0.6]">
                Choose an Option
              </button>
              <button className="gradient bg-opacity-80 w-full text-2xl lg:text-4xl p-1 lg:max-w-[750px] rounded-xl border-white border-opacity-[0.6]">
                SUBMIT
              </button>
              <button className="w-full text-2xl lg:text-4xl lg:max-w-[750px] p-1 bg-white bg-opacity-10 backdrop-blur-xl backdrop-filter rounded-xl border-white border-opacity-[0.6]">
                99242
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotePage;
