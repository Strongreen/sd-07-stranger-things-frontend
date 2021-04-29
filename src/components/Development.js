import React from 'react';



class Development extends React.Component {
  render() {
    
    return (
        
      <p
        style={ {
          display: process.env.REACT_APP_AMBIENT === true ? '' : 'none',
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
