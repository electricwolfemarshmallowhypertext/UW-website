import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function BossBotSpotlight({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) {
    const bullets = vibe === 'brainrot'
        ? [
            'DO THE WORK AND MANAGE THE WORK WITHOUT TWEAKING.',
            'ONE QUEUE. ONE BOSS. RECEIPTS FOR EVERYTHING.',
            'HUE BOSS MODE PENDING. DRIFT GETS EXPOSED.',
        ]
        : [
            'A local-first managerial layer for freelance work, applications, and shipped artifacts.',
            'Deterministic queue pressure, append-only accountability, and bounded AI assistance.',
            'Built in public because the management overhead is the real product problem.',
        ];

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`py-24 px-8 border-b transition-colors ${vibe === 'brainrot' ? 'border-violet-neon/40 bg-violet/10' : 'border-violet/10'}`}
        >
            <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-stretch">
                <div className={`glass-panel p-10 border relative overflow-hidden ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/25 shadow-[0_0_40px_rgba(255,0,247,0.25)]' : 'border-violet/20 bg-slate/20'}`}>
                    <div className={`absolute inset-0 transition-opacity ${vibe === 'brainrot' ? 'lisa-frank-bg opacity-10' : 'bg-gradient-to-br from-violet/10 to-transparent opacity-60'}`} />
                    <div className="relative z-10 space-y-8">
                        <div className="flex items-center gap-3">
                            <Briefcase className={vibe === 'brainrot' ? 'text-white' : 'text-violet'} size={18} strokeWidth={1.5} />
                            <span className={`font-mono text-[10px] tracking-[0.45em] uppercase ${vibe === 'brainrot' ? 'text-white font-black' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? 'MIDDLE_MANAGEMENT::LIVE' : 'Now Building :: BossBot'}
                            </span>
                        </div>

                        <div className="space-y-4">
                            <h2 className={`text-5xl md:text-7xl italic leading-[0.92] ${vibe === 'brainrot' ? 'text-rainbow font-black' : 'text-ethereal font-serif'}`}>
                                {vibe === 'brainrot' ? 'BUILD THE BOSS' : 'The Managerial Layer'}
                                <br />
                                <span className={vibe === 'brainrot' ? 'text-white' : 'text-violet'}>
                                    {vibe === 'brainrot' ? 'OR KEEP SPIRALING' : 'I Wish Existed'}
                                </span>
                            </h2>
                            <p className={`max-w-2xl text-lg leading-relaxed ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/70 font-serif italic'}`}>
                                {vibe === 'brainrot'
                                    ? 'YOU CAN BE TALENTED AND STILL GET MOGGED BY CONTEXT SWITCHING. BOSSBOT EXISTS TO HANDLE THE MANAGERIAL TAX.'
                                    : 'BossBot is a local-first career dashboard and operations runtime for people who have to do the work and manage the work at the same time.'}
                            </p>
                        </div>

                        <div className="space-y-3">
                            {bullets.map((bullet) => (
                                <div key={bullet} className="flex items-start gap-3">
                                    <ShieldCheck className={vibe === 'brainrot' ? 'text-white mt-1' : 'text-violet/70 mt-1'} size={15} strokeWidth={1.5} />
                                    <p className={vibe === 'brainrot' ? 'text-white font-black uppercase text-sm' : 'text-ethereal/65 text-sm'}>{bullet}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link
                                to="/projects/bossbot"
                                className={`inline-flex items-center gap-3 px-5 py-3 border text-[11px] tracking-[0.25em] uppercase transition-all ${vibe === 'brainrot' ? 'border-white text-white hover:bg-white hover:text-void font-black' : 'border-violet/30 text-violet/80 hover:border-violet hover:text-violet'}`}
                            >
                                View Project
                                <ArrowRight size={14} strokeWidth={1.5} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={`glass-panel p-8 border ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/20' : 'border-violet/20 bg-void/50'}`}>
                    <div className="space-y-6 h-full flex flex-col justify-between">
                        <div className="space-y-4">
                            <div className={`font-mono text-[10px] tracking-[0.4em] uppercase ${vibe === 'brainrot' ? 'text-white font-black' : 'text-violet/70'}`}>
                                {vibe === 'brainrot' ? 'WHY_IT_HITS' : 'Why It Matters'}
                            </div>
                            <p className={vibe === 'brainrot' ? 'text-white font-black uppercase text-lg leading-relaxed' : 'text-ethereal/75 leading-relaxed'}>
                                {vibe === 'brainrot'
                                    ? 'FREELANCERS ARE THE CEO, PM, IC, SALES TEAM, AND THERAPIST. OF COURSE THE STRUCTURE PROBLEM IS REAL.'
                                    : 'Most productivity tools track tasks. BossBot is about preserving commitments, surfacing pressure, and making the hidden management work visible before momentum collapses.'}
                            </p>
                        </div>
                        <div className={`pt-6 border-t ${vibe === 'brainrot' ? 'border-violet-neon/30' : 'border-violet/10'}`}>
                            <div className={`text-[10px] font-mono tracking-[0.35em] uppercase mb-3 ${vibe === 'brainrot' ? 'text-white' : 'text-violet/50'}`}>
                                Current Loop
                            </div>
                            <p className={vibe === 'brainrot' ? 'text-white font-black uppercase text-sm' : 'text-ethereal/60 text-sm leading-relaxed'}>
                                Today queue. One real business move. One shipped thing. End-of-day closure. Repeat until circumstances improve.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
