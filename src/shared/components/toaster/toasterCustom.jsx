import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { CToast, CToastBody, CToaster, CToastHeader } from '@coreui/react';
import { cilInfo } from '@coreui/icons';
import CIcon from '@coreui/icons-react'

// import path from './../../../assets/images/taxBurden/path.png'
import path from './../../../assets/images/taxBurden/path.png'
// import headerLogo from './../../../assets/images/logos/login.png'
import headerLogo from './../../../assets/images/logos/login.png'
import './toasterCustom.css'


const ToasterCustom = forwardRef((_, ref) => {
  const [toast, addToast] = useState(null);
  const toaster = useRef(null);

  useImperativeHandle(ref, () => ({
    showToast: (message, type = 'text') => {
      const exampleToast = (
        // <CToast autohide={false} >
        <CToast >
          <CToastHeader closeButton>

            <header className="tooltip-header">

              <div className="title-with-image">
                <div className="wave-pattern">
                  <img src={path} alt="Wave Pattern" width="300px" height="22px" />
                </div>
                <div className="title1">
                  <h2>Notification</h2>
                  {/* <h6>{tooltip.subTitle}</h6> */}
                </div>
              </div>
              <div className="button-container">
                <div className="taxprojectlogo">
                  <img src={headerLogo} alt="Wave Pattern" width="300px" height="22px" />
                </div>
              </div>
            </header>
          </CToastHeader>
          <CToastBody>
            {/* <CIcon icon={cilInfo} /> */}
            <i className="fa-solid fa-info-circle"></i>&nbsp;

            {type === 'html' ? (
              <span dangerouslySetInnerHTML={{ __html: message }} />
            ) : (
              message
            )}
          </CToastBody>
        </CToast>
      );
      addToast(exampleToast);
    },
  }));

  return <CToaster className="p-3" placement="bottom-end" push={toast} ref={toaster} />;
});

export default ToasterCustom;
