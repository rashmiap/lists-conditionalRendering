import React, { useState } from 'react';
import logo from './logo.svg';
import Validation from './Validation';
import CharBox from './CharBox';
import './App.css';

function App() {
  const [ userInput, setUserInput ] = useState('');

  const setUserInputHandler = (event) => {
    setUserInput(event.target.value)
  }
  const deleteClickedChar = (letter) => {
    const letterIndex = userInput.split('').findIndex(item => item === letter);
    const letters = userInput.split('');
    letters.splice(letterIndex, 1);
    setUserInput(letters.join(''))
  }
  const charList = userInput.split('').map((item, index) => <CharBox key={index} letter={item} clicked={() => deleteClickedChar(item)}/>);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
      <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <hr />
      <input type="text" value={userInput} onChange={setUserInputHandler}/>
      <p>{userInput}</p>
      <Validation userInputLength={userInput.length} />
      <div className="Letters">
        {charList}
      </div>
    </div>
  )
}

export default App;
