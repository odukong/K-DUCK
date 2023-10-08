import React from 'react';
import images from "../../constants/images";
import { BsSearch } from 'react-icons/bs';

import './Last.css';

const Last = () => {
    return (
        <div className="app__last">
            <div className="app__last-img">
                <img src={images.polaroid} alt="polaroid"/>
            </div>
            <div className="app__last-content">
                <div className="app__last-content-title headerText">Buy Goods</div>
                <div className="app__last-content-bar"></div>
                <div className="app__last-content-description p__kor">사고싶은 굿즈가 있다면 검색해보세요</div>
                <div className="app__last-content-search">
                    <input type="text"></input>
                    <BsSearch color="black" fontSize={20}/>
                </div>
            </div>
        </div>
    );
};

export default Last;