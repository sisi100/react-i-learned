import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LocalStorageDemoPage } from "./pages/LocalStorageDemoPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/local-storage-demo-page">
          <LocalStorageDemoPage />
        </Route>
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
      <p>
        <Link to="/hoge">ほげページへ</Link>
      </p>
      <p>
        <Link to="/local-storage-demo-page">ローカルストレージデモページへ</Link>
      </p>
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
