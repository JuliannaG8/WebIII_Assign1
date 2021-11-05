import {useLocalStorage} from "../Hooks/useLocalStorage";
import {useState, useEffect} from "react";
import Loader from 'react-loader-spinner';
import PlayList from "./PlayList";
import PlayFilter from "./PlayFilter";
import * as cloneDeep from 'lodash/cloneDeep';
import Header from "./Header";
import Favourites from "./Favourites";

const DefaultView = (props) =>{
        const [favourites, editFavourites] = useState([]);
        const [favouritesVisibility, editFavouritesVisibility] = useState(true);
        const addFavourite=(play)=>{
                const favouritesCopy = cloneDeep(favourites);
                favouritesCopy.push(play);
                editFavourites(favouritesCopy);
        }
        const removeFavourite=(id)=>{
                const favouritesCopy = cloneDeep(favourites);
                const favToDelete=favouritesCopy.findIndex(f=>f.id === id);
                favouritesCopy.splice(favToDelete, 1);
                editFavourites(favouritesCopy);
        }
        return (
            <div className="default">
                <Header/>
                <PlayFilter genres={[...new Set(props.plays.map(p=>p.genre))]} filter={props.filter} reset={props.restore}/>
                <PlayList plays={props.plays} search={props.search} sort={props.sort} addFav={addFavourite}/>
                <Favourites favourites={favourites} visible={favouritesVisibility} remove={removeFavourite}/>
            </div>
        )
}
export default DefaultView;
