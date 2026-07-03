import { Palette } from 'lucide-react';
import { Section } from './ui/Section';

export const Mission = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <Section id="mission" className={`transition-all duration-500 ${vibe === 'brainrot' ? 'bg-violet/10' : ''}`}>
            <div className="max-w-3xl mx-auto space-y-20">
                {/* Mission statement */}
                <div className="text-center space-y-6">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-rainbow' : 'text-violet'}`}>
                        What We're Trying To Do
                    </h2>
                    <p className="text-3xl md:text-4xl font-serif text-ethereal leading-snug">
                        Help people and organizations do more of what actually matters —
                        with AI supporting the work, not replacing it.
                    </p>
                    <div className="pt-4 space-y-2 font-mono text-sm text-ethereal/50">
                        <p>Not by replacing people.</p>
                        <p>Not by selling you magic beans.</p>
                        <p className="text-ethereal/80">By building systems that hand the busywork to the machine and the judgment back to the human.</p>
                    </div>
                </div>

                {/* Why humans stay in the room */}
                <div className="lisa-frank-bg p-[2px] rounded-lg">
                    <div className="bg-void rounded-lg p-8 space-y-6">
                        <h3 className="flex items-center gap-3 text-sm font-bold tracking-[0.3em] uppercase text-violet">
                            <Palette size={18} />
                            Why Humans Stay In The Room
                        </h3>
                        <p className="text-2xl md:text-3xl font-serif text-white leading-snug">
                            AI can draft, summarize, calculate, and generate all day long.
                        </p>
                        <p className="text-xl text-ethereal/70 leading-relaxed">
                            It cannot originate a genuinely new idea. It cannot weigh one value against another.
                            It cannot know when the clever answer is the wrong one.
                        </p>
                        <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet via-pink-400 to-ethereal">
                            Creativity. Judgment. Critical thinking.
                        </p>
                        <p className="text-lg text-ethereal/70 leading-relaxed">
                            Those aren't decoration on top of the work — they <em className="text-white not-italic font-semibold">are</em> the
                            work. Everything we build is designed to protect that, not automate around it. 🎨
                        </p>
                    </div>
                </div>

                {/* Core belief */}
                <div className={`p-8 space-y-6 border-l-4 ${vibe === 'brainrot' ? 'lisa-frank-bg border-white' : 'bg-violet/5 border-violet'}`}>
                    <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-violet">What We Believe</h3>
                    <p className="text-2xl font-serif text-white">
                        Technology should grow what people are capable of.<br />Not shrink it.
                    </p>
                    <div className="pt-4 space-y-3 text-ethereal/70">
                        <p>We're not trying to get to:</p>
                        <p className="font-mono italic text-ethereal/40">"Look what AI can do."</p>
                        <p>We're trying to get to:</p>
                        <p className="font-mono italic text-violet">
                            "Look what these people can do now that AI took the unnecessary work off their plate."
                        </p>
                    </div>
                </div>

                {/* What this actually is */}
                <div className="space-y-6">
                    <h3 className="text-sm font-bold tracking-[0.3em] uppercase text-violet">What This Actually Is, Today</h3>
                    <p className="text-xl text-ethereal/80 leading-relaxed">
                        Right now, this is a consultancy. An integration partner. An architecture partner.
                        <br />
                        <span className="text-ethereal/40">Not a SaaS company. Not a model company.</span>
                    </p>
                    <div className="glass-panel celestial-border p-6 space-y-3 font-mono text-sm">
                        <p><span className="text-ethereal/40">You come to us with a problem.</span></p>
                        <p><span className="text-violet">We start by asking: should AI even be involved here?</span></p>
                        <p className="text-ethereal/60 pt-2">
                            Sometimes yes. Sometimes no. Being honest about that is most of the value.
                        </p>
                    </div>
                </div>
            </div>
        </Section>
    );
};
