import React, { useEffect, useRef, useState } from 'react';
import './ConstructionLeadersAnimation.css';

const ConstructionLeaders = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger animation
            observer.unobserve(entry.target); // Stop observing after triggering
          }
        });
      },
      { threshold: 0.4 } // 25% visibility
    );

    if (animationRef.current) {
      observer.observe(animationRef.current);
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div
      ref={animationRef}
      id="animation-container"
      className="text-gray-800 font-sans p-6 sm:p-20 relative"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Text Section */}
        <div
          className={`words text-section ${isVisible ? 'visible' : ''}`}
        >
          <h1 className="text-4xl font-bold">
            WE ARE <span className="text-primary">THE LEADER</span> IN
            <br /> CONSTRUCTION INDUSTRY
          </h1>

          <p className="text-lg text-gray-600 mt-4">
            TEMPOR ERAT ELITR AT REBUM AT AT CLITA. DIAM DOLOR DIAM IPSUM TEMPOR
            SIT DIAM AMET DIAM ET EOS LABORE
          </p>

          <p className="text-gray-600 mt-6">
            Tempor erat elitr at rebum at a elitr dolore rebum. Diam dolor diam
            ipsum et, tempor elitr sed diam justo elitr.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Perfect Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Professional Workers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> First Working Process
                </li>
              </ul>
            </div>
            <div>
              <ul className="list-none">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Perfect Planning
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> Professional Workers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span> First Working Process
                </li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-6">
            Tempor erat elitr at rebum at a elitr dolore rebum. Diam dolor diam
            ipsum et, tempor elitr sed diam justo elitr.
          </p>

          <div className="mt-8">
            <p className="text-gray-800 font-bold">Signature</p>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`blocks image-section ${isVisible ? 'visible' : ''}`}
        >
          <img
            src="/assets/images/woman.webp"
            alt="Construction Worker"
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default ConstructionLeaders;
