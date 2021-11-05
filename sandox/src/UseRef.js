import {useState, useEffect, useRef} from "react";

export function CountRender() {  /* Does Not Cause Re-renders */
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input 
              type="text"
              value= {inputValue}
              onChange={ (event) => setInputValue(event.target.value)} 
            />
            <h2>Render Count: {count.current}</h2>
        </>
    );
} 


export function FocusDOMElement() { // Accessing DOM Elements
    const inputElement = useRef();
    console.log("inputElement = ", inputElement);
    const focusInput = () => {
         inputElement.current.focus();
         inputElement.current.style.border="3px solid green";
    }
    
    return (
        <>
          <input type="text" ref={inputElement} />
          <button onClick={focusInput} >Focus input</button>
          {console.log("inputElement = ", inputElement)}

        </>
    );
}

export  function TrackingStateChange() {
    const[inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect( () => {
        previousInputValue.current = inputValue
    }, [inputValue]);

    return (
        <>
            <input 
               type="text"
               value={inputValue}
               onChange= {(event) => {setInputValue(event.target.value)}} 
            />
            <h2> Current Value : {inputValue}</h2>
            <h2> Previous Value : {previousInputValue.current}</h2>        
        </>
    );
}

