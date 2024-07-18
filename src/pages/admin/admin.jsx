import React from "react";
import "./admin.css";
import adminPfp from "../../assets/admin.png";
import BackArrow from "../../assets/Vector-arrow.png";
import BackBtn from "../../assets/Vector-back.png";
import VectorPf from "../../assets/Vector-pf.png";
import VectorPfp from "../../assets/Vector-pfp.png";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-page-container min-h-screen w-full flex flex-col gap-10">
      <div className="nav w-full h-auto flex p-3 justify-between items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-xl hover:cursor-pointer">
        <div
          onClick={() => navigate("/")}
          className="flex justify-center items-center"
        >
          <img src={BackArrow} alt="back button arrow" className="" />
          <img src={BackBtn} alt="back button " />
        </div>

        <h1 className="text-4xl md:text-6xl drop-shadow-2xl font-bold">
          <span className="logo1">Go</span>
          <span className="logo2">CPT</span>
        </h1>
        <div onClick={() => navigate("/admin")} className="flex relative">
          <img src={VectorPf} alt="" />
          <img src={VectorPfp} alt="" className="absolute left-3 top-1" />
        </div>
      </div>
      <div className="admin flex flex-col gap-1 justify-center items-center">
        <div className="admin-container bg-white bg-opacity-5 backdrop-filter backdrop-blur-xl  border border-white border-opacity-60 flex flex-col gap-5 justify-center items-center px-10 py-20 h-auto w-full  lg:h-[900px] lg:py-20 lg:px-32 lg:w-[927px] rounded-[50px]">
          <img
            src={adminPfp}
            alt="adminProfilePoc"
            className="rounded-2xl mb-[-25px] shadow-[0_7px_5px_15px_rgba(0,0,0,0.2)]"
          />
          <h2 className="uppercase text-4xl md:text-6xl text-center">
            Administrator
          </h2>
          <div className="admin-fields flex flex-col gap-6 w-full">
            <div>
              <label className="block text-xl ml-3" htmlFor="admin-email">
                E-Mail Address
              </label>
              <input
                className="border border-white outline-none bg-transparent rounded-2xl w-full p-4 text-3xl placeholder:text-3xl placeholder:text-white"
                type="email"
                id="admin-email"
                placeholder="admin@gmail.com"
              />
            </div>
            <div>
              <label className="block text-xl ml-3" htmlFor="phone">
                Phone Number
              </label>
              <input
                className="border border-white outline-none bg-transparent rounded-2xl w-full p-4 text-3xl placeholder:text-3xl  placeholder:text-white "
                type="phone"
                id="phone"
                placeholder="+191 998 877 6655"
              />
            </div>

            <Link to={"/changepassword"} className="text-xl">
              Change Password?
            </Link>
          </div>

          <button className="text-2xl md:text-4xl text-white p-3 border border-white rounded-2xl uppercase w-full hover:bg-white hover:bg-opacity-25 backdrop-filter backdrop-blur-xl">
            Update Details
          </button>
        </div>
        <button className="back-btn text-3xl">BACK</button>
      </div>
    </div>
  );
};

export default Admin;
