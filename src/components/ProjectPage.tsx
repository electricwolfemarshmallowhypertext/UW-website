import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, ChevronRight, Github, Monitor, Cpu, Activity } from 'lucide-react';
import type { Project } from '../data/projects';

export function ProjectPage({ project }: { project: Project }) {
    const [vibe, setVibe] = useState<'tech' | 'normal' | 'brainrot'>('tech');

    const vibeCheck = project.vibeChecks?.[vibe];

    return (
        <main className={`pt-32 pb-24 px-8 relative transition-all duration-300 ${vibe === 'brainrot' ? 'bg-violet/20 animate-vibrate-slow overflow-hidden' : 'bg-void'}`}>
            <div className={`max-w-6xl mx-auto space-y-32 ${vibe === 'brainrot' ? 'animate-vibrate font-impact' : ''}`}>
                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className={`flex items-center gap-3 font-mono tracking-[0.5em] text-[10px] ${vibe === 'brainrot' ? 'text-ethereal animate-bounce' : 'text-violet'}`}>
                        <span className="uppercase">{project.eyebrow ?? `Observation::${project.slug}`}</span>
                    </div>

                    <h1 className={`text-7xl md:text-9xl tracking-tight leading-[0.85] transition-all duration-500 ${vibe === 'brainrot' ? 'text-violet-neon scale-110 drop-shadow-[0_0_30px_rgba(255,110,199,0.8)]' : 'text-ethereal font-serif'}`}>
                        {project.title}
                        {project.subtitle && (
                            <>
                                <br />
                                <span className={vibe === 'brainrot' ? 'text-ethereal animate-pulse' : 'text-violet opacity-60'}>
                                    {project.subtitle}
                                </span>
                            </>
                        )}
                    </h1>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet/60' : 'border-violet/10'}`}>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">Inquiry</span>
                            <p className="text-lg text-ethereal/80 leading-relaxed">{project.tagline}</p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">State</span>
                            <div className="flex items-center gap-2">
                                <Activity className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={16} strokeWidth={1} />
                                <span className="text-sm font-mono tracking-widest uppercase text-violet">{project.state ?? "In Progress"}</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">Foundation</span>
                            <p className="text-sm text-ethereal/60 font-mono">{project.foundation ?? "TBD"}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Vibe Check Interactive Toggle */}
                {vibeCheck && (
                    <section className={`glass-panel celestial-border p-8 space-y-8 transition-all duration-1000 ${vibe === 'brainrot' ? 'border-violet bg-slate/60 shadow-[0_0_100px_rgba(255,110,199,0.3)] ring-4 ring-violet/20' : 'bg-slate/20'}`}>
                        <div className={`flex items-center justify-between border-b pb-4 transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet' : 'border-ethereal/10'}`}>
                            <div className="flex items-center gap-3 text-[10px] font-sans tracking-[0.3em] uppercase text-ethereal/40">
                                <Monitor size={14} className="text-violet/60" strokeWidth={1} />
                                Signal_Interpretation
                            </div>
                            <div className="flex gap-4">
                                {(['tech', 'normal', 'brainrot'] as const).map((v) => (
                                    <button
                                        key={v}
                                        onClick={() => setVibe(v)}
                                        className={`text-[9px] font-sans tracking-widest transition-all ${vibe === v
                                            ? "text-violet border-b border-violet font-black"
                                            : "text-ethereal/30 hover:text-ethereal/60"
                                            }`}
                                    >
                                        {v.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="min-h-[140px] flex items-center justify-center text-center px-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={vibe}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.5, ease: "backOut" }}
                                    className="space-y-6"
                                >
                                    <span className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 ${vibe === 'brainrot' ? 'text-violet-neon animate-pulse text-lg' : 'text-violet'}`}>
                                        {vibeCheck.title}
                                    </span>
                                    <p className={`text-2xl md:text-3xl leading-relaxed transition-colors duration-1000 ${vibe === 'brainrot' ? 'text-violet-neon font-black text-shadow-sm uppercase' : 'text-ethereal/90 font-serif'}`}>
                                        "{vibeCheck.content}"
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </section>
                )}

                {/* Milestones */}
                {project.milestones && project.milestones.length > 0 && (
                    <section className="space-y-8">
                        <h2 className={`text-5xl text-ethereal flex items-center gap-4 ${vibe === 'brainrot' ? 'text-violet-neon text-6xl' : 'font-serif'}`}>
                            <Shield size={32} className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} strokeWidth={1} />
                            Technical Milestones
                        </h2>
                        <div className="space-y-1">
                            {project.milestones.map((m, i) => (
                                <div key={i} className={`group p-8 border-b border-ethereal/5 hover:bg-violet/5 transition-all space-y-3 ${vibe === 'brainrot' ? 'bg-violet/10 border-violet/20' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <ChevronRight size={14} className={vibe === 'brainrot' ? "text-violet-neon" : "text-violet/40 group-hover:text-violet transition-colors"} />
                                        <span className={`text-[11px] font-sans tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-ethereal/80'}`}>{m.title}</span>
                                    </div>
                                    <p className={`text-base pl-8 leading-relaxed ${vibe === 'brainrot' ? 'text-ethereal font-black uppercase' : 'text-ethereal/50 font-serif'}`}>
                                        {m.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Reflection */}
                {project.reflection && (
                    <section className={`p-12 border-l space-y-8 glass-panel transition-all ${vibe === 'brainrot' ? 'bg-violet/20 border-violet-neon shadow-2xl' : 'bg-slate/10 border-violet/20'}`}>
                        <h3 className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 ${vibe === 'brainrot' ? 'text-violet-neon text-sm font-black' : 'text-violet'}`}>
                            Reflections
                        </h3>
                        <p className={`text-2xl leading-relaxed ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                            "{project.reflection}"
                        </p>
                    </section>
                )}

                {/* Image Registry */}
                {project.images && project.images.length > 0 && (
                    <section className="space-y-12">
                        <div className="flex items-center gap-4">
                            <Cpu className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={32} strokeWidth={1} />
                            <h2 className={`text-5xl tracking-tight uppercase ${vibe === 'brainrot' ? "text-violet-neon font-black text-6xl" : "text-ethereal font-serif"}`}>
                                Registry
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {project.images.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="space-y-6 group"
                                >
                                    <div className={`aspect-video glass-panel celestial-border overflow-hidden bg-slate/20 relative ${vibe === 'brainrot' ? 'border-violet-neon border-4 animate-vibrate' : ''}`}>
                                        <img
                                            src={`/img/projects/${project.imageFolder ?? project.slug}/${img.src}`}
                                            alt={img.label}
                                            className={`w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-110 ${vibe === 'brainrot' ? 'grayscale-0 brightness-125 animate-pulse' : 'opacity-40 group-hover:grayscale-0 group-hover:opacity-100'}`}
                                        />
                                        {vibe !== 'brainrot' && <div className="absolute inset-0 bg-void/60 group-hover:opacity-0 transition-opacity" />}
                                    </div>
                                    <div className="space-y-2 text-center">
                                        <div className={`text-[10px] font-sans tracking-widest uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-violet/40'}`}>
                                            Sequence::00{i + 1}
                                        </div>
                                        <div className={`text-lg transition-colors ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase text-2xl animate-bounce' : 'text-ethereal/60 group-hover:text-violet font-serif'}`}>{img.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Call to Action */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className={`p-16 glass-panel celestial-border text-center space-y-12 transition-all ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/40 scale-105 shadow-[0_0_150px_rgba(255,110,199,0.6)]' : 'bg-slate/20'}`}
                >
                    <h3 className={`text-4xl tracking-wide uppercase ${vibe === 'brainrot' ? 'text-white font-black text-6xl drop-shadow-xl animate-vibrate' : 'text-ethereal font-serif'}`}>
                        {project.repoUrl ? "See The Code" : "More Coming Soon"}
                    </h3>
                    {project.repoUrl && (
                        <div className="flex justify-center flex-col items-center gap-8">
                            <a
                                href={project.repoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`px-12 py-5 border text-xs group transition-all flex items-center justify-center gap-4 tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'bg-white text-violet-neon border-white font-black animate-bounce scale-125 shadow-2xl' : 'border-violet/40 text-violet font-sans hover:bg-violet hover:text-void'}`}
                            >
                                <Github size={18} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                                Repo
                            </a>
                        </div>
                    )}
                </motion.div>
            </div>
        </main>
    );
}
