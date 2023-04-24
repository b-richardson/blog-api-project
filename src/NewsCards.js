import React from 'react';

const NewsCards = ({ result }) => {
  // Define a constant variable to hold a placeholder image URL
  const imageUrl = "string"

  // Return a div with the news card UI, which displays the title, a short description,
  // an image if available, and a list of tags related to the news article
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
      {/* Render an image element if an image URL is provided */}
      {imageUrl && <img className="w-full" src={result.featured_image} alt={result.title} />}   
      <div className="px-6 py-4">
        {/* Display the news article title */}
        <div className="font-bold text-xl mb-2">{result.title}</div>
        {/* Display a short description of the news article */}
        <p className="text-gray-700 text-base">
          {/* Only display the first 3 sentences of the Instagram caption */}
          {result.kcm_ig_caption.split('. ').slice(0, 3).join('. ')}
        </p>
      </div>
      <div id='tags' className="px-6 pt-4 pb-2">
        {/* Iterate through the list of tags and render a tag element for each one */}
        {result.tags.map((tag, index) => (
          <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  )
};

export default NewsCards;
