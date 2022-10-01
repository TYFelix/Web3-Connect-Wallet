import { useWeb3React } from "@web3-react/core"
import injected from './Connectors.js'
import Button from '@mui/material/Button';
import { truncateAddress } from "./utils";
import Web3 from 'web3';
import { useState } from 'react';

export default function ConnectComponent() {
  const { active, account, activate, deactivate } = useWeb3React()
  const [ethBalance, setEthBalance] = useState();

  async function connect() {
    try {

      await activate(injected);
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      await deactivate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  function getEthBalance(account) {
    if (!account) return "No Account";

    var web3 = new Web3(window.ethereum);
    console.log(window);
    web3.eth.getBalance(account).then(bal => {
      var balance = web3.utils.fromWei(bal, 'ether');
      setEthBalance(balance + " ETH");
    })
    return ethBalance;
    
  };

  return (
    <div>
      {active ? (
        <div>
          <Button onClick={disconnect} variant="outlined">Disconnect Wallet</Button>
          <p>Connected with <b>{truncateAddress(account)}</b></p>
          <p>Balance: <b>{getEthBalance(account)}</b></p>
        </div>
      ) : (
        <div>
          <Button onClick={connect} variant="outlined">Connect Wallet</Button>
          <p>Please connect your "Ethereum mainnet".</p>
        </div>
      )}
    </div>
  )
}