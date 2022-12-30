import React, { Component } from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Modal,ModalBody,ModalHeader} from 'reactstrap';
import attendance from './assets/attendance.jpg'
import project from './assets/project.jpg'
import assignment from './assets/assignment.jpg'
import test from './assets/test.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Assignment(){
    return(
        <Card>
            <CardImg src={assignment} alt="Assignment" />
                    <CardBody>
                    <CardTitle>Assignment</CardTitle>
                    <CardText>With this section, Teachers will be able to assign tasks to the students. Students can view this assignment from the student portal and make submissions for the same.</CardText>
                    </CardBody>
        </Card>
    )
}
function Test(){
    return(
        <Card>
            <CardImg src={test} alt="test" />
                    <CardBody>
                    <CardTitle>Generate Test</CardTitle>
                    <CardText>This Section will help the teachers to create test. These created tests will be visible to the students for the fixed time. </CardText>
                    </CardBody>
        </Card>
    )
}
function Attendance(){
    return(
        <Card>
            <Link to="/admin">

            <CardImg src={attendance} alt="Attendance" />
                    <CardBody>
                    <CardTitle>E-Library</CardTitle>
                    
                    <CardText>Upload the Resources to be referred by the students, upload the pfds here. Also manage hard copies of the books with this portal itself.</CardText>
                    </CardBody>
            </Link>
        </Card>
    )
}
function Project(){
    return(
        <Card>
            <CardImg src={project} alt="Project" />
                    <CardBody>
                    <CardTitle>Project</CardTitle>
                    
                    <CardText>Assign Projects to be completed by the students for the evaluation. With this section they will be able to view and submit their projects.</CardText>
                    </CardBody>
        </Card>
    )
}
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalOpen:false
        };
        this.toggleModal = this.toggleModal.bind(this);
    }
    toggleModal(){
        this.setState({
            isModalOpen:!this.state.isModalOpen
        })
    }
    render(){
    return(
        
        <div className="container">
             <h2 style={{marginTop:"20px"}}>Welcome {localStorage.getItem('name')}</h2>
            <div className="row align-items-start">
                <div className="col-12">
                        <hr />
                </div>           
                <div className="col-12 col-md m-1">
                <Assignment/>
                </div>
                <div className="col-12 col-md m-1">
                    <Project />
                </div>
                <div className="col-12 col-md m-1">
                    <Test/>
                </div>
                <div className="col-12 col-md m-1">
                    <Attendance/>
                </div>
                
                
            </div>
            <div>
            {/* <Button  className="row align-items-end" onClick={this.toggleModal} outline><span className="fa fa-comments"></span>{' '}Feedback</Button>     */}
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Feedback</ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>
                </Modal>
            </div>
        </div>
        
    )}
}
export default Home;
