import React from 'react'
import path from './../../../assets/images/taxBurden/path.png'
import './tooltip.css'
import headerLogo from './../../../assets/images/logos/login.png'
export default function tooltip({tooltip, onClose}) {

  return (
    <React.Fragment>
      
      <div className="tooltip-container">

        <div className="tooltip-content">
          <div style={{ 'textAlign': 'right', 'cursor': 'pointer', 'position': 'absolute', 'top': '6px', 'right': '6px' }} className="closeIcon" onClick={onClose}><i className="fa-solid fa-x"></i></div>
          <header className="tooltip-header">

            <div className="title-with-image">
              <div className="wave-pattern">
                <img src={path} alt="Wave Pattern" width="300px" height="22px" />
              </div>
              <div className="title1">
                <h2>{tooltip.title}</h2>
                <h6>{tooltip.subTitle}</h6>
              </div>
            </div>
            <div className="button-container">
              <div className="taxprojectlogo">
                <img src={headerLogo} alt="Wave Pattern" width="300px" height="22px" />
              </div>
            </div>
          </header>

          <div className="tooltip-metrics">
            <div className="metric">Metric1: Value<i className="fa-solid fa-up-long"></i></div>
            <div className="metric">Metric2: Value<i className="fa-solid fa-up-long"></i></div>
            <div className="metric">Metric3: Value<i className="fa-solid fa-up-long"></i></div>
          </div>

          <div className="tooltip-description">
            <img src={headerLogo} alt="Chart" className="description-image" />
            <p style={{ fontSize: '10px' }}>Description: {tooltip.description} </p>
          </div>
          <footer className="tooltip-footer">
            <p>{tooltip.description2}</p>
          </footer>
        </div>
      </div>


    </React.Fragment>
  )
}
