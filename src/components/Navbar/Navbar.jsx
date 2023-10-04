import React,{useState,useRef} from "react";
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
                <img src={images.logo} alt="logo"/>
            </div>
            <ul className="app__navbar-menu">
                <li className="app__navbar-menu-item p__eng"><a href="#artist">Artist</a></li>
                <li className="app__navbar-menu-item p__eng"><a href="#board">Board</a></li>
                <li className="app__navbar-menu-item p__eng"><a href="#sale">Sale</a></li>
            </ul>
            <div className="app__navbar-login">
                <a href="#login" className="p__eng">Log In</a>
                <div/>
                <a href="#register" className="p__eng">Register</a>
            </div>
            <div className="app__navbar-smallscreen">
                <BsMoonFill color="#FFF5D1" fontSize={30} onClick={handleToggleMenu}/>
                    <div className={`app__navbar-smallscreen-overlay flex__center ${toggleMenu && "show"}`} >
                        <BsMoonStarsFill className="overlay__close" color="#FFF5D1" fontSize={30} onClick={handleToggleMenu}/>
                        <ul className="app__navbar-smallscreen-links">
                            <li className="app__navbar-smallscreen-item">
                                <a href="#login" className="p__eng">Log In</a>
                                <div/>
                                <a href="#register" className="p__eng">Register</a>
                            </li>
                            <li className="app__navbar-smallscreen-item p__eng"><a href="#artist">Artist</a></li>
                            <li className="app__navbar-smallscreen-item p__eng"><a href="#board">Board</a></li>
                            <li className="app__navbar-smallscreen-item p__eng"><a href="#sale">Sale</a></li>
                        </ul>
                    </div>
            </div>
        </div>
    );
};

export default Navbar;