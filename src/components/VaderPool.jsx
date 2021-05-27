const VaderPool = () => {
    return (
            <div className="staking-pool flex flex-col w-1/3 bg-gray-200 mx-2 font-semibold rounded-3xl">
                        <div className="flex flex-row items-center justify-between h-24 bg-gray-300 px-8 p-4 rounded-t-3xl">
                            <div className="flex flex-col">
                                <span className="font-semibold text-xl">USDV Pool</span>
                                <span>Earn USDV, stake VADER</span>
                            </div>
                            <div>
                                <img className="h-16 w-16" height="300" width="300" src="vaderLogo5.png" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-16 bg-gray-200 px-4  leading-8">
                            <div>
                                <span>APR:</span>
                            </div>
                            <div className="flex flex-row items-center text-sm font-bold">
                                137.99% <img className="h-8 w-8" src="vaderLogo5.png" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-8 bg-gray-200 px-4  leading-8">
                            <div>
                                <span className="flex items-center font-semibold text-sm">Total Staked:</span>
                            </div>
                            <div className="flex items-center text-sm">
                                    27,938,048 USDV
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-8 bg-gray-200 px-4  leading-8">
                            <div>
                                <span className="flex items-center font-semibold text-sm">Performance Fee:</span>
                            </div>
                            <div className="flex items-center text-sm font-semibold">
                                    2%
                            </div>
                        </div>
                        <div className="flex items-start h-8 bg-gray-200 px-4">
                            <div>
                                <a href="#" className="text-sm text-pink-500">0.1% unstaking fee if withdrawn within 72h</a>
                            </div>
                        </div>
                        <div className="flex w-full  items-end h-24 bg-gray-200 p-4 rounded-b-3xl">
                            <div className="flex flex-col w-full">
                                <span className="text-sm mb-1">Start Earning</span>
                                <button className="outline-none w-full py-2 font-semibold wallet-connect-btn text-white bg-gradient-to-r from-pink-400 to-blue-500 rounded select-none">Unlock Wallet</button>
                            </div>
                        </div>

                </div>
    )
}

export default VaderPool
