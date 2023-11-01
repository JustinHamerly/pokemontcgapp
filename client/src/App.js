import React from 'react';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import TopNavigation from './components/TopNavigation/TopNavigation';
import Main from './components/Main/Main';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderBar />
        <TopNavigation />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
