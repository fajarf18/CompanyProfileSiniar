import { useEffect, useRef } from 'react';
import { staggerFadeIn } from '../utils/gsap';

const About = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            staggerFadeIn(cardsRef.current, 0.3);
        }
    }, []);

    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: 'Inovasi',
            description: 'Menghadirkan solusi inovatif untuk menghadapi tantangan digital masa kini',
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            title: 'Kolaborasi',
            description: 'Membangun ekosistem berbasis kolaborasi dan kemitraan strategis',
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: 'Kreativitas',
            description: 'Mendorong kreativitas dan pemikiran out-of-the-box dalam setiap proyek',
        },
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative">
            <div className="container-custom">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Tentang Kami</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                        PT Siniar Intelektual Muda hadir sebagai wadah bagi generasi muda untuk berkembang
                        dan berinovasi dalam dunia digital. Kami berkomitmen untuk menciptakan dampak positif
                        melalui teknologi dan kreativitas.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card group"
                        >
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div
                        ref={(el) => (cardsRef.current[3] = el)}
                        className="card"
                    >
                        <h3 className="text-2xl font-bold mb-4 glow-text">Visi</h3>
                        <p className="text-gray-400">
                            Menjadi perusahaan teknologi terdepan yang memberdayakan generasi muda Indonesia
                            untuk menciptakan solusi inovatif yang berdampak global.
                        </p>
                    </div>
                    <div
                        ref={(el) => (cardsRef.current[4] = el)}
                        className="card"
                    >
                        <h3 className="text-2xl font-bold mb-4 glow-text">Misi</h3>
                        <p className="text-gray-400">
                            Mengembangkan ekosistem digital yang inklusif, mendorong inovasi berkelanjutan,
                            dan menciptakan peluang bagi talenta muda untuk berkontribusi dalam transformasi digital.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
