import './App.css';
import React, {Fragment, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile'
// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'



if(localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  useEffect(() => { 
    store.dispatch(loadUser())
  }, []);

  return (
    <Provider store={store}>
    <Router>
   <Fragment>
     <Navbar />
     <Routes>
     <Route exact path="/" element={ <Landing />} />
     <Route exact path="/register" element={ <Register />} />
     <Route exact path="/login" element={ <Login />} />
     <Route exact path="/dashboard" element={ <PrivateRoute> <Dashboard /> </PrivateRoute>} />
     <Route exact path="/create-profile" element={ <PrivateRoute> <CreateProfile /> </PrivateRoute>} />
     </Routes>
   </Fragment>
   </Router>
   </Provider>
  );
}

export default App;
