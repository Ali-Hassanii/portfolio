const CLIENTS = ['Google', 'Dribbble', 'LinkedIn', 'Amazon', 'Medium', 'Spotify'];

export default function Clients() {
    return (
        <section className="mt-14 text-center">
            <h4 className="text-xl font-semibold">Happy Clients</h4>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-80">
                {CLIENTS.map((c) => (
                    <div key={c} className="text-sm text-gray-500">{c}</div>
                ))}
            </div>
        </section>
    );
}
