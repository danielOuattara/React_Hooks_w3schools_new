/* 

React Hooks
=========================

Hooks were added to React in version 16.8.

Hooks allow function components to have access to state 
and other React features.

Because of this, class components are generally no longer needed.

NOTE: Although Hooks generally replace class components, there are no 
      plans to remove classes from React.


What is a Hook ?
==================

Hooks allow us to "hook" into React features such as 'state' 
and 'lifecycle' methods.

Here is an example of a Hook. Don 't worry if it doesn't make 
sense. We will go into more detail in the next section.

*/

import React, {useState} from "react";
import ReactDOM from "react-dom";

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return ( 
        <>
            <h1> My favorite color is<i style={{color}}>{ color }</i> ! </h1> 
            <button type = "button" onClick = {() => setColor("blue")}> Blue </button> 
            <button type = "button" onClick = {() => setColor("red")}> Red </button> 
            <button type = "button" onClick = {() => setColor("pink")}> Pink </button> 
            <button type = "button" onClick = {() => setColor("green")}> Green </button> 
        </>
    );
}

ReactDOM.render( < FavoriteColor /> , document.getElementById('root'));



/*
You must import Hooks from react.

Here we are using the 'useState' Hook to keep track of the application state.

State generally refers to application data or properties that need to be tracked.


Hook Rules
=============

There are 3 rules for hooks:

1- Hooks can only be called inside React function components.
2- Hooks can only be called at the top level of a component.
3- Hooks cannot be conditional


Note: Hooks will not work in React class components.


Custom Hooks
=============

If you have stateful logic that needs to be reused in several components, 
you can build your own custom Hooks.

We 'll go into more detail in the Custom Hooks section.

*/