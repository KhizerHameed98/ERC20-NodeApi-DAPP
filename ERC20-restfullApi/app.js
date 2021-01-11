const express = require('express');
const bodyParser = require('body-parser');
const Web3 = require('web3');
const MyContract = require("./build/contracts/ERC20.json");
const HDWalletProvider = require('truffle-hdwallet-provider');
var Contract;
var acc;
var web3;

require('dotenv').config();

// const test = async() =>{
     
//     const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`,0,6)
//     web3 = new Web3(provider);
//     const networkId = await web3.eth.net.getId();
//      acc = await web3.eth.getAccounts();
     

//     Contract = new web3.eth.Contract(
//         MyContract.abi,
//         MyContract.networks[networkId].address
//     );
//     exports.Contract = Contract;
//     exports.acc = acc;
//     exports.web3 = web3;
// }

// test().then(function(){
//     console.log(acc);
// })




const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require("cors");




//Import POSTS




//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post('/transfer',async(req, res) =>{
  const web3 = req.body.web3;
  console.log(await web3.eth.getAccounts());
});

//ROUTES




mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true ,
    useUnifiedTopology:true,
    useCreateIndex:true
}, 

() =>{
    console.log("connected to the Database");
})
//How do we start listening to the server
app.listen(5000);