import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ isOpen, onClose, product }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen || !product) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fade-in"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>

            {/* Modal Content */}
            <div
                className="relative bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-primary shadow-glow-lg animate-slide-up"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-primary transition-colors duration-300 z-10"
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Product Icon/Image */}
                <div className="bg-gradient-to-br from-primary/20 to-accent-blue/20 p-12 text-center">
                    <div className="text-8xl mb-4">{product.icon}</div>
                    <h2 className="text-3xl font-bold text-white">{product.title}</h2>
                </div>

                {/* Product Details */}
                <div className="p-8">
                    {/* Category & Price */}
                    <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-2 bg-primary/20 text-primary text-sm font-semibold rounded-full border border-primary">
                            {product.category}
                        </span>
                        <span className="text-2xl font-bold text-primary">{product.price}</span>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <h3 className="text-xl font-bold text-white mb-3">Deskripsi Produk</h3>
                        <p className="text-gray-400 leading-relaxed">{product.description}</p>
                    </div>

                    {/* Features */}
                    {product.features && (
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-white mb-3">Fitur Unggulan</h3>
                            <ul className="space-y-2">
                                {product.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-gray-400">
                                        <svg
                                            className="w-5 h-5 text-primary mr-2 mt-1 flex-shrink-0"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                        {product.buyLink ? (
                            <a
                                href={product.buyLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary flex-1 text-center"
                            >
                                Beli Sekarang
                            </a>
                        ) : (
                            <button className="btn-primary flex-1 text-center">
                                Beli Sekarang
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
