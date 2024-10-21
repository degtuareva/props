import React, {useState,useEffect} from "react";


export const Child=()=>{
    const [, rerender]=useState({});
    const [posts,setPosts]=useState([]);
    const [counter,setCounter]=useState(0);
    //setInterval()
    //clearInterval
    //mount
    //rerender
    //unmount
    useEffect(()=>{
    console.log('useEffect');
    // fetch('https://jsonplaceholder.typicode.com/posts')
    //   .then((rawData)=>rawData.json())
    //   .then((data)=> setPosts(data));
    const funs=(event)=>{
      console.log('KEY PRESSED');
    }
    window.addEventListener('keypress',funs);
      return()=>{
        console.log('UNMOUNT')
        window.removeEventListener('keypress',funs);
      };
},[]);

    console.log('RERENDER CHILD!');
    
    return <div>
        <h2>Child</h2>
        <h3>counter:{counter}</h3>
        <button onClick={()=>setCounter(counter+1)}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
        <button onClick={()=>rerender({})}>rerender child</button>
        
    </div>
};