// Documents.js
import React, { useState } from 'react';

const Documents = () => {
  // State variables to store form data
  const [hospitalName, setHospitalName] = useState('');
  const [mobile, setMobile] = useState('');
  const [website, setWebsite] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');
  const [addressLine3, setAddressLine3] = useState('');
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [contact, setContact] = useState('');

  return (
    <div>
      <h1>Hospital</h1>
      <form>
        <div className="row">
          {/* Column 1 */}
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

        <div className="row">
          {/* Column 2 */}
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

        <div className="row">
          {/* Column 3 */}
          <div className="form-group col-md-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="designation">Designation</label>
            <input
              type="text"
              className="form-control"
              id="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="form-group col-md-4">
            <label htmlFor="contact">Contact</label>
            <input
              type="text"
              className="form-control"
              id="contact"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save and exit
        </button>
      </form>
    </div>
  );
};

export default Documents;
