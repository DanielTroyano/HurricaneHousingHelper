// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Landing() {

    const navigate = useNavigate();

    const handleUpdateInformation = () => {
        navigate('/updateInfo');
    }
    const handleShelterSearch = () => {
        navigate('/shelterSearch');
    }

    return (
        <div className="landing">
            <h1>Landing Page</h1>
            <button onClick={handleUpdateInformation}>Update Information</button>
            <button onClick={handleShelterSearch}>Shelter Search</button>

        </div>
    );
}

export default Landing;