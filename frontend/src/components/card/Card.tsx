import reactJpg from '../../assets/resources/react.jpg'

const Card = ({

}) => {
    return (
        <div className="p-4 max-w-md">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="h-64 w-full object-cover object-top"
                    src={reactJpg}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Web開発
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        React18入門【2024著】【理論編】
                    </h1>
                    <p className="leading-relaxed mb-3">
                        現在、Web開発界で最も注目されているフレームワークが『React』です。Reactを使用すると、柔軟で応答性の高いWebサイトを作成することが可能になります。本書は、React初心者を対象に、Reactの特徴と基本的な機能を学ぶことができる超入門書です。本書を読み終えるころには、Reactの基本的な原理がわかるようになるでしょう。
                    </p>
                    <div className="flex items-center flex-wrap">
                        <a 
                            href="https://www.amazon.co.jp/dp/B0CSDK6P5L"
                            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                            target='_blank'
                            rel='noreferrer'
                        >
                            amazonで購入
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        {/* <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                <circle cx={12} cy={12} r={3} />
                            </svg>
                            1.2K
                        </span>
                        <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                            <svg
                                className="w-4 h-4 mr-1"
                                stroke="currentColor"
                                strokeWidth={2}
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                viewBox="0 0 24 24"
                            >
                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                            </svg>
                            6
                        </span> */}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card