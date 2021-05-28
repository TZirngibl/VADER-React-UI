const VaderUSDVPage = () => {
    return (

    <div className="flex justify-center items-center w-full">

        <div className="w-full lg:w-2/3 flex flex-col justify-center">
                <h1 className="justify-center min-w-full  text-center text-3xl font-extrabold text-white">USDV</h1>
                <div className="W-1/2 flex flex-col md:flex-row justify-center p-10 pt-0 h-full">
            <div className="w-full lg:W-1/2 m-2 flex flex-col rounded-xl bg-gray-200">
                <div className="p-4 pb-0 min-w-full flex flex-row  justify-between">
                    <div className="mb-2">
                        <span className="text-xl mb-2">
                            Vader Price
                        </span>
                    </div>
                    <button type="button" className="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 h-8 text-left cursor-pointer focus:outline-none text-xs text-black" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span className="flex items-center">
                            <span className="ml-3 block truncate ">
                                15m
                            </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                svg
                            </span>
                    </button>
                </div>
                <div className="min-w-full flex flex-row px-4">
                    <span><span className="text-2xl">10</span>.3963436 USDV</span><span className="text-xs ml-3 relative top-3">^1.2490394%</span><span className="text-xs text-green-400 relative top-3 ml-1">(+5.54%)</span>
                </div>
                <div className="min-w-full flex flex-col p-4 h-32 items-center">
                    <img className="w-48 select-none" src="GRAPH-PLACEHOLDER.jpg" />
                </div>
            </div>

            <div className="w-full lg:W-1/2 m-2 flex justify-center rounded-xl bg-gray-200">
                <div className="p-4 flex flex-col  min-w-full">

                    <span className="text-xl mb-2">Vader-USDV Exchange Rate</span>

                    <button type="button" className="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 h-8 text-left cursor-pointer focus:outline-none text-xs text-black" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span className="flex items-center">
                            <span className="block truncate">
                                VADER
                            </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            svg
                            </span>
                    </button>

                    <div className="my-2 flex justify-between flex-row flex text-xs">
                        <span className="font-bold">Available Balance</span>
                        <span className="underline">0.000</span>
                    </div>

                    <div className="my-2 flex-col flex justify-center items-center">
                            svg
                    </div>

                    <button type="button" className="relative bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 h-8 text-left cursor-pointer focus:outline-none text-xs text-black" aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
                            <span className="flex items-center">
                            <span className="block truncate">
                                USDV
                            </span>
                            </span>
                            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                svg
                            </span>
                    </button>

                    <div className="mt-8 flex justify-between flex-row flex text-xs">
                        <span className="font-bold">Expected Price</span>
                        <span className="">1 VADER = 1.234567 USDV</span>
                    </div>
                    <div className="mb-8 mt-2 flex justify-between flex-row flex text-xs">
                        <span className="font-bold">Trading Fee</span>
                        <span className="">1.234567 VADER</span>
                    </div>

                    <button className="outline-none w-full py-2 font-semibold wallet-connect-btn text-white bg-gradient-to-r from-pink-400 to-blue-500 rounded select-none">Next</button>

                </div>
            </div>
            </div>
            </div>

    </div>

        

    )
}

export default VaderUSDVPage
