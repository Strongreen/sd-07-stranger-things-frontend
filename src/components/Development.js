import React from 'react';

require('dotenv').config();

class Development extends React.Component {
  render() {
    return (
      <p
        style={ {
          display: process.env.REACT_APP_AMBIENT ? '' : 'none',
          backgroundColor: 'black',
          color: 'red',
        } }
      >
        Em desenvolvimento
      </p>
    );
  }
}

export default Development;
