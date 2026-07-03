import { Sparkles } from 'lucide-react';
import { Section } from './ui/Section';

const PRINCIPLES = [
    { id: "01", title: "Build Around Work", text: "Don't install AI. Improve work." },
    { id: "02", title: "Workflow First", text: "Models are replaceable. Workflows endure." },
    { id: "03", title: "Evidence First", text: "Evidence before conclusions — whether business or science." },
    { id: "04", title: "Human Approval", text: "AI proposes. Humans decide. Humans own consequences." },
    { id: "05", title: "Small Wins Compound", text: "Save someone an hour. Then another. Then another." },
    { id: "06", title: "Transfer Capability", text: "Never create dependence. Leave the client stronger." },
];

export const Philosophy = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <Section id="philosophy" className={`transition-all duration-500 ${vibe === 'brainrot' ? 'bg-violet/20' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Philosophy statement */}
                <div className="lg:col-span-5 space-y-8">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-3 ${vibe === 'brainrot' ? 'text-rainbow' : 'text-violet'}`}>
                        <div className={`w-8 h-[2px] ${vibe === 'brainrot' ? 'bg-white' : 'bg-violet'}`} />
                        Philosophy
                    </h2>

                    <p className="text-3xl md:text-4xl font-bold leading-tight text-white">
                        Humans imagine and judge.<br />AI performs labor.
                    </p>

                    <p className="text-lg leading-relaxed font-light text-ethereal/60">
                        That one idea keeps reappearing in different forms across every system we've built —
                        creativity and critical thinking are the part we design around, never the part we automate.
                    </p>

                    <div className={`p-6 border-l-4 ${vibe === 'brainrot' ? 'lisa-frank-bg border-white shadow-xl' : 'bg-violet/5 border-violet'}`}>
                        <p className="text-xl font-mono italic text-violet">
                            "It's not really a tagline. It's just how we decide what to build, and what to leave alone."
                        </p>
                    </div>
                </div>

                {/* Right Column: Design Principles */}
                <div className="lg:col-span-7 space-y-8">
                    <div className={`flex items-baseline justify-between border-b pb-4 ${vibe === 'brainrot' ? 'border-white' : 'border-ethereal/10'}`}>
                        <h3 className="text-xl font-mono text-white">Design Principles</h3>
                        <span className="text-xs font-bold tracking-widest text-violet">6 RULES</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {PRINCIPLES.map((item) => (
                            <div key={item.id} className={`group p-4 border transition-all duration-300 ${vibe === 'brainrot' ? 'lisa-frank-bg border-white shadow-lg' : 'border-ethereal/10 hover:border-violet/50 bg-void/50'}`}>
                                <span className={`block text-xs font-bold mb-2 font-mono ${vibe === 'brainrot' ? 'text-white drop-shadow-sm' : 'text-violet group-hover:text-ethereal'}`}>
                                    PRINCIPLE_{item.id} — {item.title}
                                </span>
                                <span className="text-sm text-ethereal/60">{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fun aside: the game */}
            <div className={`mt-16 glass-panel celestial-border p-8 flex flex-col md:flex-row items-center gap-6 justify-between ${vibe === 'brainrot' ? 'border-violet-neon' : ''}`}>
                <div className="flex items-center gap-4">
                    <Sparkles className="text-violet flex-shrink-0" size={28} />
                    <p className="text-ethereal/70 leading-relaxed">
                        We also just make things because they're fun. There's a whole gacha-slots-battlepass economy
                        simulator sitting on this site for no serious reason at all.
                    </p>
                </div>
                <a
                    href="/slot.html"
                    className="flex-shrink-0 px-6 py-3 border border-violet/40 text-violet font-mono text-xs tracking-[0.2em] uppercase hover:bg-violet hover:text-void transition-all whitespace-nowrap"
                >
                    Play the game →
                </a>
            </div>
        </Section>
    );
};
