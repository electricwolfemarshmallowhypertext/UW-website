import { Section } from './ui/Section';

export const Philosophy = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <Section id="philosophy" className={`transition-all duration-500 ${vibe === 'brainrot' ? 'bg-violet/20' : ''}`}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Column: Heading & Core Statement */}
                <div className="lg:col-span-5 space-y-8">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-3 transition-colors ${vibe === 'brainrot' ? 'text-white animate-bounce' : 'text-violet'}`}>
                        <div className={`w-8 h-[2px] ${vibe === 'brainrot' ? 'bg-white' : 'bg-violet'}`} />
                        {vibe === 'brainrot' ? "THE_MANIFESTO" : "The Problem"}
                    </h2>

                    <p className={`text-3xl md:text-4xl font-bold leading-tight transition-all ${vibe === 'brainrot' ? 'text-rainbow uppercase scale-105 drop-shadow-lg' : 'text-white'}`}>
                        {vibe === 'brainrot'
                            ? "MOST AI JUST VIBES ITS WAY TO AN ANSWER. 💀"
                            : "Confidence is not the same as truth."
                        }
                    </p>

                    <p className={`text-lg leading-relaxed font-light transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase underline decoration-wavy' : 'text-ethereal/60'}`}>
                        {vibe === 'brainrot'
                            ? "IF IT CAN'T CITE IT, IT SHOULDN'T SAY IT. ZERO CAP TOLERANCE. 🦄"
                            : "Most AI systems return hallucinated certainty instead of admitting what they don't know. Evidence beats intuition. Architecture beats cleverness."
                        }
                    </p>

                    <div className={`p-6 transition-all duration-500 border-l-4 ${vibe === 'brainrot' ? 'lisa-frank-bg border-white shadow-xl animate-vibrate' : 'bg-violet/5 border-violet'}`}>
                        <p className={`text-xl font-mono italic transition-colors ${vibe === 'brainrot' ? 'text-white drop-shadow-md font-black uppercase' : 'text-violet'}`}>
                            {vibe === 'brainrot'
                                ? '"MANIFEST A CITED PROPOSAL OR MANIFEST A USEFUL FAILURE." 🦄✨'
                                : '"Return either a cited proposal or a useful failure — never hallucinated certainty."'
                            }
                        </p>
                    </div>
                </div>

                {/* Right Column: Operating Principles */}
                <div className="lg:col-span-7 space-y-12">
                    <div className="space-y-6">
                        <div className={`flex items-baseline justify-between border-b pb-4 transition-colors ${vibe === 'brainrot' ? 'border-white' : 'border-ethereal/10'}`}>
                            <h3 className={`text-xl font-mono transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase animate-pulse' : 'text-white'}`}>
                                {vibe === 'brainrot' ? "THE_VIBE_CHECK" : "The Hypothesis"}
                            </h3>
                            <span className={`text-xs font-bold tracking-widest transition-colors ${vibe === 'brainrot' ? 'text-white' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? "UNICORN-001" : "REQ-001"}
                            </span>
                        </div>
                        <p className={`text-2xl font-light transition-all ${vibe === 'brainrot' ? 'text-white font-black uppercase animate-glitch' : 'text-ethereal/60'}`}>
                            {vibe === 'brainrot'
                                ? "HOW DO WE KEEP HUMANS IN CHARGE WHILE THE ROBOTS DO THE GLITTER WORK? 🦄"
                                : "What has to be true structurally so AI amplifies human judgment instead of replacing it?"
                            }
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { id: "01", text: vibe === 'brainrot' ? "NO VIBES-BASED DEPLOYS. 🦄" : "Evidence beats intuition." },
                            { id: "02", text: vibe === 'brainrot' ? "NO HYPOTHETICAL FLEXING. ✨" : "Small validated steps over giant leaps." },
                            { id: "03", text: vibe === 'brainrot' ? "HUMANS KEEP THE KEYS. 🔑" : "Human judgment owns governance." },
                            { id: "04", text: vibe === 'brainrot' ? "ARCHITECTURE OVER CLOUT. 💅" : "Architecture beats cleverness." }
                        ].map((item) => (
                            <div key={item.id} className={`group p-4 border transition-all duration-300 ${vibe === 'brainrot' ? 'lisa-frank-bg border-white shadow-lg animate-pulse' : 'border-ethereal/10 hover:border-violet/50 bg-void/50'}`}>
                                <span className={`block text-xs font-bold mb-2 font-mono transition-colors ${vibe === 'brainrot' ? 'text-white drop-shadow-sm' : 'text-violet group-hover:text-ethereal'}`}>
                                    {vibe === 'brainrot' ? "HORN_" : "AXIOM_"}{item.id}
                                </span>
                                <span className={`text-sm transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60'}`}> {item.text} </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};
