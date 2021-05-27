const VaderPoolsPage = () => {
    return (
        <div className="flex justify-center items-center flex-col w-full lg:max-w-xl mx-auto">
            <h1 className="justify-center w-full text-center text-3xl font-extrabold m-2 text-white">Pools</h1>
            <div className="flex flex-col justify-center p-10 h-full pt-0">
                <div className="liquidity-container p-4 rounded-xl bg-gray-200 flex flex-col">
                    <h2 className="font-semibold text-xl mb-2">Liquidity provider rewards</h2>
                    <p>Liquidity providers earn a 0.25% fee on all trades proportional to their share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.</p>
                </div>
                <div className="your-liquidity-container flex flex-row min-w-full justify-between my-2">
                    <div className="text-xl p-4 text-white">Your Liquidity</div>
                    <div className="flex flex-row">
                        <a href="#ex1" rel="modal:open" className="border border-pink-400 text-pink-400 shadow rounded px-4 py-2 m-auto select-none font-semibold mr-2">Create A Pair</a>
                        <a className="m-2 bg-pink-400 text-white shadow rounded px-4 py-2 select-none font-semibold m-auto">Add Liquidity</a>
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

export default VaderPoolsPage
