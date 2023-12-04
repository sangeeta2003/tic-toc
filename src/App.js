import Player from "./components/player"
export default function App(){
  return(
<main>
<div className="heading">
TIC_TAC_TOE
   </div>
  <div id="game-container">
   
    <ol id="players">
      <Player name="player-1" symbol="X"/>
<Player name1="player-2" symbol1="0"/>
    </ol>

Game Board
  </div>

</main>
    
  )
}
