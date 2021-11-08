import {GiChainedHeart} from "react-icons/gi";
import {Link, useLocation} from 'react-router-dom';
import PlayDetails from "./PlayDetails";
import { GiTheaterCurtains } from "react-icons/gi";

const PlayRow=props=>{

    const location = useLocation()
    const { fromPlayRow } = location.state

    const handleClick=()=>{
        props.addFav(props.play);
    }
    return(
        <tr>
            <td>{props.play.title}</td>
            <td>{props.play.likelyDate}</td>
            <td><button onClick={handleClick}><GiChainedHeart/></button></td>
            <td>
                <Link to= {{
                    pathname: '/PlayDetails'
                    state: {
                        fromPlayRow: true
                    }
                id = {props.id} // I don't think I quite understand how this works even after watching a few videos
                }}><GiTheaterCurtains/>
                <button>View</button>
                </Link>
            </td>
        </tr>
    )
}
export default PlayRow;
