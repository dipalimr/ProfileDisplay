

import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import logo from '../images/logo.jpg';
import profilesData from '../components/Profiles'; // Import profiles data

const Header = () => {
  const [searchQuery, setSearchQuery] = useState(''); // State for search input
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query); // Update search query on input change

    // Automatically navigate and update results dynamically on every change
    navigate('/search-results', { state: { searchQuery: query } });
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    // Navigate to search-results with the current search query
    navigate('/search-results', { state: { searchQuery } });
  };

  return (
    <header className='h-20 shadow-md bg-white relative'>
      <div className='h-full container mx-auto flex items-center px-4 justify-between'>
        <div>
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Profile App Logo" className="h-12 mr-3" />
            <span className="text-xl font-bold">Profile App</span>
          </Link>
        </div>

        <form onSubmit={handleSearchSubmit} className='relative flex items-center w-full h-10 justify-between max-w-sm border shadow-sm rounded-full focus-within:shadow-md pl-3'>
          <input
            type='text'
            placeholder='Search Profile'
            className='w-full outline-none'
            value={searchQuery}
            onChange={handleSearchChange} // Trigger search on input change
          />
          <button type="submit" className='text-md min-w-[50px] h-10 bg-blue-500 hover:bg-blue-700 flex items-center justify-center rounded-r-full'>
            <BsSearch />
          </button>
        </form>

        <nav className="space-x-4">
          <Link to="/" className="hover:underline hover:text-blue-600 font-serif text-xl">Home</Link>
          <Link to="/admin" className="hover:underline hover:text-blue-600 font-serif text-xl">Admin Panel</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
