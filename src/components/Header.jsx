import PropTypes from 'prop-types';
import TextLogo from '../images/vaderLogo_Vader-text_logo.png';
import {Link} from 'react-router-dom'
const Header = (props) => {
    return (
        <header className="min-w-full flex justify-between lg:justify-center h-24 p-4 text-white link-white items-center z-50 bg-black">
            <Link to="/">
                <img src={TextLogo} className="absolute left-0 transform scale-75 lg:scale-100 lg:left-8 top-0 h-20 z-50" alt="text logo" />
            </Link>
            
            <div className="flex flex-row absolute p-4">
                <Link to="/Swap" className="p-4 pl-0 text-white font-bold" >Swap</Link>
                <Link to="/Pools" className="p-4 text-white font-bold" href="/Pools">Pools</Link>
                <Link to="/USDV" className="p-4 text-white font-bold" href="/USDV">USDV</Link>
                <Link to="/Staking" className="p-4 text-white font-bold" href="/Staking">Staking</Link>
                <Link to="/Anchor" className="p-4 text-white font-bold" href="#">Anchor</Link>
                <Link to="/Lending" className="p-4 text-white font-bold" href="#">Lending</Link>
                <Link to="/Stats" className="p-4 pr-0 text-white font-bold" href="#">Stats</Link>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
