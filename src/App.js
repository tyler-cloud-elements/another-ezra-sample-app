import Home from './pages/home';
import Provisioner from './pages/provisioner';
import {Redirect, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Switch>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path={'/provision'} render={props => <Provisioner {...props}/>}/>
        <Route exact path={'/home'} render={props => <Home {...props}/>}/>
      </Switch>
  );
}

export default App;
