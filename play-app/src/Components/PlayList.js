import PlayTable from "./PlayTable";
const PlayList = props =>{
    if (typeof props.search === "string"){
        const filteredPlays = props.plays.filter(p=> p.title.toLowerCase().includes(props.search.toLowerCase()))
        return(
            <div>
                <h2>List/Matches</h2>
                <PlayTable plays={filteredPlays}/>
            </div>
        )
    } else {
        return (
            <div>
                <h2>List/Matches</h2>
                <PlayTable plays={props.plays}/>
            </div>
        )
    }
}
export default PlayList;