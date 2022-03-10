import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import {initWeb3,getContract} from './utils.js';


function App() {

  const [web3, setWeb3] = useState(undefined);
  const [contract, setContract] = useState(undefined);
  const [accounts,setAccounts] = useState([]);

  
  const saveData = async(e) => {
    e.preventDefault();
    let input = document.getElementById('addDataInput').value;
    await contract.methods.addNumber(input).send({from:accounts[0]});
    getAll(contract);
  }
 

useEffect(()=> {
  const init = async()=> {
    const web3 = await initWeb3();
    const contract = await getContract(web3);
    const accounts = await web3.eth.getAccounts();
    
    setWeb3(web3);
    setContract(contract);
    setAccounts(accounts);
    getAll(contract);
  }
  init();
},[]);

const getAll = async (contract) => {
  const result = await contract.methods.getAll().call();
 // alert('result'+result);
  document.getElementById('data').innerHTML = result.join(',');
}



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />       
      </header> */}
          
            <h1>Advanced storage</h1>
            <form id="addData">
              <div className="form-group">
                <label htmlFor="addDataInput">Set data (number)</label>
                <input id="addDataInput" type="number" className="form-control"></input>
              </div>
              <button type="submit" className="btn btn-primary" onClick={(e)=>saveData(e)}>Submit</button>
            </form>
            <div>Data: <span id="data"></span></div>
     
    </div>
  );
}

export default App;
