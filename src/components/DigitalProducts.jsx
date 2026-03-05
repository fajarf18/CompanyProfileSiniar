import { useEffect, useRef, useState } from 'react';
import { staggerFadeIn } from '../utils/gsap';
import Modal from './Modal';

const DigitalProducts = () => {
    const cardsRef = useRef([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            staggerFadeIn(cardsRef.current, 0.2);
        }
    }, []);

    const products = [
        {
            id: 1,
            title: 'Platform E-Learning',
            category: 'Web App',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            price: 'Rp 2.500.000',
            description:
                'Platform pembelajaran online lengkap dengan fitur video streaming, quiz interaktif, sertifikat digital, dan sistem manajemen kursus yang mudah digunakan.',
            features: [
                'Video streaming HD dengan kualitas tinggi',
                'Quiz dan ujian interaktif',
                'Sertifikat digital otomatis',
                'Dashboard analytics lengkap',
                'Multi-user role (admin, instruktur, siswa)',
                'Forum diskusi dan chat real-time',
            ],
        },
        {
            id: 2,
            title: 'Template Website Bisnis',
            category: 'Template',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            ),
            price: 'Rp 500.000',
            description:
                'Template website bisnis modern dan responsive dengan berbagai layout halaman. Cocok untuk company profile, portfolio, dan landing page produk.',
            features: [
                '10+ halaman template siap pakai',
                'Responsive design untuk semua device',
                'Optimasi SEO bawaan',
                'Easy customization',
                'Dokumentasi lengkap',
                'Free updates selamanya',
            ],
        },
        {
            id: 3,
            title: 'Mobile App Starter Kit',
            category: 'Mobile',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
            price: 'Rp 3.000.000',
            description:
                'Starter kit lengkap untuk pengembangan aplikasi mobile dengan React Native. Sudah include authentication, database setup, dan UI components.',
            features: [
                'Authentication & authorization',
                'Firebase integration',
                'Pre-built UI components',
                'Push notification ready',
                'Offline storage support',
                'Source code & dokumentasi',
            ],
        },
        {
            id: 4,
            title: 'Dashboard Analytics Pro',
            category: 'Web App',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            price: 'Rp 1.800.000',
            description:
                'Dashboard analytics professional dengan berbagai chart dan grafik interaktif. Perfect untuk monitoring bisnis dan data visualization.',
            features: [
                '20+ jenis chart dan grafik',
                'Real-time data update',
                'Export data (PDF, Excel)',
                'Custom reporting tools',
                'API integration ready',
                'Dark/Light mode',
            ],
        },
        {
            id: 5,
            title: 'E-Commerce Starter',
            category: 'Web App',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
            ),
            price: 'Rp 4.000.000',
            description:
                'Platform e-commerce lengkap dengan shopping cart, payment gateway, inventory management, dan admin panel yang powerful.',
            features: [
                'Shopping cart & checkout system',
                'Multiple payment gateway',
                'Inventory management',
                'Order tracking system',
                'Customer management',
                'Admin dashboard lengkap',
            ],
        },
    ];

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => setSelectedProduct(null), 300);
    };

    return (
        <section id="products" className="py-20 md:py-32 relative">
            <div className="container-custom">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Produk Digital</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                        Berbagai produk digital berkualitas tinggi untuk mempercepat pengembangan
                        bisnis dan project Anda
                    </p>
                </div>

                {/* Products Grid - Horizontal Scroll */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 hide-scrollbar">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card group cursor-pointer min-w-[300px] w-[300px] md:min-w-[350px] md:w-[350px] aspect-[3/4] snap-center flex-shrink-0 flex flex-col"
                            onClick={() => handleOpenModal(product)}
                        >
                            {/* Icon Area */}
                            <div className="relative flex-1 mb-6 overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                                <div className="transform group-hover:scale-110 transition-transform duration-500">
                                    {product.icon}
                                </div>
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                                        {product.category}
                                    </span>
                                </div>
                            </div>

                            {/* Content Area */}
                            <div className="flex-none">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                                    {product.title}
                                </h3>
                                <p className="text-2xl font-bold text-primary mb-3">{product.price}</p>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>

                                {/* CTA */}
                                <div className="flex items-center text-primary group-hover:text-primary-dark transition-colors duration-300 mt-auto">
                                    <span className="text-sm font-semibold">Lihat Detail</span>
                                    <svg
                                        className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                product={selectedProduct}
            />
        </section>
    );
};

export default DigitalProducts;
