const Skills = () => {
    return (
        <>
            <div className="flex justify-center py-[15px] h-[15%] animate-fadeIn sm:py-[10px]">
                <h1 className="flex items-center text-[30px] font-bold text-[#535353]"> Skills</h1>
            </div>
            <div className="h-[41%] animate-fadeIn">
                <h1 className="text-[22px] font-bold text-center text-[#4682b4] opacity-80">Front-end</h1>
                <div className="flex flex-row flex-wrap">
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">React</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                        <p className="text-[13px]">
                            最も得意とするフレームワークです。
                            <br />
                            Reduxを用いた状態管理や、様々なライブラリの導入も経験して参りました。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">JavaScript</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                        <p className="text-[13px]">
                            最も得意とする言語です。
                            <br />
                            ES6, jQuery, 各種ライブラリでの実務経験がございます。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">HTML</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                        <p className="text-[13px]">
                            マークアップも問題なく行えます。
                            <br />
                            ECサイト開発案件では1からLPの作成なども行っておりました。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">CSS</h2>
                        <p className="text-[#ffd700]">★★★★☆</p>
                        <p className="text-[13px]">
                            SCSSの実務経験、独学ですが、Bootstrap, Tailwindの実装経験もございます。
                        </p>
                    </div>
                </div>
            </div>
            <div className="h-[41%] animate-fadeIn">
                <h1 className="text-[22px] font-bold text-center text-[#2f4f4f] opacity-80">Back-end</h1>
                <div className="flex flex-row flex-wrap">
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">Laravel</h2>
                        <p className="text-[#ffd700]">★★★☆☆</p>
                        <p className="text-[13px]">
                            実務での検索処理機能改修や、独学でのアプリ開発の際に使用経験がございます。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">PHP</h2>
                        <p className="text-[#ffd700]">★★★☆☆</p>
                        <p className="text-[13px]">
                            独学ですが、フレームワーク機能を使わずにログイン実装や、SQLでのCRUD処理の経験がございます。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">AWS</h2>
                        <p className="text-[#ffd700]">★★☆☆☆</p>
                        <p className="text-[13px]">
                            実務での、API Gateway, S3, CloudFront, CodeCommitなどの各種サービスの経験がございます。
                        </p>
                    </div>
                    <div className="flex-1 p-2 m-1 w-[50%] text-center text-white bg-[#535353] opacity-50 sm:w-[25%]">
                        <h2 className="text-[18px] font-bold">Docker</h2>
                        <p className="text-[#ffd700]">★★☆☆☆</p>
                        <p className="text-[13px]">実務での環境構築経験がございます。</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
