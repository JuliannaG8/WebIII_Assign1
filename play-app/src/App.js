import './App.css';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from "react";
import {useLocalStorage} from "./Hooks/useLocalStorage";
import DefaultView from "./Components/DefaultView";

function App() {
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
