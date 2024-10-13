
import React from 'react';

const SearchProfiles = ({ profiles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
      {profiles.map((profile) => (
        <div key={profile.id} className="bg-white p-4 rounded-lg shadow-md">
          <img src={profile.image} alt={profile.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-bold mt-4">{profile.name}</h2>
          <p className="text-gray-600">{profile.description}</p>
          <p className="mt-2">{profile.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchProfiles;
