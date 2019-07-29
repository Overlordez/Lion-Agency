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
                        <Link to="/main"> <img className="logotype" src="./logo1.png" alt="logo" height="100" /> <h2> LION AGENCY </h2> </Link>
                    </div>

                    <nav className="navig">
                        <ul id="menu" className="justify-content-start">
                            <li> <Link to="/servises">Servises</Link></li>
                            <li> <Link to="/bussines">For bussines</Link></li>
                            <li> <Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                    <div className='burger'>
                        <div className={this.state.burgerOpen ? 'open' : ''} onClick={() => this.toggleMenu()}>

                            <div className="nav">
                                <a id="trigger" className={this.state.burgerOpen ? 'menu-trigger type7 active' : 'menu-trigger type7'}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                            {this.state.burgerOpen ? <ul id="content" className="show">
                                <li onClick={() => this.toggleMenu()} > <Link to="/servises">Servises</Link></li>
                                <li onClick={() => this.toggleMenu()}> <Link to="/bussines"> For bussines </Link></li>
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