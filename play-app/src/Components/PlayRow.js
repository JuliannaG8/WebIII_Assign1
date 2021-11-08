import {GiChainedHeart} from "react-icons/gi";
const PlayRow=props=>{
    const handleClick=()=>{
        props.addFav(props.play);
    }
    return(
        <tr>
            <td>{props.play.title}</td>
            <td>{props.play.likelyDate}</td>
            <td><button onClick={handleClick}><GiChainedHeart/></button></td>
            <td><button>View</button></td>
        </tr>
    )
}
export default PlayRow;
