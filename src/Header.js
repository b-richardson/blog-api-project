import React from "react"

const Header = () => {

  return (
    <nav class="flex items-center justify-between flex-wrap bg-slate-800 p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg class="h-8 w-8 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm2 16h-4v-6H8v6H6V8h2v4h4V8h2v10z"/></svg>
        <span class="font-semibold text-3xl tracking-tight ml-2">Home Haven</span>
        <span class="font-regular text-m tracking-tight ml-2">The Homeowners Best Resource</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Listings
          </a>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Sell
          </a>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Agents
          </a>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Home
          </a>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Our Story
          </a>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="block mt-4 lg:inline-block lg:mt-0 text-slate-200 hover:text-white mr-4">
            Our Team
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/richardson-brian/" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-slate-800 hover:bg-white mt-4 lg:mt-0">Contact Us</a>
        </div>
      </div>
    </nav>
  )
}

export default Header;
