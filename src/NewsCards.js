import React from 'react';

const NewsCards= ({ result }) => {
    const imageUrl = "string"
   

    return(
        <div className="max-w-sm rounded overflow-hidden shadow-lg mb-8">
        {imageUrl && <img className="w-full" src={result.featured_image} alt={result.title} />}   
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{result.title}</div>
        <p className="text-gray-700 text-base">
            {result.kcm_ig_caption.split('. ').slice(0, 3).join('. ')}
        </p>
        </div>
        <div id='tags' className="px-6 pt-4 pb-2">
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