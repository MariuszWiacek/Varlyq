// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LeftMenu from './components/leftMenu';
import MainContent from './components/home';
import Documents from './components/documents'; // Import Documents component
import Factilities from './components/documentUpload'; // Import Factilities component
import Insurance from './components/insurance'; // Import Insurance component

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-lg-2">
            <LeftMenu />
          </div>
          <div className="col-lg-10">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/factilities" element={<Factilities />} />
              <Route path="/insurance" element={<Insurance />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
