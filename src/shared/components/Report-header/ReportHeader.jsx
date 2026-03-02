import React from 'react';
import './ReportHeader.css';

const ReportHeader = props => {
    return (
        <div className="title-with-image">
            <div className="wave-pattern">
                <img src={props.path} alt="Wave Pattern" width="300px" height="22px" />
            </div>
            <div className="title">
                <div className='taxburden-report-header taxburden-label-h1'>{props.header}</div>
                <div
                    className='black-color taxburden-label-h4'
                    dangerouslySetInnerHTML={{ __html: props.subHeader }}
                />
                {props.note && <div className='taxburden-label-h5'>{props.note}</div>}
            </div>
        </div>
    );
};

export default ReportHeader;
