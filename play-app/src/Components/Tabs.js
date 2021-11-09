
const Tabs = props =>{
    if (props.tabName === "Details"){
        return(
            <div>
                <p>Likely Year: {props.details.likelyDate}</p>
                <p> Genre: {props.details.genre}</p>
                <p>Wiki: {props.details.wiki}, Gutenberg: {props.details.gutenberg}, ShakespeareOrg: {props.details.shakespeareOrg}</p>
                <p>{props.details.desc}</p>
            </div>
        )
    } else if(props.tabName === "Characters"){
        return (
            <ul>
                {props.details.map(p=><li key={p}>{p.player}--------{p.desc}</li>)}
            </ul>
        )
    }
    else{
        return (
            <div>
                {props.details.map(act=>{
                    return(
                        <span>
                            <hr/>
                        <h3>{act.name}</h3>
                        {act.scenes.map(sc=>{
                            return(
                                <span>
                                    <h3>{sc.name}</h3>
                                    <p><em>{sc.title}</em></p>
                                    {sc.speeches.map(sp=>{
                                        return(
                                            <div>
                                                <h3>{sp.speaker}</h3>
                                                {sp.lines.map(l=><p>{l}</p>)}
                                            </div>
                                        )
                                    })}
                                    <hr/>
                                </span>
                            )
                        })}
                        </span>
                    )
                })}
            </div>
        )
    }
}

export default Tabs;
