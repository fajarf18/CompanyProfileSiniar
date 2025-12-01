import { useEffect, useRef } from 'react';
import { gsap, ScrollSmoother } from '../utils/gsap';

const Hero = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const buttonRef = useRef(null);
    const circleRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(titleRef.current,
            { y: 100, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1 }
        )
            .fromTo(subtitleRef.current,
                { y: 50, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.8 },
                '-=0.5'
            )
            .fromTo(buttonRef.current,
                { y: 30, autoAlpha: 0 },
                { y: 0, autoAlpha: 1, duration: 0.6 },
                '-=0.4'
            );

        // Floating animation for circle
        gsap.to(circleRef.current, {
            y: -30,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });

        // Rotation animation
        gsap.to(circleRef.current, {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: 'none',
        });
    }, []);

    const scrollToAbout = () => {
        const smoother = ScrollSmoother.get();
        if (smoother) {
            smoother.scrollTo('#about', true, 'top 100px');
        } else {
            const element = document.getElementById('about');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section
            id="home"
            ref={heroRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-radial"></div>

            {/* Animated circles */}
            <div
                ref={circleRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
            >
                <div className="absolute inset-0 border-2 border-primary rounded-full opacity-20"></div>
                <div className="absolute inset-8 border-2 border-accent-blue rounded-full opacity-30"></div>
                <div className="absolute inset-16 border-2 border-accent-purple rounded-full opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent-blue to-accent-purple rounded-full opacity-10 blur-3xl"></div>
            </div>

            {/* Content */}
            <div className="container-custom relative z-10">
                <div className="text-center">
                    <h1
                        ref={titleRef}
                        className="text-5xl md:text-7xl font-bold mb-6 text-gradient"
                    >
                        PT Siniar Intelektual Muda
                    </h1>
                    <p
                        ref={subtitleRef}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
                    >
                        Memberdayakan Generasi Muda Melalui Teknologi dan Inovasi Digital
                    </p>
                    <button
                        ref={buttonRef}
                        onClick={scrollToAbout}
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        Jelajahi Lebih Lanjut
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-primary"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
