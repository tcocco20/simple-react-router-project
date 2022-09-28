import { Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import ProductDetail from "./components/pages/ProductDetail";
import Products from "./components/pages/Products";
import Welcome from "./components/pages/Welcome";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
