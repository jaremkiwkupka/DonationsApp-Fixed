import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import {Home} from "./components/Home/Home";
import {Login} from "./components/Login/Login";
import {Logout} from "./components/Logout/Logout";
import {Registration} from "./components/Registration/Registration";

function App() {
  return (
      <>
        <Router>
          <Home />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/registration">
              <Registration />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
          </Switch>
        </Router>
      </>
  );
}

export default App;
