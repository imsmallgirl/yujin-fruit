import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router';
import Header from './components/common/Header';
import Container from './components/common/Container';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Router />
      </Container>
    </div>
  );
}

export default App;
