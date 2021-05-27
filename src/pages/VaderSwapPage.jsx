import React from 'react'
import Swap from '../components/Swap.jsx'
import SwapStats from '../components/SwapStats.jsx';
import GradientButton from '../components/GradientButton.jsx';



const VaderSwapPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <div className="w-112">
                <h1 className="justify-center min-w-full  text-center text-3xl font-extrabold m-2 text-white">Swap</h1>
                <Swap />
                <SwapStats />
                <GradientButton btnText='Connect a Wallet' />
            </div>
        </div>
    )
}

export default VaderSwapPage
