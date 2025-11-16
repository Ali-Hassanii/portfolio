const HERO_STATS = [
    { label: "15 Y. experience" },
    { label: "250+ Projects" },
    { label: "58 Awards" },
];

export default function Hero() {
    return (
        <section id="home" className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
            <div className="lg:w-1/2">
                <p className="text-sm text-gray-500">Hello, I’m</p>
                <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">Brooklyn Gilbert</h1>
                <p className="mt-4 text-gray-600 max-w-xl">
                    I’m a Product Designer who crafts usable experiences and visual interfaces. I focus on
                    creating human-centered products with clear communication and elegant design.
                </p>
                <div className="mt-6 flex items-center gap-4">
                    <a className="inline-block px-5 py-2 bg-purple-600 text-white rounded-md" href="#contact">Get Started</a>
                    <a className="inline-block px-4 py-2 border rounded-md text-sm text-gray-700" href="#portfolio">Portfolio</a>
                </div>
                <ul className="mt-8 flex gap-6 text-sm text-gray-600">
                    {HERO_STATS.map((stat) => (
                        <li key={stat.label} className="bg-white/80 px-4 py-3 rounded shadow">{stat.label}</li>
                    ))}
                </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <div className="w-72 sm:w-80 lg:w-96 rounded-xl overflow-hidden shadow-xl bg-white">
                    <img src="/mnt/data/portfolio.jpg" alt="Portrait of Brooklyn Gilbert" className="w-full h-auto object-cover" />
                </div>
            </div>
        </section>
    );
}
