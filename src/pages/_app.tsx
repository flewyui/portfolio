import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Layout from './components/Layout'

const MyApp = ({ Component, pageProps }: AppProps) => {
    console.log(process.env.NODE_ENV)
    return (
        <div className="m-[50px] my-0 h-[100vh]">
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>
    )
}

export default MyApp
