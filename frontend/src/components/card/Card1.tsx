import dockerJpg from '../../assets/resources/docker.jpg'

const Card1 = ({

}) => {
    return (
        <div className="p-4 max-w-md">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="h-64 w-full object-cover object-[center]"
                    src={dockerJpg}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Web開発
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        Docker入門
                    </h1>
                    <p className="leading-relaxed mb-3">
                        開発環境に、ほとんどの企業が使っているであろうDockerについて初心者向けに解説する本です 主にWeb開発に使われるであろうPHP開発環境を元に内容を作成しています。 こんな方におすすめ ・Dockerについて一から学びたい人 ・Dockerを学んだがあまり理解できなかった人 ・Web開発者 目次 1. Dockerとは 2. Dockerのインストールと設定 3. Dockerイメージとコンテナの理解 4. Dockerfileとは 5. Docker Composeとは
                    </p>
                    <div className="flex items-center flex-wrap">
                        <a 
                            href="https://www.amazon.co.jp/dp/B0CB4GJ3PY"
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

export default Card1