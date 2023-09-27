// LeftMenu.js
import React from 'react';
import './leftMenu.css';


const LeftMenu = () => {
    return (
        <div className="left-menu d-flex flex-column justify-content-center align-items-center">
          <div className="max-width-80 text-center"> {/* Custom class to limit the width */}
            <h1 className="text-white">Registration</h1>
          </div>
          {/* Add your menu items below if needed */}
        </div>
      );
    };


export default LeftMenu;
