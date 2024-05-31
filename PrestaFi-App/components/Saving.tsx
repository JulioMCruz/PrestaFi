

import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps } from "react"

import { isAllowed, setAllowed, getUserInfo, getPublicKey, signTransaction } from '@stellar/freighter-api';
import helloWorld from "../contracts/hello_world";
import incrementor from "../contracts/soroban_increment_contract";

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function SavingComponent() {  

  const { stellarWalletAddress, showConfetti, setShowConfetti } = useContext(GlobalContext);

  incrementor.options.publicKey = stellarWalletAddress;

  async function getPk() {
    const { publicKey } = await getUserInfo();
    console.log(publicKey);
    return publicKey;
  }

  async function saveCollateral() {
    console.log('Saving Collateral');
    console.log(incrementor.options.publicKey);
    const tx = await incrementor.increment();
    try {
      const { result } = await tx.signAndSend({signTransaction});
      console.log(result);        
    } catch (error) {
      console.log(error);
    }
    setShowConfetti(true);
    console.log(showConfetti);
  }

  return (
    <>
 
    <Card className="w-full max-w-md p-4 bg-[#effdf4] text-black mt-24">
      <CardHeader>
        <CardTitle>Wallet Concept</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <p className="font-bold">Want to bring my collateral</p>

          <div className="flex justify-between items-center">
            <Button variant="ghost" size="icon">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>1200 USDC</span>
            <Button variant="ghost" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
          <Progress value={50} className="w-full" />


        </div>
        <div className="space-y-2">
          <p className="font-bold">Remember</p>
          <p>Decide how much collateral you want to put.</p>
          <div className="flex justify-between items-center">
            <Button variant="ghost" size="icon">
              <MinusIcon className="w-4 h-4" />
            </Button>
            <span>1000 USDC</span>
            <Button variant="ghost" size="icon">
              <PlusIcon className="w-4 h-4" />
            </Button>
          </div>
          <Progress value={50} className="w-full" />
        </div>
      </CardContent>
      <CardFooter className="items-center">
        <Button className="w-full text-[#70f7c9] border-[#70f7c9]" variant="outline" onClick={saveCollateral} >Pay Collateral</Button>
      </CardFooter>
    </Card>
    </>
  )
}

function MinusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
      </svg>
    )
  }
  
  
  function PlusIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>
    )
  }