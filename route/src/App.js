import './App.css';
import Nav from './Nav.js';
import Shop from './Shop';
import About from './About';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/about" exact component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
