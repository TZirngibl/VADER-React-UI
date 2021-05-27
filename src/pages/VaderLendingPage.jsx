import BorrowSupply from '../components/BorrowSupply'

const VaderLendingPage = () => {
    return (
        <div className="w-full flex flex-col justify-center mx-auto">
            <h1 className="justify-center w-full text-white text-center text-3xl font-extrabold">Lending</h1>
            <BorrowSupply />
        </div>
    )
}

export default VaderLendingPage
