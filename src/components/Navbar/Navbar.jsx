import React,{useState} from "react";
import {Link} from "react-router-dom";
import {BsMoonFill,BsMoonStarsFill} from "react-icons/bs";

import images from "../../constants/images";

import './Navbar.css';

const Navbar = () => {
    // nav 이동 경로 router로 추후 변경
    const [toggleMenu,setToggleMenu]=useState(false);
    
    const handleToggleMenu = () => {
        setToggleMenu(prevToggleMenu => !prevToggleMenu);
    };
    return (
        <div className="app__navbar">
            <div className="app__navbar-logo">
                <Link to="/"><img src={images.logo} alt="logo"/></Link>
            </div>
            <ul className="app__navbar-menu">
                <li className="app__navbar-menu-item p__eng"><Link to="/artist">Artist</Link></li>
                <li className="app__navbar-menu-item p__eng"><Link to="/select-board">Board</Link></li>
                <li className="app__navbar-menu-item p__eng"><Link to="/sale">Sale</Link></li>
            </ul>
            <div className="app__navbar-login">
                <Link to="#login" className="p__eng">Log In</Link>
                <div/>
                <Link to="#register" className="p__eng">Register</Link>
            </div>
            <div className="app__navbar-smallscreen">
                <BsMoonFill color="#FFF5D1" fontSize={30} onClick={handleToggleMenu}/>
                    <div className={`app__navbar-smallscreen-overlay flex__center ${toggleMenu && "show"}`} >
                        <BsMoonStarsFill className="overlay__close" color="#FFF5D1" fontSize={30} onClick={handleToggleMenu}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="app__navbar-smallscreen-item">
                                <Link to="#login" className="p__eng">Log In</Link>
                                <div/>
                                <Link to="#register" className="p__eng">Register</Link>
                            </li>
                            <li className="app__navbar-smallscreen-item p__eng"><Link to="/artist">Artist</Link></li>
                            <li className="app__navbar-smallscreen-item p__eng"><Link to="/select-board">Board</Link></li>
                            <li className="app__navbar-smallscreen-item p__eng"><Link to="/sale">Sale</Link></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;