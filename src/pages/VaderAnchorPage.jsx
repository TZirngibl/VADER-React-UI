const VaderAnchorPage = () => {
    return (
        <div className="w-full flex flex-col justify-center">
            <h1 className="justify-center min-w-full  text-center text-3xl font-extrabold text-white">Anchor</h1>
            <div class="W-1/2 flex flex-row justify-center p-10 pt-0 h-full">
                <div class="w-1/2 m-2 flex flex-col rounded-xl bg-gray-200">
                    <div class="p-4 pb-0 min-w-full flex flex-row  justify-between">
                        <div class="mb-2">
                            <span class="text-xl mb-2">
                                Vader Price
                            </span>
                        </div>
                        <button type="button" class="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 h-8 text-left cursor-pointer focus:outline-none text-xs text-black" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center">
                                <span class="ml-3 block truncate ">
                                    15m
                                </span>
                                </span>
                                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                svg
                                </span>
                        </button>
                    </div>
                    <div class="min-w-full flex flex-row px-4">
                        <span><span class="text-2xl">10</span>.3963436 <a class="text-black font-semibold" href="">USDV</a></span><span class="text-xs ml-3 relative top-3">^1.2490394%</span><span class="text-xs text-green-400 relative top-3 ml-1">(+5.54%)</span>
                    </div>
                    <div class="min-w-full flex flex-col p-4 h-64 items-center">
                        <img class="w-48 select-none" src="GRAPH-PLACEHOLDER.jpg" />
                    </div>
                </div>

                <div class="w-1/2 m-2 flex justify-center rounded-xl bg-gray-200">
                    <div class="p-4 flex flex-col min-w-full">
                        <span class="text-xl mb-2">
                            VADER exchange rate
                        </span>
                        <button type="button" class="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 h-8 text-left cursor-pointer focus:outline-none text-xs text-black" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                                <span class="flex items-center">
                                <span class="block truncate">
                                    VADER
                                </span>
                                </span>
                                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                svg
                                </span>
                        </button>
                        <div class="flex flex-col w-full exchange-rates-container h-64 overflow-scroll no-scrollbar">
                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">20.00 <a class="text-black font-bold" href="#">DAI</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+4.56%</span>
                                </div>
                            </div>
                            
                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">9.99 <a class="text-black font-bold" href="#">USDC</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+9.99%</span>
                                </div>
                            </div>

                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">19.00 <a class="text-black font-bold" href="#">USDT</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-red-500 text-sm font-bold">-2.19%</span>
                                </div>
                            </div>
                            
                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">20.00 <a class="text-black font-bold" href="#">DAI</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+4.56%</span>
                                </div>
                            </div>

                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">20.00 <a class="text-black font-bold" href="#">DAI</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+3.33%</span>
                                </div>
                            </div>
                            
                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">19.00 <a class="text-black font-bold" href="#">USDT</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-red-400 text-sm font-bold">-12.22%</span>
                                </div>
                            </div>

                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">20.00 <a class="text-black font-bold" href="#">DAI</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+1.99%</span>
                                </div>
                            </div>

                            <div class="flex flex-row w-full h-16 my-2 items-center py-4 border-b border-gray-300">
                                <div class="flex flex-col w-1/4 justify-start text-sm">
                                    <span class="text-xs">1 VADER =</span>
                                    <span class="font-semibold">20.00 <a class="text-black font-bold" href="#">DAI</a></span>
                                </div>
                                <div class="flex items-center w-3/4 justify-end">
                                    <span class="text-green-400 text-sm font-bold">+2.16%</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                
                
                

            </div>
        </div>
    )
}

export default VaderAnchorPage
