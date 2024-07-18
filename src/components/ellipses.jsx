import React from "react";

const Ellipses = () => {
  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 bg-[#0b0e15]">
      {/* ellipses */}
      <div className="ellipse large-ellipse1 top-44 left-0 "></div>
      <div className="ellipse large-ellipse2 bottom-1 right-1"></div>
      <div className="ellipse mid-ellipse1 top-52 right-48 "></div>
      <div className="ellipse mid-ellipse2 top-96 right-96"></div>
      <div className="ellipse small-ellipse top-2/3 left-16"></div>
      <div className="ellipse small-ellipse top-80 left-1/3"></div>
    </div>
  );
};

export default Ellipses;
