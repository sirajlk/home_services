import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero2 = () => {
  const navigate = useNavigate()
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
      className={`absolute inset-0 bg-cover bg-center brightness-50`}
      style={{
        backgroundImage: "url('/assets/images/hero_background.jpg')",
      }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full max-w-7xl mx-auto px-6 sm:px-12 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          Transforming the <br /> Built World
        </h1>
        <p className="text-lg mt-4 max-w-lg">
          McKinstry is the partner you need to innovate the waste and climate
          harm out of the built environment.
        </p>

        <button onClick={() => navigate('/contact')} className="relative mt-6 px-6 py-3 text-white bg-primary font-semibold rounded overflow-hidden group">
          <span className="relative z-10 group-hover:text-primary transition-colors duration-500">
            Contact Us →
          </span>
          <div
            className="
              absolute 
              top-0 
              left-0 
              w-full 
              h-full 
              bg-white
              transform 
              scale-x-0 
              origin-left 
              transition-transform 
              duration-500 
              ease-out 
              group-hover:scale-x-100 
              group-hover:origin-right
            "
          ></div>
        </button>
      </div>

      {/* Circular Bright Image */}
      <div
        className="absolute hidden lg:block top-1/2 right-0 transform translate-y-[-50%] translate-x-[-18%] w-[28rem] h-[28rem] bg-white rounded-full overflow-hidden border-4 border-white shadow-lg"
      >
        <img
          src="/assets/images/hero_background.jpg"
          alt="Bright Circular Image"
          className="w-full h-full object-cover brightness-100"
        />
      </div>
      <div
        className="absolute hidden lg:block  top-1/2 right-0 transform translate-y-[-50%] translate-x-[-30%] w-96 h-96 bg-white rounded-full overflow-hidden border-4 border-white shadow-lg"
      >
        <img
          src="/assets/images/hero_background.jpg"
          alt="Bright Circular Image"
          className="w-full h-full object-cover brightness-100"
        />
      </div>
    </div>
  );
};

export default Hero2;