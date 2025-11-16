export default function About() {
    return (
        <section className="mt-12">
            <article className="bg-white rounded-xl shadow-md p-6 grid md:grid-cols-3 gap-6 items-center">
                <div className="md:col-span-1 flex items-center justify-center">
                    <img src="/mnt/data/portfolio.jpg" alt="Brooklyn smaller portrait" className="w-36 h-36 object-cover rounded-lg" />
                </div>
                <div className="md:col-span-2">
                    <h2 className="text-xl font-semibold">I am Professional User Experience Designer</h2>
                    <p className="mt-3 text-gray-600">I design intuitive interfaces and craft product experiences that people love. My work bridges user needs and business goals — I research, prototype, and deliver high quality interfaces.</p>
                    <div className="mt-4 flex gap-3">
                        <a className="px-4 py-2 bg-purple-600 text-white rounded-md" href="#contact">Hire Me</a>
                        <a className="px-4 py-2 border rounded-md text-sm" href="#portfolio">Download CV</a>
                    </div>
                </div>
            </article>
        </section>
    );
}
