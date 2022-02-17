import './App.css';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlaces from './places/pages/NewPlaces';

function App() {
  return (
    <Router>
      {/* for default, any path start with '/' will render this Route, so set exact */}
      {/* switch: stop rendering redirect all the time */}
      <Switch>
        <Route path="/" exact>
          <Users />
        </Route>
        <Route path="/places/new" exact>
          <NewPlaces />
        </Route>
        {/* if we don not have the path entered, it will re direct to '/ */}
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
