import Person1 from '../images/P1.jpg';
import Person2 from '../images/P2.jpg';
import Person3 from '../images/P3.jpg';
import Person4 from '../images/P4.jpg';

export const profilesData = [
  {
    id: 1,
    name: 'John Doe',
    image: Person1,
    description: 'Software Engineer at XYZ Company',
    bio: 'John has over 10 years of experience in software development...',
    address: { lat: 37.7749, lng: -122.4194 }, // San Francisco coordinates
    addressText: 'San Francisco, CA, USA', // Manually added formatted address
    contact: 'john.doe@example.com', // New contact field
    interests: ['Coding', 'Music', 'Traveling'], // New interests field
  },
  {
    id: 2,
    name: 'Jane Smith',
    image: Person2,
    description: 'Product Designer at ABC Inc.',
    bio: 'Jane is a creative product designer...',
    address: { lat: 34.0522, lng: -118.2437 }, // Los Angeles coordinates
    addressText: 'Los Angeles, CA, USA', // Manually added formatted address
    contact: 'jane.smith@example.com', // New contact field
    interests: ['Design', 'Art', 'Photography'], // New interests field
  },
  {
    id: 3,
    name: 'Alice Johnson',
    image: Person3,
    description: 'Data Scientist at Tech Innovations',
    bio: 'Alice is a data scientist...',
    address: { lat: 40.7128, lng: -74.0060 }, // New York coordinates
    addressText: 'New York, NY, USA', // Manually added formatted address
    contact: 'alice.johnson@example.com', // New contact field
    interests: ['AI', 'Machine Learning', 'Reading'], // New interests field
  },
  {
    id: 4,
    name: 'Bob Brown',
    image: Person4,
    description: 'Marketing Specialist at Creative Agency',
    bio: 'Bob has over 8 years of experience...',
    address: { lat: 41.8781, lng: -87.6298 }, // Chicago coordinates
    addressText: 'Chicago, IL, USA', // Manually added formatted address
    contact: 'bob.brown@example.com', // New contact field
    interests: ['Marketing', 'Social Media', 'Writing'], // New interests field
  },
];

// Export the profilesData
export default profilesData;
