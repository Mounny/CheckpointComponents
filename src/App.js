import React from 'react';
import './App.css';
import Address from './Components/Profile/Address';
import Fullname from './Components/Profile/Fullname';
import Photo from './Components/Profile/Photo';

function App() {
  return (
    <div className="App">
      <h1>Checkpoint React Components and JSX !</h1>
      <Address/>
      <Fullname/>
      <Photo/>
    </div>
  );
}

export default App;
