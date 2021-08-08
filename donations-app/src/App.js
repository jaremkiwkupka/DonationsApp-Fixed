import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Registration } from "./components/Registration/Registration";
import { Donate } from "./components/Donate/Donate";

function App() {
  return (
    <Router>
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
        <Route path="/donate">
          <Donate />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
