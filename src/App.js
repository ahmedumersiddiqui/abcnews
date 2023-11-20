import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import Search from './components/Search';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const App = () => {
  let apiKey=process.env.REACT_APP_NEWS_API;
  
    return (
      <div>
        
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path='/' element={<News key="general" pageSize={9} apiKey={apiKey} country="us" category="general"/>}/>
        <Route path='/business' element={<News key="business"pageSize={(9)} apiKey={apiKey} country="us" category="business"/>}/>
        <Route path='/entertainment' element={<News key="entertainment" pageSize={9} apiKey={apiKey} country="us" category="entertainment"/>}/>
        <Route path='/health' element={<News key="health" pageSize={9} apiKey={apiKey} country="us" category="health"/>}/>
        <Route path='/science' element={<News key="science" pageSize={9} apiKey={apiKey} country="us" category="science"/>}/>
        <Route path='/sports' element={<News key="sports" pageSize={9} apiKey={apiKey} country="us" category="sports"/>}/>
        <Route path='/technology' element={<News key="technology" pageSize={9} apiKey={apiKey} country="us" category="technology"/>}/>
        <Route path="/search/:query" element={<Search  pageSize={9} apiKey={apiKey} />} />


        </Routes>
        </BrowserRouter>
      </div>
    )
  }

export default App
