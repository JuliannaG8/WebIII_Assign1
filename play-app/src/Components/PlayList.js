
const PlayList = props =>{
    if (typeof props.search === "string"){
        const filteredPlays = props.plays.filter(p=> p.title.toLowerCase().includes(props.search.toLowerCase()))
        return(
            <div>
                {filteredPlays.map(p=><p>{p.title}</p>)}
            </div>
        )
    } else {
        return (
            <div>
                {props.plays.map(p => <p>{p.title}</p>)}
            </div>
        )
    }
}
export default PlayList;