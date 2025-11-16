export default function Header() {
    return (
        <header className="sticky top-0 z-40 bg-white/60 backdrop-blur-md shadow-sm">
            <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                <a href="#home" className="flex items-center gap-3 font-bold text-lg">
                    <span className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">B</span>
                    <span className="sr-only">Brooklyn - Home</span>
                    <span className="hidden sm:inline">Brooklyn</span>
                </a>
                <ul className="hidden md:flex items-center gap-6 text-sm">
                    <li><a className="hover:text-purple-600" href="#portfolio">Portfolio</a></li>
                    <li><a className="hover:text-purple-600" href="#blog">Blog</a></li>
                    <li><a className="hover:text-purple-600" href="#services">Services</a></li>
                    <li><a className="hover:text-purple-600" href="#contact">Contact</a></li>
                </ul>
                <div className="flex items-center gap-3">
                    <a href="#contact" className="hidden md:inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm">Hire Me</a>
                    <button className="md:hidden p-2 rounded-md" aria-label="Open menu">☰</button>
                </div>
            </nav>
        </header>
    );
}
