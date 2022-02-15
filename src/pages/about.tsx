const About = () => {
    return (
        <>
            <div className="flex justify-center h-[15%] animate-fadeIn">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]">About</h1>
            </div>
            <div className="h-[85%] animate-fadeIn">
                <table className="m-auto">
                    <tbody>
                        <tr>
                            <th>Name:</th>
                        </tr>
                        <tr>
                            <td className="text-center">
                                shin
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <th>age:</th>
                        </tr>
                        <tr>
                            <td className="text-center">
                                28
                                <br />
                                <br />
                            </td>
                        </tr>
                        <tr>
                            <th>Accounts: </th>
                        </tr>
                        <tr>
                            <td className="text-center">
                                github:{' '}
                                <a href="https://github.com/flewyui" target="_blank" rel="noreferrer">
                                    https://github.com/flewyui
                                </a>
                                <br />
                                <br />
                                Qiita:{' '}
                                <a href="https://qiita.com/flewyui" target="_blank" rel="noreferrer">
                                    https://qiita.com/flewyui
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default About
