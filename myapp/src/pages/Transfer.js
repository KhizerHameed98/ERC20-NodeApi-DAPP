import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function Transfer() {
  const [address_Transfer, setTransfer] = useState("");
  const [amount_Transfer, setAmountTransfer] = useState("");

  const transfer =() =>{
    
    Axios.post('http://localhost:5000/transfer',{
      recipientAddress: address_Transfer,
      amount: amount_Transfer,
    }).then((response) =>{
      
      Swal.fire(
        response.data.status.toString(),
        'The status for token transfer is : ' + response.data.status.toString(),
        'success'
      )
      
      
    });
  };
  return (
    <MDBContainer>
    <div style={{marginTop:70, borderBottom:"solid"}}>
    
    <MDBCol md="12">
      <div className="text-center">
        <p className="h1 text-center mb-4">Transfer</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Recipient Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setTransfer(e.target.value);
        }}
        
        
        placeholder="Recipient Address" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Amount: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setAmountTransfer(e.target.value);
        }}
        
        
        placeholder="Amount" className="form-control" />
        <br />
      
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300}} type="submit" onClick={transfer}>Submit</button>
        </div>
        <br/>
        
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default Transfer;
