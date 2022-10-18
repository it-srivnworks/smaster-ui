import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/welcome/NotFound";
import Welcome from "./components/welcome/Welcome";

function App() {
  console.log("-App");
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome" />
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
