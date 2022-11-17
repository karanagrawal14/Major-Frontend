// import logo from './logo.svg';
import './App.css';
import Application  from './main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Admin  from './Admin';
import Login  from './login';
import Signup from './Signup';
import Header from './HeaderComponent';
import Home from './StudentComponent';
import ProtectedRoute2 from './ProtectedRoute2';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import Main from './MainPage.js';
import About from './AboutComponent.js';
function App() {
  return (
    <div className="App">
        <>
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/aboutus" component={About}/>
         {/* <ProtectedRoute2 exact path="/" component={Application}/>  */}
        <Route exact path="/login"><Login/></Route>
        <ProtectedRoute2 exact path="/admin" component={Admin} />
        <ProtectedRoute2 exact path="/books" component={Application}/>

        <Route exact path='/contactus'  />
      </Switch>
      <Footer/>
    </Router>
    </>
    {/* <Header/> */}
   
    </div> 
    
  );
}

export default App;