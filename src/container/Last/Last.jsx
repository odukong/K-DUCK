import React,{useState} from 'react';
import {useNavigate} from "react-router-dom";
import images from "../../constants/images";
import { BsSearch } from 'react-icons/bs';

import './Last.css';

const Last = () => {
    const [search,setSearch]=useState("");
    const navigate = useNavigate();
    const handleSearch=(e)=>{
        setSearch(e.target.value);
    }
    const onClickSearch=()=>{
        navigate('/sale-x-x-'+search,{state:{search}})
    }
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
                    <input type="text" value={search} onChange={handleSearch}></input>
                    <BsSearch color="black" fontSize={20} onClick={onClickSearch}/>
                </div>
            </div>
        </div>
    );
};

export default Last;