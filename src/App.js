// import React from 'react';
// import './App.css';
// import Login from './pages/loginPage';

// function App() {
//   return (
//     <div className="App">
//       <Login />
//     </div>
//   );
// }

//temp import for writing to database, be sure to comment out when no longer writing
import InsertDataComponent from './InsertDataComponent'; // Adjust the path if needed
//

// export default App;
import React from 'react';
import './App.css';
import Login from './pages/loginPage';
import CreateAccountPage from './pages/createAccountPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddDependent from './pages/addDependent';
import Landing from './pages/landing';
import ShelterSearch from './pages/shelterSearch';
import UpdateInfo from './pages/updateInfo';

function App() {
  return (
    <div className="App">
      {/*Be sure to comment out below line when not writing to database*/}
       {/* <InsertDataComponent /> */}
       {/*Be sure to comment out below line when not writing to database*/}
      <Router>
        <Routes>
          <Route path="/" element={<Login />} /> {/* Login page */}
          <Route path="/register" element={<CreateAccountPage />} /> {/* Register page */}
          <Route path="/addDependent" element={<AddDependent />} /> {/* Add Dependent Page */}
          <Route path="/landing" element={<Landing />} /> {/* Landing Page */}
          <Route path="/shelterSearch" element={<ShelterSearch />} /> {/* Shelter Search */}
          <Route path="/updateInfo" element={<UpdateInfo />} /> {/* Update Information */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;