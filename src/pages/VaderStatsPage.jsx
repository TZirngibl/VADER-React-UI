import CoinSummaryPage from '../pages/CoinSummaryPage.jsx'

const VaderStatsPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <h1 className="w-2/3 max-w-screen-lg justify-start text-white text-center text-3xl font-extrabold m-2 ">Statistics</h1>
            <CoinSummaryPage />
        </div>
    )
}

export default VaderStatsPage
