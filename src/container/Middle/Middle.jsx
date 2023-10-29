import React,{useState,useEffect,useRef} from 'react';
import {Link} from "react-router-dom";
import {MiddleTitle} from "../../components";
import images from "../../constants/images";
import './Middle.css';

const boards=[
        {link:'review',name:'Concert Review',color:'#3F9793',img:`${images.headphone}`},
        {link:'fuzz',name:'Fuzz',color:'#EDE872',img:`${images.fuzz}`},
        {link:'promotion',name:'Promotion',color:'#FCC0CC',img:`${images.megaphone}`}
];
//headphone, fuzz,promotion
const Middle = () => {
    const [selectedImg, setSelectedImg] = useState(images.headphone);
    const changedEl=useRef(null);
    const handleTitleHover = (img) => {
        setSelectedImg(img);
    }

    useEffect(()=>{
        changedEl.current.style.animation="slide-right 1s ease-in-out";
        console.log(changedEl.current);
        setTimeout(()=>{changedEl.current.style.animation="none"},1000);
    },[selectedImg])

    return (
        <div className="app__middle">
            <div className='middle_container'>
            <div className="app__middle-header">
                <div className="app__middle-header-title headerText">Board List</div>
                <div className="app__middle-header-sub p__kor">당신의 스타에 대한 이야기를 누군가와 나누고 싶지 않나요? 지금 바로 K-DUCK board를 이용해보세요</div>
            </div>
            <div className="app__middle-content">
                <div className="app__middle-content-title">
                    {boards.map((board,index)=>{
                        return(
                            <Link to={`/${board.link}-board`}><MiddleTitle key={index} title={board.name} color={board.color} img={board.img} onMouseEnter={handleTitleHover}/></Link>
                        )
                    })}
                </div>
                <div className="app__middle-content-img">
                    <img src={selectedImg} alt="img" ref={changedEl}/>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Middle;