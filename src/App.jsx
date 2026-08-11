import Dice from "./components/Dice";
import { useState } from "react";

export default function App(){

    function getRandomDice(){
        const diceArray=[];
        for (let i=0;i<15;i++){
            diceArray.push(Math.ceil(Math.random()*6))
        }
        return diceArray;
    }

    const [dice, setDice] = useState(getRandomDice())
    const diceElements = dice.map(num => <Dice value={num} />)

    return (
        <main>
            <div className="diceContainer">
                {diceElements}
            </div>
            <button className="rollDice">Roll</button>
        </main>
    );
}