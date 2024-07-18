import React from "react";
import "./imgCard.css";

const ImgCard = ({ title, desc, cardImg }) => {
  return (
    <div className="img-container border border-white border-opacity-15 bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl rounded-2xl max-h-[600px] max-w-[410px] p-10 flex flex-col justify-center items-center text-center gap-4 ">
      <div className="card-img">
        <img className="rounded-xl" src={cardImg} alt="" />
      </div>
      <h3 className="text-xs sm:text-3xl ">{title}</h3>
      <p className="text-xs sm:text-base">{desc}</p>
    </div>
  );
};

export default ImgCard;
