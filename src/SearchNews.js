import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { BASE_URL, HEADERS } from './api/kcmapi.config.js';
import NewsCards from './NewsCards';
import MyWordCloud from './WordCloud.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SearchNews = () => {
  // Set up hooks
  const [query, setQuery] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [topResults, setTopResults] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const categories = [
    { value: '', text: '--Choose an option--' },
    { value: 'For Sellers', text: 'For Sellers' },
    { value: 'Selling Myths', text: 'Selling Myths' },
    { value: 'Move-Up Buyers', text: 'Move-Up Buyers' },
  ];
  const [selectedCategory, setSelectedCategory] = useState(categories[0].value);
  const headers = HEADERS;

  // Handle input change in search field
  const handleInputChange = (e) => {
    if (!isSubmitted) {
      setQuery(e.target.value);
    }
  };

  const handleCategoryChange = (event) => {
    // console.log(event.target.value);
    setSelectedCategory(event.target.value);
  };

  // Run when the Submit button is clicked. This makes the call to the API
  const handleSearch = async () => {
    const response = await axios.get(`${BASE_URL}/content/search`, {
      params: {
        query: query,
        content_type: 'blog',
        limit: 50,
      },
      headers,
    });

    // console.log(response.data);

    // FILTERING FUNCTION FOR PREVIOUS QUERY
    // We want to try and keep as much data that comes back as content_type blog only
    const filteredContent = response.data.search_results.filter((item) => item.content_type === 'blog');
    // console.log(filteredContent.length);

    // SETTING SEARCH RESULTS
    // Again, calling this content only post filter as our true search results
    setSearchResults(filteredContent);

    // SETTING TOP RESULTS
    // These are the top to results returned, that will be used to populate our article cards
    setTopResults(filteredContent.slice(0, 10));
  };

  // Console logging top results to make sure they ran
//   console.log(topResults);

  // Handle SUBMIT: this actually activates all our functions
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    handleSearch();
    setQuery('');
  };

  // WORD FREQ MAP
  const wordFreq = searchResults.reduce((map, obj) => {
    const words = obj.contents.split(/\W+/);

    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      if (word in map) {
        map[word]++;
      } else {
        map[word] = 1;
      }
    }

    return map;
  }, {});

//   console.log(wordFreq);

    // CONVERTING THE OBJECT INTO AN ARRAY OF KEY AND VALUE PAIRS
    const frequencyArr = Object.entries(wordFreq)
    .filter(([text, value]) => value > 1 && text.length > 2 && /^[a-zA-Z]+$/.test(text))
    .map(([text, value]) => ({ text, value }));

        // console.log(frequencyArr);

    // RETURNING RENDER
    return (
        <div className="w-full max-w-full">
        {/* SEARCH FORM */}
            <form id='search-content' className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleFormSubmit}>
            <div className="mb-4">
            {/* SEARCH LABEL */}
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="search">
            </label>
            {/* SEARCH BAR AND SUBMIT BUTTON */}
                <div className="flex">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="search-bar" type="text" 
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search"
                    />
                 <button className="bg-slate-800 hover:bg-slate-200 hover:text-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m1-2" type="submit" style={{ marginLeft: '10px', marginBottom: 'auto' }}>
              Submit
            </button>
          </div>
        </div>
        <div className="mb-6"></div>
        {/* SEARCH FILTERS */}
        <div className="flex flex-row items-center justify-between">
          {/* CATEGORY SELECT */}
          <div className="inline-block relative w-64">
            <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" value={selectedCategory} onChange={handleCategoryChange}> 
              {categories.map(category => (
                <option key={category.value} value={category.value}>
                  {category.text}
                </option>
              ))}
            </select>
            {/* CATEGORY SELECT ICON */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
            </div>
          </div>
          {/* START DATE */}
          <div className="flex flex-row items-center">
            <label htmlFor="start-date" className="mr-4">Start Date:</label>
                <div className="w-full">
                    <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        className="shadow appearance-none border rounded w-sm py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="start-date"
                    />
                </div>
          </div>
          {/* END DATE */}
          <div className="flex flex-row items-center">
            <label htmlFor="end-date" className="mr-4">End Date:</label>
                <div>
                    <DatePicker
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="end-date"
                    />
                </div>
          </div>
          {/* FILTER BUTTON */}
            <button 
            className="bg-slate-800 hover:bg-slate-200 hover:text-slate-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
            type="filter"
            >
                Filter
            </button>
        </div>
    </form>

    <div className="max-w-full p-4 mb-8 mx-auto ">
        <h2 className="text-5xl font-bold mb-6" style={{ fontFamily: 'Roboto, sans-serif' }}>Word Cloud Generator</h2>
            <p className="text-sm text-gray-600 mb-4">
                 See the most prominent or frequent words from your search results!
            </p>

            {/* If there are search results, show the word cloud */}
        {searchResults.length > 0 ? (
        <div className='flex justify-center'>
            {/* Render the MyWordCloud component with frequencyArr as its prop */}
            <MyWordCloud words={frequencyArr} />
        </div>
            ) : (
        // If there are no search results, show an explanation of a word cloud
        <div className='flex justify-center'>
            <p className="mx-w-400 text-md text-gray-600 mb-4">
                A word cloud is a collection, or cluster, of words depicted in different sizes.
                The bigger and bolder the word appears, the more often it is mentioned within a given text
                and the more important it is.

                Also known as tag clouds or text clouds, these are ideal ways to pull out the most
                pertinent parts of textual data, from blog posts to databases. They can also help
                business users compare and contrast two different pieces of text to find the wording
                similarities between the two.

                Perhaps you are already leveraging advanced data visualization techniques to turn
                your important analytics into charts, graphs, and infographics. This is an excellent
                first step, as our brains prefer visual information over any other format.
            </p>
        </div>
         )}
    </div>

        {/* Horizontal divider */}
    <div className="border-t-2 border-slate-800 my-8 mx-auto w-1/4"></div>

    <h2 className="text-3xl font-bold mb-4">Recommended Posts From Your Search</h2>

    {/* If there are search results, render the topResults as a list of NewsCards */}
    <div className="card-container">
    {searchResults.length > 0 ? (
        topResults.map((result, index) => (
        <NewsCards key={index} result={result} />
        ))
        ) : (
        // Otherwise, show nothing
        <p></p>
        )}
        </div>

        {/* Horizontal divider */}
        <div className="border-t-2 border-slate-800 my-8 mx-auto w-1/4"></div>
    </div>
    );
}

export default SearchNews;