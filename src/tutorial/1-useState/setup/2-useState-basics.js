import React, { useState } from 'react';
// useState - function

const UseStateBasics = () => {
  const [text, setText] = useState('random title')

const handleClick = () => {
  if(text === 'random title'){
    setText('Hello world')
  }else{
    setText('random title')
  }
  
}
  return<React.Fragment> 
    <h2>{text}</h2>
    <button type="button" className="btn" onClick={handleClick}>change title</button>
   </React.Fragment>;
};

export default UseStateBasics;
