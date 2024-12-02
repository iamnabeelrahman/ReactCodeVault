import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              className="rounded-lg shadow-lg max-w-xs md:max-w-sm lg:max-w-md mx-auto"
              src="https://static.vecteezy.com/vite/assets/photo-masthead-375-BoK_p8LG.webp"
              alt="React development"
            />
          </div>
          <div className="md:w-7/12 lg:w-7/12">
            <h2 className="text-3xl font-bold text-orange-700 md:text-4xl">
              React Development by Passionate Developers
            </h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum omnis
              voluptatem accusantium nemo perspiciatis delectus atque autem!
              Voluptatum tenetur beatae unde aperiam, repellat expedita
              consequatur! Officiis id consequatur atque doloremque!
            </p>
            <p className="mt-4 text-gray-600">
              Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
              expedita at? Asperiores nemo possimus nesciunt dicta veniam
              aspernatur quam mollitia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
