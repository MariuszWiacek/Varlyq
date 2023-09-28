// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import LeftMenu from './components/leftMenu';
import Documents from './components/documents';
import Factilities from './components/documentUpload';
import Insurance from './components/insurance';

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
              {/* Set the "documents" page as the default (starting) page */}
              <Route path="/" element={<Documents />} />
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
