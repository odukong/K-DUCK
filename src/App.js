import React from 'react';

import {Navbar} from "./components";
import {Header,Middle} from "./container";
import './App.css';

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Middle/>
    </div>
  );
}

export default App;
