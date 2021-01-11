import React, {useState} from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Axios from "axios";
import Swal from 'sweetalert2';

function TransferFrom() {
  const[senderAddress_transferFrom,setSenderAddress_transferFrom ] = useState("");
  const[recipientAddress_transferFrom,setRecipientAddress_transferFrom ] = useState("");
  const[amount_transferFrom,setAmount_transferFrom ] = useState("");
  const transferFrom =() =>{
    
    Axios.post('http://localhost:5000/approve',{
      sender: senderAddress_transferFrom,
      recipient: recipientAddress_transferFrom,
      amount: amount_transferFrom,
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
        <p className="h1 text-center mb-4">Transfer From</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Sender Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setSenderAddress_transferFrom(e.target.value);
        }}
        
        
        placeholder="Sender Address" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Recipient Address: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setRecipientAddress_transferFrom(e.target.value);
        }}
        
        
        placeholder="Recipient Address" className="form-control" />
        <br />
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
          Amount: 
        </label>
        <input style={{width:500, marginLeft:300}}  type="text" 
        onChange = {(e) =>{
          setAmount_transferFrom(e.target.value);
        }}
        
        
        placeholder="Amount" className="form-control" />
        <br />
      
        <div className="text-center mt-4">
          <button className="btn btn-success" style={{width:300}} type="submit" onClick={transferFrom}>Submit</button>
        </div>
        <br/>
        
        </div>
    </MDBCol>
    </div>
    </MDBContainer>
  );
}

export default TransferFrom;
