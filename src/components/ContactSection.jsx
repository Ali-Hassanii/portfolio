export default function ContactSection() {
    return (
        <section id="contact" className="mt-14">
            <div className="bg-white rounded-xl shadow-lg p-8 grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold">Let's discuss your Project</h3>
                    <p className="mt-3 text-gray-600">Tell me about your project and I’ll get back to you shortly.</p>
                    <ul className="mt-6 text-sm text-gray-600 space-y-3">
                        <li>📍 Berlin, Germany</li>
                        <li>✉️ hello@brooklyn.example</li>
                        <li>📞 +49 123 456 789</li>
                    </ul>
                    <div className="mt-6 flex gap-3">
                        <a className="px-4 py-2 bg-purple-600 text-white rounded-md" href="mailto:hello@brooklyn.example">Email me</a>
                        <a className="px-4 py-2 border rounded-md" href="#">Schedule</a>
                    </div>
                </div>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input className="border rounded-md p-3" placeholder="Name" aria-label="Name" />
                        <input className="border rounded-md p-3" placeholder="Email" aria-label="Email" />
                    </div>
                    <input className="border rounded-md p-3 w-full" placeholder="Subject" />
                    <textarea className="border rounded-md p-3 w-full" rows={4} placeholder="Message"></textarea>
                    <button type="submit" className="px-6 py-3 bg-purple-600 text-white rounded-md">Send Message</button>
                </form>
            </div>
        </section>
    );
}
