import React, { useEffect } from 'react';
import { FiX } from 'react-icons/fi'; // Import the X icon from react-icons
import Map from './Map'; // Import your Map component

const Modal = ({ isOpen, onClose, profile }) => {
  // Ensure background scroll is restored when modal closes
  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto'; // Restore background scroll on unmount
    };
  }, []);

  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      {/* Modal content wrapper */}
      <div className="bg-white rounded-lg p-6 w-[800px] mx-auto relative max-h-[90vh] overflow-y-auto">
        <button 
          className="absolute top-4 right-4 text-gray-600 hover:text-red-600" 
          onClick={onClose}
        >
          <FiX size={24} /> {/* Render the X icon */}
        </button>

        <h2 className="text-xl font-bold mb-4 text-center">Profile Summary</h2>
        <img 
          src={profile.image} 
          alt={profile.name} 
          className="w-48 h-48 object-cover rounded-full mb-4 mx-auto" 
        />
        <h3 className="text-lg font-semibold text-center">{profile.name}</h3>
        <p className="text-center">{profile.description}</p>

        {/* Map Component */}
        <div className="mt-4">
          <Map latitude={profile.address.lat} longitude={profile.address.lng} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
