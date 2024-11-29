import React from "react";

function Card({name, profession, companyName}) {
  return (
<div className="border p-4 m-4 rounded-lg shadow-lg bg-gray-100">
      <h1 className="text-xl font-bold text-blue-600">My name is {name},</h1>
      <h2 className="text-lg text-gray-700">
        I am a {profession}, doing job at {companyName}.
      </h2>
    </div>
  );
}

export default Card;
