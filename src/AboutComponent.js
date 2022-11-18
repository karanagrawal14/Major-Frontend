import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  Card,
  CardBody,
  CardHeader,
  Media,
  CardImg,
  CardTitle,
} from "reactstrap";
import { Link } from "react-router-dom";
import hod from "./assets/hodsir.jpg";
import dk from './assets/dkmishra.jpg'
import ppbansod from './assets/ppbansod.jpg';
import dsajnar from './assets/dsajnar.jpg';
import khatrisir from './assets/khatrisir.jpg';
import gurjarsir from './assets/gurjarsir.jpg';
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

  return (
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
          <p>
            The Department of Electronics and Instrumentation Engineering was
            established in 1984.This Department came out as an offspring of
            Electronics Engineering due to enormous development in the field of
            Electronics and demand of Instrumentation Engineers in the city and
            its vicinity. Equipped with modern sophisticated instruments, it
            offers Under Graduate course (B.E. Programme). An M. Tech. course in
            Microelectronics VLSI Design was started by this Department in 2002.
            The faculty is well qualified to accept the new challenges in the
            Electronics and Instrumentation field.{" "}
          </p>
          <p>
            {" "}
            The Department has been recognized as a centre to conduct short term
            Programme for teaching faculty in the PC based Electronics
            Instrumentation under UGC vocational courses. New ventures for
            research and product development in the area of Biomedical and
            Optical Engineering are being set up under MHRD schemes.
          </p>
        </div>
        <div className="col-12 col-md-5">
          <Card>
            <CardHeader className="bg-primary text-white">
              Head of the Department
            </CardHeader>
            <CardImg className="hod" src={hod} />
            <CardBody>
              <dl className="row p-1">
                <dt className="col-12">
                  <i class="fa fa-user">: Dr.R.S.Gamad</i>
                </dt>
                <dt className="col-12">
                  <i class="fa fa-envelope">: gs3300293@sgsitsindore.in</i>
                </dt>
                <dt className="col-12">
                  <i class="fa fa-phone">: +91-731- 2582421</i>
                </dt>
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
              <p>
                The department is committed to provide a holistic education that
                transforms the students into responsible engineers and
                facilitates them to build successful careers and excel in the
                field of Electronics and Instrumentation with social and ethical
                standards.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h2 className="">Faculty Members</h2>
        </div>
        <div className="col-12">
          <Media list>
          <div className="col-12 mt-5">
            <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={dk}
                   alt="D.K. Mishra"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Dr. D. K. Mishra</Media>
                <p>Designation: Professor</p>
                <p>Employee ID: 03300182</p>
                <p>Qualification:  Ph. D. , M.E., B.E</p>
                <p>Date of joining:  4/8/1990</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582428</p>
                <p><i class="fa fa-envelope"></i> : dmishra@sgsits.ac.in</p>
                <p></p>
              </Media>
            </Media>
          </div>
          <div className="col-12 mt-5">
            <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={ppbansod}
                   alt="Dr. P. P. Bansod"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Dr. P. P. Bansod</Media>
                <p>Designation: Professor</p>
                <p>Employee ID: 3300221</p>
                <p>Qualification:  Ph.D.</p>
                <p>Date of joining:  02/04/1993</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582421</p>
                <p><i class="fa fa-envelope"></i> : pbansod@sgsits.ac.in</p>
                <p></p>
              </Media>
            </Media>
          </div>
          <div className="col-12 mt-5">
            <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={dsajnar}
                   alt="Mr. D. S. Ajnar"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Mr. D. S. Ajnar</Media>
                <p>Designation: Associate Professor</p>
                <p>Employee ID: 3300244</p>
                <p>Qualification:  M.E.</p>
                <p>Date of joining:  7/4/1995</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582422</p>
                <p><i class="fa fa-envelope"></i> : ajnards@gmail.com</p>
                <p></p>
              </Media>
            </Media>
          </div>
          <div className="col-12 mt-5">
            <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={khatrisir}
                   alt="Mr. Rajesh Khatri"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Mr. Rajesh Khatri</Media>
                <p>Designation: Associate Professor</p>
                <p>Employee ID: 3300279</p>
                <p>Qualification:  M.E.</p>
                <p>Date of joining:  24/12/2003</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582425</p>
                <p><i class="fa fa-envelope"></i> : rajeshkhatri1@rediffmail.com</p>
                <p></p>
              </Media>
            </Media>
          </div>
          <div className="col-12 mt-5">
            <Media>
              <Media left href="#">
                <Media 
                  object
                  className="mr-3 fimage"
                  src={gurjarsir}
                   alt="Mr.R.C.Gurjar"
                />
              </Media>
              <Media body className="col-12 fbody">
                <Media heading>Mr.R.C.Gurjar</Media>
                <p>Designation: Assistant Professor</p>
                <p>Employee ID: 3300307</p>
                <p>Qualification:  M.E., Ph.D. Pursuing</p>
                <p>Date of joining:  16/07/2007</p>
                <p><i class="fa fa-phone"></i> : 091-731-2582424</p>
                <p><i class="fa fa-envelope"></i> : rcgurjar94@gmail.com</p>
                <p></p>
              </Media>
            </Media>
          </div>
          </Media>
        </div>
      </div>
    </div>
  );
}

export default About;
