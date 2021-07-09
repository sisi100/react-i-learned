import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/hoge">
          <Hoge />
        </Route>
        <Route path="/">
          <Hello />
        </Route>
      </Switch>
    </Router>
  );
}

function Hello() {
  return (
    <div>
      <h1>ハローワールド</h1>
      <Link to="/hoge">ほげページへ</Link>
    </div>
  );
}

function Hoge() {
  return (
    <div>
      <h1>ほげほげ</h1>
      <Link to="">トップページへ</Link>
    </div>
  );
}

export default App;
