import { Section } from './ui/Section';
import { ShieldCheck, Eye, Binary, Heart, Globe } from 'lucide-react';

export const EthicalAI = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    const builds = [
        {
            name: "T-Scan",
            subtitle: vibe === 'brainrot' ? "NEURON_MOGGING" : "Mech Interp Suite",
            icon: Eye,
            description: vibe === 'brainrot'
                ? "REAL-TIME MRI IN THE MODEL'S BRAIN. ABLATING DECEPTION SUB SPACES TO DETECT LIES NO CAP. 👺"
                : "A mechanistic interpretability toolkit for probing layer-by-layer activations and identifying causally real truth subspaces in LLMs.",
        },
        {
            name: "Bob",
            subtitle: vibe === 'brainrot' ? "ZERO_HALLUCINATION_MOG" : "MTG AI Opponent",
            icon: Binary,
            description: vibe === 'brainrot'
                ? "RULE ENGINE GENERATES THE LEGAL MOVES, LLM CHOOSE THE BEST ONE. HALLUCINATIONS SHUT DOWN. 🦄"
                : "An AI system constrained by a deterministic rules engine stack (~4,400 lines) rendering illegal moves or hallucinated actions structurally impossible.",
        },
        {
            name: "Iris",
            subtitle: vibe === 'brainrot' ? "EMOTION_MAXING" : "Continuous Emotive Runtime",
            icon: Heart,
            description: vibe === 'brainrot'
                ? "IRIS HAS AN EMOTIVE CORE WITH 28 SLIDERS. RAG AND MEMORY COMPRESSION KEEP IT REAL. 💅"
                : "A continuous agentic runtime experimenting with long-term memory compression and slow-shifting emotive states governed by inertial clamping equations.",
        },
        {
            name: "Unicorn Warehouse Media",
            subtitle: vibe === 'brainrot' ? "NO_ALGO_DEPENDENCY" : "Federated Media Stack",
            icon: Globe,
            description: vibe === 'brainrot'
                ? "WE SPUN UP GHOST FOR THE BLOG, DISCOURSE FOR THE FORUM, DOCKER CONTAINERS RUNNING IT ALL. 💅"
                : "A decoupled, self-hosted newsletter and community architecture designed to secure audience ownership without relying on third-party algorithms.",
        }
    ];

    return (
        <Section id="ethical-ai" className="relative">
            {/* Background decorative glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 blur-[100px] transition-opacity ${vibe === 'brainrot' ? 'opacity-20 intense-glitter' : 'bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)] opacity-5'}`} />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left Column: Heading & Core Statement */}
                <div className="lg:col-span-5 space-y-8">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-3 transition-colors ${vibe === 'brainrot' ? 'text-white animate-bounce' : 'text-sky-400'}`}>
                        <ShieldCheck size={18} />
                        {vibe === 'brainrot' ? "SAFE_AND_ETHICAL_MAXING" : "Ethical AI"}
                    </h2>

                    <p className={`text-4xl md:text-5xl font-black tracking-tighter leading-tight transition-all ${vibe === 'brainrot' ? 'text-rainbow scale-105 drop-shadow-[0_0_30px_rgba(56,189,248,0.6)]' : 'text-white font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "GOVERNANCE OR GET WRECKED. 🦄"
                            : "Audited safety, not blind faith."
                        }
                    </p>

                    <p className={`text-lg leading-relaxed font-light transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/70'}`}>
                        {vibe === 'brainrot'
                            ? "WE DO NOT LET THE ROBOTS COOK UNATTENDED. 👺 STRICT GOVERNANCE, AUDITED DEPLOYS, AND ZERO HALLUCINATION TOLERANCE. SAFETY IS THE ULTIMATE FLEX. ✨"
                            : "We believe that AI must be safe, ethical, and strictly governed. Rather than deploying black-box algorithms with unchecked autonomy, we build validation engines, deterministic rules engines, and interpretability tooling to ensure human agency remains absolute."
                        }
                    </p>
                </div>

                {/* Right Column: Research Builds (Static List, No Links) */}
                <div className="lg:col-span-7 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {builds.map((build, i) => {
                            const Icon = build.icon;
                            return (
                                <div
                                    key={i}
                                    className={`group p-6 border transition-all duration-500 relative overflow-hidden ${vibe === 'brainrot' ? 'border-white lisa-frank-bg shadow-xl scale-105 animate-pulse' : 'border-sky-500/10 hover:border-sky-400/40 bg-void/50 backdrop-blur-sm'}`}
                                >
                                    {/* Subtle gradient effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-sky-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 space-y-4">
                                        <div className={`w-10 h-10 flex items-center justify-center border transition-colors duration-300 ${vibe === 'brainrot' ? 'bg-white/20 border-white text-white' : 'bg-sky-400/5 border-sky-400/20 text-sky-400 group-hover:border-sky-400/40 group-hover:bg-sky-400/10'}`}>
                                            <Icon size={18} />
                                        </div>

                                        <div className="space-y-1">
                                            <span className={`block text-[10px] font-bold font-mono tracking-widest transition-colors ${vibe === 'brainrot' ? 'text-white' : 'text-sky-400'}`}>
                                                {build.subtitle.toUpperCase()}
                                            </span>
                                            <h3 className={`text-lg font-bold transition-colors ${vibe === 'brainrot' ? 'text-white font-black italic' : 'text-white'}`}>
                                                {build.name}
                                            </h3>
                                        </div>

                                        <p className={`text-xs leading-relaxed transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/50'}`}>
                                            {build.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
};
