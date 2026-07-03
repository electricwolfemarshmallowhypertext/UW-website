import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Activity,
    Briefcase,
    CheckCircle2,
    ChevronRight,
    Github,
    LayoutDashboard,
    Lightbulb,
    Monitor,
    Sparkles,
    Target,
} from 'lucide-react';

export function BossBot() {
    const [vibe, setVibe] = useState<'tech' | 'normal' | 'brainrot'>('tech');

    const vibeChecks = {
        tech: {
            title: 'SYSTEM_SPEC::MANAGERIAL_RUNTIME',
            content:
                'BossBot is a local-first managerial runtime for freelancers, job seekers, and self-directed builders. SQLite owns state. Deterministic review logic creates pressure. The model assists with bounded drafting, scoring, and tie-breaks, but the runtime preserves commitments and the event ledger keeps receipts.',
        },
        normal: {
            title: 'WHAT_IT_ACTUALLY_DOES',
            content:
                'BossBot exists for people who have to do the work and manage the work at the same time. It keeps leads, applications, deliverables, daily check-ins, and weekly reviews in one place so momentum does not depend on mood.',
        },
        brainrot: {
            title: 'POV::MIDDLE_MANAGEMENT_ACHIEVED',
            content:
                'BOSSBOT IS THE LOCAL-FIRST MANAGERIAL GYATT. YOU STOP LARPING AS YOUR OWN COO IN TWELVE TABS AND START RUNNING A REAL CAREER OPS STACK. QUEUE LOCKED. SHIP LOG LOCKED. HUE BULB PENDING. NO DRIFT. NO CAP.',
        },
    };

    const milestones = vibe === 'brainrot'
        ? [
            {
                title: 'QUEUE MOGGING',
                description:
                    'One unified priority surface for freelance pipeline, applications, and shipped work. No more tab-tax.',
            },
            {
                title: 'LEDGER RECEIPTS',
                description:
                    'Append-only event logging for check-ins, applications, deliverables, and reviews. The boss keeps receipts.',
            },
            {
                title: 'HUE BOSS MODE',
                description:
                    'Ambient accountability layer planned. If the room goes red, you already know what you forgot.',
            },
            {
                title: 'SHIP OR COPE',
                description:
                    'The system is built to punish drift gently and reward actual closed loops, not faux productivity.',
            },
        ]
        : [
            {
                title: 'One Queue, Not Five',
                description:
                    'Freelance pipeline, applications, projects, and deliverables roll into a single managerial surface.',
            },
            {
                title: 'Deterministic Pressure',
                description:
                    'The runtime computes overdue follow-ups, stale pipeline, shipping gaps, and weekly pressure without needing an LLM.',
            },
            {
                title: 'Bounded AI Assistance',
                description:
                    'Models draft and summarize. They do not silently mutate state, invent commitments, or take over the workflow.',
            },
            {
                title: 'Ambient Accountability',
                description:
                    'An optional Hue bulb integration is planned so BossBot can signal room-state from real runtime conditions.',
            },
        ];

    const managementDomains = [
        {
            icon: Target,
            title: 'Freelance pipeline',
            desc: 'Leads, proposals, follow-ups, active projects, invoices, and shipped client work.',
        },
        {
            icon: CheckCircle2,
            title: 'Career pipeline',
            desc: 'Applications, artifacts, deadlines, outreach, and research-facing evidence.',
        },
        {
            icon: Lightbulb,
            title: 'Accountability loop',
            desc: 'Daily check-ins, delivery pressure, weekly reviews, and visible misses before they compound.',
        },
    ];

    return (
        <main className={`pt-32 pb-24 px-8 relative transition-all duration-300 ${vibe === 'brainrot' ? 'bg-violet/20 animate-vibrate-slow overflow-hidden' : 'bg-void'}`}>
            {vibe === 'brainrot' && (
                <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                    <div className="absolute top-20 left-10 text-[80px] font-black text-violet/20 -rotate-12 animate-pulse font-impact">BOSS</div>
                    <div className="absolute bottom-40 right-10 text-[120px] font-black text-ethereal/10 rotate-12 animate-bounce font-impact uppercase tracking-tighter">MANAGEMENT</div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[200px] font-black text-violet/5 animate-vibrate font-impact">BOT</div>
                </div>
            )}

            <div className={`max-w-6xl mx-auto space-y-32 ${vibe === 'brainrot' ? 'animate-vibrate font-impact' : ''}`}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className={`flex items-center gap-3 font-mono tracking-[0.5em] text-[10px] ${vibe === 'brainrot' ? 'text-ethereal animate-bounce' : 'text-violet'}`}>
                        <Sparkles size={18} strokeWidth={1} />
                        <span className="uppercase">{vibe === 'brainrot' ? 'SKIBIDI::BOSSBOT' : 'Operations::BossBot'}</span>
                    </div>

                    <h1 className={`text-7xl md:text-9xl tracking-tight italic leading-[0.85] transition-all duration-500 ${vibe === 'brainrot' ? 'text-violet-neon scale-110 drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]' : 'text-ethereal font-serif'}`}>
                        {vibe === 'brainrot' ? 'MIDDLE' : 'BOSS'}<br />
                        <span className={vibe === 'brainrot' ? 'text-ethereal animate-pulse' : 'text-violet opacity-60'}>
                            {vibe === 'brainrot' ? 'MANAGEMENT' : 'BOT'}
                        </span>
                    </h1>

                    <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet/60' : 'border-violet/10'}`}>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">Inquiry</span>
                            <p className="text-lg text-ethereal/80 italic leading-relaxed">
                                {vibe === 'brainrot'
                                    ? 'YOU ARE THE CEO, PM, IC, AND INTERN. THIS THING EXISTS SO YOU CAN STOP TWEAKING AND START SHIPPING.'
                                    : 'A local-first career operating system for freelancers, job seekers, and self-directed builders who need structure before they have staff.'}
                            </p>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">State</span>
                            <div className="flex items-center gap-2">
                                <Activity className={vibe === 'brainrot' ? 'text-violet-neon animate-vibrate' : 'text-violet'} size={16} strokeWidth={1} />
                                <span className={`text-sm font-mono tracking-widest uppercase ${vibe === 'brainrot' ? 'text-ethereal' : 'text-violet'}`}>
                                    {vibe === 'brainrot' ? 'DRIFT_DETECTED' : 'Runtime Governed'}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">Foundation</span>
                            <p className="text-sm text-ethereal/60 font-mono italic">
                                {vibe === 'brainrot'
                                    ? 'SQLITE // EVENT LEDGER // QUEUE PRESSURE // HUE BOSS MODE'
                                    : 'SQLite // Event ledger // Deterministic queue // Optional LLM assist'}
                            </p>
                        </div>
                    </div>
                </motion.div>

                <section className={`glass-panel celestial-border p-8 space-y-8 transition-all duration-1000 ${vibe === 'brainrot' ? 'border-violet bg-slate/60 shadow-[0_0_100px_rgba(139,92,246,0.3)] ring-4 ring-violet/20' : 'bg-slate/20'}`}>
                    <div className={`flex items-center justify-between border-b pb-4 transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet' : 'border-ethereal/10'}`}>
                        <div className="flex items-center gap-3 text-[10px] font-sans tracking-[0.3em] uppercase text-ethereal/40">
                            <Monitor size={14} className="text-violet/60" strokeWidth={1} />
                            {vibe === 'brainrot' ? 'SKIBIDI_INTERPRETER' : 'Signal_Interpretation'}
                        </div>
                        <div className="flex gap-4">
                            {(['tech', 'normal', 'brainrot'] as const).map((mode) => (
                                <button
                                    key={mode}
                                    onClick={() => setVibe(mode)}
                                    className={`text-[9px] font-sans tracking-widest transition-all ${vibe === mode
                                        ? 'text-violet border-b border-violet font-black'
                                        : 'text-ethereal/30 hover:text-ethereal/60'
                                        }`}
                                >
                                    {mode === 'brainrot' ? 'ABOLISH' : mode.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[140px] flex items-center justify-center text-center px-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={vibe}
                                initial={{ opacity: 0, scale: 0.9, rotate: vibe === 'brainrot' ? -2 : 0 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1, rotate: vibe === 'brainrot' ? 2 : 0 }}
                                transition={{ duration: 0.5, ease: 'backOut' }}
                                className="space-y-6"
                            >
                                <span className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 ${vibe === 'brainrot' ? 'text-violet-neon animate-pulse text-lg' : 'text-violet'}`}>
                                    {vibeChecks[vibe].title}
                                </span>
                                <p className={`text-2xl italic leading-relaxed max-w-4xl ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                                    {vibeChecks[vibe].content}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-20 items-start">
                    <div className="space-y-16">
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Briefcase className={vibe === 'brainrot' ? 'text-violet-neon animate-vibrate' : 'text-violet'} size={32} strokeWidth={1} />
                                <h2 className={`text-5xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black text-6xl uppercase' : 'text-ethereal font-serif'}`}>
                                    {vibe === 'brainrot' ? 'WHAT IT MOGS' : 'What It Manages'}
                                </h2>
                            </div>
                            <div className="space-y-1">
                                {managementDomains.map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className={`group p-8 border-b border-ethereal/5 hover:bg-violet/5 transition-all space-y-3 ${vibe === 'brainrot' ? 'bg-violet/10 border-violet/20' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <Icon size={16} className={vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet/40 group-hover:text-violet transition-colors'} strokeWidth={1.5} />
                                            <span className={`text-[11px] font-sans tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-ethereal/80'}`}>{title}</span>
                                        </div>
                                        <p className={`text-base italic pl-8 leading-relaxed ${vibe === 'brainrot' ? 'text-ethereal font-black uppercase' : 'text-ethereal/50 font-serif'}`}>
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className={`p-12 border-l space-y-8 glass-panel transition-all ${vibe === 'brainrot' ? 'bg-violet/20 border-violet-neon shadow-2xl' : 'bg-slate/10 border-violet/20'}`}>
                            <h3 className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 ${vibe === 'brainrot' ? 'text-violet-neon text-sm font-black' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? 'SKIBIDI THOUGHTS' : 'Reflections'}
                            </h3>
                            <p className={`text-2xl italic leading-relaxed ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                                "{vibe === 'brainrot'
                                    ? 'YOU DO NOT NEED A BETTER NOTE-TAKING APP. YOU NEED A MANAGERIAL STACK THAT NOTICES WHEN NOTHING IMPORTANT HAS MOVED.'
                                    : 'BossBot is built around a simple truth: a lot of talented people do not need more inspiration. They need a management layer that notices drift before a week disappears.'}"
                            </p>
                        </section>
                    </div>

                    <div className="space-y-16">
                        <div className={`relative glass-panel celestial-border aspect-video group overflow-hidden flex items-center justify-center p-12 glow-violet transition-all ${vibe === 'brainrot' ? 'border-violet bg-violet/20 animate-vibrate' : 'bg-slate/20'}`}>
                            <div className={`absolute inset-0 bg-gradient-to-br from-violet/5 to-transparent opacity-50 ${vibe === 'brainrot' ? 'from-violet/20 animate-pulse' : ''}`} />
                            <div className={`absolute inset-0 h-[1px] top-0 animate-scan pointer-events-none ${vibe === 'brainrot' ? 'bg-white shadow-[0_0_20px_white]' : 'bg-violet/20'}`} />
                            <div className="text-center space-y-6 relative z-10">
                                <LayoutDashboard size={48} strokeWidth={1} className={`mx-auto transition-all ${vibe === 'brainrot' ? 'text-violet-neon animate-bounce scale-150' : 'text-violet opacity-40'}`} />
                                <div className={`font-serif italic text-3xl tracking-widest uppercase transition-all ${vibe === 'brainrot' ? 'text-white font-black animate-pulse scale-110' : 'text-violet/30'}`}>
                                    {vibe === 'brainrot' ? 'QUEUE LORD' : 'Daily Pressure Surface'}
                                </div>
                                <div className={`text-[10px] font-sans tracking-[0.3em] border px-4 py-2 uppercase transition-all ${vibe === 'brainrot' ? 'text-white border-white font-black animate-vibrate bg-violet-neon' : 'text-violet/60 border-violet/20'}`}>
                                    {vibe === 'brainrot' ? 'SHIP_LOG::REQUIRED' : 'Today :: Queue :: Review'}
                                </div>
                            </div>
                        </div>

                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <ChevronRight className={vibe === 'brainrot' ? 'text-violet-neon animate-vibrate' : 'text-violet'} size={32} strokeWidth={1} />
                                <h2 className={`text-5xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black text-6xl uppercase' : 'text-ethereal font-serif'}`}>
                                    {vibe === 'brainrot' ? 'IN FLIGHT' : 'Current Trajectory'}
                                </h2>
                            </div>
                            <div className="space-y-1">
                                {milestones.map((milestone) => (
                                    <div key={milestone.title} className={`group p-8 border-b border-ethereal/5 hover:bg-violet/5 transition-all space-y-3 ${vibe === 'brainrot' ? 'bg-violet/10 border-violet/20' : ''}`}>
                                        <div className="flex items-center gap-4">
                                            <ChevronRight size={14} className={vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet/40 group-hover:text-violet transition-colors'} />
                                            <span className={`text-[11px] font-sans tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-ethereal/80'}`}>{milestone.title}</span>
                                        </div>
                                        <p className={`text-base italic pl-8 leading-relaxed ${vibe === 'brainrot' ? 'text-ethereal font-black uppercase' : 'text-ethereal/50 font-serif'}`}>
                                            {milestone.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>

                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className={`p-16 glass-panel celestial-border text-center space-y-12 transition-all ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/40 scale-105 shadow-[0_0_150px_rgba(139,92,246,0.6)]' : 'bg-slate/20'}`}
                >
                    <h3 className={`text-4xl italic tracking-wide uppercase ${vibe === 'brainrot' ? 'text-white font-black text-6xl drop-shadow-xl animate-vibrate' : 'text-ethereal font-serif'}`}>
                        {vibe === 'brainrot' ? 'BUILD THE BOSS' : 'Public Accountability'}
                    </h3>
                    <p className={vibe === 'brainrot' ? 'text-ethereal font-black uppercase max-w-3xl mx-auto' : 'text-ethereal/70 max-w-3xl mx-auto leading-relaxed'}>
                        BossBot is being built in public because the core problem is not abstract productivity. It is the real managerial overhead faced by people who are trying to freelance, ship, apply, and build evidence at the same time.
                    </p>
                    <div className="flex justify-center flex-col items-center gap-8">
                        <a
                            href="https://github.com/Bradsadevnow/the_bottom_floor_of_an_ikea_where_they_build_stuff_or_pick_up_parts"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-12 py-5 border text-xs group transition-all flex items-center justify-center gap-4 tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'bg-white text-violet-neon border-white font-black scale-110 shadow-2xl' : 'border-violet/40 text-violet font-sans hover:bg-violet hover:text-void'}`}
                        >
                            <Github size={16} strokeWidth={1.5} />
                            {vibe === 'brainrot' ? 'OPEN_THE_VAULT' : 'View the Build Context'}
                        </a>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
