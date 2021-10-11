import logo from './logo.svg';
import './App.css';
import Application  from './main';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from "react-router-dom";
import Admin  from './Admin';
import Login  from './login';
import Signup from './Signup';
import ProtectedRoute2 from './ProtectedRoute2';
function App() {
  return (
    <div className="App">
        <>
    <Router>
      <Switch>
        <Route exact path="/signup" component={Signup}/>
         <ProtectedRoute2 exact path="/" component={Application}/> 
        <Route exact path="/login"><Login/></Route>
        <ProtectedRoute2 exact path="/admin" component={Admin} />
        <ProtectedRoute2 exact path="/books" component={Application}/>
      </Switch>

    </Router>
    </>
    </div>
  );
}

export default App;