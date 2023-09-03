import './App.css';
import React, {useState, useRef} from 'react';
import {Route, Routes, useNavigate} from 'react-router';
import Home from './Home';
import GenLyrics from './GenLyrics';
import SongPage from './SongPage';
import {Button, Form} from 'react-bootstrap';

function App() {



  return (
    <div className="App">
    <Routes>
      <Route path='/generateSong' element={<GenLyrics />}></Route>
      <Route path='/' element={<Home />}></Route>
      <Route path='/generateSong/song' element={<SongPage />}></Route>
    </Routes>
    </div>
  );
};

export default App;
