import React from 'react';

const ExperienceSection = () => {
  return (
    <div className="py-16 px-6 md:px-1 lg:px-6 sm:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 lg:gap-8 items-center">
        {/* Left Section (Image + Play Icon) */}
        <div className="relative flex justify-center items-center">
          {/* Background Shapes */}
          <div className="absolute w-72 h-72 bg-yellow-500 rounded-lg transform rotate-6"></div>
          <div className="absolute w-72 h-72 bg-orange-300 rounded-lg transform -rotate-6"></div>

          {/* Image */}
          <img
            src="/assets/images/constructer.jpg"
            alt="Construction Workers"
            className="relative w-72 h-72 object-cover rounded-lg shadow-lg"
          />

       
        </div>

        {/* Right Section (Text Content) */}
        <div>
          <p className="text-sm text-primary uppercase">Welcome to Builder</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-2">
            25 Years Experience
          </h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem.
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            nec pretium mi. Curabitur facilisis ornare velit non vulputate.
            Aliquam metus tortor, auctor id gravida condimentum, viverra quis
            sem.
          </p>
          <button className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-secondary transition duration-200">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
