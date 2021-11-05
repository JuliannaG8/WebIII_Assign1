const FavItem = props=>{
    return(
        <li key={props.id}><strong>{props.play.title}</strong> <button>Remove Favourite</button></li>
    );
}
export default FavItem;
