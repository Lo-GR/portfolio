import '../styles/Global.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import AboutMe from "./AboutMe"
import ScrollToTop from '../components/shared/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/aboutme">
            <AboutMe />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
