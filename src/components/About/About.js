import React from "react";

const About = () => {
  return (
    <div>
      <hr className="w-5/6 m-auto opacity-40" />
      <div className="grid grid-rows-1 grid-cols-2 text-gray-100 w-5/6 m-auto py-8 sm:grid-cols-1 sm:gap-8 md:grid-cols-1 md:gap-8 lg:gap-12">
        <p className="bg-blob2 bg-contain bg-center bg-no-repeat flex justify-center items-center text-center text-gray-100 font-bold text-3xl sm:bg-red-500 sm:bg-opacity-20 sm:rounded-2xl sm:p-2 sm:text-sm sm:bg-none md:bg-red-500 md:bg-opacity-20 md:rounded-2xl md:p-2 md:text-xl md:bg-none">
          About Fojan
        </p>

        <p className="flex justify-center items-center text-left">
          Fojan is a premier professional photographer located in Vancouver BC
          Canada and abroad. Her technical skills matched with vibrant energy
          and creative intuition enable him to create stunning visual images.
          Tom Hawkins strives to reveal beauty and vitality though the devices
          of technical dedication, geometric symmetry and creative exuberance.
          <br />
          <br />
          The main goal of her work is produce images that reflect the majesty
          and wonder of the human experience. Though her attention to technical
          detail and inexhaustible energy while shooting, Fojan Babaali delivers
          fresh and modern images that enable her clients to sell products.lk
        </p>
      </div>
    </div>
  );
};

export default About;

