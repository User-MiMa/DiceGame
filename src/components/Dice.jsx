export default function Dice(props){
    const styles={
        backgroundColor: props.isHeld ? "#48ca15" : "#f0f0f0"
    }
    function triggerHoldDie(){
        props.fn(props.id)
    }
    return(
        <button onClick={triggerHoldDie} style={styles}>{props.value}</button>
    );
}