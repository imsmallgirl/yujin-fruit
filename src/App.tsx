import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Header from './components/common/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Router />
    </div>
  );
}

export default App;
