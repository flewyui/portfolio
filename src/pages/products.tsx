const Products = () => {
    return (
        <>
            <div className="flex justify-center h-[15%] animate-fadeIn">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]">Products</h1>
            </div>
            <div className="h-[85%] animate-fadeIn">
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">Todo App [TS/React]</h2>
                        <div className="flex justify-center">
                            <img src="/images/cp-ts-react-todo.jpg" width={220} height={200} alt="TS Todo App"></img>
                        </div>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">tic-tac-toe [ReactHooks]</h2>
                        <div className="flex justify-center">
                            <img src="/images/cp-tic-tac-toe.jpg" width={220} height={200} alt="tic-tac-toe"></img>
                        </div>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="text-[#535353]">Todo App [PHP/Laravel]</h2>
                        <div className="flex justify-center">
                            <img
                                src="/images/cp-laravel-todo.jpg"
                                width={350}
                                height={200}
                                alt="Laravel Todo App"
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products
