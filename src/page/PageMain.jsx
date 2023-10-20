import React from 'react';
import {Navbar,Footer} from "../components";
import {Header,Middle,Last} from "../container";

function PageMain(){
    return(
        <div>
            <Navbar/>
            <Header/>
            <Middle/>
            <Last/>
            <Footer/>
        </div>
    );
}

export default PageMain;