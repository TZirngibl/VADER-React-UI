import PropTypes from 'prop-types';
import TextLogo from '../images/vaderLogo_Vader.png';
import {useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import Burger from '../components/Burger.jsx';
import Menu from '../components/Menu.jsx';


const Header = (props) => {

    const [open, setOpen] = useState(false);

    return (
        <header className="w-full flex justify-center md:justify-between lg:justify-center h-24 p-4 text-white link-white items-center z-50 bg-black">


            <Link to="/">
                <img src={TextLogo} className="absolute -left-4 md:left-0 transform scale-75 lg:scale-100 lg:left-8 top-0 h-20 z-50" alt="text logo" />
            </Link>

            <Burger ></Burger>
            <Menu ></Menu>
                

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
