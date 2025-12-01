import { useState, useEffect } from 'react';
import { ScrollSmoother } from '../utils/gsap';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo(`#${sectionId}`, true, 'top 100px');
            setIsMobileMenuOpen(false);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
            }
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'backdrop-blur-nav shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <h1 className="text-sm font-bold glow-text">
                            PT Siniar Intelektual Muda
                        </h1>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <button
                            onClick={() => scrollToSection('home')}
                            className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => scrollToSection('about')}
                            className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                            Tentang
                        </button>
                        <button
                            onClick={() => scrollToSection('portfolio')}
                            className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                            Portfolio
                        </button>
                        <button
                            onClick={() => scrollToSection('products')}
                            className="text-gray-300 hover:text-primary transition-colors duration-300"
                        >
                            Produk Digital
                        </button>
                        <button
                            onClick={() => scrollToSection('contact')}
                            className="btn-primary"
                        >
                            Kontak
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-primary"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMobileMenuOpen ? (
                                <path d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4 animate-fade-in">
                        <div className="flex flex-col space-y-4">
                            <button
                                onClick={() => scrollToSection('home')}
                                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => scrollToSection('about')}
                                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                            >
                                Tentang
                            </button>
                            <button
                                onClick={() => scrollToSection('portfolio')}
                                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                            >
                                Portfolio
                            </button>
                            <button
                                onClick={() => scrollToSection('products')}
                                className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                            >
                                Produk Digital
                            </button>
                            <button
                                onClick={() => scrollToSection('contact')}
                                className="text-primary hover:text-primary-dark transition-colors duration-300 text-left"
                            >
                                Kontak
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
