import React from "react";

const HeaderBody = () => {
  return (
    <div className="col-10 mx-auto my-5 py-4 z-3">
      <div className="center">
        <div className="row">
          <h1 className="text-center">Web3 Development</h1>
          <h2 className="text-center">Automation Tool</h2>
          <p className="text-center">
            Our platform helps you create any web3 product within
            <br />
            minutes through our plug and play features
          </p>
          <div className="text-center btn">
            <button className="btn-1">Join Wait List</button>
            <div className="btn-cont">
              <button className="btn-2 ">Schedule Meet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderBody;
