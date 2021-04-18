import React from 'react'
import PicSlideShow from './PicSlideShow'
import Navbars from './Navbar/Navbar.js';
import Footers from './Footer/Footer.js';

export default function Homepage() {
    return (
        <div>
            <Navbars />

            <PicSlideShow/>
           
            {/* Welcome page with text */ }
            
            {/* Calendar */ }

            <Footers />

        </div>
    )
}

