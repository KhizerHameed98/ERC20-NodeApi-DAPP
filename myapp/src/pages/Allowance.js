import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function Allowance() {
  const[ownerAddress_allowance, setOwner_allowance] = useState("");
  const[spenderAddress_allowance, setSpender_allowance] =useState("");

  const allowance =() =>{
    
    Axios.post('http://localhost:5000/allowance',{
      owner: ownerAddress_allowance,
      spender: spenderAddress_allowance,
    }).then((response) =>{
      
      Swal.fire(
        response.data.toString(),
        'This is the Allowed Amount for : ' + spenderAddress_allowance,
        'success'
      )
      
    });
  };

  return (
    <MDBContainer>
    <div style={{marginTop:70, borderBottom:"solid"}}>
    
    <MDBCol md="12">
      <div className="text-center">
        <p className="h1 text-center mb-4">Allowance Check</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Owner Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setOwner_allowance(e.target.value);
        }}
        
        
        placeholder="Owner Address" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Spender Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setSpender_allowance(e.target.value);
        }}
        
        
        placeholder="Spender Address" className="form-control" />
        <br />
      
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300}} type="submit" onClick={allowance}>Submit</button>
        </div>
        <br/>
        <h2 className="text-center"  style={{color:"red", fontWeight:"bold"}}></h2>
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default Allowance;
