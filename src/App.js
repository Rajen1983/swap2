import React, { useState } from 'react';
import './App.css'; 

const SwapTextApp = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const SwapToSecond = () => {
    setInput2(input1);
    setInput1('');
  };

  const SwapToFirst = () => {
    setInput1(input2);
    setInput2('');
  };

  return (
    <div className='main'>
      <h1>डेटा का आदान प्रदान</h1>
    <div className="app-container">
      
      <div className="input-container">
      
        <div className="input-box">
        
        <label htmlFor="input1">प्रथम</label>
          <input
          
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="यहाँ इंद्राज करे"
          />
          <button className='btn1'onClick={SwapToSecond}>भेजे 2 में </button>
        </div>
        <div className="input-box">
        <label htmlFor="input1">द्वितीय</label>
          <input
           
            type="text"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="यहाँ इंद्राज करे "
          />
          <button className='btn2'onClick={SwapToFirst}>भेजे 1 में </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SwapTextApp;
