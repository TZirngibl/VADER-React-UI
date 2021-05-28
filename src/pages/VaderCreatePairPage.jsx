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

                    <div className="p-4 rounded-xl text-sm text-left border border-white flex flex-col text-white">
                        <p class="font-semibold text-xs">From</p>
                        <div className="flex flex-row w-full items-end justify-between">
                            
                            <div class="w-1/3">
                                <TokenSelect></TokenSelect>
                            </div>
                            <div class="w-2/3 text-right">
                                <input placeholder="Balance = 0.0" class="w-max text-right text-white py-2 bg-transparent border rounded" type="number"></input>
                            </div>

                        </div>
                    </div>


                    <div className="text-xl text-center w-full flex items-center justify-center text-white">
                        <div class="h-8">
                            +
                        </div>
                    </div>

                    <div className="p-4 rounded-xl text-sm text-left border border-white flex flex-col text-white">
                        <p class="font-semibold text-xs">To</p>

                        <div className="flex flex-row w-full items-end justify-between">
                            
                            <div class="w-1/3">
                                <TokenSelect></TokenSelect>
                            </div>
                            <div class="w-2/3 text-right">
                                <input placeholder="Balance = 0.0" class="w-max text-right text-white py-2 bg-transparent border rounded" type="number"></input>
                            </div>

                        </div>
                        
                    </div>
                    
                    
                        <div className="min-w-full mt-0 py-2 flex flex-row justify-center items-center ">
                                <button className="min-w-full py-2 border  p-auto text-xl flex flex-row justify-center items-center text-white mt-4 rounded bg-black bg-opacity-80 opacity-50 cursor-not-allowed"> 
                                        Invalid Pair
                                </button>
                        </div>
                        
                    

                </div>

            </div>
        
        </div>
    )
}

export default VaderCreatePairPage
