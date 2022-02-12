import Head from 'next/head'
export default function Home() {
    return (
        <div className="flex justify-center h-[100%]">
            <Head>
                <title>flewyui portfolio</title>
                <meta name="description" content="これはトップページです" />
                <meta property="og:title" content="トップページ" />
                <meta property="og:description" content="これはトップページ" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <h1 className="flex items-center text-[40px] font-bold text-[#535353] animate-fadeIn">welcome.</h1>
        </div>
    )
}
