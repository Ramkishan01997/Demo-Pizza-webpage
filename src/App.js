
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import About from './Pages/About'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Menu from './Pages/Menu'
import Contact from './Pages/Contact'
function App() {
  return (
    <div className="App">
    
    <Router>
    <Navbar/>
    <Switch>
    
   <Route path="/" exact component={Home}  />
   
   <Route path="/menu" component={Menu}  />
   <Route path="/about" component={About}  />
   <Route path="/contact" component={Contact}  />
   

     </Switch>
     </Router>
     <Footer/>
    </div>
    
  );
}

export default App;
