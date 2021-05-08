import React from 'react';
import './App.css';

require('dotenv').config();

const { STATUS } = process.env;

import StrangerThings from './components/StrangerThings';

function App() {
  return (
    <div className="App">
      { STATUS !== 'producao' ?? 'Em desenvolvimento' }
      <StrangerThings />
    </div>
  );
}

export default App;
