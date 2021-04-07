import React, { useContext } from "react";
import { UserContex } from "../../App";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContex);
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          loggedInUser.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
