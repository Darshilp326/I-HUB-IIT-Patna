import React from 'react';
import "./Footer.css";
import {ButtonGroup , Button} from 'reactstrap';
import {Link} from 'react-router-dom';
export default class Footers extends React.Component{
constructor (props) {
	super(props);
	this.state = {
		time : new Date()
	}
};
 render(){
  setTimeout(()=>{
  	this.setState({time:new Date() })
  },1000);

  return(
  	<>
   <div className="footer">
    <div className="container">
    <div className="row">
    <div className="col-xs-12 col-md-7">
    <h2>Quick Links</h2>
    <hr className ="horizontal" />
    <div className="row">
    <div className="col-md-3 col-sm-6 quick-links">
	<a href="/board-of-directors">Administration</a>
    </div>
    <div className="col-md-3 col-sm-6 quick-links">
    <a href="/governance">Governance</a>
    </div>
    <div className="col-md-3 col-sm-6 quick-links">
    <a href="/history-mission">History & Mission</a>
    </div>
    <div className="col-md-3 col-sm-6 quick-links">
    <a href="/thrust-area-coord">Contact Us</a>
    </div>
    </div>
    </div>
    <div className="col-xs-12 col-md-5 mt-2">
    <h6>Real Time</h6>
    <div className="footer-time">    
    { this.state.time.toString() }	
	</div>
    </div>
    </div>
    <div className="row m-5">
    	<div className="col-12 col-md-6">
    	<div className="p-auto text-center line1">
    	<img height="120" width="120" className="m-auto" src="Image/logo.png" alt="IITP Logo" />
    	<br />
    	<h5 className="m-2">Innovation HUB </h5>
    	<div><a  className="m-1" href="mailto:vishleshan-i-hub-foundation@iitp.ac.in"><i className="fa fa-envelope mr-1" />vishleshan-i-hub-foundation@iitp.ac.in</a></div>
    	<div>
    		<a href="http://www.iitp.ac.in/" className="m-1"><i className="fa fa-external-link mr-1" />www.iitp.ac.in/</a>
    	</div>
    	{/* <ButtonGroup>
    		<Button className="m-1 button"><i className="fa fa-facebook"/></Button>
    		<Button className="m-1 button"><i className="fa fa-twitter"/></Button>
    		<Button className="m-1 button"><i className="fa fa-instagram"/></Button>
    		<Button className="m-1 button"><i className="fa fa-linkedin"/></Button>
    	</ButtonGroup> */}
    	</div>
    	</div>
    	<div className="col-12 col-md-6 p-1 ">
    	<h3 className=" text-center">Quick Links</h3>
    	<hr width="25%" className ="color-horizontal" />
    	<div className="line2">
    	<div><a href="/technology-development" className="text-white">Technology Development</a></div>
    	<hr className="horizontal"/>
    	{/* <div><a href="#" className="text-white">Centres Of Excellence</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	<div><a href="/skill-human-resource-development" className="text-white">HR Skill Developement</a></div>
    	<hr className="horizontal"/>
    	<div><a href="/innovation" className="text-white">Innovation</a></div>
    	<hr className="horizontal"/>
    	<div><a href="/startup" className="text-white">Startup</a></div>
    	<hr className="horizontal"/>	
    	<div><a href="/international-collab" className="text-white">Collaboration</a></div>
    	<hr className="horizontal"/>
		<div><a href="" className="text-white">Tenders</a></div>
    	<hr className="horizontal"/>
    	{/* <div><a href="#" className="text-white">Power Sector</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">Telecommunications</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">Health & Medicine</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">Transportation</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	<div><a href="#" className="text-white">Thrust Area</a></div>
 		</div>
    	</div>
    	{/* <div className="col-12 col-md-6 col-lg-4">
    	<h3 className=" text-center">Quick Links</h3>
    	<hr width="25%" className ="color-horizontal" />
    	<div className="line3"> */}
    	{/* <div><a href="#" className="text-white">Awards</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">NIRF</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	
    	{/* <div><a href="#" className="text-white">QIP</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">DoSA</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">DoRD</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">DoRA</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">DoFA</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">DoAA</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">Unnat Bharat</a></div> */}
    	{/* <hr className="horizontal"/> */}
    	{/* <div><a href="#" className="text-white">Positions Available</a></div> */}
 		{/* </div> */}
    	{/* </div> */}
    </div>
   </div>
   </div>
   <div className="post-footer text-center">
   <div className="text-center">
   	<i className="fa fa-copyright"/> 2020-2021 | Indian Institute of Technology Patna. All Rights Reserved.
   </div>
   </div>
   </>
  );
 }
}
