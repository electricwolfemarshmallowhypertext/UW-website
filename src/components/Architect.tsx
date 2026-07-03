import { Terminal, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { Section } from './ui/Section';

interface ArchitectProps {
    vibe: 'tech' | 'normal' | 'brainrot';
}

export const Architect = ({ vibe }: ArchitectProps) => {
    return (
        <Section id="architect">
            <div className={`border transition-all duration-500 rounded-xl overflow-hidden relative ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/40 shadow-[0_0_50px_rgba(139,92,246,0.5)] animate-vibrate-slow' : 'border-violet/20 bg-void/90 backdrop-blur-lg'}`}>
                {vibe === 'brainrot' && (
                    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                        <div className="absolute top-10 right-10 text-violet-neon/20 rotate-12 animate-pulse text-6xl font-black">MOGGED</div>
                        <div className="absolute bottom-10 left-10 text-violet-neon/20 -rotate-12 animate-bounce text-6xl font-black">RIZZ</div>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 relative z-10">
                    {/* Image Column — placeholder avatar until a real photo/asset exists */}
                    <div className={`md:col-span-4 relative h-96 md:h-auto overflow-hidden flex items-center justify-center ${vibe === 'brainrot' ? 'lisa-frank-bg' : 'bg-gradient-to-br from-violet/40 to-slate'}`}>
                        <span className={`font-serif font-black transition-all duration-700 ${vibe === 'brainrot' ? 'text-8xl text-white drop-shadow-xl animate-pulse' : 'text-8xl text-ethereal/70'}`}>
                            BB
                        </span>
                        <div className={`absolute inset-0 bg-gradient-to-t from-void to-transparent transition-opacity ${vibe === 'brainrot' ? 'opacity-40' : 'opacity-80'}`} />
                        <div className="absolute bottom-6 left-6">
                            <h4 className={`font-bold text-xl transition-all ${vibe === 'brainrot' ? 'text-white scale-125 drop-shadow-xl animate-bounce' : 'text-white'}`}>
                                {vibe === 'brainrot' ? "UNICORN BRAD" : "Bradley Ren Bates"}
                            </h4>
                            <p className={`font-mono text-xs transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? "CHIEF UNICORN 🦄" : "Founder, Unicorn Warehouse"}
                            </p>
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:col-span-8 p-8 md:p-12 flex flex-col justify-between">
                        <div className="space-y-6">
                            <div className="flex items-center gap-2 mb-8">
                                <Terminal size={16} className={vibe === 'brainrot' ? 'text-white animate-pulse' : 'text-violet'} />
                                <span className={`text-xs font-mono uppercase tracking-widest transition-colors ${vibe === 'brainrot' ? 'text-white font-black' : 'text-ethereal/50'}`}>
                                    {vibe === 'brainrot' ? "UNICORN_LOGS::FERAL" : "Operator Profile"}
                                </span>
                            </div>

                            <p className={`text-xl leading-relaxed transition-all ${vibe === 'brainrot' ? 'text-white font-black uppercase text-2xl animate-glitch' : 'text-ethereal font-light'}`}>
                                {vibe === 'brainrot'
                                    ? '"I BUILD SYSTEMS WHERE THE GLITTER IS ABSOLUTE AND THE STATE IS LEGIBLE." 🦄'
                                    : '"I build systems where authority is explicit and state is legible."'
                                }
                            </p>

                            <p className={`text-sm leading-relaxed max-w-lg transition-all ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60'}`}>
                                {vibe === 'brainrot'
                                    ? "FORMER NAVY STEAM SYSTEMS UNICORN TURNED FOUNDER. NOW RUNNING A WAREHOUSE FULL OF THEM. INTEGRATOR, NOT AUTHORITY. NO CAP. 🦄✨"
                                    : "Former U.S. Navy steam systems supervisor turned systems architect. Now building Unicorn Warehouse — an ethical AI lab, creative studio, and applied incubator for people building meaningful things. Integrator, not authority."
                                }
                            </p>
                        </div>

                        <div className="pt-12 flex flex-wrap items-center gap-6">
                            {[
                                { href: "mailto:bradleybates1@gmail.com", icon: Mail, text: vibe === 'brainrot' ? "SEND_GLITTER" : "Contact" },
                                { href: "https://www.linkedin.com/in/bradley-bates-792871387/", icon: Linkedin, text: vibe === 'brainrot' ? "LINKEDIN_HORN" : "LinkedIn" },
                                { href: "https://x.com/recursive_smart", icon: Twitter, text: vibe === 'brainrot' ? "X_STAMPEDE" : "X" },
                                { href: "https://www.facebook.com/profile.php?id=61575558568159", icon: Facebook, text: vibe === 'brainrot' ? "FB_HERD" : "Facebook" }
                            ].map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 text-xs font-bold transition-all uppercase tracking-wider ${vibe === 'brainrot' ? 'text-white scale-110 hover:animate-bounce' : 'text-ethereal/60 hover:text-violet'}`}
                                >
                                    <link.icon size={14} />
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};
