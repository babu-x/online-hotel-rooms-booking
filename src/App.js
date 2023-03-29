import Header from "./components/Header";
import Home from "./components/Home";
import Bookings from "./components/Bookings";
import Cart from "./components/Cart";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/bookings" component={Bookings} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
