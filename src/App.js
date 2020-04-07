import React, { useState } from 'react';
import { Login } from '../src/components/login/index';
import { Home } from '../src/components/Home/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { AuthContext } from '../src/context/AuthContext';
import { ErrorContext } from './context/ErrorContext';

function App() {

  const [authState, setAuthState] = useState(false);
  const [error, setError] = useState(null);

  return (
    <Router>
      <ErrorContext.Provider value={{ error, setError }}>
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <div className="App" style={{ backgroundColor: '#ffffff' }}>
            <Switch>
              <Route path="/" exact component={Login} />
              <ProtectedRoute path="/home" exact={true} component={Home} />
            </Switch>
          </div>
        </AuthContext.Provider>
      </ErrorContext.Provider>
    </Router>
  );
}

export default App;
