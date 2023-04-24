import React from 'react';
import ReactWordcloud from 'react-wordcloud';

import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';

const MyWordCloud = ({ words }) => {

    // Filter out common words that might not present value
  const stopWords = ["a", "an", "and", "the", "to", "of", "that", "this", "it", "in", "for", "on", "with", "at", "from", "by", "about", "as", "but", "not", "be", "were", "are", "is", "am", "or", "if", "into", "can", "such", "no", "had", "has", "have", "has", "do", "does", "done", "been", "was", "would", "should", "could", "will", "shall", "may", "might", "must", "you", "your", "yours", "we", "our", "ours", "us", "he", "him", "his", "she", "her", "hers", "it", "its", "they", "them", "their", "theirs", "i", "me", "my", "mine", "who", "what", "where", "when", "why", "how", "which", "whom", "whose", "while", "so", "www", "https", "blockquote", "href", "jpg", "know", "eng", "im g", "nar", "like", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


  const filteredWords = words.filter((wordObj) => !stopWords.includes(wordObj.text.toLowerCase()) || wordObj.length === 1);

//   console.log(filteredWords)

  const options = {
  colors: ["#1e293b", "#164e63", "#0e7490", "#06b6d4", "#67e8f9", "#1e40af"],
  rotations: 2,
  deterministic: true,
  rotationAngles: [-90, 0],
  fontSizes: [20, 90],
  fontStyle: "normal",
  fontWeight: "normal",
  scale: "sqrt",
};


    
      return (
        <div className='flex place-items-center' style={{ maxHeight: '600px', maxWidth: '800px', height: '100%', width: '100%', overflow: 'auto' }}>
        <ReactWordcloud 
          words={filteredWords}
          options={options}  
          />
          </div>
      )

}

export default MyWordCloud;