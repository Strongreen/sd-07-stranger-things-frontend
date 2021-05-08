import React from 'react';
import './App.css';

import StrangerThings from './components/StrangerThings';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      {process.env.REACT_APP_STATUS === 'dev' && <h4>Em desenvolvimento</h4>}
      <StrangerThings />
    </div>
  );
}

export default App;
