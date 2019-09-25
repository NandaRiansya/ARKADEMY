import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header title="Gspro"/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yusril <code> Agisha Hendrawan</code>/App.js
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
