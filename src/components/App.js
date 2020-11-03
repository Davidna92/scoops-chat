import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Feed from './Feed/Feed';
import Login from './Auth/Login';
import Reporters from './Reporters/Reporters';
import { AuthProvider } from '../auth';
import PrivateRoute from '../PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Feed} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/Reporters" component={Reporters} />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
