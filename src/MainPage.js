import React, { Component } from "react";
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Modal,ModalBody,ModalHeader} from 'reactstrap';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
        return(<div>
            <Card style={{margin:"20px",padding:"20px"}}>
            <CardBody>
            <CardTitle><h1>Introduction</h1></CardTitle>
            <CardText><h4>It is a website that allows students and teachers to connect and associate on an online platform with the help of digital devices. Online Learning Portals contain effective communication solutions such as Messaging, E-Mails, Discussion mediums, Audio, and Video options for optimum connectivity.</h4></CardText>
            </CardBody>
        </Card>
        </div>
        )
}
}
export default Home;