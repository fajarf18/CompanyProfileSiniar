import { useEffect, useRef } from 'react';
import { staggerFadeIn } from '../utils/gsap';

const Portfolio = () => {
    const cardsRef = useRef([]);

    useEffect(() => {
        if (cardsRef.current.length > 0) {
            staggerFadeIn(cardsRef.current, 0.2);
        }
    }, []);

    const programs = [
        {
            title: 'Workshop Digital Marketing',
            category: 'Workshop',
            description: 'Program pelatihan intensif digital marketing untuk UMKM dan startup pemula',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            date: 'Oktober 2024',
        },
        {
            title: 'Hackathon Tech Innovation',
            category: 'Kompetisi',
            description: 'Kompetisi pengembangan aplikasi inovatif untuk menyelesaikan masalah sosial',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
            date: 'September 2024',
        },
        {
            title: 'Bootcamp Web Development',
            category: 'Bootcamp',
            description: 'Program bootcamp 3 bulan untuk mempelajari web development dari dasar hingga advanced',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            date: 'Agustus 2024',
        },
        {
            title: 'Seminar AI & Machine Learning',
            category: 'Seminar',
            description: 'Seminar nasional tentang implementasi AI dan ML dalam bisnis modern',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
            ),
            date: 'Juli 2024',
        },
        {
            title: 'Community Meetup Tech',
            category: 'Meetup',
            description: 'Pertemuan rutin komunitas developer untuk berbagi pengetahuan dan networking',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
            ),
            date: 'Juni 2024',
        },
        {
            title: 'Program Mentoring Startup',
            category: 'Mentoring',
            description: 'Program pendampingan intensif untuk startup di tahap awal pengembangan',
            icon: (
                <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            date: 'Mei 2024',
        },
    ];

    return (
        <section id="portfolio" className="py-20 md:py-32 relative bg-gradient-to-b from-transparent via-gray-900/20 to-transparent">
            <div className="container-custom">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="section-title">Portfolio Program</h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto mt-4">
                        Program-program yang telah kami selenggarakan untuk memberdayakan generasi muda
                        dalam bidang teknologi dan digital
                    </p>
                </div>

                {/* Projects Grid - Horizontal Scroll */}
                <div className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-8 hide-scrollbar">
                    {programs.map((program, index) => (
                        <div
                            key={index}
                            ref={(el) => (cardsRef.current[index] = el)}
                            className="card group min-w-[300px] w-[300px] md:min-w-[350px] md:w-[350px] aspect-[3/4] snap-center flex-shrink-0 flex flex-col"
                        >
                            <div className="relative flex-1 mb-6 overflow-hidden rounded-lg bg-gray-800/50 flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-300">
                                <div className="transform group-hover:scale-110 transition-transform duration-500">
                                    {program.icon}
                                </div>
                                <div className="absolute top-4 right-4 z-20">
                                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full border border-primary/20">
                                        {program.category}
                                    </span>
                                </div>
                            </div>

                            <div className="flex-none">
                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                                    {program.title}
                                </h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-2">{program.description}</p>
                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-xs text-gray-500">{program.date}</span>
                                    <button className="text-primary hover:text-white transition-colors duration-300 flex items-center gap-2 text-sm font-medium">
                                        Detail
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
