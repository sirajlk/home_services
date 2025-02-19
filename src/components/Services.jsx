import React from 'react';

import Image1 from "/assets/images/construction/person1.jpg";
import Image2 from "/assets/images/construction/person2.jpg";
import Image3 from "/assets/images/construction/item3.jpg";

const OurServices = () => {
  
  return (
    <div id="service" className="w-full min-h-screen p-2 flex items-center bg-gradient-to-b from-white to-gray-400">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <h2 className="text-4xl font-bold text-gray-800 mb-6">Our  <span className="text-primary">Services</span></h2>
    <p className="text-lg text-gray-700 mb-8">
        We offer many services for our clients, Here are some of our services:
      </p>


        <div className="container  mx-auto px-4">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-wrap -mx-4">
          
            <div className="  px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Image1} alt="Service 1" />
                <div className="p-4">
                <h2 className="text-lg font-bold text-gray-800 mb-2">Property Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We help you find the perfect home that fits your needs and budget. Our team of experts will guide you through the entire home buying process from start to finish in an easy without any problem.</p>
                  <button className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          
            <div className="  px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Image2} alt="Service 2" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Property Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We help you sell your home quickly and for the best price. Our team of experts will provide you with a customized marketing strategy to attract potential buyers and maximize your home's value.</p>
                  <button className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
                  Learn More
                </button>
                </div>
              </div>
            </div>

           
            <div className="  px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={Image3} alt="Service 3" />
                <div className="p-4">
                  <h2 className="text-lg font-bold text-gray-800 mb-2">Property Management</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">We provide comprehensive property management services to help you manage your rental properties. Our team of experts will handle everything from tenant screening to maintenance and repairs.</p>
                  <button className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary">
                  Learn More
                </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  );
}

export default OurServices;
