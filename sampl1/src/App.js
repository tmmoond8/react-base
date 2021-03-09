import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PageA from './PageA';
import PageB from './PageB';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/a" component={PageA}/>
        <Route path="/b" component={PageB}/>
      </Switch>
      <div><Link to="/a">a</Link></div>
      <div><Link to="/b">b</Link></div>
    </Router>
  );
}

export default App;
