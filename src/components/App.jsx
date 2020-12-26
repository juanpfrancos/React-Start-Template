import React from 'react';
import Tools from '../assets/tools.png';
import Logo from '../assets/React-icon.svg';
import Author from './Author';

function App() {
  return (
    <>
      <h1>Welcome to React!</h1>
      <img src={Logo} alt="logo" />
      <h1>Now! You Can Build Awesome Web Applications</h1>
      <img src={Tools} alt="tools" />
      <Author />
    </>
  );
}

export default App;
