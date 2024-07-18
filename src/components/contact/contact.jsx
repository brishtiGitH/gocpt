import React from "react";
import "./contact.css";
import ContactImg from "../../assets/contact-img.png";
const Contact = () => {
  return (
    <div className="rounded-[30px] mx-5 md:mx-10 2xl:mx-20 contact-page-container bg-opacity-5 backdrop-filter backdrop-blur-xl min-h-screen flex flex-col justify-center items-center py-5 px-10">
      <h1 className=" text-4xl lg:text-5xl 2xl:text-6xl underline decoration-2 uppercase">
        Contact Us
      </h1>
      <div className="flex flex-col 2xl:flex-row w-full ">
        <div className="img w-full lg:w-1/2 mx-auto ">
          <img src={ContactImg} alt="" />
        </div>
        <div className="form w-full lg:w-1/2 p-10 mx-auto ">
          <form action="" className="flex flex-col gap-5">
            <div>
              <input
                className="border outline-none border-white bg-black rounded-2xl w-full p-2 lg:p-4 text-2xl placeholder:text-white  placeholder:text-base lg:placeholder:text-2xl md:placeholder:text-xl"
                type="text"
                id="company-name"
                placeholder="Company Name"
              />
            </div>
            <div>
              <input
                className="border outline-none border-white bg-black rounded-2xl w-full p-2 lg:p-4 text-2xl placeholder:text-base lg:placeholder:text-2xl md:placeholder:text-xl placeholder:text-white "
                type="email"
                id="contact-email"
                placeholder="Email Address"
              />
            </div>
            <div>
              <input
                className="border outline-none border-white bg-black rounded-2xl w-full p-2 lg:p-4 text-2xl placeholder:text-base lg:placeholder:text-2xl md:placeholder:text-xl placeholder:text-white "
                type="text"
                id="company-address"
                placeholder="Company's Address"
              />
            </div>
            <div>
              <textarea
                className="border outline-none border-white bg-black rounded-2xl w-full p-3 lg:p-4 text-2xl placeholder:text-base lg:placeholder:text-2xl md:placeholder:text-xl placeholder:text-white"
                name="message"
                id="message"
                cols="30"
                rows="6"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn text-4xl border lg:w-[274px] mx-auto pt-1 border-white border-opacity-20">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
