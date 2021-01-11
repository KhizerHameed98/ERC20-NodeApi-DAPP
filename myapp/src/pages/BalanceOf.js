import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function BalanceOf() {
  const [address_BalanceOf, setAddress] = useState("");
  const [balanceOfVaraible, setBalanceOf] = useState("");

  const balanceOf =() =>{
    Axios.post('http://localhost:5000/balanceOf',{
      address: address_BalanceOf,
    }).then((response) =>{
      Swal.fire(
        response.data.toString(),
        'This is the Balance Of : ' + address_BalanceOf,
        'success'
      )
     
    });
  };

  return (
    <MDBContainer>
    <div style={{marginTop:70, borderBottom:"solid"}}>
    
    <MDBCol md="12">
      <div className="text-center">
        <p className="h1 text-center mb-4">Balance OF</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Account Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setAddress(e.target.value);
        }}
        
        
        placeholder="Account Address" className="form-control" />
        <br />
      
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300}} type="submit" onClick={balanceOf}>Submit</button>
        </div>
        <br/>
        <h2 className="text-center"  style={{color:"red", fontWeight:"bold"}}></h2>
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default BalanceOf;
