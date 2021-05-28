import pinkV from '../images/Pink-V-Alternate.png'

const VaderPool = () => {
    return (
            <div className="staking-pool flex flex-col w-full lg:w-1/3 bg-black bg-opacity-50 mx-2 mb-8 font-semibold rounded-3xl text-white border border-white ">
                        <div className="flex flex-row items-center justify-between h-24 bg-black bg-opacity-80 p-4 rounded-t-3xl border-b border-white">
                            <div className="flex flex-col text-white">
                                <span className="font-semibold text-xl  border-b-1 border-white">USDV Pool</span>
                                <span>Earn USDV, stake VADER</span>
                            </div>
                            <div>
                                <img src={pinkV} className="h-16 w-16" height="300" width="300" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-16  px-4  leading-8">
                            <div>
                                <span>APR:</span>
                            </div>
                            <div className="flex flex-row items-center text-sm font-bold">
                                137.99% <img src={pinkV} className="h-8 w-8 ml-2 relative bottom-1" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-8  px-4  leading-8">
                            <div>
                                <span className="flex items-center font-semibold text-sm">Total Staked:</span>
                            </div>
                            <div className="flex items-center text-sm">
                                    27,938,048 USDV
                            </div>
                        </div>
                        <div className="flex flex-row items-center justify-between h-8  px-4  leading-8">
                            <div>
                                <span className="flex items-center font-semibold text-sm">Performance Fee:</span>
                            </div>
                            <div className="flex items-center text-sm font-semibold">
                                    2%
                            </div>
                        </div>
                        <div className="flex items-start h-8  px-4">
                            <div>
                                <a href="#" className="text-sm text-pink-500">0.1% unstaking fee if withdrawn within 72h</a>
                            </div>
                        </div>
                        <div className="flex w-full  items-end h-24  p-4 rounded-b-3xl">
                            <div className="flex flex-col w-full">
                                <span className="text-sm mb-1">Start Earning</span>
                                <button className="outline-none w-full py-2 font-semibold wallet-connect-btn text-white bg-gradient-to-r from-pink-400 to-blue-500 rounded select-none">Unlock Wallet</button>
                            </div>
                        </div>

                </div>
    )
}

export default VaderPool
