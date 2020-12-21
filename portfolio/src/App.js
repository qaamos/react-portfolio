import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import About from './About.js';
import Info from './Info.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Route exact path="/" component={Info} />
      <Route path="/about" component={About} />

      <div className="navigation">
        <div className="navigation-sub">

        <ul>
          <li> <Link to="/" className="item">Info</Link> </li>
          <li> <Link to="/about" className="item">About</Link> </li>
        </ul>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
