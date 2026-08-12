export default function Dice(props){
    const styles={
        backgroundColor: props.isHeld ? "#48ca15" : "#f0f0f0"
    }
    function triggerHoldDie(){
        props.fn(props.id)
    }
    return(
        <button 
        onClick={triggerHoldDie} 
        style={styles}
        aria-pressed={props.isHeld}
        aria-label={`This die has the value ${props.value}, 
        ${props.isHeld ? "Held" : "Not held"}`}>
            {props.value}</button>
    );
}