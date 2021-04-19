import "../Styles/Governance.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from "react-bootstrap"
import PicSlideShow from './PicSlideShow';

export default function Boxx() {
  return (
    <>
      <PicSlideShow content="HUB GOVERNING BODY" />
      <div className = "wrapper0">
        <div className="wrapper1">
        <p id="h0">Hub Governing Body</p>
        <p id="h1">
          The Indian Institute of Technology Patna has constituted a Hub Governing
          Body for Technology Innovation Hub (TIH) under National Mission on
          Interdisciplinary Cyber Physical Systems (NM-ICPS).
        </p>
        <Table striped bordered hover className="t1">
                <thead>
                  <tr>
                    <th style={{width:"10%"}}>SR. No.</th>
                    <th>Name and Desgination</th>
                    <th style={{width:"30%"}}>Position</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>01</td>
                      <td>Prof. Pramod Kumar Jain,<br/> Director, IIT Patna </td>                            
                      <td>Chairman</td>
                  </tr>
                  <tr>
                      <td>02</td>
                      <td> Dr. Sriparna Saha,<br/> Associate Professor, Department of
                          Computer Sc and Engg. , IIT Patna</td>                       
                      <td>Member</td>
                  </tr>
                    <tr>
                      <td>03</td>
                      <td> Dr. Asif Ekbal,<br/> Associate Professor, Department of
                        Computer Sc and Engg. , IIT Patna </td>                            
                      <td>Member</td>
                  </tr>
                  <tr>
                      <td>04</td>
                      <td>Dr. Rajib Jha,<br />  Associate Professor,Department of                                                   Member
                          Electrical Engg., IIT Patna</td>                       
                      <td>Member</td>
                  </tr>
                  <tr>
                      <td>05</td>
                      <td>Dr. Shubhashis Sengupta,<br/> MD, and Technology Research Director, Accenture</td>                       
                      <td>Member,<br/>Representative from Industry</td>
                  </tr>
                  <tr>
                      <td>06</td>
                      <td> Dr. Karthik Sankaranarayanan,<br /> IBM Research</td>                       
                      <td>Member,<br/>Representative from Industry</td>
                  </tr>
                  <tr>
                      <td>07</td>
                      <td> Dr. Anoop Kunchukuttam,<br/> Microsoft</td>                       
                      <td>Member,<br/>Representative from Industry</td>
                  </tr>
                  <tr>
                      <td>08</td>
                      <td>  Dr. Lipika Dey,<br/> TCS Innovation Lab </td>                       
                      <td>Member,<br/>Representative from Industry</td>
                  </tr>
                  <tr>
                      <td>09</td>
                      <td>  Prof. Pushpak Bhattacharyya,<br/> Former Director, IIT Patna<br/> Professor, Department of Computer Science and Engg., IIT Bombay</td>                       
                      <td>Member,<br/> Representatives from Academia (External)</td>
                  </tr>
                  <tr>
                      <td>10</td>
                      <td> Prof. Sanghamitra Bandopadhyay,<br/> Director, Indian Statistical Institute </td>                       
                      <td>Member,<br/>Representatives from Academia (External)</td>
                  </tr>
                  <tr>
                      <td>11</td>
                      <td> Prof. Nilogy Ganguly,<br/> Department of Computer Science and Engg., IIT Kharagpur</td>                       
                      <td>Member,<br/>Representatives from Academia (External)</td>
                  </tr>
                  <tr>
                      <td>12</td>
                      <td>DST, Govt of Bihar has been contacted</td>                       
                      <td>Member,<br/>Representatives from Local Government </td>
                  </tr>
                  <tr>
                      <td>13</td>
                      <td>Mission Director (or a representative),<br/> Mission Office, DST</td>                       
                      <td>Member</td>
                  </tr>
                </tbody>
              </Table>
      </div>
    </div>
  </>
  );
}
