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

import { useState } from "react";
import { NULL_ACCOUNT } from "stellar-sdk/contract";

const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  modules: [
    new FreighterModule(),
  ]
});

export default function Home() {

  const [wallet, setWallet] = useState("");

  async function connectToStellar() {
    await kit.openModal({
      onWalletSelected: async (option: ISupportedWallet) => {
        kit.setWallet(option.id);
        const publicKey = await kit.getPublicKey();
        // Do something else
        console.log(publicKey);
        setWallet(publicKey);
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
      kit.setWallet(NULL_ACCOUNT);
      // Your logic to disconnect the wallet
      setWallet("");
      console.log('Wallet disconnected successfully');
    } catch (error) {
      console.error('Failed to disconnect wallet:', error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={connectToStellar}>Click me</Button>
      <Button onClick={getPublicKey}> Get Public Key</Button>
      <Button onClick={disconnectWallet}> Disconnect</Button>
    </main>
  );
}
