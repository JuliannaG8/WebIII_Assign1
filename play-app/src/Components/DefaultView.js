import {useLocalStorage} from "../Hooks/useLocalStorage";
import {useState, useEffect} from "react";
import Loader from 'react-loader-spinner';
import PlayList from "./PlayList";
import PlayFilter from "./PlayFilter";
import * as cloneDeep from 'lodash/cloneDeep';

const DefaultView = (props) =>{
    const [plays, updatePlays] = useLocalStorage("plays", []);
    const [isFetching, stopFetching] = useState(true);
    const genres = [...new Set(plays.map(p=>p.genre))];
    useEffect(()=> {
        const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php"; //url to fetch data
        if (plays.length === 0) { //only fetches if local storage doesn't exist
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Fetch failed");
                    }
                })
                .then(data => {
                    //places fetched data in state
                    updatePlays(data.sort((a, b) => a.title>b.title ? 1 : -1));
                    stopFetching(false);
                })
                .catch(error => console.error(error));
        } else stopFetching(false);
    }, [plays, updatePlays])
    const sort = (e)=>{
        const sortedPlays = cloneDeep(plays);
        let sortBy;
        if(e.target.textContent.toLowerCase() === "year")
            sortBy="likelyDate";
        else
            sortBy=e.target.textContent.toLowerCase();
        sortedPlays.sort((a, b) => a[sortBy]>b[sortBy] ? 1 : -1);
        updatePlays(sortedPlays);
    }
    let playList = <PlayList plays={plays} sort={sort}/>
    if (typeof props.search === "string"){
        playList = <PlayList plays={plays} search={props.search}/>
    }

    if (isFetching && plays.length === 0){
        return <Loader type="Circles" color="#00BFFF" height="50vh" width="50vh"/>
    } else{
        return (
            <div className="default">
                {/*<Header/>*/}
                <PlayFilter genres={genres}/>
                {playList}
                {/*<Favourites/>*/}
            </div>
        )
    }
}
export default DefaultView;