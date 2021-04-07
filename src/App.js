import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddProducts from "./Component/AddProducts/AddProducts";
import Home from "./Component/Home/Home";
import { createContext, useState } from "react";
import Admin from "./Component/Admin/Admin";
import PrivateRoute from "./Component/PrivateRoute/PrivateRoute";
import Login from "./Component/Login/Login";

export const UserContex = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContex.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin/addProducts">
            <AddProducts />
          </Route>
          <PrivateRoute path="/admin">
            <Admin />
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContex.Provider>
  );
}

export default App;
