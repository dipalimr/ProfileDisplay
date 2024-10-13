// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Map from './Map'; // Import the Map component
// import Person1 from '../images/P1.jpg';
// import Person2 from '../images/P2.jpg';
// import Person3 from '../images/P3.jpg';
// import Person4 from '../images/P4.jpg';

// // Profiles data with coordinates
// const profilesData = [
//   {
//     id: 1,
//     name: 'John Doe',
//     image: Person1,
//     description: 'Software Engineer at XYZ Company',
//     bio: 'John has over 10 years of experience...',
//     address: { lat: 37.7749, lng: -122.4194 }, // Example coordinates
//   },
//   {
//     id: 2,
//     name: 'Jane Smith',
//     image: Person2,
//     description: 'Product Designer at ABC Inc.',
//     bio: 'Jane is a creative product designer...',
//     address: { lat: 34.0522, lng: -118.2437 }, // Example coordinates
//   },
//   {
//     id: 3,
//     name: 'Alice Johnson',
//     image: Person3,
//     description: 'Data Scientist at Tech Innovations',
//     bio: 'Alice is a data scientist...',
//     address: { lat: 40.7128, lng: -74.0060 }, // Example coordinates
//   },
//   {
//     id: 4,
//     name: 'Bob Brown',
//     image: Person4,
//     description: 'Marketing Specialist at Creative Agency',
//     bio: 'Bob has over 8 years of experience...',
//     address: { lat: 41.8781, lng: -87.6298 }, // Example coordinates
//   },
// ];

// const ProfileDetail = () => {
//   const { id } = useParams(); // Get the ID from the URL
//   const profileId = parseInt(id); // Convert to number

//   // Find the profile with the matching ID
//   const profile = profilesData.find((profile) => profile.id === profileId);

//   if (!profile) {
//     return <h2 className="text-center text-xl">Profile not found!</h2>;
//   }

//   return (
//     <div className="container mx-auto p-6">
//       <div className="flex flex-col items-center">
//         <img src={profile.image} alt={profile.name} className="w-48 h-48 object-cover rounded-full mb-4" />
//         <h1 className="text-3xl font-bold">{profile.name}</h1>
//         <p className="text-gray-600">{profile.description}</p>
//         <p className="mt-4">{profile.bio}</p>
        
//         {/* Map Component */}
//         <Map latitude={profile.address.lat} longitude={profile.address.lng} />
//       </div>
//     </div>
//   );
// };

// export default ProfileDetail;

