// DocumentUpload.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DocumentUpload = () => {
  // State variables to store form data
  const [accreditation1, setAccreditation1] = useState(false);
  const [accreditation2, setAccreditation2] = useState(false);
  const [accreditation3, setAccreditation3] = useState(false);

  const [hospitalReg1, setHospitalReg1] = useState('');
  const [hospitalReg2, setHospitalReg2] = useState('');
  const [hospitalReg3, setHospitalReg3] = useState('');

  const [ownerDoctor1, setOwnerDoctor1] = useState('');
  const [ownerDoctor2, setOwnerDoctor2] = useState('');
  const [ownerDoctor3, setOwnerDoctor3] = useState('');
  const [ownerDoctor4, setOwnerDoctor4] = useState('');

  const handleDateChange = (date) => {
    setOwnerDoctor2(date);
  };

  return (
    <div>
      <h1>Document Upload</h1>
      <form>
        {/* Accreditation Section */}
        <div className="row">
          <div className="col-md-4">
            <p>Accreditation</p>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="accreditation1"
                checked={accreditation1}
                onChange={(e) => setAccreditation1(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="accreditation1">
                NABH
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="accreditation2"
                checked={accreditation2}
                onChange={(e) => setAccreditation2(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="accreditation2">
                NABL
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="accreditation3"
                checked={accreditation3}
                onChange={(e) => setAccreditation3(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="accreditation3">
                NA
              </label>
            </div>
          </div>
        </div>

        {/* Hospital Registration Section */}
        <div className="row">
          <div className="col-md-4"><br></br>
            <p>Hospital Registration</p>
            <div className="form-group">
              <label htmlFor="hospitalReg1">Certificate Number</label>
              <input
                type="text"
                className="form-control"
                id="hospitalReg1"
                value={hospitalReg1}
                onChange={(e) => setHospitalReg1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerDoctor2">Date of joining</label><br></br>
              <DatePicker
                selected={ownerDoctor2} // Pass the selected date
                onChange={handleDateChange} // Handle date change
                className="form-control"
                id="ownerDoctor2"
                dateFormat="dd/MM/yyyy" // Customize date format if needed
              />
            </div>
            <div className="form-group">
              <label htmlFor="hospitalReg3">Upload Certificate</label>
              <input
                type="text"
                className="form-control"
                id="hospitalReg3"
                value={hospitalReg3}
                onChange={(e) => setHospitalReg3(e.target.value)}
              />
            </div>
          </div>
        </div>
<br></br>
        {/* Owner Doctor Section */}
        <div className="row">
          <div className="col-md-4">
            <p>Owner Doctor</p><br></br>
            <div className="form-group">
              <label htmlFor="ownerDoctor1">Upload Certificates</label>
              <input
                type="text"
                className="form-control"
                id="ownerDoctor1"
                value={ownerDoctor1}
                onChange={(e) => setOwnerDoctor1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerDoctor1">Name</label>
              <input
                type="text"
                className="form-control"
                id="ownerDoctor1"
                value={ownerDoctor1}
                onChange={(e) => setOwnerDoctor1(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="ownerDoctor1">Certificate Number</label>
              <input
                type="text"
                className="form-control"
                id="ownerDoctor1"
                value={ownerDoctor1}
                onChange={(e) => setOwnerDoctor1(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
              <label htmlFor="ownerDoctor1">Specialization</label>
              <input
                type="text"
                className="form-control"
                id="ownerDoctor1"
                value={ownerDoctor1}
                onChange={(e) => setOwnerDoctor1(e.target.value)}
              />
            </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Save and Upload
        </button>
      </form>
    </div>
  );
};

export default DocumentUpload;
