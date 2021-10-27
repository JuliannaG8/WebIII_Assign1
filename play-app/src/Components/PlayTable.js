import PlayRow from "./PlayRow";
const PlayTable=props=>{
    return(
        <table>
            <tr>
                <th>Title</th>
                <th>Year</th>
            </tr>
            {props.plays.map(p=><PlayRow play={p} key={p.id}/>)}
        </table>
    )
}
export default PlayTable;