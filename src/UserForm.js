import React,{useState} from "react";

export const UserForm=({onUserAdd})=>{
    const[userInfo,setUserInfo]=useState({name:"",age:"",phone:""});
    


    
    const onUserInfoChange=({target})=>{
    setUserInfo((prevUserInfo)=>({
        ...prevUserInfo,
        [target.name]:target.value
    }));
    };
    const onSubmitClick=()=>{
        onUserAdd({id:Math.random(),...userInfo})}
    return(
        <div>
            <input type="text" name="name" onChange={onUserInfoChange}value={userInfo.name}/>
            <input type="text" name="age" onChange={onUserInfoChange}value={userInfo.age}/>
            <input type="text" name="phone" onChange={onUserInfoChange}value={userInfo.phone}/>
            <button onClick={onSubmitClick}>OK</button>
            
        </div>
        



        
    )
}