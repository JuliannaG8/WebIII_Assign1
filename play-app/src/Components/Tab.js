import {useLocalStorage} from "../Hooks/useLocalStorage";
import {useEffect, useState} from "react";
import Tabs from "./Tabs";
import Loader from "react-loader-spinner";
import './DetailView.css';

const Tab = (props)=>{

    const [play, setPlay] = useLocalStorage(props.id, null);
    const [isFetching, stopFetching] = useState(true);
    const [buttons, changeButtons] = useState([]);
    const [tabProps, changeTabProps] = useState({})
    
    const checkButtons = ()=>{
        if (props.play.filename === ""){
            changeButtons(["Details"]);
        } else {
            changeButtons(["Details", "Characters", "Text"]);
        }
    }
    useEffect(()=> {
        const url = `https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/play.php?name=${props.id}`; //url to fetch data with props id
        if (play === null && props.play.filename !== ""){
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
                checkButtons();
                changeTabProps({details: props.play, tabName: "Details"});
                stopFetching(false);
            })
                .catch(error=>console.error(error));
        } else {
            stopFetching(false);
            checkButtons();
            changeTabProps({details: props.play, tabName: "Details"});
        }

    }, [props.id, play, setPlay, props.play]);

    const handleTabChange = (e)=>{
        if(e.target.innerHTML === "Details") {
            changeTabProps({details: props.play, tabName: "Details"});
            props.tabState(e.target.innerHTML);
        }else if(e.target.innerHTML === "Characters") {
            changeTabProps({details: play.persona, tabName: "Characters"});
            props.tabState(e.target.innerHTML);
        }else if(e.target.innerHTML === "Text") {
            changeTabProps({details: play.acts, tabName: "Text"});
            let acts = [];
            let scenes = [];
            const char = play.persona.map(p=>p.player);
            play.acts.forEach(a=>{
                acts.push(a.name);
                a.scenes.forEach(s=>{
                    scenes.push(s);
                })
            })
            props.tabState(e.target.innerHTML, acts, [...new Set(scenes.map(s=>s.name))], char);
        }
    }
    if (isFetching)
        return <Loader type="Circles" color="#00BFFF" height="50vh" width="50vh"/>
    else {
        return (
            <div>
                <span className="tabs">{buttons.map(b => <button onClick={handleTabChange}>{b}</button>)}</span>
                <Tabs {...tabProps} key = {props.id}/>
            </div>
        )
    }
}

export default Tab;