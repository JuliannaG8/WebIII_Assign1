import './App.css';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route path="/home" exact component={<Home/>} />
      <Route path='/default' exact component={<Default/>}/>
      <Switch>
        <Route path='/:play' children={<PlayDetails/>}/>
      </Switch>
    </div>
  );
}

export default App;
