import Dice from "./components/Dice";
import { useState, useRef, useEffect } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";


export default function App(){

    function getRandomDice(){
        const diceArray=[];
        for (let i=0;i<15;i++){
            diceArray.push(
                {
                    id: nanoid(),
                    value: Math.ceil(Math.random()*6),
                    isHeld: false
                }
            )
        }
        return diceArray;
    }

    const [dice, setDice] = useState(()=>getRandomDice())
    const diceElements = dice.map(die => <Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} fn={holdDie}/>)

    function rollDice(){
        setDice(
            oldDice => oldDice.map(
                oldDie => oldDie.isHeld ? oldDie : {...oldDie, value: Math.ceil(Math.random()*6)}
            )
        );
    }

    function holdDie(id){
        setDice(
            actualDice=>actualDice.map(
                desiredDie => desiredDie.id === id ? {...desiredDie, isHeld: !desiredDie.isHeld} : desiredDie
            )
        )
    }

    const gameWon = dice.every(die=>die.isHeld) && dice.every(die=>die.value===dice[0].value);

    function newGame(){
        setDice(getRandomDice)
    }

    const newGameButtonRef=useRef(null)

    useEffect(()=>{
        if(gameWon){ newGameButtonRef.current.focus() }
    }
    ,[gameWon])

    return (
        <main>
            {gameWon && <Confetti />}
            <div aria-live="polite" className="accessibility-announcement">
                {gameWon && <p>You won! Press "New Game" to start again.</p>}
            </div>
            <div className="diceContainer">
                {diceElements}
            </div>
            <button ref={newGameButtonRef}
                    className="rollDice"
                    onClick={gameWon ? newGame: rollDice}>
                {gameWon ? "New Game" : "Roll"}
            </button>
        </main>
    );
}