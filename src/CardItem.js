import React from "react";

//dum
export const CardItem =({id,name,age,phone,onDeletePerson})=> {
    return(
        <div>
            <hr/>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{phone}</p>
            <button onClick={()=>onDeletePerson(id)}>delete</button>
            <hr/>
        </div>
    )
};


