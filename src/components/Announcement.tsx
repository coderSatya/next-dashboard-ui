import React from "react";

const Announcement = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Announcement</h1>
        <span className="text-xs text-gray">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">I am the BEST Developer</h2>
            <span className=" bg-white text-gray-400 text-xs px-1 py-1 rounded-md">
              24-07-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            I am the best React Developer in World. I am the best MERN stack
            developer. I am the best.
          </p>
        </div>

        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">I am the BEST Developer</h2>
            <span className=" bg-white text-gray-400 text-xs px-1 py-1 rounded-md">
              25-07-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            I am the best React Developer in World. I am the best MERN stack
            developer. I am the best.
          </p>
        </div>

        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex justify-between items-center">
            <h2 className="font-medium">I am the BEST Developer</h2>
            <span className=" bg-white text-gray-400 text-xs px-1 py-1 rounded-md">
              26-07-2025
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            I am the best React Developer in World. I am the best MERN stack
            developer. I am the best.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcement;
