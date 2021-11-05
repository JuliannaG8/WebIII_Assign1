const FavItem = props=>{
    const handleClick=()=>{
        props.remove(props.play.id);
    }
    return(
        <li key={props.id}><strong>{props.play.title}</strong> <button onClick={handleClick}>Remove Favourite</button></li>
    );
}
export default FavItem;
