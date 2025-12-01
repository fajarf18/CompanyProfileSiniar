const Marquee = () => {
    const text = "DIGITAL INNOVATION • CREATIVE SOLUTIONS • FUTURE TECHNOLOGY • EMPOWERING YOUTH • ";

    return (
        <div className="relative w-full overflow-hidden py-20 bg-black z-20">
            {/* Tilted Strip */}
            <div className="bg-primary transform -rotate-2 scale-110 py-6 shadow-glow">
                <div className="animate-marquee whitespace-nowrap flex items-center">
                    {/* Repeat text enough times to fill width and allow looping */}
                    <span className="text-4xl md:text-6xl font-black text-black mx-4 tracking-tighter uppercase font-display">
                        {text.repeat(3)}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;
