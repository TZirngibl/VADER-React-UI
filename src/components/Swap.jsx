import PropTypes from 'prop-types'
import GradientButton from './GradientButton.jsx'
import {FaCog, FaBitcoin, FaEthereum} from 'react-icons/fa'
import TokenSelect from './TokenSelect'
import SwapStats from './SwapStats';
import coinGecko from '../apis/coinGecko'
import {Link} from 'react-router-dom';

const Swap = () => {
    return (
            <>

                <div className="relative min-w-full flex flex-row justify-between items-center">

                    <div className="min-w-full flex flex-row justify-between items-stretch px-4">
                            <div className="w-1/2 pr-1">
                                <button className="min-w-full text-xl text-white border-2 border-pink-300 py-2 rounded rounded-tl-3xl">Swap</button>
                            </div>
        
                            <div className="w-1/2 pl-1">
                                    <Link to="/Pools">
                                        <button type="submit" className="min-w-full text-xl text-white border border-gray-300 py-2 rounded rounded-tr-3xl">Liquidity</button>
                                    </Link>
                                
                            </div>
        
                    </div>

                    <div className="absolute -top-11 right-4 lg:-right-8 rounded-lg cursor-pointer text-white transform hover:rotate-45 duration-500 ease-in-out">
                        <FaCog className="w-6 h-6 hover:opacity-80 text-white cursor-pointer" />
                    </div>

                </div>
                <div className="min-w-full flex flex-row justify-between items-center">
                    <div className="min-w-full flex flex-row justify-between items-between ">
                        <div className="text-white relative flex flex-col text-left w-1/2 h-52 bg-black bg-opacity-80 border border-white m-4 mr-1 p-2 justify-between rounded">
                            <p>From</p>
                            
                            <TokenSelect />
                        </div>
                        <div className="text-white relative flex flex-col text-left w-1/2 h-52 bg-black bg-opacity-80 border border-white m-4 ml-1 p-2 mb-0 justify-between rounded">

                            <p>To</p>
                            
                            <TokenSelect />
                        </div>
                    </div>
                </div>

                <div className="min-w-full flex flex-col justify-between items-center">
                        <div className="min-w-full flex flex-row justify-between items-between">
                            <div className="relative flex flex-col text-left items-center justify-center w-1/2 h-16 m-0 mt-0 p-2 ml-2">
                                <input type="number" className="w-full h-12 text-center bg-black bg-opacity-80 border border-white text-white font-semibold rounded" />
                            </div>
                            <div className="relative flex flex-col text-left items-center justify-center w-1/2 h-16 m-0 mt-0 p-2 mr-2">
                                <input type="number" className="w-full h-12 text-center bg-black bg-opacity-80 border border-white text-white font-semibold  rounded"  />
                            </div>

                        </div>
                </div>

                
                <div className="min-w-full flex flex-row justify-center items-center p-4 h-16">
                        <div className="min-w-full mt-0 py-2 flex flex-row justify-center items-center ">
                                <button className=" min-w-full py-2 border  p-auto text-xl flex flex-row justify-center items-center text-white rounded bg-black bg-opacity-80"> 
                                        Review Swap
                                    </button>
                        </div>
                        
                </div>
                
            </>

    
    )
}

export default Swap
