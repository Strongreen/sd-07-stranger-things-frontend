import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const { STATUS } = process.env;


function App() {
  return (
    <div className="App">
      { STATUS !== 'producao' ?? 'Em desenvolvimento' }
      <StrangerThings />
    </div>
  );
}

export default App;
