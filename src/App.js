import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from './components/Hero';
import About from './components/About';
import Header from './components/Header';
import Goal from './components/Goal';
import background from "./img/bg.jpg";

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";



function App() {
  return (
    <Router>

      <Header></Header>

      <Switch>
      <Route path='/about'>
      <div className="App" >
        <About/>   
      </div>
      </Route>
      <Route path='/watchgoal'>
      <div className="App">
        <Goal/>   
      </div>
      </Route>
      <Route path='/'>
      <div className="App" style={{ 
      backgroundImage: `url(${background})`, 
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`,
      minHeight:`92vh`,
        }}>
        <Hero/>   
        </div>
  
      </Route>



      </Switch>




    </Router>
  );
}

export default App;
