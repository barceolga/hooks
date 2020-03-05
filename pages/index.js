import React, { useState } from 'react';

const InputElement = () => {

    const [inputText, setInputText] = useState("");
    const [historyList, setHistorList] = useState([]);

     return <>
     <input 
     onChange={(e)=> {
         setInputText(e.target.value);
         setHistorList([...historyList, e.target.value])
        }}
     placeholder="Enter Some Text" />
     <div>{inputText}</div>
     {historyList.map((item) => {
         return <div>{item}</div>
     })}
     </>
};

export default InputElement