import './App.css';
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import ConnectComponent from './ConnectComponent.js'

function getLibrary(provider) {
  return new Web3(provider)
}

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <header className="App-header">
          <span>Welcome to "Web3 Connect Page".</span>
          <ConnectComponent/>
        </header>
      </div>
    </Web3ReactProvider>
  );
}

export default App;
