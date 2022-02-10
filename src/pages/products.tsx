const Products = () => {
    return (
        <>
            <div className="flex justify-center h-[15%] animate-fadeIn">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]">Products</h1>
            </div>
            <div className="h-[85%] animate-fadeIn">
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[240px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">Todo App [TS/React]</h2>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[240px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">tic-tac-toe [ReactHooks]</h2>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[240px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">Todo App [PHP/Laravel]</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
