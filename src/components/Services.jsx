const SERVICES = [
    ['User Experience (UX)', 'Research, user flows, interaction design.'],
    ['User Interface (UI)', 'Visual systems, components, design systems.'],
    ['Web Development', 'Static and dynamic front-end implementations.'],
];

export default function Services() {
    return (
        <section id="services" className="mt-14 grid lg:grid-cols-3 gap-8 items-start">
            <div>
                <h3 className="text-2xl font-semibold">What I do?</h3>
                <p className="mt-3 text-gray-600">I help teams design and build products that work. From research to production-ready interfaces, I cover the full product design lifecycle.</p>
                <a href="#contact" className="mt-6 inline-block px-4 py-2 bg-purple-600 text-white rounded-md">Get in touch</a>
            </div>
            <div className="lg:col-span-2 grid gap-4">
                {SERVICES.map(([t, d]) => (
                    <div key={t} className="bg-white p-4 rounded-lg shadow-sm">
                        <h4 className="font-semibold">{t}</h4>
                        <p className="text-sm text-gray-600">{d}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
