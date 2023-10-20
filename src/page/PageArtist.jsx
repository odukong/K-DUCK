import React from 'react';
import {Artist} from "../container";
import { Navbar,Footer } from '../components';
const PageArtist = () => {
    return (
        <div>
            <Navbar/>
            <Artist/>
            <Footer/>
        </div>
    );
};

export default PageArtist;