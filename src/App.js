import React from 'react';
import {Navbar,Footer} from "./components";
import {Header,Middle,Last} from "./container";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Middle/>
      <Last/>
      <Footer/>
    </div>
  );
}

export default App;
