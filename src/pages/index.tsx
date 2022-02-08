import Head from 'next/head'
export default function Home() {
    return (
        <div className="flex justify-center h-[100%]">
            <Head>
                <title>My Portfolio</title>
                <meta name="description" content="これはトップページです" />
                <meta property="og:title" content="トップページ" />
                <meta property="og:description" content="これはトップページ" />
            </Head>
            <h1 className="flex items-center text-[30px] font-bold text-[#535353] animate-fade">welcome.</h1>
        </div>
    )
}
