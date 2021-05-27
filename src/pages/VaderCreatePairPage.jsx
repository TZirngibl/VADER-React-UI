import TokenSelect from "../components/TokenSelect"

const VaderCreatePairPage = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full lg:max-w-xl mx-auto">
            <h1 className="justify-center w-full text-center text-3xl font-extrabold m-2 text-white">Create A Pair</h1>
            <div className="flex flex-col justify-center p-10 h-full pt-0">
                <div className="liquidity-container p-4 rounded-xl text-sm text-left bg-gray-200 flex flex-col">
                    <p>When creating a pair you are the first liquidity provider. The ratio of tokens you add will set the price of this pool. Once you are happy with the rate, click supply to review.</p>
                </div>
                <div className="your-liquidity-container flex flex-col min-w-full justify-between my-2">

                    <div className="p-4 rounded-xl text-sm text-left bg-gray-200 flex flex-col">
                        <p>Choice 1</p>
                        <div class="w-1/2">
                            <TokenSelect></TokenSelect>
                        </div>
                    </div>

                    <div className="text-xl text-center w-full p-4 text-white">+</div>

                    <div className="p-4 rounded-xl text-sm text-left bg-gray-200 flex flex-col">
                        <p>Choice 2</p>
                        <div class="w-1/2">
                            <TokenSelect></TokenSelect>
                        </div>
                        
                    </div>

                </div>

                <div className="p-4 rounded-xl bg-gray-200 flex flex-col  text-center h-24 items-center justify-center">
                    <p className="text-sm">Connect to a wallet to view your Liquidity.</p>
                </div>

                <div className="p-4 rounded-xl flex flex-col text-gray-300 text-center">
                    <p className="text-sm m-2">Don't see a pool you joined? <a className="ml-2 text-blue-300 font-semibold" href="#">Import it.</a></p>
                    <p className="text-sm m-2">Have Liquidity on Uniswap?<a className="ml-2 text-blue-300 font-semibold" href="#">Migrate Now.</a></p>
                </div>

            </div>
        
        </div>
    )
}

export default VaderCreatePairPage
