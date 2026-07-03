import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

export function Projects({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) {
    return (
        <section id="projects" className={`py-32 px-8 relative overflow-hidden transition-all duration-500 ${vibe === 'brainrot' ? 'bg-violet/10' : ''}`}>
            <div className="max-w-6xl mx-auto space-y-24">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className={`flex flex-col md:flex-row items-end justify-between gap-8 border-b pb-12 transition-colors ${vibe === 'brainrot' ? 'border-violet-neon' : 'border-violet/20'}`}
                >
                    <div className="space-y-4">
                        <div className={`flex items-center gap-3 font-black tracking-[0.5em] text-xs transition-colors ${vibe === 'brainrot' ? 'text-white animate-bounce' : 'text-violet'}`}>
                            <LayoutGrid size={18} />
                            <span className="uppercase">{vibe === 'brainrot' ? "UNICORN_LOGS::FERAL" : "Portfolio::Registry"}</span>
                        </div>
                        <h2 className={`text-6xl md:text-8xl font-black tracking-tighter transition-all ${vibe === 'brainrot' ? 'text-rainbow scale-110 drop-shadow-[0_0_30px_rgba(255,110,199,0.5)]' : 'glitch-effect'}`}>
                            {vibe === 'brainrot' ? "UNICORN" : "PROJ"}<span className={vibe === 'brainrot' ? 'text-white' : 'text-violet'}>{vibe === 'brainrot' ? "_WINS" : "ECTS"}</span>
                        </h2>
                    </div>

                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {projects.length === 0 ? (
                        <p className={`col-span-full text-center py-12 font-mono text-sm ${vibe === 'brainrot' ? 'text-white font-black uppercase text-lg' : 'text-ethereal/40'}`}>
                            {vibe === 'brainrot' ? "THE STAMPEDE IS COMING. HOLD THE LINE. 🦄" : "Project registry coming soon."}
                        </p>
                    ) : (
                        projects.map((proj, i) => (
                            <motion.div
                                key={proj.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (i * 0.1) }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    to={`/projects/${proj.slug}`}
                                    className={`group relative aspect-video glass-panel border transition-all block overflow-hidden p-8 text-center hover:scale-105 ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/40 shadow-[0_0_40px_rgba(255,110,199,0.3)]' : 'celestial-border bg-slate/20 hover:bg-violet/5'}`}
                                >
                                    <div className={`absolute inset-0 transition-opacity ${vibe === 'brainrot' ? 'lisa-frank-bg opacity-20' : 'bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100'}`} />
                                    <div className={`absolute top-4 left-4 font-serif text-[60px] select-none leading-none transition-all ${vibe === 'brainrot' ? 'text-white/20 animate-pulse' : 'text-violet/10'}`}>{String(i + 1).padStart(2, '0')}</div>
                                    <div className="space-y-6 relative z-10">
                                        <h3 className={`text-4xl font-serif transition-all ${vibe === 'brainrot' ? 'text-rainbow drop-shadow-md' : 'text-ethereal group-hover:text-violet'}`}>{proj.title}</h3>
                                        <p className={`text-sm font-sans tracking-wide line-clamp-2 max-w-[280px] transition-all ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60'}`}>{proj.tagline}</p>
                                    </div>
                                    {vibe === 'brainrot' && (
                                        <div className="absolute bottom-2 right-2 text-2xl animate-bounce">🦄</div>
                                    )}
                                </Link>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-violet/5 -rotate-6 select-none pointer-events-none" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-px bg-violet/5 rotate-12 select-none pointer-events-none" />
        </section>
    );
}
