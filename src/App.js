import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/welcome/NotFound";
import Welcome from "./components/welcome/Welcome";
import { Provider } from 'react-redux'
import store from './reduxstore/appStore'

function App() {
  console.log("-App");
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/app" />
        </Route>
        <Route path="/app">
        <Provider store={store}><Welcome></Welcome></Provider>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
