import React, { Component } from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Modal,ModalBody,ModalHeader} from 'reactstrap';
import attendance from './assets/attendance.jpg'
import project from './assets/project.jpg'
import assignment from './assets/assignment.jpg'
import { Button } from "reactstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Assignment(){
    return(
        <Card >
            <Link to="/books">
            <CardImg src={assignment} alt="Assignment" />
                    <CardBody>
                    <CardTitle>E-Library</CardTitle>
                    Utilise the resources provided by the teachers,here you will get the Pdfs of the books provided by the department, hardcopies of the books can also be issued here.
                    <CardText></CardText>
                    </CardBody>
            </Link>
        </Card>
    )
}
function Attendance(){
    return(
        <Card >
            <CardImg src={attendance} alt="Attendance" />
                    <CardBody>
                    <CardTitle>Attendance</CardTitle>
                    
                    <CardText>Use this section to mark your attendance for a particular Class
                        Date and Time of your marked Attendance will be visible to your Teachers.
                    </CardText>
                    </CardBody>
        </Card>
    )
}
function Project(){
    return(
        <Card >
            <CardImg src={project} alt="Project" />
                    <CardBody>
                    <CardTitle>Project</CardTitle>
                    
                    <CardText>Projects Given by the teachers will be displayed under this section.
                        View your Allotted projects and submit them within the prescribed deadline. 
                    </CardText>
                    </CardBody>
        </Card>
    )
}
class Student extends Component {
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
        <div>
            <h2 style={{marginTop:"20px"}}>Welcome {localStorage.getItem('name')}</h2>
<div className="container">
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
                    <Attendance/>
                </div>
                
            </div>
            <div>
            {/* <Button  className="row align-items-end" onClick={this.toggleModal} outline><span className="fa fa-comments"></span>{' '}Feedback</Button>    
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Feedback</ModalHeader>
                    <ModalBody>
                    
                    </ModalBody>
                </Modal> */}
            </div>
        </div>
        </div>
        
    )}
}
export default Student;