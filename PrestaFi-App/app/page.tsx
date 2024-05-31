"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button"

import {
  FreighterModule,
  StellarWalletsKit,
  WalletNetwork,
  XBULL_ID, FREIGHTER_ID,
  xBullModule, 
  ISupportedWallet,
} from '@creit.tech/stellar-wallets-kit';

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  modules: [
    new FreighterModule(),
  ]
});

export default function Home() {

  const { stellarWalletAddress, setStellarWalletAddress } = useContext(GlobalContext);

  async function connectToStellar() {
    await kit.openModal({
      onWalletSelected: async (option: ISupportedWallet) => {
        kit.setWallet(option.id);
        const publicKey = await kit.getPublicKey();
        // Do something else
        setStellarWalletAddress(publicKey);
        console.log(publicKey);
      },
    });  
  }

  async function getPublicKey() {
    const publicKey = await kit.getPublicKey();
    // Do something else
    console.log(publicKey);
  }

  const disconnectWallet = async () => {
    try {
      // Your logic to disconnect the wallet
      setStellarWalletAddress("");
      console.log('Wallet disconnected successfully');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {!stellarWalletAddress && (<Button onClick={connectToStellar}>Connect</Button>)}
      {stellarWalletAddress && (<Button onClick={disconnectWallet}> Disconnect</Button>)}
      {stellarWalletAddress && (<p>Wallet Address: {stellarWalletAddress}</p>)}
      {stellarWalletAddress && (<Button onClick={getPublicKey}>Get Public Key</Button>)}
    </main>
  );
}
