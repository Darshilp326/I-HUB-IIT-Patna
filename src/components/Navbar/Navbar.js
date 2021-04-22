import React ,{setState}  from 'react';
import './Navbar.css'
import 'font-awesome/css/font-awesome.css';
import {Nav , Navbar , NavbarBrand , NavItem , NavLink, NavbarText,NavbarToggler ,Collapse ,DropdownItem , DropdownMenu, DropdownToggle , UncontrolledDropdown,Dropdown , Button , ButtonGroup  } from 'reactstrap';
import { Link } from "react-router-dom";
export default class Navbars extends React.Component{

constructor(props){
        super(props);
        this.state={
            isOpen:false,   
            dropdownOpen:false,     
        };
        this.toggleNav = this.toggleNav.bind(this);
       this.toggled=this.toggled.bind(this);
    };
    toggleNav =() => {
        this.setState(
            {isOpen:!this.state.isOpen
            });
        // console.log(this.state.isOpen);
    }
    toggled = () => {
    	this.setState({dropdownOpen : !this.state.dropdownOpen
    	});
    	console.log(this.state.dropdownOpen)
    }
    
    

 render(){
 	
  return(
  <>
   <Navbar sticky className=" sticky-top Navbar"  expand="xl">
  	<NavbarBrand href="/">
  	<img alt="IITP Logo" className="float-left" src="Image/logo-min.png" height="100" width="100" />
  	<div className="text-center nav-header float-left">
  	<span className="ml-5 mt-5">Innovation Hub</span><br /><br/>
  	<span className="ml-2 mt-5">Indian Institute of Technology, Patna</span><br/>
  	</div>
  	
  	</NavbarBrand>
        <button onClick={this.toggleNav} aria-label="Toggle navigation" type="button" className="toggler navbar-toggler"><span className={this.state.isOpen?"chevron-down fa fa-chevron-up":
        "chevron-down fa fa-chevron-down" }></span></button>
        <Collapse className="collapser" isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto multi-level" navbar>
            <NavItem>
              <Link className="nav-link" to="/"><i className="fa fa-3x fa-home" /></Link>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                <Link className="nav-link" to="/governance">Governance</Link>
           
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/board-of-directors"> Board Of Directors</Link>
                 
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/thrust-area-coord">Conveners</Link>
                  
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/history-mission"> History and Mission</Link>
                 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            </NavItem>
            <NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle  nav caret>
                Activities
              </DropdownToggle>
              <DropdownMenu down >
                <DropdownItem>
                    <Link className="nav-link" to="/thrust-areas">Thrust Areas</Link>                                                         
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/technology-development">Technology Development</Link>
                 
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/skill-human-resource-development">Skill & Human Resource Development</Link>
                  
                </DropdownItem>
                <DropdownItem>
                <Link to="/startup" className="nav-link"> Start Ups</Link>
                 
                </DropdownItem>
                <DropdownItem>
                <Link className="nav-link" to="/international-collab"> International  Collaboration</Link>
                 
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </NavItem>
            <NavItem>
            	<UncontrolledDropdown nav inNavbar>
            	<DropdownToggle nav caret> 
            	Announcements
            	</DropdownToggle>
            	<DropdownMenu down >
            	<DropdownItem>
            	<Link className="nav-link" to="/fellowship">Fellowship March 2021</Link>
            	
            	</DropdownItem>
            	<DropdownItem>
            	<Link className="nav-link" to="/proposal">Call For Proposals<br/>Vishleshan I-HUB March 2021 </Link>
            	
            	</DropdownItem>
            	</DropdownMenu>
            	</UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <Link className="nav-link" to="/incubation">Incubation</Link>
            
            </NavItem>
            <NavItem>
            <Link className="nav-link" to="#">Tenders</Link>
            </NavItem>
          </Nav>
        </Collapse>
        <ButtonGroup className="btn-grp1">
        <Button  className="mr-3 button"><Link className="text-white" to="/login">Login</Link></Button>
        <Button  className="button" ><Link className="text-white" to="/register">Register</Link></Button>
        </ButtonGroup>
        <ButtonGroup className="btn-grp2">
        <Button color="primary" className="mr-1 button"><Link className="text-white" to="/login"><i className="fa fa-sign-in"  /></Link></Button>
        <Button color="primary"  className="button" ><Link className="text-white" to="register"><i className="fa fa-user-plus" /></Link></Button>
        </ButtonGroup>

  </Navbar>
  </>
  );
 }
}