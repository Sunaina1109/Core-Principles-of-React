import { useEffect, useState } from "react"

export default function Counter(){
let [countx, setCountx] = useState(0);
let [county, setCounty] = useState(0);
let inCountx= ()=>{
    setCountx (currCount => currCount +1);
};
let inCounty= ()=>{
    setCounty (currCount => currCount +1);
};

//useeffect ka use kar ke backend me re-rendering ko handling kar sakte hai...
useEffect(function printSomething(){
 console.log("print use-effect")
},
  [countx]
);

    return (
        <div>
        <h1>Count={countx}</h1>
        <button onClick={inCountx}>+1</button>
        
        {/* <h1>Count={county}</h1>
        <button onClick={inCounty}>+1</button> */}
        <hr></hr>
        </div>

    )

}