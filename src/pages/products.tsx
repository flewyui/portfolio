import { getImageSrc } from '../utils/config'
const Products = () => {
    return (
        <>
            <div className="flex justify-center py-[15px] h-[15%] animate-fadeIn sm:py-[10px]">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]">Products</h1>
            </div>
            <div className="h-[85%] animate-fadeIn">
                <div className="flex-row sm:flex">
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="mb-5 text-[#535353]">Todo App [TS/React]</h2>
                        <div className="flex justify-center">
                            <img
                                src={getImageSrc('cp-ts-react-todo.jpg')}
                                width={220}
                                height={200}
                                alt="TS Todo App"
                            ></img>
                        </div>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="mb-5 text-[#535353]">tic-tac-toe [ReactHooks]</h2>
                        <div className="flex justify-center">
                            <img
                                src={getImageSrc('cp-tic-tac-toe.jpg')}
                                width={220}
                                height={200}
                                alt="tic-tac-toe"
                            ></img>
                        </div>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[300px] text-center border-2 border-[#535353]">
                        <h2 className="mb-5 text-[#535353]">Todo App [PHP/Laravel]</h2>
                        <div className="flex justify-center">
                            <img
                                src={getImageSrc('cp-laravel-todo.jpg')}
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
