import React from "react";
import {  Switch,BrowserRouter,Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainerCustom } from "./components/Toast";
import { Scrollbars } from 'react-custom-scrollbars';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./components/LandingPage/LandingPage";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Search from "./components/Search";
import Course from "./components/Course";
import Quiz from "./components/Quiz";
import AssignmentDetails from "./components/AssignmentDetails";
import AssessmentReport from "./components/AssessmentReport";
import QuizQuestion from "./components/QuizQuestion";
import ResetPassword from "./components/LandingPage/ResetPassword";
import About from './AboutComponent.js';
import Application  from './main';

function App() {
  return(
    <div>
    <BrowserRouter>
    {/* <Sidebar/> */}
      <Switch>
        <Route exact path='/' component={LandingPage}/>
       <Route exact path="/reset-password/*" component={ResetPassword} />
      <Route exact path="/home" render={()=><><Home/> <Sidebar/></>}/>
      <Route path="/notes" render={()=><><Notes /><Sidebar /></>}exact/>
      {/* <Route exact path="/books" component={Application}/> */}
      <Route path='/books' render={()=><><Application/><Sidebar/></>}/>
      <Route exact path="/aboutus" component={About}/>
      <Route path="/search" render={()=><><Search /><Sidebar /></>} exact/>
      <Route path="/course/*" render={()=><><Course /><Sidebar /></>}exact/>
      <Route path="/assignment/*" render={()=><><AssignmentDetails /><Sidebar /></>}exact/>
      <Route path="/assessmentReport/*" render={()=><><AssessmentReport /><Sidebar /></>}exact/>
      <Route path="/quiz/*" render={()=><><Quiz /><Sidebar /></>}exact/>
      <Route path="/createQuiz/*" render={()=><><QuizQuestion /><Sidebar /></>}exact/>
      </Switch> 
    </BrowserRouter>
  </div>
  )
  // let width = window.innerWidth 
  // let height = window.innerHeight 
  // return (
    
  //   <div>
  //     {/* <Home/> */}
  //     <LandingPage/>
  //     {/* Hello there */}
  //     <Scrollbars
    
  //   style={{ width, height, backgroundColor: "transparent" }}
  //   autoHide
  //   autoHideDuration={1000}
  //   autoHideTimeout={800}
  //   renderThumbVertical={({ style, ...props }) => (
  //     <div
  //       {...props}
  //       className="subBG"
  //       style={{
  //         ...style,
  //         opacity: 0.4,
  //         borderRadius: 10,
  //         width: 8,
  //         paddingRight: 10,
  //         marginRight: 10,
  //       }}
  //     />
  //   )}
  // >
  //   <BrowserRouter>
      
  //    <Switch>
  //     {/* <div>Hello How are you</div> */}
  //     {/* <Route path="/" component={LandingPage} /> */}
  //     {/* <Route exact path='/notes' component={Notes}/> */}
  //     <Route exact path="/reset-password/*" component={ResetPassword} />
  //     <Route path="/home" component={<><Home /><Sidebar /></>} exact/>
  //     <Route path="/notes" element={<><Notes /><Sidebar /></>}exact/>
  //     <Route path="/search" element={<><Search /><Sidebar /></>}exact/>
  //     <Route path="/course/*" element={<><Course /><Sidebar /></>}exact/>
  //     <Route path="/assignment/*" element={<><AssignmentDetails /><Sidebar /></>}exact/>
  //     <Route path="/assessmentReport/*" element={<><AssessmentReport /><Sidebar /></>}exact/>
  //     <Route path="/quiz/*" element={<><Quiz /><Sidebar /></>}exact/>
  //     <Route path="/createQuiz/*" element={<><QuizQuestion /><Sidebar /></>}exact/>
  //     </Switch>
  //     </BrowserRouter>
  //   <ToastContainerCustom />
  // </Scrollbars>
  //   </div>
  // );
}

export default App;
