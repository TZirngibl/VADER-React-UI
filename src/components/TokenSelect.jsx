import { Fragment, useState, useEffect, useContext } from 'react'
import { Listbox, Transition, Dialog } from '@headlessui/react'
import MyModal from "./MyModal"
import VaderIcon from "../images/Pink-V-Alternate.png"
import {FaBitcoin, FaEthereum} from 'react-icons/fa'
import {WatchListContext} from '../context/WatchListContext.jsx'
import coinGecko from '../apis/coinGecko'

export default function TokenSelect() {
    

    const {watchList} = useContext(WatchListContext)

    const tokenList = [
        { name: 'ETH', icon: <FaEthereum />},
        { name: 'BTC', icon: <FaBitcoin />},
    ];

    coinGecko.get('/coins/markets', {
        
        params: {
            vs_currency: "usd",
            ids: "ethereum"
        }

    }).then(res => {

        console.log(res.data);
        let coinIcon = <img src={res.data.image} alt="coin icon"/>
        let coinSymbol = res.data.symbol

        let newCoin = { name: coinSymbol, icon: coinIcon}

        tokenList.push(newCoin);

        console.log("after attempt to push newCoin");

    }).catch(error =>{
      console.log(error)
    }, [])

    


    useEffect(() => {
        
        },
        [tokenList] //run useEffect when state changes because defined in dependency array
      )

  const [selected, setSelected] = useState(tokenList[0])

  return (
            <Listbox as="div" className="z-10" value={selected} onChange={setSelected}>
                <label id="listbox-label" className="block text-white font-semibold text-xs">
                    Select a token...
                </label>
                <div className="relative mt-1">
                <Listbox.Button className="flex bg-transparent text-black cursor-pointer relative w-full py-2 pl-3 pr-10 text-left bg-white rounded shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                    <span className="flex flex-row gap-x-1 truncate font-semibold items-center">  {selected.icon}  {selected.name}</span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">

                    </span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    leave="transition ease-in-out duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <Listbox.Options className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    
                    {tokenList.map((token, tokenIdx) => (
                        <Listbox.Option
                        key={tokenIdx}
                        className={({ active }) =>
                            `${active ? 'text-white bg-gradient-to-r from-pink-400 to-blue-500 cursor-pointer' : 'text-black'}
                                cursor-default select-none relative py-2 pl-4 pr-4`
                        }
                        value={token}
                        >
                        {({ selected, active }) => (
                            <>
                            <span
                                className={`${
                                selected ? 'font-bold' : 'font-normal'
                                } flex flex-row gap-x-1 truncate items-center`}
                            >
                               {token.icon}{token.name}
                            </span>
                            {selected ? (
                                <span
                                className={`${
                                    active ? 'text-amber-600' : 'text-amber-600'
                                }
                                        absolute inset-y-0 left-0 flex justify-center items-center pl-3`}
                                >
                                
                                </span>
                            ) : null}
                            </>
                        )}
                        </Listbox.Option>
                    ))}
                    </Listbox.Options>
                </Transition>
                </div>
            </Listbox>

  )
}

