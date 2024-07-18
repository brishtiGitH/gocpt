import React from "react";
import "./contributePage.css";
import Card from "../../components/card/card";
import { titles, descriptions } from "./data";

const ContributePage = () => {
  return (
    <div
      className="contribute-container border border-white border-opacity-15 bg-white bg-opacity-5 backdrop-filter backdrop-blur-2xl w-full min-h-screen flex flex-col justify-center items-center p-12
     gap-10"
    >
      <h1 className="text-5xl text-center">How Can You Contribute?</h1>
      <div className="cards flex flex-col lg:flex-row items-center justify-center w-full p-10 gap-10">
        <Card title={titles[0]} desc={descriptions[0]} />
        <Card title={titles[1]} desc={descriptions[1]} />
      </div>
      <h1 className="text-5xl text-center">Join GOCPT on this Journey!</h1>
      <p className="text-xl text-center">
        By participating in the goCPT Beta, you're not just a user; you're a
        vital part of our community shaping the future of mental health billing.
        Together, we can create an app that truly meets your needs and exceeds
        your expectations.
      </p>
      <button className="btn text-4xl border pt-1  md:max-w-[300px] border-white border-opacity-20">
        Sign Up Today!
      </button>
    </div>
  );
};

export default ContributePage;
