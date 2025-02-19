import React from "react";
import "./brand.css"; // Import the CSS file for custom animations

export const brands = [
  { name: "google", url: "/assets/images/brand/google.png" },
  { name: "slack", url: "/assets/images/brand/slack.png" },
  { name: "atlassian", url: "/assets/images/brand/atlassian.png" },
  { name: "dropbox", url: "/assets/images/brand/dropbox.png" },
  { name: "shopify", url: "/assets/images/brand/shopify.png" },
];

const BrandScroller = () => {
  return (
    <div className="overflow-hidden w-full bg-gray-200 py-4">
      <div className="flex scroll-animation gap-6 px-4">
        {brands.concat(brands).map((brand, index) => (
          <div
            className="flex-none w-1/6 flex justify-center items-center"
            key={index}
          >
            <img
              src={brand.url}
              alt={brand.name}
              className="max-w-[80px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandScroller;