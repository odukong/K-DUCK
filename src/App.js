import React from 'react';

import {Navbar} from "./components";
import {Header,Middle,Last} from "./container";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Middle/>
      <Last/>
    </div>
  );
}

export default App;
