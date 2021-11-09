import {GiChainedHeart} from "react-icons/gi";
import {Link} from 'react-router-dom';

const PlayRow=props=>{

    const handleClick=()=>{
        props.addFav(props.play);
    }
    return(
        <tr>
            <Link to= {{
                pathname: `/${props.play.id}/details`,
                state: {
                    play: props.play
                }
            }}><td>{props.play.title}</td></Link>
            <td>{props.play.likelyDate}</td>
            <td><button onClick={handleClick}><GiChainedHeart/></button></td>
            <td>
                <Link to= {{
                    pathname: `/${props.play.id}/details`,
                    state: {
                        play: props.play
                    }
                }}>
                <button>View</button>
                </Link>
            </td>
        </tr>
    )
}
export default PlayRow;
