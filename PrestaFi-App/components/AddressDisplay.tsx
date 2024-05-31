
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { JSX, SVGProps } from "react"

import { useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalContext';

export default function AddressDisplayComponent() {

  const { stellarWalletAddress, setStellarWalletAddress } = useContext(GlobalContext);

  function copyAddressToClipboard() {
    navigator.clipboard.writeText(stellarWalletAddress).then(function() {
      console.log('Copied to clipboard successfully!');
    }, function(err) {
      console.error('Could not copy text: ', err);
    });
  }

  return (<>
      <div className="flex items-center gap-3 rounded-xl border border-gray-200 px-2 dark:border-[#70f7c9] right-0 mr-4">
        <div className="flex items-center gap-2">
          {/* <div className="text-sm font-mono text-gray-500 dark:text-gray-400">ID:</div> */}
          <div className="text-sm font-mono text-gray-500 dark:text-gray-400">{stellarWalletAddress.substring(0, 6)}...{stellarWalletAddress.substring(stellarWalletAddress.length - 6)}</div>
          <Button size="icon" variant="ghost" onClick={copyAddressToClipboard}>
            <CopyIcon className="h-4 w-4" />
            <span className="sr-only">Copy address</span>
          </Button>
        </div>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-10 w-10">
              <img alt="@shadcn" src="/placeholder.svg" />
              <AvatarFallback>JP</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>My Account</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>
      <div />
      </>
  )
}

function CopyIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}