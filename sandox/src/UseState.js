import {useState} from "react";

 export function FavoriteColor() {
    const [color, setColor] = useState("red");

    return ( 
        <>
            <h1> My favorite color is <i style={{color}}>{ color }</i> ! </h1> 
            <button type = "button" onClick = {() => setColor("blue")}> Blue </button> 
            <button type = "button" onClick = {() => setColor("red")}> Red </button> 
            <button type = "button" onClick = {() => setColor("pink")}> Pink </button> 
            <button type = "button" onClick = {() => setColor("green")}> Green </button> 
            <button type = "button" onClick = {() => setColor("orange")}> Orange </button> 
        </>
    );
}

//---------------------------------------------------------------------------

export function FavoriteColor2() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button" onClick={() => setColor("blue")}> Blue </button>
    </>
  )
}

//---------------------------------------------------------------------------

export function Car() {
    const [brand, setBrand] = useState("Ford");
    const [model, setModel] = useState("Mustang");
    const [year, setYear] = useState("1964");
    const [color, setColor] = useState("red");
    
    return (
        <>
      <h1>My {brand}</h1>
      <p> It is a {color} {model} from {year}. </p>
    </>
  )
}

//---------------------------------------------------------------------------

export function Car2() {
    const [car, setCar] = useState({
        brand: "Ford",
      model: "Mustang",
      year: "1964",
      color: "red"
    });
    
    return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}.
      </p>
    </>
  )
}

//---------------------------------------------------------------------------

export function Car3() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
    color: "red"
});

const updateColor0 = () => { // This is not good in Async cases
    setCar({...car, color: "blue"} );
}

const updateColor1 = () => { // GOod !
    setCar( () => {
        return { ...car, color: "green" }
    });
}

const updateColor2 = () => { // GOod !
    setCar( (previousState) => {
        return { ...previousState, color: "orange" }
    });
}

const {color} = car;

return (
    <>
      <h1>My {car.brand}</h1>
      <p>
        It is a <span style={{color, textTransform:'capitalize'}}>{color}</span> {car.model} from {car.year}.
      </p>
      <button type="button" onClick={updateColor0} >Blue</button>
      <button type="button" onClick={updateColor1} >Green</button>
      <button type="button" onClick={updateColor2} >Orange</button>
    </>
  )
}