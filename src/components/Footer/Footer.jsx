import React from 'react';
import { Link } from "react-router-dom";
import { BsGithub,BsInstagram } from 'react-icons/bs';
import images from "../../constants/images";
import './Footer.css';

const Footer = () => {
    const handleGithub=()=>{
        window.open('https://github.com/odukong/K-DUCK', '_blank');
    }
    const handleInsta=()=>{
        window.open('https://www.instagram.com/', '_blank');
    }
    return (
        <div className="app__footer">
            <div className="app__footer-contact">
                <div className='app__footer-contact-title footer-title'>contact</div>
                <div className='app__footer-contact-content footer-content'>ohbin1017@gmail.com</div>
            </div>
            <div className="app__footer-logo">
                <BsGithub color="#9D9D9D" fontSize={30} onClick={handleGithub}/>
                <img src={images.duck} alt="logo" width={30} height={30}/>
                <BsInstagram color="#9D9D9D" fontSize={30} onClick={handleInsta}/>
            </div>
            <div className="app__footer-hour">
                <div className='app__footer-hour-title footer-title'>working hour</div>
                <div className='app__footer-hour-content footer-content'>weekday: 9:00~17:00</div>
                <div className='app__footer-hour-content footer-content'>weekend: 12:00~15:00</div>
            </div>
        </div>
    );
};

export default Footer;