import React from "react";

const Card = ({ username = "DVF", post = "Not assigned yet", myArr = [] }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        class
        Name="w-full h-48 object-cover"
        src="https://images.pexels.com/photos/25524452/pexels-photo-25524452.jpeg"
        alt="Paisagem"
      />
      <div className="px-6 py-4">
        <div lassName="font-bold text-xl mb-2 text-gray-700 text-base">
          The Coldest Sunset
        </div>
        <p className="text-gray-700 text-base">{username}</p>
        <p className="text-gray-700 text-base">{post}</p>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
        <ul className="list-disc pl-5 text-gray-700">
          {myArr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
