import React from 'react';
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="head">
            <header>
                <div className="logo">
                     <Link to="/main"> <img className="logotype" src="http://pngriver.com/wp-content/uploads/2017/12/download-lion-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-lion_by_skillr-d4ci222.png" alt="logo" height="100" /> <h2> LION AGENCY </h2> </Link>  
                </div>
                {/* <div class="nav">
            <a id="trigger" class="menu-trigger type7" href="#">
                <span></span>
                <span></span>
                <span></span>
            </a> */}
            {/* </div> */}

                <div className="navig">
                    <ul id="menu" className="justify-content-start">
                        <li> <Link to="/servises">Services</Link></li>
                        <li> <Link to="/news">News</Link></li>
                        <li> <Link to="/contact">Contact</Link></li>
                        
                    </ul>

                </div>
            </header>
            <script src="./src/JS/burger-menu.js"></script>
        </div>

    )


}
export default Nav;