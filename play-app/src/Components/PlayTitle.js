import React from 'react'
import Header from "./Header";
import FavItem from './FavItem';
import DefaultView from './DefaultView';
import { GiTheaterCurtains } from 'react-icons/gi';
import {Link} from 'react-router-dom';

const PlayTitle= props => {

return(
    <div className="default"> 
    <Header />
            <h2> {props.title} </h2>
            <div>
                {props.synopsis}
            </div>
            
            <Link to="/DefaultView"><GiTheaterCurtains/>
                <button>Close</button>
            </Link>
            <FavItem addFav={props.addFav}>
            <button> </button>
            </FavItem >
    </div>
  
)
}

export default PlayTitle;