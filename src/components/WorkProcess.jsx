const WORK_PROCESS = [
    ['1', 'Research', 'Understand users and business needs.'],
    ['2', 'Analyze', 'Synthesize findings into actionable insights.'],
    ['3', 'Design', 'Create wireframes, prototypes, and visuals.'],
    ['4', 'Launch', 'Ship, measure and iterate.'],
];

export default function WorkProcess() {
    return (
        <section className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
            <div>
                <h3 className="text-2xl font-semibold">Work Process</h3>
                <p className="mt-3 text-gray-600">A short description about the process from discovery to launch. I follow a measured, collaborative process to deliver predictable outcomes.</p>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                {WORK_PROCESS.map(([num, title, desc]) => (
                    <div key={num} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-md bg-purple-50 flex items-center justify-center font-bold">{num}</div>
                            <div>
                                <h4 className="font-semibold">{title}</h4>
                                <p className="text-sm text-gray-600">{desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
