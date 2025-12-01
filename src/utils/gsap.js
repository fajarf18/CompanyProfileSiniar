import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Initialize ScrollSmoother
export const initScrollSmoother = () => {
    // Check if ScrollSmoother is already initialized
    if (ScrollSmoother.get()) {
        return ScrollSmoother.get();
    }

    return ScrollSmoother.create({
        wrapper: '#smooth-wrapper',
        content: '#smooth-content',
        smooth: 1.5,
        effects: true,
        smoothTouch: 0.1,
    });
};

// Fade in animation
export const fadeIn = (element, delay = 0) => {
    if (!element) return;

    gsap.fromTo(element,
        {
            autoAlpha: 0,
            y: 50
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        }
    );
};

// Stagger animation for multiple elements
export const staggerFadeIn = (elements, staggerAmount = 0.2) => {
    if (!elements || elements.length === 0) return;

    gsap.fromTo(elements,
        {
            autoAlpha: 0,
            y: 50
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            stagger: staggerAmount,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: elements[0],
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        }
    );
};

// Scale animation
export const scaleIn = (element) => {
    if (!element) return;

    gsap.fromTo(element,
        {
            scale: 0.8,
            autoAlpha: 0
        },
        {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
                trigger: element,
                start: 'top 90%',
                toggleActions: 'play none none reverse',
            },
        }
    );
};

// Parallax effect
export const parallax = (element, speed = 1) => {
    gsap.to(element, {
        y: () => window.innerHeight * speed,
        ease: 'none',
        scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
        },
    });
};

export { gsap, ScrollTrigger, ScrollSmoother };
