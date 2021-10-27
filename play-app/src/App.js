import './App.css';
import {Route, Switch} from 'react-router-dom';
import {useState, useEffect} from "react";
import DefaultView from "./Components/DefaultView";

function App() {

  return (
    <div className="App">
        <DefaultView/>
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
