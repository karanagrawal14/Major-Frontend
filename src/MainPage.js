import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import {Card,CardImg,CardText,CardBody,CardTitle,CardSubtitle,Modal,ModalBody,ModalHeader} from 'reactstrap';
class Home extends Component {
    constructor(props){
        super(props);
        this.state={
        };
    }
    render(){
        return(<div>
            <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>SGSITS</h1>
                                <p>Shri Govindram Seksaria Institute of Technology and Science, formerly known as Govindram Seksaria Technological Institute, is a institute of technology located in Indore, Madhya Pradesh, India.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
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