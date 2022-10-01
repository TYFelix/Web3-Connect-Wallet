import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({
  supportedChainIds: [1, 56],
})

export default injected;