//dependencies
import React, {useEffect} from 'react';
import ReactDOM  from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//external styling library
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar, faMapMarkerAlt, faViruses } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

//stylings`
import './index.css'; 

//module
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Signup from './SignUp';
import UpdateProfile from './UpdateProfile';
import ForgotPassword from './ForgotPassword';
import {PrivateRoute} from './PrivateRoute';

//Context api =>> provider
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';
import {AuthProvider} from './Context/AuthContext'


//firebase....
library.add(fab, faStar, faMapMarkerAlt, faViruses);


function App() {
  

    return (
    <StateProvider initialState={initialState} reducer={reducer}>  
    <AuthProvider>
          <Router>
            <Switch>
              <PrivateRoute exact path="/checkout">
                <Header /> 
                <Checkout />
              </PrivateRoute>
              <PrivateRoute exact path="/update-profile">
                <UpdateProfile />
              </PrivateRoute>
              <Route path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/SignUp">
                <Signup />
              </Route>
              <Route path="/">
                <Header /> 
                <Home />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
    </StateProvider>  
  );
}


ReactDOM.render(<App />, document.getElementById('root'));
