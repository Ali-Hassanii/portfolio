const BLOG_POSTS = new Array(4).fill(0);

export default function BlogPreview() {
    return (
        <section id="blog" className="mt-14">
            <h3 className="text-2xl font-semibold text-center">Blog</h3>
            <p className="text-center mt-2 text-gray-600">Latest thoughts on product design and front-end development.</p>
            <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {BLOG_POSTS.map((_, i) => (
                    <article key={i} className="bg-white rounded-lg shadow-sm overflow-hidden">
                        <div className="h-36 bg-gradient-to-r from-purple-200 to-green-200 flex items-center justify-center">Image</div>
                        <div className="p-4">
                            <h4 className="font-semibold">Blog Post #{i + 1}</h4>
                            <p className="mt-2 text-sm text-gray-600">A short preview line describing the post topic.</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}
