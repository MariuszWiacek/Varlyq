// HospitalForm.js
import React, { useState } from 'react';
import './leftMenu.css';

const HospitalForm = () => {
  // State variables to store form data
  const [hospitalName, setHospitalName] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');

  return (
    <div id="form">
      <h1>Hospital</h1>
      <form >
        {/* Row 1 */}
        <div className="form-row">
          {/* Hospital Name */}
          <div className="form-group col-md-4">
            <label htmlFor="hospitalName">Hospital Name</label>
            <input
              type="text"
              className="form-control"
              id="hospitalName"
              value={hospitalName}
              onChange={(e) => setHospitalName(e.target.value)}
            />
          </div>
          {/* Mobile */}
          <div className="form-group col-md-4">
            <label htmlFor="mobile">Mobile</label>
            <input
              type="text"
              className="form-control"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          {/* Website */}
          <div className="form-group col-md-4">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              className="form-control"
              id="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
        </div>
        
        {/* Row 2 */}
        <div className="form-row">
          {/* Address Line 1 */}
          <div className="form-group col-md-4">
            <label htmlFor="addressLine1">Address Line 1</label>
            <input
              type="text"
              className="form-control"
              id="addressLine1"
              value={addressLine1}
              onChange={(e) => setAddressLine1(e.target.value)}
            />
          </div>
          {/* Address Line 2 */}
          <div className="form-group col-md-4">
            <label htmlFor="addressLine2">Address Line 2</label>
            <input
              type="text"
              className="form-control"
              id="addressLine2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
            />
          </div>
          {/* Address Line 3 */}
          <div className="form-group col-md-4">
            <label htmlFor="addressLine3">Address Line 3</label>
            <input
              type="text"
              className="form-control"
              id="addressLine3"
              value={addressLine3}
              onChange={(e) => setAddressLine3(e.target.value)}
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="form-row">
          {/* Add fields for Row 3 here */}
        </div>

        {/* Row 4 */}
        <div className="form-row">
          {/* Add fields for Row 4 here */}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HospitalForm;
