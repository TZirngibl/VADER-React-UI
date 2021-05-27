const SwapStats = () => {
    return (
        <div className="min-w-full flex flex-row justify-between items-center p-4 text-white">
            <div className="flex flex-col text-left ">
                <span>Max Sold</span>
                <span>Price Impact</span>
                <span>Fee</span>
            </div>
            <div className="flex flex-col text-right">
                <span id="swap-max-sold-value">0</span>
                <span id="swap-price-impact-value">0</span>
                <span id="swap-fee-value">0</span>
            </div>
        </div>
    )
}

export default SwapStats
