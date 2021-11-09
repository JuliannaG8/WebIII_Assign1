import React from 'react'
import FavItem from './FavItem';
import {Link} from 'react-router-dom';
import {GiChainedHeart} from "react-icons/gi";

const PlayTitle= props => {

return(
    <div className="default">
            <h2> {props.play.title} </h2>
            <div>
                {props.play.synopsis}
            </div>

            <Link to={{
                pathname: "/default",
                state:{
                    fromHomeView: null
                }
            }}>
                <button>Close</button>
            </Link>
            <button onClick={props.addFav(props.play)}><GiChainedHeart/></button>
    </div>

)
}

export default PlayTitle;
