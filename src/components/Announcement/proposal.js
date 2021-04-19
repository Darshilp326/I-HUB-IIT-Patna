import React from 'react';
import PicSlideShow from '../PicSlideShow';

export default function Proposal(props) {
    return (
        <div className="container">
            <PicSlideShow content="Call for Proposals Vishlesan I-HUB" />
            <div className="m-5 wrapper1">
            IIT PATNA VISHLESAN I-HUB FOUNDATION Call for Innovative and Entrepreneurial Project Proposals Under Technology Innovation Hub (TIH) of National Mission on Interdisciplinary Cyber-Physical Systems (NMICPS) for Speech, Video and Text Analytics Technologies
            </div>
          <div className="text-center">
                    <embed scroll src="PDF/proposals.pdf" width="500" height="500" />
          </div>
        </div>        
    )
}