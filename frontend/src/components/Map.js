import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { ClipLoader } from 'react-spinners';

mapboxgl.accessToken = 'pk.eyJ1IjoiZGVlcGFsaTY0IiwiYSI6ImNtMjRzM3NhbzBrMWIyanNqZDQ1azRoOGQifQ.JTsTtfXyEU0PBH5xr9FNdQ'; // Replace with your actual Mapbox token

const Map = ({ latitude, longitude }) => {
  const mapContainerRef = useRef(null);  // Reference to the map container
  const mapRef = useRef(null);  // Ref to store the map instance
  const markerRef = useRef(null);  // Ref to store the marker instance
  const [loading, setLoading] = useState(true);  // Loading state for the map
  const [error, setError] = useState(null);  // State to handle errors

  useEffect(() => {
    if (!latitude || !longitude) return;  // Ensure that both latitude and longitude are present

    try {
      // Initialize the map only once when the component mounts
      if (!mapRef.current) {
        mapRef.current = new mapboxgl.Map({
          container: mapContainerRef.current,  // Reference to the map container
          style: 'mapbox://styles/mapbox/streets-v11',  // Map style
          center: [longitude, latitude],  // Set map center to [longitude, latitude]
          zoom: 10,  // Set zoom level
        });

        // Add marker to the map when it's first initialized
        markerRef.current = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])  // Set initial marker position
          .addTo(mapRef.current);  // Add marker to the map

        // Set loading to false when map has fully loaded
        mapRef.current.on('load', () => {
          setLoading(false);
        });
      } else {
        // Update the map center when latitude or longitude changes
        mapRef.current.setCenter([longitude, latitude]);

        // Update marker position if it already exists
        if (markerRef.current) {
          markerRef.current.setLngLat([longitude, latitude]);
        }
      }
    } catch (error) {
      console.error("Error loading map: ", error);
      setLoading(false);  // Ensure loading spinner hides
      setError('Could not load map. Please check the address.');  // Set error message
    }
  }, [latitude, longitude]);  // Re-run effect if latitude or longitude changes

  // Function to reset the map view
  const resetMap = () => {
    if (mapRef.current) {
      mapRef.current.flyTo({
        center: [longitude, latitude],  // Reset to original coordinates
        zoom: 10,  // Set zoom level
      });
    }
  };

  return (
    <div className="relative w-full h-[400px] mx-auto"> {/* Set container width and height */}
      {/* Show loading spinner while the map is loading */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 opacity-75">
          <ClipLoader color={"#123abc"} loading={loading} size={50} />
          <p>Loading map...</p>
        </div>
      )}

      {/* Show error message if there's an error */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-red-100">
          <p className="text-red-600">{error}</p>
        </div>
      )}

      {/* Map Container */}
      <div
        ref={mapContainerRef}  // Attach the map container ref
        className="w-full h-full border-2 border-gray-300 rounded-lg"  // Ensure map container covers full space
      />

      {/* Reset button to recenter the map */}
      <button onClick={resetMap} className="bg-blue-500 text-white p-2 rounded absolute top-4 right-4 z-10">
        Reset Map
      </button>
    </div>
  );
};

export default Map;