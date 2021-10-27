const PlayRow=props=>{
    return(
        <tr>
            <td>{props.play.title}</td>
            <td>{props.play.likelyDate}</td>
            <td><button>Favorite</button></td>
            <td><button>View</button></td>
        </tr>
    )
}
export default PlayRow;