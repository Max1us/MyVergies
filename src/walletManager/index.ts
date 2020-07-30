import Vue, { PluginFunction } from 'vue'
import WalletManager from '@/walletManager/WalletManager'
import ManagerConfig, { WalletConfigItem } from '@/walletManager/ManagerConfig'
import Keytar from '@/utils/keytar'
import { Store } from 'vuex'
// @ts-ignore
import Mnemonic from 'bitcore-mnemonic'

const walletManager: PluginFunction<any> = function (vue: typeof Vue, options: any): void {
  vue.prototype.$walletManager = new WalletManager()

  loadWallets(options.store).then((wallets: WalletConfigItem[]) => {
    vue.prototype.$walletManager.boot(new ManagerConfig(wallets))
  })
}

const loadWallets = async (store: Store<any>): Promise<WalletConfigItem[]> => {
  const names = store.getters.allWalletNames

  if (names.length === 0) {
    return []
  }

  return Promise.all(names.map(async (name: string): Promise<WalletConfigItem> => {
    const encrytedWallet = await Keytar.getCredentials(Keytar.walletService, name)

    if (encrytedWallet === undefined) {
      throw Error(`Couldn't load wallet: ${name}`)
    }

    return JSON.parse(atob(encrytedWallet as string))
  }))
}

export default walletManager
