import React from "react";

const Education = () => {
  return (
    <div className="pt-16 personal-details">
      <p className="text-white text-2xl sm:text-3xl font-bold">
        Education Qualification
      </p>
      <div className="pt-10">
        <div className="flex flex-col sm:flex-row sm:gap-24">
          <b className="text-xl sm:w-1/4">2018-2022</b>
          <div className="sm:w-3/4">
            <p className="text-[#037FFF] text-2xl font-medium">
              Bachelor Of Technology
            </p>
            <h2 className="text-white py-1">
              Bipin Tripathi Kumaun Institue of Technology
            </h2>
            <p>
              I done my btech from Electronics and Communication branch. I
              graduated in July 2022.
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-24 mt-10">
          <b className="text-xl sm:w-1/4">2016-2017</b>
          <div className="sm:w-3/4">
            <p className="text-[#037FFF] text-2xl font-medium">Intermediate</p>
            <h2 className="text-white py-1">Jawahar Navodaya Vidyalaya</h2>
            <p>
              I done my 12th from science stream with Physics, Chemistry, Math
              and Computer Science subjects
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:gap-24 mt-10">
          <b className="text-xl sm:w-1/4">2014-2015</b>
          <div className="pb-10 sm:w-3/4">
            <p className="text-[#037FFF] text-2xl font-medium">High School</p>
            <h2 className="text-white py-1">Jawahar Navodaya Vidyalaya</h2>
            <p>I done my 10th in 2015 from JNV Nainital.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
