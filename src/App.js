import React from "react";
// import Home from "./routes/Home";
import {HashRouter, Route} from 'react-router-dom';
import "./App.css";
import About from './routes/About';
import Home from './routes/Home'
import Detail from './routes/Detail'
import Navigation from './components/Navigation'

function App() {
  return (
   <HashRouter>
    <Navigation></Navigation>
     <Route path="/" exact={true} component={Home}/>
     <Route path="/about"  component={About}/>
     <Route path="/movie-detail"  component={Detail}/>
     {/* <Route path="/home">
       <h1> Home</h1>
     </Route>
     <Route path="/home/introduction">
       <h1>introduction</h1>
     </Route>
     <Route path="/about">
       <h1>About</h1>
     </Route> */}
   </HashRouter>
  );
}
export default App;
