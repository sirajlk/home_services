import React, { useEffect, useRef } from "react";
import {  itemImages } from "../../utils/constants";
import Article from "./Article";
import "./AnimateWhenAppear.css";

const Blog = () => {
  const blocksRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible"); // Add 'visible' class when in view
            observer.unobserve(entry.target); // Stop observing the block once it’s visible
          }
        });
      },
      {
        threshold: 0.2, // Trigger animation when 20% of the block is visible
      }
    );

    // Observe each block
    blocksRef.current.forEach((block) => {
      if (block) observer.observe(block);
    });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-full text-left mb-[5rem]">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          Our <span className="text-primary">Team</span>
        </h2>
        <p className="text-lg text-gray-700 mb-8">
          We offer many services for our clients, Here are some of our services:
        </p>
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[0,1,2, 3, 4].map((index, i) => (
            <div
              key={i}
              className="blocks"
              ref={(el) => (blocksRef.current[i + 1] = el)}
            >
              <Article
                imgUrl={itemImages[index]}
                date="Sep 26, 2021"
                text="GPT-3 and Open  AI is the future. Let us explore how it is?"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
