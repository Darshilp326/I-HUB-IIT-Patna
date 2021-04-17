import "./aboutStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from "react-bootstrap"

export default function TacContent() {
  return (
       <div className = "wrapper0">
          <div className="wrapper1">
            <h3>Thrust Area Coordinators (TAC)</h3>
            <p>The Indian Institute of Technology Patna,has designated the following members as the Thrust Area Coordinators (TAC) for the Technology Innovation Hub (TIH) under National Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS).</p>
            <Table striped bordered hover className="t1">
              <thead>
                <tr>
                  <th>SR.No.</th>
                  <th>Name and DESIGNATION</th>
                  <th>E-mail ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                    <td>01</td>
                    <td><strong>Dr. ABC Sharma</strong></td>                            
                    <td>abc@iitp.ac.in</td>
                </tr>
                <tr>
                    <td>01</td>
                    <td><strong>Dr. XYZ Rajput</strong></td>                       
                    <td>xyz@iitp.ac.in</td>
                </tr>
              </tbody>
            </Table>
          </div>
       </div>    
  );
}
