import React from "react";
import logo from '../logo.svg';
import '../App.css';

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple provisioning app
        </p>
        <a
          className="App-link"
          href="provision"
        >
          Go to provisioning
        </a>
      </header>
    </div>
  );
};

export default Home;
