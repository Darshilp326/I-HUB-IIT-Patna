import React from 'react';
import PicSlideShow from '../PicSlideShow';

export default function Fellowship (props){
    return (
        <div>
            <PicSlideShow content="FELLOWSHIP MARCH 2021" />
            <div  style={{backgroundColor:"#0B4D89"}} className="m-5 activity-content">
            <p className="text-white">
            For fellowships of Post-doctoral, Doctoral, Post-graduate and Graduate, IIT PATNA VISHLESAN I-HUB FOUNDATION Technology Incubation Hub (TIH) of National Mission on Interdisciplinary Cyber Physical Systems (NMICPS) for Speech, Video and Text Analytics Technologies
            </p>
            </div>
            <div className="text-center container mb-5">
                <embed scroll src="PDF/fellowship.pdf" width="90%" height="500" />
            </div>
        </div>
    )
}