import React from 'react'
import { CProgress, CProgressBar } from '@coreui/react'

const PercentageBar = ({one=0, two=0, three=0}) => {
    const counter = 100
    return (
        <CProgress className="mb-1">
            <CProgressBar
                value={one}
                // color="#A71226"
                // color="danger"
                // height="30px"
                TextColors="primary"
                className='red-bg'
            >
                <strong>{one}%</strong>
            </CProgressBar>
            <CProgressBar
                value={two}
                // color="#EB475D"
                // color="success"
                TextColors="primary"
                className='light-red-bg'
            >
                <strong>{two}%</strong>
            </CProgressBar>
            <CProgressBar
                value={three}
                // color="#9aa7b1"
                // color="secondary"
                TextColors="primary"
                className='grey-bg'
            >
                <strong>{three}%</strong>
            </CProgressBar>
        </CProgress>
    )
}

export default PercentageBar


// import React from 'react'
// import { CProgress, CProgressBar } from '@coreui/react'

// const PercentageBar = () => {
//   return (
//     <CProgress className="mb-1" style={{ height: '30px', borderRadius: '20px', overflow: 'hidden' }}>
//       <CProgressBar
//         value={50}
//         style={{ backgroundColor: '#A71226' }}
//       >
//         <strong>50%</strong>
//       </CProgressBar>
//       <CProgressBar
//         value={25}
//         style={{ backgroundColor: '#EB475D' }}
//       >
//         <strong>25%</strong>
//       </CProgressBar>
//       <CProgressBar
//         value={25}
//         style={{ backgroundColor: '#9aa7b1', color: '#fff' }} // Ensure white text
//       >
//         <strong>25%</strong>
//       </CProgressBar>
//     </CProgress>
//   )
// }

// export default PercentageBar
