import React from "react";
import "./regards.css";

const Regards = () => {
  return (
    <div className="min-h-screen w-full bg-black bg-opacity-5 backdrop-filter backdrop-blur-2xl regards-page-container text-center p-10 flex flex-col items-center justify-center gap-10">
      <h1 className="text-5xl lg:text-6xl">
        Why <span className="font-bold">GoCPT?</span>
      </h1>
      <p className="text-3xl">
        At goCPT, we understand the unique challenges mental health
        professionals face. Our app is designed with your needs in mind,
        offering a user-friendly platform that simplifies the coding process. By
        utilizing goCPT, providers can reclaim valuable time, reduce
        administrative stress, and ensure accurate code assignment for proper
        reimbursement.
      </p>
      <p className="text-3xl">
        Join us on this transformative journey as we continue to innovate and
        evolve, breaking down barriers and making mental health care accessible
        to all. Together, we can shape a future where healthcare providers are
        empowered, and quality mental health care knows no boundaries.
      </p>
      <p className="text-3xl ">
        Thank you for choosing goCPT - where innovation meets compassion in the
        pursuit of accessible mental health care.
      </p>
      <p className="text-3xl ">
        Warm regards,
        <br />
        Tiffinne <br /> Founder, goCPT
      </p>
    </div>
  );
};

export default Regards;
