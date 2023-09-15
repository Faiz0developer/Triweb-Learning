import React from "react";

const AnalyzeProject = () => {
  return (
    <div className="row mt-5 pb-5">
      <h4 className="heading text-center">Analyze</h4>
      <h4 className="subHeading text-center">Your Projects</h4>
      <p className="p1 text-center">
        Use our smart interface to interact with your projects for
        <br />
        analytics and more interesting features.
      </p>
      <div className="center mt-2">
        <img
          src="https://triwebapi.com/static/media/analyze.3ac98c6bb8f40b736d02bef6edff51f5.svg"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-md-8 mx-auto mt-5">
        <p className="p">
          Create incredible, innovative & imaginative applications with ease
        </p>
      </div>
      <p className="content text-center col-md-7 mx-auto mt-2">
        Whether you're a seasoned developer or just starting out, our product
        makes it easy for you to build amazing and imaginative applications.
        Choose from a wide range of networks and industries to find the perfect
        fit for your project. So why wait? Start now!
      </p>
      <div className="center mt-3">
        <button className="btn-1 demo-btn fw-semibold">Book a Demo</button>
      </div>
    </div>
  );
};

export default AnalyzeProject;
