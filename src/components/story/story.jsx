import React from "react";
import "./story.css";
import { titles, descriptions } from "./data";
import Card from "../card/card";

const Story = () => {
  return (
    <div className="story-page-container flex flex-col gap-10 items-start min-h-[90vh] w-full text-white font-['Jura'] p-10 lg:p-20">
      <h1 className="text-5xl lg:text-6xl underline decoration-2 ">
        Our Story
      </h1>
      <div>
        <p className="text-[#FEDBFF] text-2xl text-left">
          GoCPT was conceived by a passionate psychiatric nurse practitioner
          who, as a new graduate, felt overwhelmed by the complexities of CPT
          coding. Faced with the daunting task of mastering medical coding while
          juggling the demands of patient care, it became clear that a solution
          was needed to bridge the gap between clinical expertise and
          administrative challenges. Time constraints and the intricate nature
          of CPT coding posed significant hurdles for healthcare providers
          looking to venture into private practice. Recognizing that coding and
          billing are formidable obstacles standing in the way of many talented
          providers, the idea for goCPT was born.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-10 justify-center w-full">
        <Card title={titles[0]} desc={descriptions[0]} />
        <Card title={titles[1]} desc={descriptions[1]} />
      </div>
    </div>
  );
};

export default Story;
