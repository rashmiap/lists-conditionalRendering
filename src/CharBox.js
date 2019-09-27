import React from 'react';

const styles = {
    padding: 16,
    textAlign: 'center',
    margin: 16,
    cursor: 'pointer',
    border: '2px solid black'
}
const CharBox = (props) => {
  return (
    <p style={styles} onClick={props.clicked}>{props.letter}</p>
  );
}

export default CharBox;