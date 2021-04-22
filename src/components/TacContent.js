import "../Styles/TacStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from "react-bootstrap"
import PicSlideShow from './PicSlideShow';

export default function TacContent() {
  return (
    <>
      <PicSlideShow content="THRUST AREA COORDINATORS" />
       <div className = "wrapper0">
          <div className="wrapper1">
            <h3>Thrust Area Coordinators (TAC)</h3>
            <p>The Indian Institute of Technology Patna has designated the following faculty members as the conveners of different activities of the Technology Innovation Hub (TIH) under the National Mission on Interdisciplinary Cyber-Physical Systems (NM-ICPS).</p>
            <Table striped bordered hover className="t1">
              <thead>
                <tr>
                  <th style={{width:"10%"}}>Sr.No.</th>
                  <th style={{width:"20%"}}>Name</th>
                  <th>Designation</th>
                  <th style={{width:"30%"}}>Convener</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>01</td>
                    <td> Dr. Rajiv Misra</td>  
                    <td>Associate Professor, Department of Computer Science and Engineering</td>                          
                    <td>Academic Activities of IIT Patna TIH</td>
                </tr>
                <tr>
                    <td>02</td>
                    <td>Dr. Asif Ekbal</td>      
                    <td>Associate Professor, Department of Computer Science and Engineering</td>                    
                    <td>Research Activities of IIT Patna TIH</td>
                </tr>
                <tr>
                    <td>03</td>
                    <td> Dr. Atul Thakur</td>   
                    <td>Associate Professor, Department of Mechanical Engineering</td>                       
                    <td>International Collaborations Activities of IIT Patna TIH</td>
                </tr>
              </tbody>
            </Table>
          </div>
       </div>  
    </>  
  );
}
