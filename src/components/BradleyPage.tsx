import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Linkedin, Twitter, Facebook } from 'lucide-react';

export const BradleyPage = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <main className="min-h-screen pt-28 pb-20 px-6 relative overflow-hidden">
            {/* Soft background lights */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
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
                            x: [0, Math.random() * 40 - 20, 0],
                            y: [0, Math.random() * 40 - 20, 0],
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
                transition={{ duration: 1.0, ease: 'easeOut' }}
                className="max-w-4xl mx-auto relative z-10"
            >
                {/* Back Link */}
                <div className="flex justify-start mb-10">
                    <Link
                        to="/"
                        className={`inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 ${
                            vibe === 'brainrot' ? 'text-white/60 hover:text-white hover:underline' : 'text-ethereal/40 hover:text-violet'
                        }`}
                    >
                        <ArrowLeft size={12} />
                        {vibe === 'brainrot' ? "RETURN_TO_BASE" : "Return to Home"}
                    </Link>
                </div>

                {/* Editorial Layout */}
                <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 p-8 md:p-12 border transition-all duration-500 rounded-xl ${
                    vibe === 'brainrot' 
                        ? 'border-violet-neon bg-violet/40 shadow-[0_0_50px_rgba(139,92,246,0.3)] animate-vibrate-slow' 
                        : 'border-violet/10 bg-void/80 backdrop-blur-lg'
                }`}>
                    {vibe === 'brainrot' && (
                        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                            <div className="absolute top-10 right-10 text-violet-neon/10 rotate-12 animate-pulse text-6xl font-black">7000 HOURS STUDYING THE GYATT</div>
                            <div className="absolute bottom-10 left-10 text-violet-neon/10 -rotate-12 animate-bounce text-6xl font-black">AI RIZZLER</div>
                        </div>
                    )}

                    {/* Left Sticky Sidebar */}
                    <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-6 md:sticky md:top-28 h-fit z-10">
                        <div className="relative inline-block">
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-[-4px] rounded-full bg-gradient-to-tr from-violet/30 via-pink-500/10 to-violet/30 blur-sm z-0"
                            />
                            <img
                                src="/img/bradley.png"
                                alt="Bradley Ren Bates"
                                className="w-44 h-44 rounded-full border border-violet/20 shadow-2xl relative z-10 object-cover aspect-square select-none pointer-events-none"
                            />
                        </div>

                        <div className="space-y-2">
                            <h1 className={`font-serif text-3xl font-bold tracking-tight text-white ${vibe === 'brainrot' ? 'animate-bounce text-rainbow' : ''}`}>
                                {vibe === 'brainrot' ? "BRAD" : "Meet Brad"}
                            </h1>
                            <p className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? "CHIEF UNICORN & OPERATOR 🦄" : "Founder, Unicorn Warehouse"}
                            </p>
                        </div>

                        {/* Social Buttons */}
                        <div className="pt-6 border-t border-violet/10 w-full flex justify-center md:justify-start flex-wrap gap-4">
                            {[
                                { href: "mailto:bradleybates1@gmail.com", icon: Mail, text: vibe === 'brainrot' ? "MAIL_HORN" : "Contact" },
                                { href: "https://www.linkedin.com/in/bradley-bates-792871387/", icon: Linkedin, text: vibe === 'brainrot' ? "LINKEDIN" : "LinkedIn" },
                                { href: "https://x.com/recursive_smart", icon: Twitter, text: vibe === 'brainrot' ? "TWITTER" : "X" },
                                { href: "https://www.facebook.com/profile.php?id=61575558568159", icon: Facebook, text: vibe === 'brainrot' ? "FACEBOOK" : "Facebook" }
                            ].map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex items-center gap-2 text-[10px] font-bold font-mono transition-all uppercase tracking-wider py-1 px-3 border border-violet/10 bg-violet/5 hover:bg-violet/10 hover:border-violet/30 rounded ${
                                        vibe === 'brainrot' 
                                            ? 'text-white border-white scale-110 hover:animate-pulse' 
                                            : 'text-ethereal/70 hover:text-violet'
                                    }`}
                                >
                                    <link.icon size={11} />
                                    {link.text}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Narrative Body */}
                    <div className="md:col-span-8 space-y-6 text-ethereal/85 leading-relaxed font-light text-base md:text-lg z-10">
                        {vibe === 'brainrot' ? (
                            <>
                                <h2 className="text-2xl font-black text-white uppercase tracking-wider">
                                    Yo, I'm Brad.
                                </h2>
                                <p className="font-black text-white/90">
                                    If there's a theme to my life, it's that I keep wandering into complicated lobby rooms and asking, "How do we min-max this lobby?"
                                </p>
                                <p>
                                    That's how Unicorn Warehouse came to be built, no cap.
                                </p>
                                <p>
                                    Over roughly 14 months, I devoted more than 7,000 hours of pure sweat to studying AI, agent pipelines, governance codes, structural optimization, and how biological and digital systems can co-exist without bricking the lobby. What started as micro-dosing interest became a whole hyper-fixation obsession.
                                </p>
                                <p>
                                    Along the way, I realized I wasn't trying to build bots that replace human players. I wanted to build systems that boost human rizz, let people learn at 10x speed, create boldly, and solve queries they couldn't solo.
                                </p>
                                <p className="font-serif italic text-violet text-xl border-l-2 border-violet-neon pl-4 py-2">
                                    "How can technology expand human agency without replacing human judgment, creativity, or compassion?"
                                </p>
                                <p>
                                    Before this chapter, I worked in real steam-system Navy rooms where mistakes meant actual game over. That taught me to respect legible state variables, verifiable logs, and clear accountability loops.
                                </p>
                                <p>
                                    I believe AI is one of the most cracked tools humanity has ever rolled. I also believe there is no substitute for human creative artistry, kindness, and soul.
                                </p>
                                <p>
                                    Welcome to the Warehouse. Go nuts.
                                </p>
                            </>
                        ) : (
                            <>
                                <h2 className="text-xl md:text-2xl font-serif text-white font-semibold">
                                    Hi, I'm Brad.
                                </h2>
                                <p>
                                    If there's a theme to my life, it's that I keep wandering into complicated systems and asking, <span className="font-serif italic text-violet">"There has to be a better way to do this."</span>
                                </p>
                                <p>
                                    That's how Unicorn Warehouse came to exist.
                                </p>
                                <p>
                                    Over roughly fourteen months, I devoted more than <strong className="text-white font-medium">7,000 hours</strong> to studying artificial intelligence, agent systems, governance, software architecture, scientific research workflows, and how humans and AI can work together responsibly. What started as curiosity became an obsession, and eventually a mission.
                                </p>
                                <p>
                                    Along the way, I realized I wasn't interested in building AI that replaces people. I wanted to build AI that helps people think more clearly, learn faster, create more boldly, and solve problems they couldn't solve alone.
                                </p>
                                <p>
                                    That idea became Unicorn Warehouse.
                                </p>
                                <p>
                                    Today it's an ethical AI lab and creative studio where I build research systems, AI workflows, educational tools, software, games, and the occasional wonderfully strange experiment. On the surface those projects look completely different, but underneath they're all trying to answer the same question:
                                </p>
                                <div className="border-l border-violet/30 pl-6 py-2 my-8">
                                    <p className="font-serif italic text-violet text-xl md:text-2xl leading-relaxed text-white">
                                        "How can technology expand human agency without replacing human judgment, creativity, or compassion?"
                                    </p>
                                </div>
                                <p>
                                    Before this chapter of my life, I worked in environments where mistakes carried real consequences. Those experiences taught me to value systems that are understandable, evidence that can be verified, and responsibility that always has a clear owner. Those principles now shape everything I build—from evidence-governed research platforms to educational content and satirical games.
                                </p>
                                <p>
                                    I believe AI is one of the most powerful tools humanity has ever created. I also believe there is no substitute for human creativity, kindness, wisdom, and accountability. Those aren't bugs to optimize away—they're the reason any of this matters.
                                </p>
                                <p className="font-serif italic text-white/95">
                                    If you've found your way here, welcome to the Warehouse.
                                </p>
                                <p>
                                    I hope you leave having learned something, built something, smiled at something ridiculous, or simply feeling a little more hopeful about what people and AI can accomplish together.
                                </p>
                            </>
                        )}
                    </div>
                </div>
            </motion.div>
        </main>
    );
};
