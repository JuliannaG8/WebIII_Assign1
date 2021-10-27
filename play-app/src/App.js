import './App.css';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from "react";
import DefaultView from "./Components/DefaultView";

function App() {
    const [plays, updatePlays] = useLocalStorage("plays", [])
    useEffect(()=> {
        const url = "https://www.randyconnolly.com//funwebdev/3rd/api/shakespeare/list.php"; //url to fetch data
        if (plays.length === 0) { //only fetches if local storage doesn't exist
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error("Fetch failed");
                    }
                })
                .then(data => {
                    //places fetched data in state
                    updatePlays(data);
                })
                .catch(error => console.error(error));
        }
    })
  return (
    <div className="App">
      {/*  commented out for now so nothing breaks while testing*/}
      {/*<Route path="/home" exact component={<Home/>} />*/}
      <Route path='/default' exact component={<DefaultView/>}/>
      {/*<Switch>*/}
      {/*  <Route path='/:play' children={<PlayDetails/>}/>*/}
      {/*</Switch>*/}
    </div>
  );
}

export default App;
