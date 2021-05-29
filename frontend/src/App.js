// import logo from './logo.svg';
import "./App.css";


import Form from "./components/Form/Form";
import Main from "./components/Main/Main";
import ProductDetail from "./components/ProductDetails/ProductDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/form" component={Form} />
          <Route path="/product/:productId" exact component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
