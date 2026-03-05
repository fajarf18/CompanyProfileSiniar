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
            title: 'Modul Pembelajaran Bisnis Digital',
            category: 'E-Book',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            ),
            price: 'Rp.30.000',
            description:
                'Modul ini dirancang untuk membantu memahami konsep, strategi, serta inovasi dalam dunia bisnis digital yang terus berkembang. Materi disusun secara sistematis dan mudah dipahami sehingga cocok digunakan sebagai bahan pembelajaran maupun referensi. Modul ini sangat bermanfaat bagi mahasiswa, pelajar, maupun siapa saja yang ingin mempelajari bagaimana bisnis berkembang di era teknologi digital.\n\n📖 Isi Pembahasan\n• Konsep dasar bisnis digital\n• Strategi pengembangan bisnis digital\n• Inovasi dalam dunia bisnis digital\n• Pemanfaatan teknologi dalam bisnis\n• Peluang dan tantangan bisnis di era digital\n\n📌 Spesifikasi Produk\nJenis: Modul / Buku Pembelajaran\nKategori: Pendidikan / Bisnis\nTopik: Bisnis Digital & Strategi Digital',
            features: [
                'Materi lengkap dan mudah dipahami',
                'Membahas strategi bisnis di era digital',
                'Cocok untuk mahasiswa dan pembelajaran',
                'Dapat digunakan sebagai referensi akademik',
                'Relevan dengan perkembangan teknologi bisnis',
            ],
            buyLink: 'https://forms.gle/fZq4UiKidtuy1vJX9',
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
