import React, { useState } from 'react'
import './ReportFooter.css'
import headerLogo from './../../../assets/images/logos/login.png'
import path from './../../../assets/images/taxBurden/path.png'

const ReportFooter = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const toggleModal = (event) => {
    event.preventDefault()
    setIsModalVisible(!isModalVisible)
  }

  return (
    <React.Fragment>
      <div className="report-footer">
        <div
          style={{
            borderTop: '1px solid #9aa7b1',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 10px',
          }}
        >
          <div>
            <div className="taxburden-chart-footer">
              {`Source: ${props.source} `}
              <a href="#" onClick={toggleModal}>
                More
              </a>
            </div>
          </div>

          {isModalVisible && (
            <div
              className="modal fade show"
              style={{
                display: 'block',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'auto',
                zIndex: 1050,
              }}
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header d-flex justify-content-between">
                    <div>
                      <img src={path} height={18} alt="Path Icon" className="mb-1" />
                      <div className="fw-normal blue-color fs-5">Links</div>
                    </div>
                    <button
                      type="button"
                      className="close btn-close"
                      onClick={toggleModal}
                      aria-label="Close"
                      style={{
                        background: 'none',
                        border: 'none',
                        fontSize: '24px',
                        cursor: 'pointer',
                      }}
                    >
                      ×
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="taxlogo">
                      <div></div>
                      <img src={headerLogo} width={60} alt="Header Logo" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        {props.more.map((d, index) => (
                          <div className="popuptext" key={index}>
                            <a
                              href={`${d}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#007bff', textDecoration: 'none' }}
                            >
                              {d}
                            </a>
                            <br></br>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModalLong"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalLongTitle"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle">
                            Modal title
                          </h5>
                          <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <div className="d-flex justify-content-between align-items-center">
                            <img src={path} height={20} alt="Path Icon" />
                            <img src={headerLogo} width={60} alt="Header Logo" />
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              flexGrow: 1,
              textAlign: 'center',
              color: '#999999',
              fontSize: '10px',
            }}
          >
            {/* {props.artisticInfo} */}
            {props.artisticInfo && (
              <>
                <div className="artistic-info"
                  dangerouslySetInnerHTML={{ __html: props.artisticInfo }}>
                </div>
                <br />
                <br />
              </>
            )}
            <div>2025 Copyright Tax Project Institute, All Rights Reserved</div>
            <div>Estimate Only – for illustrative purposes only, not for official use.</div>
            <div>This is not an Official Government site.</div>
          </div>

          <div className="button-container">
            <img src={headerLogo} className="header-logo" alt="Header Logo" />
          </div>
        </div>
      </div>
    </React.Fragment >
  )
}

export default ReportFooter
