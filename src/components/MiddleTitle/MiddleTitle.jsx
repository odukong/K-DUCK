import React from 'react';

const MiddleTitle = (props) => {

    const handleOnTitle=(e)=>{
        e.target.style.background=`${props.color}`;
        props.onMouseEnter(props.img);
    }
    const handleOffTitle=(e)=>{
        e.target.style.background="none";
    }
    return (
        <div className="app__middle-content-title-item headerText" onMouseEnter={handleOnTitle} onMouseLeave={handleOffTitle}>{props.title}</div>
    );
};

export default MiddleTitle;