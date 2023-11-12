import { Client, Wallet } from 'xrpl'

const TESTNET = 'wss://s.altnet.rippletest.net:51233/'

async function main() {
  const client = new Client(TESTNET)
  await client.connect()

  const wallet = Wallet.generate()
  console.log('Generated wallet: ', wallet)

  console.log('Hello World!')
  client.disconnect()
}

main()
