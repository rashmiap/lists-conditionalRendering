import React from 'react';
const MINCHAR = 5;

const Validation = (props) => {
  let textToShow = 'Text too short';
  if(props.userInputLength > MINCHAR){
    textToShow = 'Text long enogh';
  }
  return <p>{textToShow}</p>;
}

export default Validation;