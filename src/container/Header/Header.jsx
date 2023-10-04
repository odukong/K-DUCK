import React,{useState,useEffect} from "react";
import { BsPlayCircle,BsPauseCircle } from "react-icons/bs";
import images from "../../constants/images";

import './Header.css';

const Header=()=>{
    const [togglePlay,setTogglePlay]=useState(false);

    return(
        <div className="app__header">
            <div className="app__header-content">
                <div className="app__header-content-title headerText">Who is your star?</div>
                <div className="app__header-content-bar"></div>
                <div className="app__header-content-description p__kor">당신이 응원하고 있는 스타가 있나요. <br/>케이덕과 함께 행복한 덕질해요</div>
                {togglePlay?
                    <BsPauseCircle color="#EA6B6B" fontSize={27} onClick={()=>setTogglePlay(false)}/> /*오류작성*/ 
                    :<BsPlayCircle color="#EA6B6B" fontSize={27} onClick={()=>setTogglePlay(true)}/>}
            </div>
            <div className="app__header-img">
                <div className="LP-img">
                    <img src={images.LP_removebg} width={330} height={330} alt="LP" className={`${togglePlay?"play":""}`}/>
                </div>
                <div className="LP-box"></div>
            </div>    
        </div>
    );
}

export default Header;