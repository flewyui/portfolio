import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import { useRouter } from 'next/router'
import Layout from './components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter()
    const currentPath = router.pathname.replace('/', '')
    const canScroll = currentPath === 'skills' || currentPath === 'products'

    return (
        <div className={`my-0 mr-[70px] sm:mx-[50px] h-[100vh] ${canScroll && 'sm:h-[100vh] h-[100%]'}`}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default MyApp
