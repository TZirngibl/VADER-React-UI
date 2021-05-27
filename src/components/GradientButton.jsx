import PropTypes from 'prop-types';

const GradientButton = ({btnText, onClickEvt}) => {
    return (
        <div className="min-w-full flex flex-row justify-between items-center px-4 ">
            <button onClick={onClickEvt} className="outline-none w-full py-2 mb-2 outline-none font-semibold wallet-connect-btn text-white bg-gradient-to-r from-pink-400 to-blue-500 rounded">
                {btnText}
            </button>
        </div>
        
    )
}

export default GradientButton
