import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl mt-10">
      <aside
        className="relative overflow-hidden text-gray-800 rounded-lg sm:mx-16 mx-2 sm:py-12 py-6"
        style={{
          background: "linear-gradient(135deg, #f3e8ff, #ffe6e6, #e6f7ff)",
        }}
      >
        <div className="relative z-10 max-w-screen-xl px-4 sm:py-20 py-10 mx-auto sm:px-6 lg:px-8 flex flex-col-reverse sm:flex-row items-center sm:items-end sm:justify-between">
          {/* Text Content */}
          <div className="sm:ml-auto text-center sm:text-right space-y-6 sm:space-y-8">
            <h2 className="text-4xl font-bold sm:text-5xl text-purple-700">
              Download Now
              <span className="block sm:hidden text-blue-600 text-4xl mt-2">
                Lorem Ipsum
              </span>
            </h2>

            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-600 hover:bg-orange-700 rounded-lg transition-all duration-300"
              to="/"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Download now
            </Link>
          </div>

          {/* Image */}
          <div className="sm:absolute sm:top-0 sm:left-0 w-full sm:w-auto sm:relative">
            <img
              className="w-72 mx-auto sm:w-96"
              src="https://i.ibb.co/5BCcDYB/Remote2.png"
              alt="image1"
            />
          </div>
        </div>
      </aside>

      {/* Second Image */}
      <div className="grid place-items-center sm:mt-16 mt-10">
        <img
          className="sm:w-80 w-40"
          src="https://i.ibb.co/2M7rtLk/Remote1.png"
          alt="image2"
        />
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl sm:text-4xl py-10 font-medium text-blue-600">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}
