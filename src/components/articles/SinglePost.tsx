import DateFormat from "../DateFormat";

export default function SinglePost({post}) {
    return (
            <article className="flex flex-row w-[800px] h-[240px]" key={post.slug}>
                <img src={post.data.heroImage} alt="postcard" className="w-[240px] aspect-square" />
                <div className="flex flex-col px-8 py-2">
                    <span className="flex flex-row items-center justify-start">
                        <span className="text-stone-500 pr-6 text-[14px] dark:text-stone-200">
                            <DateFormat date={post.data.pubDate} />
                        </span>
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-purple-200 dark:bg-purple-950/30">
                            <span className="text-xs font-medium text-purple-600 dark:text-purple-300">☯︎ {post.data.category}</span>
                        </div>
                    </span>
                    <span className="text-[20px] py-2 dark:text-white">{post.data.title}</span>
                    <span className="text-stone-600 text-[16px] dark:text-stone-300 font-extralight">{post.data.description}</span>
                    <a href={`/articles/${post.id}/`}  className="py-4">
                        <span className="text-[18px] text-stone-900 hover:underline dark:text-white">Read More...</span>
                    </a>
                </div>
            </article>
    )
}