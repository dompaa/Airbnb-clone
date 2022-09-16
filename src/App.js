import React from 'react';
import './App.css';
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

import {
  BrowserRouter as Router, Switch,
  Route
} from "react-router-dom";



function App() {
  return (

    //BEM //REACT ROUTER
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
    // there is a switch, checks the path where we're at (/search or /), and
    // it's going to render the appropriate component 
    //  BUT ALWAYS RENDER THE HEADER AND FOOTER 
  );
}

export default App;

{/* Home */ }
{/* Header  */ }
{/* Search */ }

{/* Banner */ }

{/* Cards */ }

{/* Footer  */ }
{/* SearchPage */ }
{/* ...  */ }