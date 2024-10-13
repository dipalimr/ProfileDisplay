import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import profilesData from '../components/Profiles'; // Import profiles data
import SearchProfiles from '../components/SearchProfiles'; // Import SearchProfiles component
import LoadingSpinner from '../components/LoadingSpinner';

const SearchResults = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Hook to navigate programmatically
  
  // Ensure searchQuery is safely accessed
  const { searchQuery = '' } = location.state || {}; // Default searchQuery to empty string if undefined

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!searchQuery) {
      navigate('/'); 
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false); // Stop loading after 500ms
      }, 500); // Adjust the delay as needed
      return () => clearTimeout(timer); // Cleanup timer on component unmount
    }
  }, [searchQuery, navigate]); // Dependencies include searchQuery and navigate

  // Filter profiles based on name and addressText
  const filteredProfiles = searchQuery
    ? profilesData.filter(profile =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.addressText.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  if (isLoading) {
    return <LoadingSpinner />; // Show loading spinner while loading
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      {searchQuery && (
        <p className="mb-4">Showing results for: <strong>{searchQuery}</strong></p>
      )}
      {filteredProfiles.length > 0 ? (
        <SearchProfiles profiles={filteredProfiles} /> // Render filtered profiles
      ) : (
        <p>No profiles found for "{searchQuery}".</p>
      )}
    </div>
  );
};

export default SearchResults;
