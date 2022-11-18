import React,{Component} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron,Button,Modal,ModalHeader,ModalBody,Form,FormGroup,Input,Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo.png'
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
          isAuthenticated :localStorage.getItem('email')?true:false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.logout = this.logout.bind(this);
      }
    

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      logout(){
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        window.location.href = `/`;
      }
    render() {
        return(
            <div className="header">
                
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><img src={logo} height="30" width="41" alt='SGSITS' /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span> About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                            </NavItem>
                            </Nav>
                            {!this.state.isAuthenticated?
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                            <NavLink className="nav-link" to='/signup'><span className="fa fa-address-card fa-lg"></span> Signup</NavLink>
                            </NavItem>
                        </Nav>:
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                        <span style={{color:"white",size:"40px",marginRight:"4px"}} className="fa fa-sign-out"></span><span style={{cursor:"pointer",color:"white"}}  onClick={(e) => this.logout(e)}>Sign Out</span>
                        </NavItem>
                    </Nav>
                        }
                        </Collapse>
                    </div>
                    
                </Navbar>
                {/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                    innerRef={(input) => this.remember = input}  />
                                    Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal> */}
            </div>
        );
    }
}
export default Header