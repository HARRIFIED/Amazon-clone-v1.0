import {
  Route,
  Redirect
} from 'react-router-dom';

import {useAuth} from './Context/AuthContext';

export function PrivateRoute({ children, ...rest }) {

  const {currentUser} = useAuth();

  return (
    <Route
      {...rest}
      render={
        ({ location }) => (
          currentUser ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: '/Login',
                state: { from: location }
              }}
            />
          ))
      }
    />
  );
}

