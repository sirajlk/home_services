import React, { useEffect, useState } from 'react';
import { carImages } from '../../utils/constants';

const Stats = () => {
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState({
    countries: 0,
    years: 0,
    projects: 0,
    teamMembers: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const { countries, years, projects, teamMembers } = prevCounts;
          const newCounts = {
            countries: Math.min(countries + 1, 60),
            years: Math.min(years + 1, 30),
            projects: Math.min(projects + 2, 100),
            teamMembers: Math.min(teamMembers + 3, 150),
          };
          if (
            newCounts.countries === 60 &&
            newCounts.years === 30 &&
            newCounts.projects === 100 &&
            newCounts.teamMembers === 150
          ) {
            clearInterval(interval);
          }
          return newCounts;
        });
      }, 30);
    }
  }, [visible]);

  return (
    <div id="stats-section" className="relative bg-gray-900 text-white py-7">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${carImages[7]})` }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        {/* Stats Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8 text-center">
          {/* Single Stat */}
          <div>
            <p className="text-5xl font-bold text-primary">{counts.countries}</p>
            <p className="mt-2 text-lg">Countries</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">{counts.years}</p>
            <p className="mt-2 text-lg">Years</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">{counts.projects}</p>
            <p className="mt-2 text-lg">Projects</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-primary">{counts.teamMembers}</p>
            <p className="mt-2 text-lg">Team Members</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;