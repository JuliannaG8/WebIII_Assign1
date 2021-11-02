import {useLocalStorage} from "../Hooks/useLocalStorage";
import {useState, useEffect} from "react";
import Loader from 'react-loader-spinner';
import PlayList from "./PlayList";
import PlayFilter from "./PlayFilter";
import * as cloneDeep from 'lodash/cloneDeep';


const DefaultView = (props) =>{
    //plays is passed to other components and altered in filter method, while fullPlaysList contains the full list of
    //plays set in local storage and does not get altered in order to preserve the full list and prevent situations where
    //the user closes the browser without resetting the filtered list
    const [fullPlaysList, setFullPlaysList] = useLocalStorage("plays", []);
    const [plays, updatePlays] = useState([]);
    const [isFetching, stopFetching] = useState(true);
    const genres = [...new Set(plays.map(p=>p.genre))];

    useEffect(()=> {
        const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php"; //url to fetch data
        if (fullPlaysList.length === 0) { //only fetches if local storage doesn't exist
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Fetch failed");
                    }
                })
                .then(data => {
                    //places fetched data in state & local storage
                    setFullPlaysList(data.sort((a, b) => a.title>b.title ? 1 : -1));
                    updatePlays(data.sort((a, b) => a.title>b.title ? 1 : -1));
                    stopFetching(false);
                })
                .catch(error => console.error(error));
        } else {
            updatePlays(fullPlaysList);
            stopFetching(false);
        }
    }, [fullPlaysList, setFullPlaysList])

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
    //uses fullPlaysList state variable to reset plays
    const restorePlays = ()=>{
        updatePlays(fullPlaysList);
    }

    const filter = filters =>{
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
        let filteredPlays = plays.filter(p=> (p.title.toLowerCase().includes(filters.title.toLowerCase()) && p.genre === filters.genre) ||
            (typeof filters.genre === "undefined" && p.title.toLowerCase().includes(filters.title.toLowerCase())) ||
            (typeof filters.title === "undefined" && p.genre === filters.genre));
        //only filters by dates if either before or after year is specified
        if (typeof filters.before != "undefined" || typeof filters.after != "undefined"){
            const filterByDate = cloneDeep(filteredPlays);
            filteredPlays = filterPlaysByDate(parseInt(filters.before), parseInt(filters.after), filterByDate);
        }
        //sets the list of filtered plays to state
        updatePlays(filteredPlays);
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
