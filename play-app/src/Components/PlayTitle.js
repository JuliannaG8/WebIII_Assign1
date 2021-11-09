import React from 'react';
import {Link} from 'react-router-dom';
import {GiChainedHeart} from "react-icons/gi";
import './DetailView.css';

const PlayTitle= props => {
    const handleClick = ()=>{
        props.addFav(props.play);
    }
    if (props.current === "Text"){
        return (
            <div className="titlebox">
            <h2> {props.play.title} </h2>
            <select>
                {props.params.acts.map(a=><option>{a}</option>)}
            </select>
                <select>
                    {props.params.scenes.map(sc=><option>{sc}</option>)}
                </select>
                <select>
                    {props.params.speakers.map(sp=><option>{sp}</option>)}
                </select>
                <input type="text" className="stringtype"/>       
            <Link to={{
                pathname: "/default",
                state: {
                    fromHomeView: null
                }
            }}>
                <button>Go Back</button>
            </Link>
            <button onClick={handleClick}><GiChainedHeart/></button>
        </div>
        )
    }
    else {
        return (
            <div className="titletext">
                <h2> {props.play.title} </h2>
                <div className="synopsis">
                    {props.play.synopsis}
                </div>

                <Link to={{
                    pathname: "/default",
                    state: {
                        fromHomeView: null
                    }
                }}>
                    <button>Go Back</button>
                </Link>
                <button onClick={handleClick}><GiChainedHeart/></button>
            </div>

        )
    }
}

export default PlayTitle;
