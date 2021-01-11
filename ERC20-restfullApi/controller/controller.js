
//const express = require('express');
//import {Contract,web3,acc} from '../main';
var main = require('../main');
//const router = express.Router();
//const Post = require('../models/balanceOf');
// require('dotenv').config();
// const Web3 = require('web3');
// const MyContract = require("../build/contracts/ERC20.json");
// const HDWalletProvider = require('truffle-hdwallet-provider');



exports.balanceOf = async(req, res) =>{

        
        // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
        //    const web3 = new Web3(provider);
        //    const networkId = await web3.eth.net.getId();
        //    var acc = await web3.eth.getAccounts();
       
        //    const Contract = new web3.eth.Contract(
        //        MyContract.abi,
        //        MyContract.networks[networkId].address
        //    );
           res.send(await main.Contract.methods.balanceOf(req.body.address).call());
            
}

exports.totalSupply = async(req, res) =>{

    // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    // const web3 = new Web3(provider);
    //    const networkId = await web3.eth.net.getId();
    //    var acc = await web3.eth.getAccounts();
   
    //       const Contract = new web3.eth.Contract(
    //        MyContract.abi,
    //        MyContract.networks[networkId].address
    //    );
       res.send(await main.Contract.methods.totalSupply().call());
       
       
}

exports.transfer = async(req, res) =>{

        
    // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    //    const web3 = new Web3(provider);
    //    const networkId = await web3.eth.net.getId();
    //    var acc = await web3.eth.getAccounts();
   
   
    //    const Contract = new web3.eth.Contract(
    //        MyContract.abi,
    //        MyContract.networks[networkId].address
    //    );
       res.json(await main.Contract.methods.transfer(req.body.recipientAddress, req.body.amount).send({from: main.acc[0]}));
        
}
exports.allowance = async(req, res) =>{

        
    // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    //    const web3 = new Web3(provider);
    //    const networkId = await web3.eth.net.getId();
    //    var acc = await web3.eth.getAccounts();
   
   
    //    const Contract = new web3.eth.Contract(
    //        MyContract.abi,
    //        MyContract.networks[networkId].address
    //    );
       res.send(await main.Contract.methods.allowance(req.body.owner, req.body.spender).call());
        
}
exports.approve = async(req, res) =>{

        
    // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    //    const web3 = new Web3(provider);
    //    const networkId = await web3.eth.net.getId();
    //    var acc = await web3.eth.getAccounts();
   
   
    //    const Contract = new web3.eth.Contract(
    //        MyContract.abi,
    //        MyContract.networks[networkId].address
    //    );
       res.send(await main.Contract.methods.approve(req.body.spender, req.body.amount).send({from: main.acc[0]}));
        
}
exports.transferFrom = async(req, res) =>{

        
    // const provider =  new HDWalletProvider(process.env.MNEMONIC, `https://ropsten.infura.io/v3/${process.env.INFURA_API_KEY}`)
    //    const web3 = new Web3(provider);
    //    const networkId = await web3.eth.net.getId();
    //    var acc = await web3.eth.getAccounts();
   
   
    //    const Contract = new web3.eth.Contract(
    //        MyContract.abi,
    //        MyContract.networks[networkId].address
    //    );
       res.send(await main.Contract.methods.transferFrom(req.body.sender, req.body.recipient, req.body.amount).send({from: main.acc[0]}));
        
}
