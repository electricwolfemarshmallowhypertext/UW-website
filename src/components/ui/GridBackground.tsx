
export const GridBackground = () => {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 bg-void overflow-hidden">
            {/* Ambient rainbow wash — CSS only, no image asset required */}
            <div
                className="absolute inset-0 z-0 opacity-30 mix-blend-screen"
                style={{
                    backgroundImage: `radial-gradient(circle at 15% 20%, rgba(255,110,199,0.35), transparent 45%),
                                      radial-gradient(circle at 85% 15%, rgba(154,255,0,0.2), transparent 40%),
                                      radial-gradient(circle at 50% 90%, rgba(0,210,255,0.25), transparent 50%)`,
                }}
            />

            {/* Base Gradient Overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/50 to-void z-10" />

            {/* Moving Grid - Perspective */}
            <div
                className="absolute inset-0 opacity-20 z-20"
                style={{
                    backgroundImage: `linear-gradient(to right, #FF6EC7 1px, transparent 1px),
                                      linear-gradient(to bottom, #FF6EC7 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(2)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%, black 80%, transparent)'
                }}
            />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet/10 blur-[120px] rounded-full mix-blend-screen z-20" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ethereal/5 blur-[120px] rounded-full mix-blend-screen z-20" />
        </div>
    );
};
