import React from 'react';
import { BsInstagram,BsTwitter,BsX } from 'react-icons/bs';

import './Artist.css';
//imgUrl, name, members,debut_date, debut_album,insta_Url,twitter_Url,greetings
const Modal = (props) => {
    const handleClose=()=>{
        props.setOpen(false);
    }

    const moveInsta=()=>{window.open(`${props.artist.insta_Url}`,'_blank')}
    const moveTwitter=()=>{window.open(`${props.artist.twitter_Url}`,"_blank")}
    return (
        <div className="modal-wrapper">
            <div className="modal">
                <div className="modal-content">
                    <div className='modal-content-img'>
                        <img src={props.artist.imgUrl} alt="모달이미지"/>
                    </div>
                    <div className='modal-content-text'>
                        <div className='artist-name p__eng'>{props.artist.name}</div>
                        <div className='artist-member p__kor'>{props.artist.members}</div>
                        <div className='artist-debutDate p__kor'>데뷔 일 : {props.artist.debut_date}</div>
                        <div className='artist-debutAlbum p__kor'>데뷔앨범 : {props.artist.debut_album}</div>
                        <div className='artist-greeting p__kor' style={{background:"linear-gradient(to top, #fff5b1 40%, transparent 40%)"}}>{props.artist.greetings}</div>
                        <div className="modal-link">
                            <BsInstagram onClick={moveInsta} fontSize={30} color='grey'/>
                            <BsTwitter onClick={moveTwitter} fontSize={30} color='grey'/>
                        </div>
                    </div>
                    <BsX onClick={handleClose} fontSize={40}>닫기</BsX>
                </div>
            </div>
        </div>
    );
};

export default Modal;