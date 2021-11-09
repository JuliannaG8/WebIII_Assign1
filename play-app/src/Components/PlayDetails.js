import React from 'react'
import Header from "./Header";
import Favourites from "./Favourites";
import PlayTitle from "./PlayTitle";
import Tabs from "./Tabs";
import {useState, useEffect} from "react";
import * as cloneDeep from "lodash/cloneDeep";
import {useLocation, useParams} from "react-router-dom";
import {useLocalStorage} from "../Hooks/useLocalStorage";
import Loader from "react-loader-spinner";

const PlayDetails = (props) => {
    const {play:id} = useParams();
    const location = useLocation();
    const {play:details} = location.state;
    const [play, setPlay] = useLocalStorage(id, null);
    const [current, changeCurrent] = useState("Details");
    const [isFetching, stopFetching] = useState(true);

    //checking to see if the api retreived the characters and text

    useEffect(()=> {
        const url = `https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=${id}`; //url to fetch data with props id
        if (play === null){
            fetch(url)
                .then(resp=>{
                if (resp.ok) {
                    return resp.json();
                }
                else {
                    throw new Error("Fetch failed");
                }
            }).then(data=>{
                setPlay(data);
                stopFetching(false);
            })
                .catch(error=>console.error(error));
        } else {
            stopFetching(false);
        }

    }, [id, play, setPlay])


    if (isFetching){
        return <Loader type="Circles" color="#00BFFF" height="50vh" width="50vh"/>
    }
    else
    {
        return (
            <div className="detailView">
                <Header/>
                <PlayTitle play={details} addFav={props.addFav}/>
            </div>
        )
    }
}


export default PlayDetails;
