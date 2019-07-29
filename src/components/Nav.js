import React from 'react';
import { Link } from 'react-router-dom'

export class Nav extends React.Component {
    state = {
        burgerOpen: false
    }
    toggleMenu() {
        this.setState({ burgerOpen: !this.state.burgerOpen })
    }
    render() {
        return (
            <div className="head">
                <header>
                    <div className="logo">
                        <Link to="/main"> <img className="logotype" src="http://pngriver.com/wp-content/uploads/2017/12/download-lion-PNG-transparent-images-transparent-backgrounds-PNGRIVER-COM-lion_by_skillr-d4ci222.png" alt="logo" height="100" /> <h2> LION AGENCY </h2> </Link>
                    </div>

                    <nav className="navig">
                        <ul id="menu" className="justify-content-start">
                            <li> <Link to="/servises">About</Link></li>
                            <li> <Link to="/news">News</Link></li>
                            <li> <Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className= 'burger'>
                        <div className={this.state.burgerOpen ? 'open' : ''} onClick={(e) => this.toggleMenu()}>
                        
                        <div class="nav">
            <a id="trigger" class="menu-trigger type7" href="#">
                <span></span>
                <span></span>
                <span></span>
            </a>
                        </div>
                        {this.state.burgerOpen ? <ul id="content" className="show">
                            <li onClick={() => this.toggleMenu()} > <Link to="/servises">Servises</Link></li>
                            <li onClick={() => this.toggleMenu()}> <Link to="/news">News</Link></li>
                            <li onClick={() => this.toggleMenu()}> <Link to="/contact">Contact</Link></li>
                        </ul> : ''}
                        </div>
                    </div>
                  </header>
                  </div>
        )
}
}

export default Nav;