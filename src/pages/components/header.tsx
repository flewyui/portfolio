import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
const Header = () => {
    const menues = [{ name: 'About' }, { name: 'Skills' }, { name: 'Products' }, { name: 'History' }]
    const router = useRouter()
    const currentPath = router.pathname.replace('/', '')

    return (
        <header className="flex h-[10%]">
            <Head>
                <title>My Portfolio {currentPath}</title>
            </Head>
            <div className="flex flex-1">
                <Link href="/">
                    <a className="flex items-center text-[30px] font-bold text-[#535353]">My Portfolio</a>
                </Link>
            </div>
            <ul className="flex flex-1">
                <li className="flex relative flex-1 justify-center h-[100%] hover:text-[#cbd5e1] hover:bg-[#535353] transition hover:duration-300 duration-0">
                    <Link href="/">
                        <a
                            className={`flex justify-center items-center absolute w-[100%] h-[100%] top-0 bottom-0 ${
                                currentPath === '' ? 'text-[#cbd5e1] bg-[#535353]' : ''
                            }`}
                        >
                            Home
                        </a>
                    </Link>
                </li>
                {menues.map((menu) => {
                    return (
                        <li
                            className="flex relative flex-1 justify-center h-[100%] hover:text-[#cbd5e1] hover:bg-[#535353] transition hover:duration-300 duration-0"
                            key={menu.name}
                        >
                            <Link href={`/${menu.name.toLowerCase()}`}>
                                <a
                                    className={`flex justify-center items-center absolute w-[100%] h-[100%] top-0 bottom-0 ${
                                        currentPath === menu.name.toLocaleLowerCase()
                                            ? 'text-[#cbd5e1] bg-[#535353]'
                                            : ''
                                    }`}
                                >
                                    {menu.name}
                                </a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </header>
    )
}

export default Header
