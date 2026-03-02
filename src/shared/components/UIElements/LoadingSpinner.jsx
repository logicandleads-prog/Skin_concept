import React from 'react';
import './LoadingSpinner.css';
import { quantum } from 'ldrs'
quantum.register() // Initialize quantum loader


const LoadingSpinner = props => {
  return (
    // <div className={`${props.asOverlay ? 'loading-spinner__overlay' : ''}`}>
    //   <div className="lds-dual-ring"></div>
    // </div>
    <div className={`${props.asOverlay ? 'loading-spinner__overlay' : ''}`}>
      {/* <div className="fullscreen-loading-overlay"> */}
        <l-quantum size="50" speed="2" color="#3E4B7A"></l-quantum>
      {/* </div> */}
    </div>
  );
};

export default LoadingSpinner;
