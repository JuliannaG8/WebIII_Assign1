import React from 'react'
import Header from "./Header";
import Favourites from "./Favourites";
import PlayTitle from "./PlayTitle";
import Tabs from "./Tabs";
import {useState, useEffect} from "react";
import * as cloneDeep from "lodash/cloneDeep";

const PlayDetails = (props) => {

    const [play, setPlay] = useLocalStorage("plays", []);  
    const [plays, updatePlays] = useState([]);
    const [isFetching, stopFetching] = useState(true);

    //checking to see if the api retreived the characters and text
    
    useEffect(()=> {
        const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=" + {props.id}; //url to fetch data with props id
        if (play.length === 0) { //only fetches if local storage doesn't exist
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();            

                    } else {
                        //if there was no url found load the component without the character/text tabs
                        APIfound = false;
                        return(
                            <div className="default">
                                    <Header/>
                                    <Favourites />
                                    <PlayTitle />                                   
                                    <Tabs> 

                                        <div label="Details">
                                            {props.details}
                                        </div>
                                    

                                    </Tabs>
                            </div>
                            );
                    }
                })
                .then(data => {
                    
                    //places fetched data in state & local storage
                    setPlay(data.sort((a, b) => a.title>b.title ? 1 : -1));
                    updatePlays(data.sort((a, b) => a.title>b.title ? 1 : -1));
                    stopFetching(false);
                })
                .catch(error => console.error(error));
        } else {

            updatePlays(play);
            stopFetching(false);

            
           
            //if we were able to fetch successfully we return the full playdetails
            return(
                <div className="default">
                        <Header/>
                        <Favourites />
                        <PlayTitle /> 
                        <Tabs play={play}> 

                            <div label="Details">
                                {props.details}
                            </div>
                            
                            <div label="Character">
                                {play.character}
                            </div>
                            <div label="Text">
                                {play.text}
                            </div>
                                    
                        </Tabs>
                </div>
                )
        }
    }, [play, setPlay])
}


export default PlayDetails;