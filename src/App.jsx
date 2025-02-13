import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Shop from "./pages/Shop";
import Header from "./layout/Header";
import Footer from "./layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/shop" component={Shop} />
        <Route path="/home" component={HomePage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
