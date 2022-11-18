import React, { Component } from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Modal,ModalBody,ModalHeader} from 'reactstrap';
import attendance from './assets/attendance.jpg'
import project from './assets/project.jpg'
import assignment from './assets/assignment.jpg'
import test from './assets/test.jpg'
import { Button } from "reactstrap";
function Assignment(){
    return(
        <Card>
            <CardImg src={assignment} alt="Assignment" />
                    <CardBody>
                    <CardTitle>Assignment</CardTitle>
                    
                    <CardText>the act of assigning something. the assignment of a task. : a position, post, or office to which one is assigned. Her assignment was to the embassy in India. : a specified task or amount of work assigned or undertaken as if assigned by authority</CardText>
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
                    
                    <CardText>the act of assigning something. the assignment of a task. : a position, post, or office to which one is assigned. Her assignment was to the embassy in India. : a specified task or amount of work assigned or undertaken as if assigned by authority</CardText>
                    </CardBody>
        </Card>
    )
}
function Attendance(){
    return(
        <Card>
            <CardImg src={attendance} alt="Attendance" />
                    <CardBody>
                    <CardTitle>Attendance</CardTitle>
                    
                    <CardText>the act of assigning something. the assignment of a task. : a position, post, or office to which one is assigned. Her assignment was to the embassy in India. : a specified task or amount of work assigned or undertaken as if assigned by authority</CardText>
                    </CardBody>
        </Card>
    )
}
function Project(){
    return(
        <Card>
            <CardImg src={project} alt="Project" />
                    <CardBody>
                    <CardTitle>Project</CardTitle>
                    
                    <CardText>the act of assigning something. the assignment of a task. : a position, post, or office to which one is assigned. Her assignment was to the embassy in India. : a specified task or amount of work assigned or undertaken as if assigned by authority</CardText>
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
            <div className="row align-items-start">
                <div className="col-12">
                        <h2>Teacher</h2>
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