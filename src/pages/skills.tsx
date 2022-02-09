const Skills = () => {
    return (
        <>
            <div className="flex justify-center h-[15%] animate-fadeIn">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]"> Skills</h1>
            </div>
            <div className="h-[85%] animate-fadeIn">
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">HTML</div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">CSS</div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">
                        JavaScript
                    </div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">React</div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">PHP</div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">
                        Laravel
                    </div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">AWS</div>
                    <div className="flex-1 p-2 m-1 h-[80px] text-center text-white bg-[#535353] opacity-50">Docker</div>
                </div>
            </div>
        </>
    )
}

export default Skills
