import Dice from "./components/Dice";
import { useState } from "react";
import { nanoid } from "nanoid";


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

    const [dice, setDice] = useState(getRandomDice())
    const diceElements = dice.map(die => <Dice id={die.id} value={die.value} isHeld={die.isHeld}/>)

    function rollDice(){
        setDice(getRandomDice());
    }

    return (
        <main>
            <div className="diceContainer">
                {diceElements}
            </div>
            <button className="rollDice"
                    onClick={rollDice}>
                Roll
            </button>
        </main>
    );
}