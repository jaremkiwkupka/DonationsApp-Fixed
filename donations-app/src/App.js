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
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/registration" component={ Registration } />
        <Route path="/logout" component={ Logout } />
        <Route path="/donate" component={ Donate } />
      </Switch>
    </Router>
  );
}

export default App;
