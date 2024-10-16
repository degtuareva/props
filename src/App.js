
import React,{useState} from "react";
import { data } from "./data";
import { CardItem } from "./CardItem";
import {UserForm} from "./UserForm";


export const App= () => {
  const[persons, setPersons] = useState(data);
  
  const onDeletePerson=(personId)=>{
    console.log(personId)
    setPersons((prevPersons)=>
      prevPersons.filter((person)=>person.id!==personId));
};
const onUserAdd=(userObj)=>{
  setPersons((prevPersons)=>[...prevPersons,userObj])
};
return<>
<div>hello,world</div>
<UserForm onUserAdd={onUserAdd}/>
{persons.map((person)=> 
<CardItem {...person} key={person.id} onDeletePerson={()=>onDeletePerson(person.id)}/>)}
</>
};