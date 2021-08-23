import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <p>home</p>
          </Route>
          <Route exact path="/aboutme">
            <p>about</p>
          </Route>
          <Route exact path="/projects">
            <p>projects</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
