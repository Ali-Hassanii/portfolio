const PROJECTS = new Array(6).fill(0);

export default function PortfolioGrid() {
    return (
        <section id="portfolio" className="mt-14">
            <h3 className="text-2xl font-semibold text-center">Portfolio</h3>
            <p className="text-center mt-2 text-gray-600">Selected projects showcasing product design and web development work.</p>
            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((_, i) => (
                    <article key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-44 bg-gray-100 flex items-center justify-center">
                            <img src="/mnt/data/portfolio.jpg" alt={`Project ${i + 1}`} className="w-full h-full object-cover" />
                        </div>
                        <div className="p-4">
                            <h4 className="font-semibold">Project Title #{i + 1}</h4>
                            <p className="mt-2 text-sm text-gray-600">Brief description of the project work and key outcomes.</p>
                            <div className="mt-4 flex items-center justify-between">
                                <a href="#" className="text-sm text-purple-600">Case Study →</a>
                                <span className="text-xs text-gray-400">Web / UI</span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a href="#portfolio" className="inline-block px-6 py-2 bg-purple-600 text-white rounded-md">View all projects</a>
            </div>
        </section>
    );
}
