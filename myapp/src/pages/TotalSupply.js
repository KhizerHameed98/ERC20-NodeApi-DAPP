import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function TotalSupply() {
  const [totalSupplyVariable, setTotalSupply] = useState("");

  const totalSupply =() =>{
    Axios.post('http://localhost:5000/totalSupply').then((response) =>{
      
      
      Swal.fire(
        response.data.toString(),
        'This is the totalSupply!',
        'success'
      )
      
    }).catch(err => {
      console.log(err);
    });
  };
  return (
    
    <MDBContainer>
    <div style={{marginTop:70, borderBottom:"solid"}}>
    
    <MDBCol md="12">
      <div>
        <p className="h1 text-center mb-4" style={{fontWeight: "bold"}}>TotalSupply</p>
        <br />
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300, fontWeight:"bold"}} type="submit" onClick={totalSupply} >Total Supply</button>
        </div>
        <br/>
        <h2 className="text-center" style={{color:"red", fontWeight:"bold"}}>{totalSupplyVariable}</h2>
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default TotalSupply;
