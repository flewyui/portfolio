const Skills = () => {
    return (
        <>
            <div className="flex justify-center h-[15%] animate-fadeIn">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]"> Skills</h1>
            </div>
            <div className="h-[35%] animate-fadeIn">
                <h1 className="text-[#4682b4] text-center text-[22px] font-bold opacity-80">Front-end</h1>
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">React</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">JavaScript</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">HTML</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">CSS</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                    </div>
                </div>
            </div>
            <div className="h-[35%] animate-fadeIn">
                <h1 className="text-[#2f4f4f] text-center text-[22px] font-bold opacity-80">Back-end</h1>
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">Laravel</h2>
                        <p className="text-[#ffd700]">★★★☆☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">PHP</h2>
                        <p className="text-[#ffd700]">★★★☆☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">AWS</h2>
                        <p className="text-[#ffd700]">★★☆☆☆</p>
                    </div>
                    <div className="flex-1 p-2 m-1 h-[140px] text-center text-white bg-[#535353] opacity-50">
                        <h2 className="font-bold text-[18px]">Docker</h2>
                        <p className="text-[#ffd700]">★★☆☆☆</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
