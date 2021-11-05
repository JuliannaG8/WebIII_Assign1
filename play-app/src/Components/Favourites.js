import FavItem from "./FavItem";

const Favourites= props=>{
    return(
        <div>
            <button>Show/hide Favourites List</button>
            <h2 aria-hidden={props.visible}>Favourites</h2>
            <ul aria-hidden={props.visible}>
                {props.favourites.map(f=><FavItem key={f.id} play={f} remove={props.remove}/>)}
            </ul>
        </div>
    )
}
export default Favourites;
