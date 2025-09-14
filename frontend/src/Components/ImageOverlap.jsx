import React from "react";

const ImageOverlap = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-start overflow-hidden">

      {/* Top Background Section */}
      <div className="w-full h-[200px] bg-gray-900 md:h-[250px] flex items-center justify-center rounded-b-4xl">
      </div>

      <div className="absolute top-[20px] md:top-[60px] left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="https://petpoojaweb.gumlet.io/images/home-new/poss-slider1.png?w=1000&dpr=1.5"
          alt="Product Showcase"
          className="w-[300px] md:w-[700px] h-auto"
        />
      </div>

      {/* Bottom Background Section */}
      <div className="w-full h-[-100px] bg-gray-100 md:h-[250px]"></div>

    </div>
  );
};

export default ImageOverlap;
