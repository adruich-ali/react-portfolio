import React from 'react';
import AboutUs from './pages/Aboutuspage';
//import Global Style
import GlobalStyle from './components/GlobalStyle';
import Nav from './components/Nav';
import OurWork from './pages/OurWork'; 
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
//animation 
import {AnimatePresence} from 'framer-motion';

//Router
import {Switch, Route, useLocation}from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
        <GlobalStyle/>
             <Nav/>
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
        <Route path="/" exact>
        <AboutUs/>
        </Route>
        <Route path="/work" exact>
        <OurWork/>
        </Route>  
        <Route path="/work/:id">
        <MovieDetail/>
        </Route>
        <Route path="/contact">
        <ContactUs/>
        </Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
