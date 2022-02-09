const Skills = () => {
    return (
        <>
            <div className="flex justify-center h-[15%]">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]"> Skills</h1>
            </div>
            <div className="h-[85%]">
                <div className="flex flex-row">
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">HTML</div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">CSS</div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">
                        JavaScript
                    </div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">React</div>
                </div>
                <div className="flex flex-row">
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">PHP</div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">
                        Laravel
                    </div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">AWS</div>
                    <div className="flex-1 bg-[#535353] opacity-50 text-center h-[80px] text-white p-2 m-1">Docker</div>
                </div>
            </div>
        </>
    )
}

export default Skills
