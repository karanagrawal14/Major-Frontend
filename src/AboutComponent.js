import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media,CardImg, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import hod from './assets/hodsir.jpg'
// import { baseUrl } from '../shared/baseUrl';
// import {Stagger,Fade} from 'react-animation-components';

// function RenderLeader({leaders}){
//     return(
//         leaders.map((leader)=>{
//             return(
                
//                     <div key={leader.id} className='col-12 mt-5'>
//                     <Media>
//                 <Media left href="#">
//                     <Media
//                         object className="mr-3"
//                         src={baseUrl+leader.image}

//                         alt={leader.name}
//                     />
//                 </Media>
//                 <Media body className="col-12">
                    
//                     <Media heading>{leader.name}</Media>
//                     <p>{leader.designation}</p>
//                     <p>{leader.description} </p>
                    
//                 </Media>
                
//             </Media>
//                 </div>
              
//             )
//         })
//     )
// }
function About(props) {

    // const leaders = props.leaders.map((leader) => {
    //     return (
    //         <p>Leader {leader.name}</p>
    //     );
    // });

    return(
        <div className="container">
            {/* <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div> */}
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Electronics and Instrumentation</h2>
                    <p>The Department of Electronics and Instrumentation Engineering was established in 1984.This Department came out as an offspring of Electronics Engineering due to enormous development in the field of Electronics and demand of Instrumentation Engineers in the city and its vicinity. Equipped with modern sophisticated instruments, it offers Under Graduate course (B.E. Programme). An M. Tech. course in Microelectronics VLSI Design was started by this Department in 2002. The faculty is well qualified to accept the new challenges in the Electronics and Instrumentation field. </p>
                    <p> The Department has been recognized as a centre to conduct short term Programme for teaching faculty in the PC based Electronics Instrumentation under UGC vocational courses. New ventures for research and product development in the area of Biomedical and Optical Engineering are being set up under MHRD schemes.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Head of the Department</CardHeader>
                        <CardImg className="hod" src={hod}/>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-12"><i class="fa fa-user">: Dr.R.S.Gamad</i></dt>
                                <dt className="col-12"><i class="fa fa-envelope">: gs3300293@sgsitsindore.in</i></dt>
                                <dt className="col-12"><i class="fa fa-phone">: +91-731- 2582421</i></dt>
                               
                                
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardTitle></CardTitle>
                        <CardBody className="bg-faded">
                            {/* <blockquote className="blockquote">
                                <p className="mb-0">You better cut the pizza in four pieces because
                                    I'm not hungry enough to eat six.</p>
                                <footer className="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                                </footer>
                            </blockquote> */}
                            <p>The department is committed to provide a holistic education that transforms the students into responsible engineers and facilitates them to build successful careers and excel in the field of Electronics and Instrumentation with social and ethical standards.</p>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                    <Media list>
                       
                        {/* <RenderLeader leaders={props.leaders}/> */}

                       
                    </Media>
                </div>
            </div>
        </div>
    );
}

export default About;    