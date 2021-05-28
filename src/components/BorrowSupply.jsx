import { useState } from 'react'
import { Switch } from '@headlessui/react'

const BorrowSupply = () => {

    const [enabled, setEnabled] = useState(false);

    return (
        <div className="flex flex-col w-full justify-around items-center text-white">
            <div className="flex flex-row justify-center items-center p-4 rounded p-2 px-4 w-full lg:w-2/3">
                <div className="flex justify-center items-center flex-col w-1/3 text-white">
                    <span className="text-xl text-blue-400 text-center">Supply Balance</span>
                    <span className="text-3xl text-center">$0</span>
                </div>
                <div className="flex justify-center items-center flex-col h-28 w-28 lg:w-48 lg:h-48 border-2 border-green-500 rounded-full text-white">
                    <span className="text-xl">Net APY</span>
                    <span className="text-3xl">...</span>
                </div>
                <div className="flex justify-center items-center flex-col w-1/3 text-white">
                    <span className="text-xl text-pink-400 text-center">Borrow Balance</span>
                    <span className="text-3xl text-center">$0</span>
                </div>
            </div>

            <div className="flex flex-row justify-center p-4 w-full lg:w-2/3 className rounded p-2 px-4 mx-auto relative">
                <span className="text-sm text-gray-300 whitespace-nowrap absolute top-0">Borrow Limit</span>
                <div className="flex justify-end items-start flex-row w-1/5 text-white">  
                    <span className="text-sm mx-2">$0</span>
                </div>

                <div className="flex justify-center items-center flex-row w-full h-2 relative top-1 border-b-2 border-gray-800 text-white">
                    
                </div>
                <div className="flex justify-start items-start flex-row w-1/5 text-white">
                    <span className="text-sm ml-2">$0</span>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center p-4 w-full lg:w-3/4  rounded p-2 px-4 mx-auto">
                
                <div className="flex flex-col w-full lg:w-1/2 p-2 px-4 bg-gradient-to-r from-pink-400 to-blue-500 rounded-xl m-2">
                    <span className="text-xl">Supply Markets </span>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="h-10 border-b border-gray-400 rounded">
                                <th className="text-left cursor-pointer">Asset</th>
                                <th className="text-right cursor-pointer">APY</th>
                                <th className="text-right cursor-pointer">Wallet</th>
                                <th className="text-right cursor-pointer">Collateral</th>

        
                            </tr>
                        </thead>
                        <tbody>
                                    <tr className="h-16 border-b border-gray-200">
        
                                            <td className="relative">
                                                <span className="ml-8">Ether</span>   
                                            </td>
                                            <td className="text-right">
                                                0.09%
                                            </td>
                                            <td className="text-right">
                                                0.0284 ETH
                                            </td>
                                            <td className="text-right">
                                               
                                                <div className="flex items-center justify-end items-center w-full">
                                                <label for="toogleA" className="flex items-center cursor-pointer">
                                                    
                                                    <div className="relative">
                                                    
                                                    <input id="toogleA" type="checkbox" className="sr-only" />
                                                    
                                                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                   
                                                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                                </div>
                                            </td>

        
                                      </tr>

                                      <tr className="h-16 border-b border-gray-200">
                                            <td className="relative">
                                                <span className="ml-8">Ether</span>   
                                            </td>
                                            <td className="text-right">
                                                0.09%
                                            </td>
                                            <td className="text-right">
                                                0.0284 ETH
                                            </td>
                                            <td className="text-right">
                                                
                                                <div className="flex items-center justify-end items-center w-full">
                                                <label for="toogleB" className="flex items-center cursor-pointer">
                                                    
                                                    <div className="relative">
                                                    
                                                    <input id="toogleB" type="checkbox" className="sr-only" />
                                                   
                                                    <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                   
                                                    <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                    </div>
                                                </label>
                                                </div>
                                            </td>
                                      </tr>

                                      <tr className="h-16 border-b border-gray-200">
                                            <td className="relative">
                                                <span className="ml-8">Ether</span>   
                                            </td>
                                            <td className="text-right">
                                                0.09%
                                            </td>
                                            <td className="text-right">
                                                0.0284 ETH
                                            </td>
                                            <td className="text-right">
                                                
                                                <div className="flex items-center justify-end items-center w-full">
                                                    <label for="toogleC" className="flex items-center cursor-pointer">
                                                    
                                                        <div className="relative">
                                                        
                                                        <input id="toogleC" type="checkbox" className="sr-only" />
                                                    
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                    
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </td>

        
                                      </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex flex-col w-full lg:w-1/2 p-2 px-4 bg-gradient-to-r from-blue-500 to-pink-400 rounded-xl m-2">
                    <span className="text-xl">Borrow Markets </span>
                    <table className="w-full table-auto">
                        <thead>
                            <tr className="h-10 border-b border-gray-400 rounded">
                                <th className="text-left cursor-pointer">Asset</th>
                                <th className="text-right cursor-pointer">APY</th>
                                <th className="text-right cursor-pointer">Wallet</th>
                                <th className="text-right cursor-pointer">Liquidity</th>

        
                            </tr>
                        </thead>
                        <tbody>
                                    <tr className="h-16 border-b border-gray-200">
        
                                            <td className="relative">
                                                <span className="ml-8">USDV</span>   
                                            </td>
                                            <td className="text-right">
                                                0.09%
                                            </td>
                                            <td className="text-right">
                                                0.0284 USDV
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end items-center w-full">
                                                    <label for="toogleE" className="flex items-center cursor-pointer">
                                                        
                                                        <div className="relative">
                                                        
                                                        <input id="toogleE" type="checkbox" className="sr-only" />
                                                    
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                    
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </td>

        
                                      </tr>

                                      <tr className="h-16 border-b border-gray-200">
                                            <td className="relative">
                                                <span className="ml-8">VADER</span>   
                                            </td>
                                            <td className="text-right">
                                                0.09%
                                            </td>
                                            <td className="text-right">
                                                0.123 VADER
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end items-center w-full">
                                                        <label for="toogleF" className="flex items-center cursor-pointer">
                                                            
                                                            <div className="relative">
                                                            
                                                            <input id="toogleF" type="checkbox" className="sr-only" />
                                                        
                                                            <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                        
                                                            <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                            </div>
                                                        </label>
                                                    </div>
                                            </td>
                                      </tr>

                                      <tr className="h-16 border-b border-gray-200">
                                            <td className="relative">
                                                <span className="ml-8">ETH.v</span>   
                                            </td>
                                            <td className="text-right">
                                                0.15%
                                            </td>
                                            <td className="text-right">
                                                0.174 ETH
                                            </td>
                                            <td className="text-right">
                                                <div className="flex items-center justify-end items-center w-full">
                                                    <label for="toogleG" className="flex items-center cursor-pointer">
                                                        
                                                        <div className="relative">
                                                        
                                                        <input id="toogleG" type="checkbox" className="sr-only" />
                                                    
                                                        <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                    
                                                        <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </td>

        
                                      </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default BorrowSupply
