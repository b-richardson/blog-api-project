
# Home Haven Housing Blog

This project allows users to search for blog posts via a RESTful API and generates a word cloud based on the contents of the articles. The word cloud is created using D3.js library!


## Authors

- [@b-richardson](https://github.com/b-richardson)


## Run Locally

Clone the project

```bash
  git clone https://github.com/b-richardson/blog-api-project
```

Once, in the project directory

```bash
  cd client
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## Features

- Word Cloud generator based on d3.js
- Blog post cards containing the banner image of the post and a snippet of the content.
- Search bar to query results



## Lessons Learned

```What did you learn while building this project?``` 

One of the things I learned while building this project was how to use Mozilla Readability, which is a cool library that can help me skim articles from a DOM document object. This is super helpful because it uses machine learning to extract the main content from a web page and makes it easier for me to read and analyze. I realized that this library has other potential use cases too, such as extracting data from PDFs or eBooks. It's great to know that machine learning can be applied in so many different ways!

Another lesson I learned was the importance of taking the time to fully understand the data or content I'm working with before diving into a plan. When I started working with the API, I found out that the data it provided was different from what I expected. This taught me how valuable it is to have a good grasp of the data before developing a plan of action.

Moreover, I learned that it's better to start with a small, scalable function and build upon it than to jump into a larger, complex solution. By focusing on the minimum viable product (MVP), I was able to create a result quickly and efficiently, and then improve it over time. This approach saved me a lot of time and helped me achieve a better result in the end. All in all, this project was a great learning experience!





```What challenges did you face and how did you overcome them?```

The biggest challenge I faced with this project was the API documentation and the API itself. The documentation was outdated and I struggled with accessing it initially, which caused me to consider alternative options like using a different API. However, this turned out to be a mistake as the placeholder API I chose did not work in the same way as the original one, and did not return similar data or results.

My work around ended up just running an initial call with "/content/search?query=blog"

That returned "mostly"(about 85%) blogs. Then receiving that data object back and filtering the "search_results" by "content_type" to get everything back as a blog post. Not ideal performance wise but it's what I ran with at the time. Honestly the real difficulty was figuring out a performant way to filter those return results for dates and date ranges. And then the amount of blog posts(i.e. limit=) presented a challenge because after filtering I was already working with fewer results than what was queried. I thought I could limit how many blog posts the user has to choose from, but there's another edge case of the single time the user asks for 20 posts to be queried and the data returned after filtering is 19. Even if I were to increase the limit count past what the user requested to compensate for the initial loss in filtering.

Despite this setback, I had a lot of fun coming up with a solution and ultimately this result! I initially planned to create a full-stack application, but had to change my approach but my plan-b used Readability to parse news article content from the actual URL DOM, which was a really cool technique that I learned and can use in future projects.

## Feedback

I'm always trying to improve! If you have any feedback, please feel free to reach out to me at brich804@gmail.com


## Optimizations

```What optimizations did you make in your code? E.g. refactors, performance improvements, accessibility```

There are definitely optimizations to be made! 

Inline-styling

- Due to time constraints there is some inline styling. Removing the inline styling would easily make the code more readable and maintainable.

Accessibility

- Simple things like adding labels to form elements

Performance

- The majority of the query logic should be being held by the API, but in this instance I had to do a lot in app so it does run slow. Esspecially based on all the results and size of the content that is returned!



## Roadmap


Add more integrations

- Hoping to make the API call parameters modular in the future

Generally this whole thing was thrown together quick but I wanted to make something that would be useful to a user, and give more context to the word cloud.

And that was just a lot of fun figuring out what that might mean for a user and ultimately for me. "What other information would I want to have?" "What other interactions would I want to use?" And I definitely wanted to have a little fun, challenge myself, and try and make something closer to a "product"!



