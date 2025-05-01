import SinglePost from "@/components/articles/SinglePost";

export default function BlogPosts({posts}) {
  return (
    <section className="min-w-screen h-full flex flex-col items-center justify-center md:pt-36 dark:bg-stone-900">
      <p className="font-[Amatic_SC] text-4xl md:text-5xl lg:text-6xl font-medium text-center tracking-tight dark:text-white text-gray-900 mb-6">
        <span className="inline-block h-px w-6 bg-purple-600 mr-3 align-middle"></span>
        Articles
        <span className="inline-block h-px w-6 bg-purple-600 ml-3 align-middle"></span>
      </p>

      <div className="flex flex-col items-start justify-center gap-8">
        {posts.map((post) => (
          <>
            <SinglePost key={post.slug} post={post} />
            <div className="flex justify-center w-full mb-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
            </div>
          </>
        ))}
      </div>
    </section>
  );
}
