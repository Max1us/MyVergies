export interface LocaleDefinition {
  main: {
    menu: {
      wallets: string,
      add: string,
      explorer: string,
      contacts: string
    },
    copiedSuccessfully: string,
    colors: {
      blue: string,
      red: string,
      green: string,
      purple: string,
      orange: string
    }
  },
  tor: {
    status: {
      title: string,
      region: string,
      ip: string,
      unableToConnect: string,
      loading: string,
      connected: string,
      disconnected: string
    },
    toggle: string
  },
  unlock: {
    unlockYourWallet: string,
    pin: string,
    forgotPin: string
  },
  wallet: {
    settings: string,
    send: string,
    receive: string,
    noTransactions: string,
    noTransactionsDesc: string
  },
  transaction: {
    transaction: string,
    sent: string,
    sending: string,
    received: string,
    receiving: string,
    moved: string,
    pending: string,
    amount: string,
    date: string,
    details: string,
    address: string,
    confirmations: string,
    txid: string
  },
  send: {
    formDescription: string,
    confirmDescription: string,
    sendingDescription: string,
    send: string,
    fillForm: string,
    confirm: string,
    sending: string,
    sent: string,
    recipient: string,
    recipientDetails: string,
    amount: string,
    amountDetails: string,
    internalMemo: string,
    internalMemoDetails: string,
    sendMax: string,
    reset: string,
    confirmTransaction: string,
    cancel: string,
    transactionFee: string,
    total: string,
    transactionWarning: string,
    signing: string,
    publishing: string,
    broadcasting: string,
    transactionSent: string,
    transactionSentSubtitle: string,
    awesomeYouveDoneIt: string,
    whatToDoNext: string,
    seeTransaction: string,
    seeTransactionDesc: string,
    anotherTransaction: string,
    anotherTransactionDesc: string,
    transaction: string,
    orGoToWallet: string,
    orGoToWalletDesc: string,
    goToWallet: string,
    done: string,
    errors: {
      'INVALID_ADDRESS: Invalid address': string,
      'Insufficient funds': string,
      'BADREQUEST: Invalid amount': string,
      'Amount below dust threshold': string,
    }
  },
  receive: {
    receive: string,
    newAddress: string,
    previousAddresses: string,
    yourReceiveAddress: string,
    copy: string,
    addressCopied: string
  },
  createWallet: {
    createNewWallet: string,
    restoreExistingWallet: string,
    addYourFirstWallet: string,
    itsReallyEasy: string,
    aWalletName: string,
    aWalletNameDescription: string,
    walletName: string,
    enterYourWalletName: string,
    walletColor: string,
    advanced: string,
    singleAddress: string,
    serviceURL: string,
    writeDownPaperKey: string,
    preferences: string,
    paperKey: string,
    aPaperKey: string,
    aPaperKeyDescription: string,
    fillInYourPaperKey: string,
    fillInYourPaperKeyDesc: string,
    confirmPaperKey: string,
    invalidPaperkeySelected: string,
    passPhrase: string,
    passPhraseDescription: string,
    setupPassphraseReq1: string,
    setupPassphraseReq2: string,
    setupPassphraseReq3: string,
    setupPassphrasePassPlaceholder: string,
    confirmPassphrase: string,
    passphraseInvalid: string,
    confirm: string,
    back: string,
    proceed: string,
    almostReady: string,
    almostReadyDesc: string,
    awesomeYouveDoneIt: string,
    createTerm1: string,
    createTerm2: string,
    createTerm3: string,
    termsOfUse: string,
    openTermsOfUseConfirm: string,
    createWallet: string,
    creatingWallet: string,
    walletCreated: string,
    whatToDoNext: string,
    exportYourWallet: string,
    exportYourWalletDesc: string,
    exportWallet: string,
    sendXvgToYourWallet: string,
    sendXvgToYourWalletDesc: string,
    receiveXvg: string,
    orGoToWallet: string,
    orGoToWalletDesc: string,
    goToWallet: string
  },
  walletSettings: {
    walletSettings: string,
    preferences: string,
    name: string,
    nameDesc: string,
    color: string,
    colorDesc: string,
    service: string,
    serviceUrl: string,
    serviceUrlDesc: string,
    credentials: string,
    paperKey: string,
    passphrase: string,
    passphraseDesc: string,
    showPassphrase: string,
    yourWalletsPassphrase: string,
    dangerZone: string,
    delete: string,
    deleteWallet: string,
    deleteWalletDesc: string,
    deleteWalletConfirm: string,
    walletDeleted: string
  },
  settings: {
    settings: string,
    security: string,
    language: string,
    currency: string,
    currencyDetails: string,
    pin: string,
    changePin: string,
    lockAfter: string,
    lockAfterDetails: string,
    connection: string,
    torConnection: string,
    manageTorConnection: string
    changeYourPin: string
    changeYourPinDesc: string,
    currentPin: string,
    currentPinDesc: string,
    newPin: string,
    newPinDesc: string,
    newPinConfirmation: string,
    newPinConfirmationDesc: string,
    cancel: string,
    couldntChangePin: string,
    pinChanged: string
  }
}
