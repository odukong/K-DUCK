import React from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Main,Artist,Board,Sale} from "./page";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route path="/artist" element={<Artist/>}/>
          <Route path="/select-board" element={<Board/>}/>
          <Route path="/sale" element={<Sale/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
