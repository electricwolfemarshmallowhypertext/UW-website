import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

export const DedicationPage = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <main className="min-h-screen flex items-center justify-center pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Soft, floating background lights */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-violet/5 blur-[120px]"
                        style={{
                            width: Math.random() * 300 + 200,
                            height: Math.random() * 300 + 200,
                            left: Math.random() * 100 + "%",
                            top: Math.random() * 100 + "%",
                        }}
                        animate={{
                            x: [0, Math.random() * 50 - 25, 0],
                            y: [0, Math.random() * 50 - 25, 0],
                        }}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="max-w-xl w-full text-center space-y-8 relative z-10"
            >
                {/* Back button */}
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-colors ${
                            vibe === 'brainrot' ? 'text-white/60 hover:text-white hover:underline' : 'text-ethereal/40 hover:text-violet'
                        }`}
                    >
                        <ArrowLeft size={12} />
                        {vibe === 'brainrot' ? "RETURN_TO_BASE" : "Return to Home"}
                    </Link>
                </div>

                {/* Portrait Frame */}
                <div className="relative inline-block">
                    <motion.div
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute inset-[-4px] rounded-2xl bg-gradient-to-tr from-violet/20 via-pink-500/10 to-violet/20 blur-md z-0"
                    />
                    <img
                        src="/img/taylor.png"
                        alt="Taylor Elizabeth Bates"
                        className="w-72 md:w-80 rounded-xl border border-violet/20 shadow-2xl relative z-10 object-cover aspect-[4/3] select-none pointer-events-none mx-auto"
                    />
                </div>

                {/* Text Block */}
                <div className="space-y-4">
                    <div className="flex items-center justify-center gap-2 text-violet">
                        <Heart size={14} className="fill-current animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-[0.4em]">In Loving Memory</span>
                    </div>

                    <h1 className={`text-3xl md:text-5xl font-black tracking-tight leading-none ${vibe === 'brainrot' ? 'text-white' : 'text-ethereal font-serif'}`}>
                        Taylor Elizabeth Bates
                    </h1>

                    <p className={`text-sm md:text-base leading-relaxed max-w-lg mx-auto ${vibe === 'brainrot' ? 'text-white/70 font-sans' : 'text-ethereal/60 font-serif italic'}`}>
                        {vibe === 'brainrot'
                            ? "Forever in our hearts, shining brighter than any star. Her laughter and beautiful smile will always guide our work, keeping the magic and creative spark alive forever. 💖✨"
                            : "The first unicorn who is no longer with us, but whose joy, bright smile, and creative spirit will forever guide our work and illuminate our hearts."
                        }
                    </p>
                </div>

                <div className="pt-4">
                    <span className="text-[9px] font-mono tracking-[0.6em] uppercase text-violet/40 block">
                        {vibe === 'brainrot' ? "FOREVER_SHINING" : "REST IN PEACE"}
                    </span>
                </div>
            </motion.div>
        </main>
    );
};
