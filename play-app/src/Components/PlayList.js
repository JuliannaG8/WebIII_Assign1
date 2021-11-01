import PlayTable from "./PlayTable";
const PlayList = props =>{
    if (typeof props.search === "string"){
        const filteredPlays = props.plays.filter(p=> p.title.toLowerCase().includes(props.search.toLowerCase()))
        return(
            <span>
                <h2>List/Matches</h2>
                <PlayTable plays={filteredPlays} sort={props.sort}/>
            </span>
        )
    } else {
        return (
            <span>
                <h2>List/Matches</h2>
                <PlayTable plays={props.plays} sort={props.sort}/>
            </span>
        )
    }
}
export default PlayList;