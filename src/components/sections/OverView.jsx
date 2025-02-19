import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const OverView = () => {
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef([]);
  const navigate = useNavigate()
  useEffect(() => {
    const handleScroll = () => {
      sectionRefs.current.forEach((ref, index) => {
        if (ref && !visibleSections[index]) {
          const rect = ref.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setVisibleSections((prev) => ({ ...prev, [index]: true }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [visibleSections]);

  return (
    <div className="bg-secondary_background  text-white flex flex-col md:flex-row items-center justify-center lg:justify-between px-8 pb-96 md:pb-[30rem] lg:pb-32 py-32 relative">
      {/* Images Section */}
      <div
        ref={(el) => (sectionRefs.current[0] = el)}
        className={`relative w-full md:w-auto  items-center justify-center blocks ${visibleSections[0] ? 'visible' : ''}`}
      >
        <div
          className="absolute inset-y-[38rem] w-40 h-[16rem] md:inset-y-52 md:inset-x-[22rem] md:w-64 md:h-[22rem] lg:-inset-y-56 lg:inset-x-96 lg:w-64 lg:h-[22rem] bg-cover bg-center rounded"
          style={{ backgroundImage: 'url(/assets/images/construction-worker-2.jpg)' }}
        ></div>
        <div
          className="absolute inset-x-48 inset-y-[34rem] w-40 h-[16rem] md:inset-y-72 md:inset-x-9 md:w-64 md:h-[22rem]   lg:-inset-y-24 lg:inset-x-28 lg:w-64 lg:h-[22rem] bg-cover bg-center rounded"
          style={{ backgroundImage: 'url(/assets/images/construction-worker-3.jpg)' }}
        ></div>
      </div>

      {/* Text Section */}
      <div
        ref={(el) => (sectionRefs.current[1] = el)}
        className={`mt-6 md:mt-0 lg:ml-12 mr-11 space-y-9 text-left blocks ${visibleSections[1] ? 'visible' : ''}`}
      >
        <h1 className="text-5xl lg:text-6xl font-bold">Empowering <br /> Success Together</h1>
        <p className="text-gray-200 mt-4 max-w-[36rem]">
          We are passionate about creating residential spaces that inspire, reflect your style, and stand the test of time. Let us be the partner on your journey to building a home.
        </p>

        {/* Stats Section */}
        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className={`flex justify-center md:justify-start gap-12 mt-6 blocks ${visibleSections[2] ? 'visible' : ''}`}
        >
          <div>
            <p className="text-4xl font-bold text-orange-500">33+</p>
            <p className="text-gray-200">Years of Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">117+</p>
            <p className="text-gray-200">Successful Projects</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-orange-500">48+</p>
            <p className="text-gray-200">Happy Clients</p>
          </div>
        </div>

        {/* Button Section */}
        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className={`mt-6 blocks ${visibleSections[3] ? 'visible' : ''}`}
        >
          <button onClick={() =>navigate('/about')} className="bg-orange-500 text-white px-6 py-2 rounded font-bold hover:bg-orange-600">
            About Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverView;