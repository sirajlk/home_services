import React from 'react';

const WhyChooseUs = () => {
  return (
    <div className=" max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
          Why Choose Us
        </h2>
        <p className="text-gray-600 mt-2">We deliver excellence in every project.</p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 items-center">
          {/* Left Features */}
          <div className="space-y-8">
            <FeatureItem
              icon="🏆"
              title="Best In Industry"
              description="Providing the best services in the industry with unmatched quality."
            />
            <FeatureItem
              icon="🏅"
              title="Award Winning"
              description="Recognized for delivering exceptional work and winning awards."
            />
            <FeatureItem
              icon="😊"
              title="Happy Clients"
              description="Thousands of satisfied clients across various projects."
            />
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <img
              src="/assets/images/construction-worker.png"
              alt="Professional Worker"
              className=" h-auto object-cover rounded-lg "
            />
          </div>

          {/* Right Features */}
          <div className="space-y-8">
            <FeatureItem
              icon="👷‍♂️"
              title="Professional Staff"
              description="Highly trained and skilled professionals at your service."
            />
            <FeatureItem
              icon="✅"
              title="Quality Assurance"
              description="Ensuring top-quality standards on all projects we undertake."
            />
            <FeatureItem
              icon="📞"
              title="24/7 Support"
              description="Providing round-the-clock support for our clients."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ icon, title, description }) => {
    return (
      <div className="flex items-center gap-4">
        {/* Icon with Stylish Yellow Box */}
        <div className="relative flex justify-center items-center w-10 h-10">
          {/* Rotated Yellow Background */}
          <div className="absolute inset-0 bg-yellow-500 transform rounded-br-lg rounded-tl-lg"></div>
          {/* Icon */}
          <div className="relative text-white text-xl flex justify-center items-center w-12 h-12">
            {icon}
          </div>
        </div>
        {/* Text */}
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    );
  };
  

export default WhyChooseUs;
