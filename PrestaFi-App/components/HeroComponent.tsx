
export default function HeroComponent() {

return (
    <div className="w-full">
    <div className="pt-0 p-4 rounded-lg overflow-hidden">
      <div
        style={{ backgroundImage: `url(/family-saving.jpeg)` }}
        className="rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-gray-100 bg-gray-300/60 dark:bg-gray-500/60 p-4 rounded-lg">
            <h1>PrestaFi</h1>
            {/* <p className="text-lg">
                Financing the unfinanced
            </p>
            <p className="text-lg">
                A Save Now, Buy Later DeFi protocol, with a Credit twist
            </p> */}
            <p className="text-2xl">
                Introducing a revolutionary DeFi protocol designed to bring financial freedom to everyone. Our Save Now, Buy Later platform integrates seamlessly with Stellar technology, offering an innovative solution for saving and spending.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

}