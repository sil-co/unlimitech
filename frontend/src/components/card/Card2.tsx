import phpJpg from '../../assets/resources/php.jpg'

const Card1 = ({

}) => {
    return (
        <div className="p-4 max-w-md">
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img
                    className="h-64 w-full object-cover object-center"
                    src={phpJpg}
                    alt="blog"
                />
                <div className="p-6">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                        Web開発
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                        PHP入門: ステップバイステップで学ぶPHP
                    </h1>
                    <p className="leading-relaxed mb-3">
                        PHP入門 は初心者のPHP学習者に向けて、基礎的な文法からWeb開発における基礎的な知識を段階的に理解し、基礎を身につけることができる一冊です。この本を通じてPHPというプログラミング言語を体験しましょう。 目次 1 序章：PHPとは 2 MAMPの導入 3. PHPの基本 4 関数 5. クラスとオブジェクト指向 6 フォームとPHP 著者について 私は、Web開発に携わっているエンジニアで、エンジニアとして学んだことは知識を共有することが重要だと考えています。私の目標は、初心者から経験豊富な開発者まで、全ての人が技術を学び、理解し、それを利用して素晴らしいものを作ることを支援することです。 SNS Twitter: @tech_onshelner # まえがき プログラミングの学びは、新しい世界への旅の始まりです。それは新しい方法で問題を解決し、創造的な解決策を見つけ出す力を身につける旅です。この「PHP入門」がその旅の一部となり、あなたの学びの助けとなることを心から願っています。一歩一歩一緒に進んでいきましょう。
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