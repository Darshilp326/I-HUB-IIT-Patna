import React from 'react'
import PicSlideShow from './PicSlideShow'
import Navbars from './Navbar/Navbar.js';
import Footers from './Footer/Footer.js';

export default function Homepage() {
    return (
        <div>

            <Navbars />

            {/*<h1>IITP</h1>*/}
            {/* Navbar */ }

            <PicSlideShow content=""/>

            
            {/*<PicSlideShow/>*/}
           
            {/* Welcome page with text */ }
            
            {/* Calendar */ }

            <Footers />

        </div>
    )
}

