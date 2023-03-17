import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logo from "./Logo.png"




function Navbar() {
    const [click, setClick] = useState(false)
    const HandleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }





    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='Logo' src={logo} alt="Logo" />
                    </Link>
                    <div className="menu-icon" onClick={HandleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        <li className="nav-item">
                            <Link to="/users" className='nav-links' onClick={closeMobileMenu}>
                                Pojištěnci
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Insurencies" className='nav-links' onClick={closeMobileMenu}>
                                Aktivní pojištění
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/create" className='nav-links' onClick={closeMobileMenu}>
                                Vytvořit pojištěnce
                            </Link>
                        </li>

                    </ul>




                </div>

            </nav>
        </>
    )
}

export default Navbar