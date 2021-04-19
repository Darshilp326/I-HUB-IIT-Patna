import React from 'react';
import PicSlideShow from '../PicSlideShow';

export default function Proposal(props) {
    return (
        <div>
            <PicSlideShow content="CALL FOR PROPOSALS VISHLESHAN I-HUB" />
            <div  style={{backgroundColor:"#0B4D89"}} className="m-5 activity-content">
            <p className="text-white">
            IIT PATNA VISHLESAN I-HUB FOUNDATION Call for Innovative and Entrepreneurial Project Proposals Under Technology Innovation Hub (TIH) of National Mission on Interdisciplinary Cyber-Physical Systems (NMICPS) for Speech, Video and Text Analytics Technologies
            </p>
            </div>
          <div className="text-center container mb-5">
                    <embed scroll src="PDF/proposals.pdf" width="90%" height="500" className="pdf"/>
          </div>
        </div>        
    )
}