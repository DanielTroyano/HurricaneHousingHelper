// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function UpdateInfo() {

    const navigate = useNavigate();

    const handleAddDependent = () => {
        navigate('/addDependent');
    }

    return (
        <div className="updateInformation">
            <h1>Update Your Information</h1>
            <button onClick={handleAddDependent}>Add Dependent</button>
        </div>
    );
}

export default UpdateInfo;