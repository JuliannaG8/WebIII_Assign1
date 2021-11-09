import React from 'react'
import Header from "./Header";
import PlayTitle from "./PlayTitle";
import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import Tab from "./Tab";

const PlayDetails = (props) => {
    const {play:id} = useParams();
    const location = useLocation();
    const {play:details} = location.state;
    const [currentTab, changeCurrentTab] = useState("Details");
    const [searchParams, editSearchParams] = useState({});
    const changeTabState = (tab, acts = null, scenes = null, speakers = null) =>{
        if (tab === "Text"){
            setupSearch(acts, scenes, speakers);
            changeCurrentTab(tab);
        } else if(tab === "Details") {
            changeCurrentTab("Details");
        } else {
            changeCurrentTab("Characters");
        }

    }

    const setupSearch = (acts, scenes, speakers)=>{
        editSearchParams({acts: acts, scenes: scenes, speakers: speakers})
    }

    return (
        <div className="detailView">
            <Header/>
            <PlayTitle play={details} addFav={props.addFav} current={currentTab} params={searchParams}/>
            <Tab play={details} id={id} tabState={changeTabState}/>
        </div>
    )
}


export default PlayDetails;
