
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

