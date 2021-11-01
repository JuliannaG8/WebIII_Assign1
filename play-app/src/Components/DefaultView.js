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
    const [oldPlays, setOldPlays] = useState([]);

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
        //cloning plays list
        const sortedPlays = cloneDeep(plays);
        let sortBy;
        //if sorting by year, sets sortBy variable to likelyDate
        //otherwise, sortBy variable is set to title
        if(e.target.textContent.toLowerCase() === "year")
            sortBy="likelyDate";
        else
            sortBy=e.target.textContent.toLowerCase();
        sortedPlays.sort((a, b) => a[sortBy]>b[sortBy] ? 1 : -1);
        updatePlays(sortedPlays);
    }
    //uses oldPlays state variable to reset plays
    const restorePlays = ()=>{
        updatePlays(oldPlays);
    }

    const filter = filters =>{
        //setting fetched list of plays in separate state variable
        setOldPlays(plays);
        //separate function to filter list by dates
        const filterPlaysByDate = (before, after, filteredPlays) => {
            //only returns plays whose years are between before and after years when both are specified,
            //or only matches the parameters of one when the other is missing
            return filteredPlays.filter((p)=> (before > p.likelyDate && p.likelyDate > after) ||
                (typeof after === "undefined" && p.likelyDate < before) ||
                (typeof before === "undefined" && p.likelyDate > after));
        }
        //only returns plays that match both title and genre when both are specified,
        //or only matches the parameters of one when the other is missing
        let filteredPlays = plays.filter(p=> (p.title === filters.title && p.genre === filters.genre) ||
            (typeof filters.genre === "undefined" && p.title === filters.title) ||
            (typeof filters.title === "undefined" && p.genre === filters.genre));
        //only filters by dates if either before or after year is specified
        if (typeof filters.before != "undefined" || typeof filters.after != "undefined"){
            const filterByDate = cloneDeep(filteredPlays);
            filteredPlays = filterPlaysByDate(parseInt(filters.before), parseInt(filters.after), filterByDate);
        }
        //if no plays match given parameters, gives the user an alert
        //otherwise sets the list of filtered plays to state
        if(filteredPlays.length === 0){
            alert("No plays match the provided parameters");
        } else {
            updatePlays(filteredPlays);
        }
    }
    //while fetching data, displays loading symbol
    if (isFetching && plays.length === 0){
        return <Loader type="Circles" color="#00BFFF" height="50vh" width="50vh"/>
    } else{
        return (
            <div className="default">
                {/*<Header/>*/}
                <PlayFilter genres={genres} filter={filter} reset={restorePlays}/>
                <PlayList plays={plays} search={props.search} sort={sort} />
                {/*<Favourites/>*/}
            </div>
        )
    }
}
export default DefaultView;
