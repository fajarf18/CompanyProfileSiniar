import { useEffect, useRef } from 'react';
import { gsap } from '../utils/gsap';

const Contact = () => {
    const sectionRef = useRef(null);
    const formRef = useRef(null);
    const infoRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(infoRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: -50,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
            });

            gsap.from(formRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 80%',
                },
                x: 50,
                autoAlpha: 0,
                duration: 1,
                ease: 'power3.out',
                delay: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container-custom">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Info */}
                    <div ref={infoRef}>
                        <h2 className="section-title mb-6 text-left">Mulai Kolaborasi</h2>
                        <p className="text-xl text-gray-400 mb-12 leading-relaxed">
                            Punya ide brilian? Mari wujudkan bersama. Diskusikan kebutuhan digital Anda dengan tim ahli kami.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Email Kami</h3>
                                    <p className="text-gray-400">hello@siniar.id</p>
                                    <p className="text-gray-400">support@siniar.id</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">WhatsApp</h3>
                                    <p className="text-gray-400">+62 812-3456-7890</p>
                                    <p className="text-gray-400">Senin - Jumat, 09:00 - 17:00</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-12 h-12 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-1">Kantor</h3>
                                    <p className="text-gray-400">Jl. Teknologi No. 123, Jakarta Selatan</p>
                                    <p className="text-gray-400">Indonesia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div ref={formRef} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-10">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-400">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-400">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-400">Subjek</label>
                                <select
                                    id="subject"
                                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 appearance-none"
                                >
                                    <option value="">Pilih Kategori Project</option>
                                    <option value="web">Web Development</option>
                                    <option value="app">Mobile App</option>
                                    <option value="design">UI/UX Design</option>
                                    <option value="other">Lainnya</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-400">Pesan</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-black/50 border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none"
                                    placeholder="Ceritakan detail project Anda..."
                                ></textarea>
                            </div>

                            <button type="submit" className="w-full btn-primary py-4 text-lg group">
                                Kirim Pesan
                                <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
