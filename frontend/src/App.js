
// import { Outlet } from 'react-router-dom';
// import './App.css';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import { useState } from 'react';
// import profilesData from './components/Profiles'; 


// const App = () => {
//   const [searchQuery, setSearchQuery] = useState(''); // State for managing the search query

//   const handleSearch = (query) => {
//     setSearchQuery(query); // Update the search query when the header's search input changes
//   };
//   return (
//    <>
//   <Header profiles={profilesData} onSearch={handleSearch} />
   
//    <main>
//     <Outlet/>

    
    
//    </main>
   
//    <Footer/>
//    </>
//   );
// }

// export default App;

import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; // Import Header
import Footer from './components/Footer'; // Import Footer
import profilesData from './components/Profiles'; // Import profiles data

const App = () => {
  return (
    <>
      <Header profiles={profilesData} /> {/* Pass profiles data to Header */}
      <main>
        <Outlet /> {/* Render matched route content here */}
      </main>
      <Footer /> {/* Optional footer component */}
    </>
  );
}

export default App;

