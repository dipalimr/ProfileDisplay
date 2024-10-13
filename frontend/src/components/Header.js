// // import React, { useState } from 'react'
// // import { BsSearch } from "react-icons/bs";
// // import { Link } from 'react-router-dom';
// // import logo from '../images/logo.jpg';

// // const Header = ({ onSearch }) => {
// //   const [searchQuery, setSearchQuery] = useState(''); 

// //   const handleSearchChange = (e) => {
// //     const query = e.target.value;
// //     setSearchQuery(query);
// //     onSearch(query);  
// //   };
// //   return (
// //     <header className='h-20 shadow-md bg-white'>
// //       <div className='h-full container mx-auto flex items-center px-4 justify-between'>

// //         <div>
// //         <Link to="/" className="flex items-center">
// //           <img src={logo} alt="Profile App Logo" className="h-12 mr-3" /> 
// //           <span className="text-xl font-bold">Profile App</span>
// //         </Link>
// //         </div>

// //         <div className='hidden lg:flex items-center w-full h-10 justify-between max-w-sm border shadow-sm rounded-full focus-within:shadow-md pl-3'>
// //         <input type ='text' 
// //         placeholder='Search Profile' 
// //         className='w-full outline-none '
// //         value={searchQuery}
// //         onChange={handleSearchChange}
// //         />
// //         <div className='text-md min-w-[50px] h-10 bg-blue-500  hover:bg-blue-700 flex items-center justify-center rounded-r-full '>
// //           <BsSearch />
// //          </div>
// //         </div>

// //         <nav className="space-x-4">
// //           <Link to="/" className="hover:underline hover:text-blue-600 font-serif text-xl">Home</Link>
// //           <Link to="/admin" className="hover:underline hover:text-blue-600 font-serif text-xl">Admin Panel</Link>
// //         </nav>

// //        {/* <div className='text-3xl cursor-pointer'>
// //         <FaUserCircle/>

// //        </div> */}
      
        

// //       </div>
// //     </header>
// //   )
// // }

// // export default Header

// import React, { useState } from 'react';
// import { BsSearch } from "react-icons/bs";
// import { Link } from 'react-router-dom';
// import logo from '../images/logo.jpg';
// import SearchProfiles from './SearchProfiles'; // Import SearchProfiles component
// import profilesData from './Profiles'; // Import profiles data

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState(''); // State for search input
//   const [showSuggestions, setShowSuggestions] = useState(false); // State to control visibility of suggestions

//   const handleSearchChange = (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);
//     setShowSuggestions(query.length > 0); // Show suggestions only if there's input
//   };

//   return (
//     <header className='h-20 shadow-md bg-white relative'> {/* Set relative positioning to header */}
//       <div className='h-full container mx-auto flex items-center px-4 justify-between'>

//         <div>
//           <Link to="/" className="flex items-center">
//             <img src={logo} alt="Profile App Logo" className="h-12 mr-3" />
//             <span className="text-xl font-bold">Profile App</span>
//           </Link>
//         </div>

//         <div className='relative flex items-center w-full h-10 justify-between max-w-sm border shadow-sm rounded-full focus-within:shadow-md pl-3'>
//           <input
//             type='text'
//             placeholder='Search Profile'
//             className='w-full outline-none'
//             value={searchQuery}
//             onChange={handleSearchChange} // Update search query on input change
//           />
          
//           <div className='text-md min-w-[50px] h-10 bg-blue-500 hover:bg-blue-700 flex items-center justify-center rounded-r-full'>
//             <BsSearch />
//           </div>
//         </div>

//         {/* Render SearchProfiles component conditionally below the search bar */}
//         {showSuggestions && (
//           <div className="absolute z-10 w-full max-w-sm bg-white shadow-lg rounded-md mt-2"> {/* Set a max width for the suggestion cards */}
//             <div className="max-h-60 overflow-y-auto"> {/* Limit height and add scrolling */}
//               <SearchProfiles profiles={profilesData} searchQuery={searchQuery} />
//             </div>
//           </div>
//         )}

//         <nav className="space-x-4">
//           <Link to="/" className="hover:underline hover:text-blue-600 font-serif text-xl">Home</Link>
//           <Link to="/admin" className="hover:underline hover:text-blue-600 font-serif text-xl">Admin Panel</Link>
//         </nav>
//       </div>
//     </header>
//   );
// }

// export default Header;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal'; // Import the modal component

const ProfileCard = ({ profile }) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleSummaryClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105 cursor-pointer">
      <img 
        src={profile.image} 
        alt={profile.name} 
        className="w-48 h-48 object-cover rounded-full mb-4 mx-auto" 
      />
      <h2 className="text-xl font-semibold text-center">{profile.name}</h2>
      <p className="text-gray-600 text-center">{profile.description}</p>

      <div className="flex justify-center mt-4 py-4">
        {/* Summary Button */}
        <button 
          onClick={handleSummaryClick} 
          className="bg-blue-500 text-white px-4 py-2 mx-2 hover:bg-blue-800 rounded-lg"
        >
          Summary
        </button>
        
        {/* View Details Button */}
        <Link 
          to={`/profile/${profile.id}`} 
          className="bg-green-500 text-white px-4 py-2 mx-2 hover:bg-green-800 rounded-lg"
        >
          View Details
        </Link>
      </div>

      {/* Modal for Summary */}
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} profile={profile} />
    </div>
  );
};

export default ProfileCard;
