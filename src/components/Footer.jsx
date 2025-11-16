export default function Footer() {
    return (
        <footer className="mt-16 bg-white/60 backdrop-blur-md py-8">
            <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
                © {new Date().getFullYear()} Brooklyn. All rights reserved.
            </div>
        </footer>
    );
}
