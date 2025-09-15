import React from "react";

const ImageOverlap = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 flex flex-col items-center justify-start overflow-hidden mt-[-56px]">
      {/* Top Background Section */}
      <div className="w-full h-[180px] sm:h-[220px] md:h-[260px] lg:h-[320px] bg-gray-900 flex items-center justify-center rounded-b-3xl" />

      {/* Center Image */}
      <div className="absolute top-[100px] sm:top-[120px] md:top-[140px] lg:top-[160px] left-1/2 transform -translate-x-1/2 z-20">
        <img
          src="/Website.svg"
          alt="Website Illustration"
          className="w-[320px] sm:w-[480px] md:w-[600px] lg:w-[720px] xl:w-[900px] max-w-full h-auto"
        />
      </div>

      {/* Bottom Background Section */}
      <div className="w-full flex-1 bg-gray-100" />
    </div>
  );
};

export default ImageOverlap;
