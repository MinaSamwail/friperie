import "./App.css";
import { Switch, Route } from "react-router-dom";
import NavMain from "./components/NavMain";
import Home from "./views/Home";
import Card from "./components/Card";
import Panier from "./views/Panier";
function App() {
  return (
    <div className="app">
      <NavMain />
      <Switch>
        <Route exact path="/panier" component={Panier} />
        <Route exact path="/details" component={Card} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
