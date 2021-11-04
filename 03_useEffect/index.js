/* 

React useEffect Hooks
=======================

The 'useEffect' Hook allows you to perform side effects in your components.

Some examples of side effects are: 
- fetching data, 
- directly updating the DOM, 
- and timers.

'useEffect accepts two arguments. The second argument is optional. 
*/

useEffect("function" , "dependency")

/*

Example: Let's use a timer as an example.

Use setTimeout() to count 1 second after initial render: 
*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1>I've rendered {count} times!</h1>;
}

ReactDOM.render(<Timer />, document.getElementById('root'));

/*

But wait !!!  I keeps counting even though it should only count once!

useEffect runs on every render. That means that when the count changes, 
a render happens, which then triggers another effect.

- every render / re-render triggers useEffect.
- useEffect triggers a re-render.

There are several ways to control when side effects run.

We should always include the second parameter which accepts an array.

We can optionally pass dependencies to useEffect in this array.

1. No dependency passed:
------------------------

useEffect(() => {
  // Runs on every render
});


2. An empty array:
-------------------

useEffect(() => {
  // Runs only on the first render
}, []);


3. Props or state values:
----------------------------

useEffect(() => {
  // Runs on the first render
  // And any time any dependency value changes
}, [prop, state]);

So, to fix this issue, let's only run this effect on the initial render.

Example: Only run the effect on the initial render:
*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

ReactDOM.render(<Timer />, document.getElementById('root'));

/*
Example: Here is an example of a useEffect Hook that is dependent on a variable. 
         If the count variable updates, the effect will run again:
*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

ReactDOM.render(<Counter />, document.getElementById('root'));

/*

If there are multiple dependencies, they should be included in the useEffect 
dependency array.


Effect Cleanup
=================

Some effects require cleanup to reduce memory leaks.

Timeouts, subscriptions, event listeners, and other effects that are no longer
needed should be disposed.

We do this by including a return function at the end of the useEffect Hook.

Example: Clean up the timer at the end of the useEffect Hook:
*/

import { useState, useEffect } from "react";
import ReactDOM from "react-dom";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

  return () => clearTimeout(timer)
  }, []);

  return <h1>I've rendered {count} times!</h1>;
}

ReactDOM.render(<Timer />, document.getElementById("root"));


/* Note: To clear the timer, we had to name it. */