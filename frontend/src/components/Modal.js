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
