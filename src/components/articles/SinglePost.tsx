export default function SinglePost() {
    return (
            <article className="flex flex-row w-[800px] h-[240px]">
                <img src="/post1.jpg" alt="postcard" className="w-[240px] aspect-square" />
                <div className="flex flex-col px-8 py-2">
                    <span className="flex flex-row items-center justify-start">
                        <span className="text-stone-500 pr-6 text-[14px]">APR 30, 2025</span>
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-purple-200 dark:bg-purple-950/30">
                            <span className="text-xs font-medium text-purple-600 dark:text-purple-300">☯︎ Spirituality</span>
                        </div>
                    </span>
                    <span className="text-[20px] py-2">Everyone’s Using AI Alone—The Next Hit Product Makes It Social</span>
                    <span className="text-stone-600 text-[16px]">Benchmark’s Sarah Tavel on why the future of consumer AI should tap into our need to share</span>
                    <a href="#" className="py-4">
                        <span className="text-[18px] text-stone-900">Read More...</span>
                    </a>
                </div>
            </article>
    )
}