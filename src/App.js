import React from 'react';
import './App.css';
import StrangerThings from './components/StrangerThings';

require('dotenv').config();


const {
  STATUS_APP,
} = process.env;


function App() {
  return (
    <div className="App">
      { STATUS_APP === 'false' ? <h4>Em desenvolvimento</h4> : null }
      <StrangerThings />
    </div>
  );
}
export default App;
