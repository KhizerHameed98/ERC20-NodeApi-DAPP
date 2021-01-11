
import web3 from './web3';
const MyContract = require("./build/contracts/ERC20.json");
const address = '0x9cDF6469216386EbFc114075646a495D77077Ea5';


export default new web3.eth.Contract(MyContract.abi, address);