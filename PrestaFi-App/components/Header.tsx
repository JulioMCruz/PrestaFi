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
          <Link href="/" className="ml-8">
            {/* <h1 className="text-5xl ml-8">PrestaFi</h1> */}
            <PrestaFiLogo className="h-18 w-18 mb-4" />
          </Link> 
          { stellarWalletAddress && (
          <nav className="hidden md:flex mt-6">
            <Link className="text-gray-300 hover:text-white text-xl mx-4" href="/">
              Home
            </Link>
            <Link className="text-gray-300 hover:text-white text-xl mx-4" href="/saving">
              Savings
            </Link>
            <Link className="text-gray-300 hover:text-white text-xl mx-4" href="/payments">
              Payments
            </Link>
          </nav>          
          )}

          { !stellarWalletAddress && (
            <Button className="text-[#70f7c9] border-[#70f7c9] mr-8  mt-6" variant="outline" onClick={connectToStellar}>
              Login
            </Button>
          )}

            { stellarWalletAddress && (
              <div className="flex">
                <AddressDisplayComponent />
                <Button className="text-[#70f7c9] border-[#70f7c9] mr-8 mt-6" variant="outline" onClick={disconnectWallet}>
                  Logout
                </Button>
              </div>
          )}
    </header>
    );
}

function PrestaFiLogo(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
<svg width="185" height="38" viewBox="0 0 185 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_5_2891)">
<g clip-path="url(#clip1_5_2891)">
<path d="M30.6199 10.568L21.4171 1.3652C20.7364 0.68682 19.8145 0.305908 18.8535 0.305908C17.8925 0.305908 16.9706 0.68682 16.2899 1.3652L1.37649 16.2786C0.708641 16.9499 0.33374 17.8583 0.33374 18.8052C0.33374 19.7522 0.708641 20.6606 1.37649 21.3319L3.99763 23.9448C4.14 22.6634 4.72049 21.4705 5.64098 20.5677C5.75601 20.4609 5.96965 20.2308 5.96965 20.2308L9.9219 16.2868C10.9713 15.2376 12.3944 14.6482 13.8783 14.6482C15.3622 14.6482 16.7853 15.2376 17.8346 16.2868L21.376 19.82C21.7037 20.1502 22.0935 20.4122 22.5229 20.5911C22.9523 20.7699 23.4129 20.8619 23.878 20.8619C24.3432 20.8619 24.8038 20.7699 25.2332 20.5911C25.6626 20.4122 26.0524 20.1502 26.38 19.82L30.6445 15.5555C30.9706 15.2265 31.2287 14.8365 31.4039 14.4077C31.5792 13.9789 31.6682 13.5198 31.6659 13.0566C31.6636 12.5934 31.5701 12.1352 31.3906 11.7082C31.2111 11.2812 30.9492 10.8937 30.6199 10.568ZM22.6579 14.0519C22.084 14.0633 21.5288 13.8477 21.1131 13.452L18.5084 10.8473C18.0848 10.4364 17.8417 9.8741 17.8325 9.28402C17.8232 8.69394 18.0486 8.12432 18.4591 7.70031C18.8689 7.29087 19.4245 7.06089 20.0038 7.06089C20.5832 7.06089 21.1388 7.29087 21.5486 7.70031L24.1615 10.2722C24.3737 10.4779 24.5431 10.7235 24.66 10.9949C24.777 11.2662 24.8391 11.5581 24.8429 11.8536C24.8468 12.149 24.7922 12.4424 24.6823 12.7167C24.5724 12.991 24.4094 13.2409 24.2026 13.452C23.7869 13.8477 23.2317 14.0633 22.6579 14.0519Z" fill="#00CC75"/>
<path d="M36.3303 16.2785L33.701 13.6573C33.5604 14.9417 32.9798 16.1378 32.0576 17.0426C31.9426 17.1495 31.729 17.3713 31.729 17.3713L27.7849 21.3236C26.7342 22.3733 25.3097 22.9629 23.8245 22.9629C22.3392 22.9629 20.9147 22.3733 19.864 21.3236L16.3554 17.7822C15.6915 17.1193 14.7916 16.7471 13.8534 16.7471C12.9153 16.7471 12.0154 17.1193 11.3514 17.7822L7.08695 22.0549C6.75852 22.381 6.49786 22.7689 6.31999 23.1961C6.14211 23.6234 6.05054 24.0817 6.05054 24.5445C6.05054 25.0074 6.14211 25.4656 6.31999 25.8929C6.49786 26.3202 6.75852 26.7081 7.08695 27.0342L16.2897 36.2452C16.9718 36.9241 17.8951 37.3052 18.8574 37.3052C19.8198 37.3052 20.743 36.9241 21.4252 36.2452L36.3303 21.3318C37.0002 20.6615 37.3765 19.7527 37.3765 18.8051C37.3765 17.8575 37.0002 16.9487 36.3303 16.2785ZM17.703 30.5756C17.416 30.5759 17.1317 30.5194 16.8666 30.4094C16.6015 30.2994 16.3608 30.1381 16.1582 29.9347L13.5617 27.3382C13.1387 26.9323 12.8927 26.3759 12.8774 25.7898C12.862 25.2037 13.0784 24.6352 13.4796 24.2076C13.6814 24.0029 13.9219 23.8404 14.1871 23.7294C14.4523 23.6185 14.7369 23.5613 15.0243 23.5613C15.3118 23.5613 15.5964 23.6185 15.8616 23.7294C16.1268 23.8404 16.3673 24.0029 16.5691 24.2076L19.2313 26.8041C19.6433 27.221 19.8743 27.7834 19.8743 28.3694C19.8743 28.9555 19.6433 29.5179 19.2313 29.9347C18.8258 30.3407 18.2768 30.5709 17.703 30.5756Z" fill="#00CC75"/>
<path d="M47.99 9.54068H55.7384C56.5133 9.48103 57.2919 9.58967 58.0209 9.85914C58.7499 10.1286 59.412 10.5525 59.9618 11.1019C60.948 12.2371 61.4598 13.708 61.3915 15.2102C61.4169 16.2399 61.1763 17.2587 60.6931 18.1683C60.2259 19.0189 59.5243 19.7176 58.6718 20.1814C57.7316 20.6705 56.6828 20.9136 55.6233 20.888H51.4164V26.0646H47.99V9.54068ZM54.9167 18.1518C55.3189 18.1806 55.7228 18.1277 56.104 17.9964C56.4853 17.8651 56.836 17.658 57.1352 17.3877C57.3918 17.0995 57.5874 16.7624 57.7102 16.3967C57.8331 16.031 57.8807 15.6441 57.8501 15.2595C57.8987 14.4613 57.6366 13.6751 57.1188 13.0657C56.8316 12.7949 56.4911 12.587 56.119 12.4554C55.7468 12.3238 55.3513 12.2714 54.9578 12.3015H51.3835V18.1518H54.9167Z" fill="#00CC75"/>
<path d="M63.2976 13.8956H66.5104L66.6665 15.161C67.3193 14.7731 68.0104 14.4537 68.7289 14.2078C69.5032 13.9336 70.3049 13.7435 71.12 13.6409V16.2456C70.3241 16.3664 69.5365 16.5366 68.7617 16.755C68.0791 16.9565 67.4206 17.232 66.7979 17.5767V26.0317H63.3305V13.8956H63.2976Z" fill="#00CC75"/>
<path d="M73.5029 24.7253C72.8714 24.1111 72.3816 23.3664 72.068 22.5432C71.7543 21.72 71.6243 20.8383 71.687 19.9596C71.6337 19.1208 71.7463 18.2797 72.0184 17.4845C72.2905 16.6893 72.7168 15.9556 73.2728 15.3253C73.8816 14.7393 74.6061 14.2867 75.3998 13.9967C76.1936 13.7066 77.0391 13.5854 77.8824 13.6409C78.6578 13.5893 79.4359 13.6912 80.1719 13.9407C80.9079 14.1903 81.5874 14.5826 82.1715 15.0953C82.687 15.5961 83.09 16.2011 83.3535 16.8698C83.617 17.5385 83.7351 18.2557 83.6998 18.9736V21.1921H74.8997C74.9416 21.601 75.0814 21.9937 75.3074 22.337C75.5334 22.6803 75.8389 22.964 76.198 23.1641C77.1537 23.5963 78.1989 23.7935 79.2464 23.7393C79.9193 23.736 80.5905 23.67 81.2513 23.5421C81.8395 23.447 82.4155 23.2872 82.9686 23.0655V25.5305C81.5539 26.0941 80.0367 26.3545 78.5151 26.2947C76.7086 26.4025 74.9253 25.8441 73.5029 24.7253ZM80.6761 19.0722V18.382C80.6761 16.8865 79.7887 16.1224 77.981 16.1224C77.1303 16.0396 76.2796 16.2801 75.5981 16.7961C75.3349 17.1043 75.1372 17.4628 75.0171 17.8499C74.897 18.237 74.8571 18.6445 74.8997 19.0475L80.6761 19.0722Z" fill="#00CC75"/>
<path d="M87.8248 26.155C87.1441 26.0676 86.4748 25.9078 85.8281 25.6784V22.819C86.4588 23.0856 87.1218 23.2679 87.8001 23.3613C88.5027 23.4858 89.2147 23.549 89.9282 23.5503C90.5458 23.5733 91.1639 23.5208 91.7688 23.3942C91.9157 23.3558 92.0455 23.2694 92.1378 23.1489C92.2301 23.0283 92.2795 22.8804 92.2782 22.7286C92.2755 22.5742 92.2294 22.4238 92.1451 22.2944C92.0608 22.1651 91.9418 22.0621 91.8017 21.9973C91.2239 21.7334 90.628 21.511 90.0186 21.3318C89.6846 21.242 89.3555 21.1351 89.0326 21.0113C88.0597 20.7495 87.1583 20.2721 86.395 19.6145C86.1039 19.307 85.8803 18.942 85.7388 18.5429C85.5973 18.1438 85.5409 17.7195 85.5734 17.2973C85.5485 16.7744 85.6542 16.2535 85.8808 15.7816C86.1074 15.3097 86.4479 14.9015 86.8716 14.594C88.1182 13.8832 89.5493 13.5627 90.98 13.6738C91.6731 13.6755 92.3651 13.7277 93.0506 13.8299C93.6417 13.9178 94.2244 14.0553 94.7925 14.2407V17.1001C94.2963 16.8785 93.7748 16.7184 93.2396 16.6236C92.6992 16.5078 92.1488 16.4445 91.5962 16.4346C90.9898 16.4197 90.3835 16.4721 89.7886 16.5907C89.6222 16.6088 89.4683 16.6875 89.3562 16.8118C89.2441 16.936 89.1815 17.0971 89.1805 17.2645C89.179 17.4029 89.2167 17.539 89.2895 17.6568C89.3622 17.7746 89.4669 17.8694 89.5913 17.93C90.1203 18.1719 90.6704 18.3644 91.2347 18.5052L92.0564 18.7517C92.8484 18.9905 93.6138 19.3099 94.3406 19.7048C94.8385 19.9805 95.2399 20.402 95.491 20.9127C95.7363 21.4743 95.8541 22.0832 95.8361 22.6957C95.8659 23.2344 95.756 23.7717 95.517 24.2555C95.278 24.7392 94.9181 25.1529 94.4721 25.4566C93.2496 26.16 91.8443 26.4805 90.4377 26.3768C89.5092 26.3193 88.6546 26.2536 87.8248 26.155Z" fill="#00CC75"/>
<path d="M99.1392 25.2347C98.7758 24.8257 98.4978 24.3483 98.3214 23.8305C98.1451 23.3127 98.0739 22.7648 98.1121 22.2191V11.2908L101.58 10.272V13.9284H104.685L104.496 16.5906H101.637V21.9973C101.614 22.2429 101.641 22.4907 101.717 22.7254C101.793 22.96 101.917 23.1765 102.081 23.3612C102.51 23.653 103.026 23.7892 103.543 23.7474C104.049 23.7368 104.55 23.651 105.031 23.4927V25.8756C104.161 26.2095 103.234 26.3714 102.303 26.3521C101.727 26.3938 101.149 26.3161 100.604 26.1238C100.06 25.9315 99.561 25.6288 99.1392 25.2347Z" fill="#00CC75"/>
<path d="M107.783 25.3333C107.37 24.9988 107.043 24.5713 106.827 24.0856C106.611 23.6 106.514 23.0702 106.543 22.5396C106.522 21.9892 106.629 21.4416 106.855 20.9397C107.082 20.4378 107.422 19.9954 107.849 19.6473C108.925 18.8677 110.237 18.4845 111.563 18.5627H115.154V18.2504C115.177 17.8285 115.077 17.4089 114.866 17.0426C114.636 16.7212 114.297 16.4937 113.913 16.4017C113.277 16.2576 112.626 16.1941 111.974 16.2127C110.615 16.2123 109.265 16.4258 107.972 16.8454V14.3803C108.66 14.1149 109.373 13.9222 110.1 13.8052C110.963 13.6765 111.833 13.6133 112.705 13.6162C116.551 13.6162 118.457 15.1691 118.457 18.3162V26.0399H115.441L115.244 24.9553C114.266 25.8838 112.779 26.3275 110.832 26.3275C109.731 26.3595 108.653 26.008 107.783 25.3333ZM113.79 23.6899C114.312 23.4674 114.779 23.1305 115.154 22.7039V20.7894H111.629C110.257 20.7894 109.591 21.3646 109.591 22.4738C109.591 23.5831 110.322 24.1172 111.818 24.1172C112.494 24.0795 113.16 23.9325 113.79 23.6817V23.6899Z" fill="#00CC75"/>
<path d="M132.456 9.152V12.44H125.592V15.992H130.728V19.184H125.592V26H121.488V9.152H132.456ZM136.677 11.216C135.957 11.216 135.365 11.008 134.901 10.592C134.453 10.16 134.229 9.632 134.229 9.008C134.229 8.368 134.453 7.84 134.901 7.424C135.365 6.992 135.957 6.776 136.677 6.776C137.381 6.776 137.957 6.992 138.405 7.424C138.869 7.84 139.101 8.368 139.101 9.008C139.101 9.632 138.869 10.16 138.405 10.592C137.957 11.008 137.381 11.216 136.677 11.216ZM138.717 12.608V26H134.613V12.608H138.717Z" fill="#047463"/>
</g>
</g>
<defs>
<clipPath id="clip0_5_2891">
<rect width="185" height="37" fill="white" transform="translate(0 0.305054)"/>
</clipPath>
<clipPath id="clip1_5_2891">
<rect width="184.334" height="37" fill="white" transform="translate(0.332764 0.305054)"/>
</clipPath>
</defs>
</svg>
    )
  }