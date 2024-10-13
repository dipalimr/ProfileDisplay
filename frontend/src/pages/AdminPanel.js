import React, { useState } from 'react';
import profilesData from '../components/Profiles'; // Ensure you import your profiles data

const AdminPanel = () => {
  const [profiles, setProfiles] = useState(profilesData); // Set initial profiles to the imported data
  const [newProfile, setNewProfile] = useState({ name: '', description: '', bio: '', image: '', address: { lat: '', lng: '' } });
  const [editProfileIndex, setEditProfileIndex] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProfile({ ...newProfile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editProfileIndex !== null) {
      // Edit existing profile
      const updatedProfiles = profiles.map((profile, index) => (index === editProfileIndex ? newProfile : profile));
      setProfiles(updatedProfiles);
      setEditProfileIndex(null);
    } else {
      // Add new profile
      setProfiles([...profiles, newProfile]);
    }
    setNewProfile({ name: '', description: '', bio: '', image: '', address: { lat: '', lng: '' } }); // Reset form
  };

  const handleEdit = (index) => {
    setEditProfileIndex(index);
    setNewProfile(profiles[index]);
  };

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">{editProfileIndex !== null ? 'Edit Profile' : 'Add New Profile'}</h2>
        
        <input
          type="text"
          name="name"
          value={newProfile.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="border p-2 w-full mb-2"
        />
        
        <input
          type="text"
          name="description"
          value={newProfile.description}
          onChange={handleChange}
          placeholder="Description"
          required
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="bio"
          value={newProfile.bio}
          onChange={handleChange}
          placeholder="Bio"
          required
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="image"
          value={newProfile.image}
          onChange={handleChange}
          placeholder="Image URL"
          required
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="address.lat"
          value={newProfile.address.lat}
          onChange={handleChange}
          placeholder="Latitude"
          required
          className="border p-2 w-full mb-2"
        />

        <input
          type="text"
          name="address.lng"
          value={newProfile.address.lng}
          onChange={handleChange}
          placeholder="Longitude"
          required
          className="border p-2 w-full mb-2"
        />
        
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          {editProfileIndex !== null ? 'Update Profile' : 'Add Profile'}
        </button>
      </form>

      <h2 className="text-xl font-semibold mb-4">Profiles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {profiles.map((profile, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <img src={profile.image} alt={profile.name} className="w-48 h-48 object-cover rounded-full mb-4 mx-auto" />
            <h3 className="text-xl font-bold">{profile.name}</h3>
            <p>{profile.description}</p>
            <p>{profile.bio}</p>
            <button onClick={() => handleEdit(index)} className="bg-blue-500 text-white p-2 rounded mt-2">Edit</button>
            <button onClick={() => handleDelete(index)} className="bg-red-500 text-white p-2 rounded mt-2 ml-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;



