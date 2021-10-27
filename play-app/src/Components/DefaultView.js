import {useLocalStorage} from "../Hooks/useLocalStorage";
import {useState, useEffect} from "react";
import Loader from 'react-loader-spinner';


const DefaultView = (props) =>{
    const [plays, updatePlays] = useLocalStorage("plays", []);
    const [isFetching, stopFetching] = useState(true);
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
                    updatePlays(data);
                    stopFetching(false);
                })
                .catch(error => console.error(error));
        } else stopFetching(false);
    }, [plays, updatePlays])
    if (isFetching && plays.length === 0){
        return <Loader type="Circles" color="#00BFFF" height="50vh" width="50vh"/>
    } else{
        return (
            <main className="default">
                {/*<Header/>*/}
            {/*    {if (props.search){*/}
            {/*        <PlayList plays={plays} keyword={props.search}/>*/}
            {/*    }else{*/}
            {/*    <PlayList plays={plays}/>*/}
            {/*}}*/}
                {/*<Favourites/>*/}
            </main>
        )
    }
}
export default DefaultView;