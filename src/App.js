import React, {useState, useEffect} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Movies from './views/Movies';
import MovieSummary from './views/MovieSummary';
import './App.css';

function App() {
  return (
    <div>
    <nav>
      <Link to = '/'></Link>
    </nav>

    <Routes>
        <Route path='/' element={<Movies url = {'https://api.tvmaze.com/search/shows?q=all'} />} />
        <Route path='/movieSummary/:id' element={<MovieSummary />} />
    </Routes>
      
    </div>
  );
}

export default App;
