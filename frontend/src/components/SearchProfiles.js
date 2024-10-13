// import React from 'react';

// const SearchProfiles = ({ profiles }) => {
//   const [searchTerm, setSearchTerm] = React.useState('');

//   const filteredProfiles = profiles.filter(profile =>
//     profile.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
//       <input
//         type="text"
//         className="border border-gray-300 rounded-lg px-4 py-2 mb-4 w-full"
//         placeholder="Search profiles"
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//       <div className="grid grid-cols-1 gap-4">
//         {filteredProfiles.length > 0 ? (
//           filteredProfiles.map((profile, index) => (
//             <div key={index} className="bg-gray-100 p-4 rounded-lg">
//               <h2 className="text-lg font-semibold">{profile.name}</h2>
//               <p>{profile.description}</p>
//             </div>
//           ))
//         ) : (
//           <p>No profiles found.</p> // Message when no profiles match the search
//         )}
//       </div>
//     </div>
//   );
// };

// export default SearchProfiles;
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
