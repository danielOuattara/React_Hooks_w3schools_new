import './App.css';
import { FavoriteColor, FavoriteColor2, Car, Car2, Car3 } from './UseState';
import {Timer, Timer2, Counter, TimerCleanUp} from './UseEffect';
import {Component1, Component1Context} from './UseContext';
import { CountRender, FocusDOMElement, TrackingStateChange } from './UseRef';
import { Todos } from './UseReducer';




function App() {
  return (
    <> 
        {/* 01: useState*/}

        <FavoriteColor/>
        <hr />
        <FavoriteColor2/>
        <hr />
        <Car/>
        <hr />
        <Car2/>
        <hr />
        <Car3/>

        <hr />
        <hr />

        {/* 02: useEffect */}

        {/* <Timer /> */}
        <Timer2/>
        <Counter />
        <TimerCleanUp />

        <hr />
        <hr />

        {/* 03:  useContext*/}

        <Component1 />
        <hr />
        <Component1Context />

        <hr />
        <hr />

        {/* 04: useRef */}

        <CountRender />
        <hr />
        <FocusDOMElement />
        
        <hr />

        <TrackingStateChange />

        <br />
        <br />

        <Todos />



    </>
  
  );
}


export default App;