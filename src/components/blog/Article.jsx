import React from 'react';

const Article = ({ imgUrl, date, text }) => (
  <div className="flex flex-col  bg-white rounded-lg overflow-hidden shadow-md">
    <div className="w-full h-48 ">
      <img src={imgUrl} alt="blog_image" className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col justify-between p-4">
      <div>
        <p className="text-sm text-gray-400 mb-2">{date}</p>
        <h3 className="text-lg font-bold text-white mb-4 hover:underline cursor-pointer">{text}</h3>
      </div>
      <p className="text-sm font-medium text-primary hover:text-blue-400 cursor-pointer">Read Full Article</p>
    </div>
  </div>
);

export default Article;