import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/HomePage/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Components/AdminPanel/Admin/Admin';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Login from './Components/Auth/Login';
import User from './Components/UserPanel/User/User';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <PrivateRoute path='/userPanel/:id'>
            <User></User>
          </PrivateRoute>
          <PrivateRoute path='/admin'>
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
