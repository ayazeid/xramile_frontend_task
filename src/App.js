import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import GallaryPage from './pages/GallaryPage.js'
import CartPage from './pages/CartPage.js'
import NotFoundPage from './pages/NotFoundPage.js'
import Navbar from './components/navbar/Navbar.js'
function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={GallaryPage} />
          <Route exact path="/cart" component={CartPage} />
          <Route path="/error404" component={NotFoundPage} />
          <Redirect to="error404" />
        </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
