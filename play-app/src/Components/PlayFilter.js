const PlayFilter=props=>{
    const handleSubmit =(e) => {

    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Filters</h2>
            <div>
                <p><label>Title</label></p>
            <input name="title" type='text'/>
            </div>
            <div>
                <p><label>Year</label></p>
                <p><input name="before" type='radio'/>Before <input type="text" name="beforeYear"/></p>
                <p><input name="after" type='radio'/>After <input type='text' name="afterYear"/></p>
            </div>
        </form>
    )

}
export default PlayFilter;