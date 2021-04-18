import React from 'react';
import './Navbar.css'
import 'font-awesome/css/font-awesome.css';
import {Nav , Navbar , NavbarBrand , NavItem , NavLink , NavbarText,NavbarToggler ,Collapse ,DropdownItem , DropdownMenu, DropdownToggle , UncontrolledDropdown,Dropdown , Button , ButtonGroup  } from 'reactstrap';
export default class Navbars extends React.Component{

constructor(props){
        super(props);
        this.state={
            isOpen:false,   
            dropdownOpen:false         
        };
        this.toggleNav = this.toggleNav.bind(this);
       this.toggle=this.toggle.bind(this);
    };
    toggleNav(){
        this.setState(
            {isOpen:!this.state.isOpen
            });
        console.log(this.state.isOpen);
    }
    toggle () {
    	this.setState({dropdownOpen : !this.state.dropdownOpen});
    	console.log(this.state.dropdownOpen)
    }

 render(){
  return(
  <>
   <Navbar className="Navbar container"  expand="xl">
  	<NavbarBrand href="/">
  	<img alt="IITP Logo" className="float-left" src="Image/logo.png" height="100" width="100" />
  	<div className="text-center nav-header float-left">
  	<span className="ml-5 mt-5">Innovation Hub</span><br />
  	<span className="ml-2 mt-5">Indian Institute of Technology, Patna</span><br/>
  	</div>
  	
  	</NavbarBrand>
        <button onClick={this.toggleNav} aria-label="Toggle navigation" type="button" className="toggler navbar-toggler"><span className={this.state.isOpen?"chevron-down fa fa-chevron-up":
        "chevron-down fa fa-chevron-down" }></span></button>
        <Collapse className="collapser" isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto multi-level" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About Us
              </DropdownToggle>
              <DropdownMenu down>
                <DropdownItem>
                <NavLink href="#">Governance</NavLink>
           
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#"> Board Of Directors</NavLink>
                 
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#">Conveners</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#"> History and Mission</NavLink>
                 
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
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} inNavbar>
                <DropdownToggle nav caret>
                Thrust Areas
                </DropdownToggle>
                <DropdownMenu className="dropdown-submenu" right>
                <DropdownItem>
                Telecommunications
                </DropdownItem>
                <DropdownItem>
                Power
                </DropdownItem>
                <DropdownItem>
                Defence Research & Development
                </DropdownItem>
                <DropdownItem>
                Road Transport & Highways
                </DropdownItem>
                <DropdownItem>
                Health & Family Welfare 
                </DropdownItem>
                </DropdownMenu>
                </Dropdown>
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#">Technology Development</NavLink>
                 
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#">Skill & Human Resource Development</NavLink>
                  
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#"> Start Ups</NavLink>
                 
                </DropdownItem>
                <DropdownItem>
                <NavLink href="#"> International  Collaboration</NavLink>
                 
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
            	<NavLink href="#">Fellowship March 2021</NavLink>
            	
            	</DropdownItem>
            	<DropdownItem>
            	<NavLink href="#">Call For Proposals<br/>Vishleshan I-HUB March 2021 </NavLink>
            	
            	</DropdownItem>
            	</DropdownMenu>
            	</UncontrolledDropdown>
            </NavItem>
            <NavItem>
            <NavLink href="#">Incubation</NavLink>
            
            </NavItem>
            <NavItem>
            <NavLink href="#">Tenders</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <ButtonGroup className="btn-grp1">
        <Button  className="mr-3 button">Login</Button>
        <Button  className="button" >Register</Button>
        </ButtonGroup>
        <ButtonGroup className="btn-grp2">
        <Button color="primary" className="mr-1 button"><i className="fa fa-sign-in"  /></Button>
        <Button color="primary"  className="button" ><i className="fa fa-user-plus" /></Button>
        </ButtonGroup>

  </Navbar>
  </>
  );
 }
}