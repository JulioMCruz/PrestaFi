"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link"

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

import {
  FreighterModule,
  StellarWalletsKit,
  WalletNetwork,
  XBULL_ID, FREIGHTER_ID,
  xBullModule, 
  ISupportedWallet,
} from '@creit.tech/stellar-wallets-kit';
import AddressDisplayComponent from "./AddressDisplay";


const kit: StellarWalletsKit = new StellarWalletsKit({
  network: WalletNetwork.TESTNET,
  selectedWalletId: FREIGHTER_ID,
  modules: [
    new FreighterModule(),
  ]
});

export default function HeaderComponent() {

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
    <header className="absolute top-0 left-0 right-0 flex justify-between items-center p-4">
          <Link href="/">
            <h1 className="text-5xl ml-8">PrestaFi</h1>
          </Link> 
          { stellarWalletAddress && (
          <nav className="hidden md:flex mt-6">
            <Link className="text-gray-300 hover:text-white text-2xl mx-4" href="#">
              Home
            </Link>
            <Link className="text-gray-300 hover:text-white text-2xl mx-4" href="/#">
              Page 1
            </Link>
            <Link className="text-gray-300 hover:text-white text-2xl mx-4" href="#">
              Page 2
            </Link>
          </nav>          
          )}

          { !stellarWalletAddress && (
            <Button className="text-[#70f7c9] border-[#70f7c9] mr-8  mt-6" variant="outline" onClick={connectToStellar}>
              Connect Wallet
            </Button>
          )}

            { stellarWalletAddress && (
              <div className="flex">
                <AddressDisplayComponent />
                <Button className="text-[#70f7c9] border-[#70f7c9] mr-8  mt-6" variant="outline" onClick={disconnectWallet}>
                  Disconnect Wallet
                </Button>
              </div>
          )}
    </header>
    );
}
