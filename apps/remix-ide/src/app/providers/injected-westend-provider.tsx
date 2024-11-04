import * as packageJson from '../../../../../package.json'
import { InjectedCustomProvider } from './injected-custom-provider'

const profile = {
  name: 'injected-westend-provider',
  displayName: 'Injected Westend Testnet',
  kind: 'provider',
  description: 'Injected Westend Testnet Provider',
  methods: ['sendAsync', 'init'],
  version: packageJson.version
}

export class InjectedWestendTestnetProvider extends InjectedCustomProvider {

  constructor () {
    super(profile,
      'Westend Testnet',
      '0x190f1b44',
      ['https://westend-asset-hub-eth-rpc.polkadot.io'],
      {
        "name": "Testnet token WND",
        "symbol": "WND",
        "decimals": 18
      }
    )
  }
}
