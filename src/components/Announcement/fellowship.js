import React from 'react';
import PicSlideShow from '../PicSlideShow';

export default function Fellowship (props){
    return (
        <div>
            <PicSlideShow content="Fellowship March 2021" />
            <div className="m-5 wrapper1">
            For fellowships of Post-doctoral, Doctoral, Post-graduate and Graduate, IIT PATNA VISHLESAN I-HUB FOUNDATION Technology Incubation Hub (TIH) of National Mission on Interdisciplinary Cyber Physical Systems (NMICPS) for Speech, Video and Text Analytics Technologies
            </div>
            <div className="text-center container">
                <embed scroll src="PDF/fellowship.pdf" width="500" height="500" />
            </div>
        </div>
    )
}