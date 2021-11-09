import React, {useState} from "react";
import PlayList from "./PlayList";
import PlayFilter from "./PlayFilter";
import * as cloneDeep from 'lodash/cloneDeep';
import Header from "./Header";
import Favourites from "./Favourites";
import {useParams, useLocation} from 'react-router-dom';
import {useLocalStorage} from "../Hooks/useLocalStorage";

const DefaultView = (props) =>{

        //Since we have to pass in values to the default view the default view
        //needs a way to be able to take the useparams and uselocation hooks
        // const { handle } = useParams()
        const location = useLocation()
        const { fromHomeView } = location.state
        // const [state, setState] = React.useState(null)


        // const [favourites, editFavourites] = useLocalStorage("",[]);
        const [favouritesVisibility, editFavouritesVisibility] = useState(true);

        const toggleVisibility=()=>{
                if(favouritesVisibility)
                        editFavouritesVisibility(false);
                else
                        editFavouritesVisibility(true);
        }

        const playlist=fromHomeView===null ? props.plays : fromHomeView;

        return (
            <div className="default">
                <Header/>
                <Favourites favourites={props.favs} visible={favouritesVisibility} remove={props.removeFav} toggle={toggleVisibility}/>
                <PlayFilter genres={[...new Set(props.plays.map(p=>p.genre))]} filter={props.filter} reset={props.restore}/>
                <PlayList plays={playlist} search={props.search} sort={props.sort} addFav={props.addFav}/>
            </div>
        )
}
export default DefaultView;
