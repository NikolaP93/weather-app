import React from 'react';
import { Login } from '../src/components/login/index';
import { Home } from '../src/components/Home/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <Router>
      <div className="App" style={{backgroundColor: '#ffffff'}}>
        <Switch>
          <Route path="/" exact component={Login} />
          <ProtectedRoute path="/home" exact={true} component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
