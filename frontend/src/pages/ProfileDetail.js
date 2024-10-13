// src/pages/ProfileDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import profilesData from '../components/Profiles'; // Import the profiles data
import Map from '../components/Map'; // Import the Map component

const ProfileDetail = () => {
  const { id } = useParams(); // Get the profile ID from the URL
  const profileId = parseInt(id);
  const profile = profilesData.find(p => p.id === profileId); // Find the profile by ID

  // If profile not found, handle the case
  if (!profile) {
    return <h2 className="text-center text-xl">Profile not found!</h2>;
  }

  return (
    <div className='bg-blue-100 min-h-screen flex items-center justify-center'>
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg p-6 w-[1100px] mx-auto">
          <img 
            src={profile.image} 
            alt={profile.name} 
            className="w-48 h-48 object-cover rounded-full mb-4 mx-auto" 
          />
          <h1 className="text-3xl font-bold text-center">{profile.name}</h1>
          <p className="text-lg text-gray-600 text-center">{profile.description}</p>
          <p className="mt-2 text-gray-500 text-center">{profile.bio}</p>
          
          {/* New fields for contact and interests */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Contact Information</h2>
            <p className="text-gray-700">{profile.contact}</p>
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Interests</h2>
            {profile.interests && profile.interests.length > 0 ? (
              <ul className="list-disc list-inside">
                {profile.interests.map((interest, index) => (
                  <li key={index} className="text-gray-700">{interest}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700">No interests listed.</p> // Handle case where interests are not defined
            )}
          </div>

          {/* Map Component */}
          <Map latitude={profile.address.lat} longitude={profile.address.lng} />
        </div>
      </div>
    </div>  
  );
};

export default ProfileDetail;
