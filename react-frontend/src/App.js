import Welcome from "./pages/Welcome";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
