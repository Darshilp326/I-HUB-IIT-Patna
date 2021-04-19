import "../Styles/BodStyle.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Table} from "react-bootstrap"
import PicSlideShow from './PicSlideShow';

export default function Bod() {
  return (
    <>
      <PicSlideShow content="BOARD OF DIRECTORS" />
      <div className="wrapper0">
        <div className="wrapper1">
          <p id="h0">Board of Directors</p>
          <p id="h1">
            The Indian Institute of Technology Patna has constituted a Hub
            Governing Body for Technology Innovation Hub (TIH) under National
            Mission on Interdisciplinary Cyber Physical Systems (NM-ICPS).
          </p>
          <Table striped bordered hover className="t1">
                <thead>
                  <tr>
                    <th>SR. No.</th>
                    <th>Name and DESIGNATION</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                      <td>01</td>
                      <td> <strong>Dr. N. S. Rajput </strong></td>     
                  </tr>
                  <tr>
                      <td>02</td>
                      <td> <strong>Dr. N. S. Rajput </strong> </td>                  
                  </tr>
                  <tr>
                      <td>03</td>
                      <td> <strong>Dr. N. S. Rajput </strong> </td>                     
                  </tr>
                </tbody>
            </Table>
        </div>
      </div>
    </>
  );
}
