import VaderPool from "../components/VaderPool";

const VaderStakingPage = () => {
    return (
        <div className="w-full flex flex-col justify-center items-center mx-auto">
            <h1 className="justify-center w-full text-white text-center text-3xl font-extrabold m-2">Staking</h1>
            <div class="flex flex-row w-full max-w-screen-lg p-2 px-4">
                <VaderPool />
                <VaderPool />
                <VaderPool />
            </div>
            <div class="flex flex-row w-full max-w-screen-lg p-2 px-4">
                <VaderPool />
                <VaderPool />
                <VaderPool />
            </div>
            <div class="flex flex-row w-full max-w-screen-lg p-2 px-4">
                <VaderPool />
                <VaderPool />
                <VaderPool />
            </div>
        </div>
    )
}

export default VaderStakingPage
