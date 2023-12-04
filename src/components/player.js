import { useState } from "react";
export default function Player({name,symbol,symbol1,name1}){
    const [isEditing, setIsEditing] = useState(false);
    const[playName,setPlayName] = useState('initialvalue');
function handleClick(){
setIsEditing((editing)=>!editing);
}
function change(event){
    console.log(event)
    setPlayName(event.target.value)
}
let playerName = <span className="player-name" >{name}</span>;
if(isEditing === true){
    playerName = <input type="text" required value={name} onChange={change}/>
}
let playerName1 =  <span className="player-name1">{name1}</span>;
if(isEditing === true){
    playerName1 = <input type="text" required defaultValue={name1}/>
}
    return(
        <>
        
        <li>
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </li>
      <li>
       {playerName1}
        <span className="player-symbol1">{symbol1}</span>
        
      </li>
      <button className="button" onClick={handleClick}>{isEditing ? 'edit':'save'}</button>
      </>
    );
}