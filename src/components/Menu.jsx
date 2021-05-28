import {Link} from 'react-router-dom';

const Menu = () => {
    return (
        <div className="nav-links-menu bg-black md:bg-transparent flex flex-col items-start top-14 md:flex-row absolute md:static p-4 w-full lg:w-1/3">

            <Link to="/Swap" className="p-4 md:pl-0 text-white font-bold w-full text-left" >Swap</Link>
            <Link to="/Pools" className="p-4 text-white font-bold w-full text-left">Pools</Link>
            <Link to="/USDV" className="p-4 text-white font-bold w-full text-left">USDV</Link>
            <Link to="/Staking" className="p-4 text-white font-bold w-full text-left" >Staking</Link>
            <Link to="/Anchor" className="p-4 text-white font-bold w-full text-left" >Anchor</Link>
            <Link to="/Lending" className="p-4 text-white font-bold w-full text-left" >Lending</Link>
            <Link to="/Stats" className="p-4 pr-0 text-white font-bold w-full text-left" >Stats</Link>
            
        </div>   
    )
}

export default Menu
