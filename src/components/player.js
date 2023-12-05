import { useState } from "react";
export default function Player({name,symbol,isActive}){
    const [isEditing, setIsEditing] = useState(false);
    const[playName,setPlayName] = useState('initialvalue');
function handleClick(){
setIsEditing((editing)=>!editing);
}
function change(event){
    console.log(event)
    setPlayName(event.target.value)
}
let playerName = <span className="player-name" >{playName}</span>;
if(isEditing === true){
    playerName = <input type="text" required value={playName} onChange={change}/>
}

    return(
        <>
        
        <li className={isActive ? 'active' :'undefined'}>
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </li>
      
        
      
      <button className="button" onClick={handleClick}>{isEditing ? 'edit':'save'}</button>
      </>
    );
}