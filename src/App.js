import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

require('dotenv').config();

const { REACT_APP_DEVELOPMENT } = process.env;

function App() {
  return (
    <div className="App">
      { REACT_APP_DEVELOPMENT === 'true' ? <h4> Em desenvolvimento </h4> : null }
      <StrangerThings />
    </div>
  );
}
export default App;
