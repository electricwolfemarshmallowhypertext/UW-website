import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Eye, Binary, Brain, BookOpen, ArrowLeft, Layers, Heart, Smartphone, Scroll, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'all' | 'interp' | 'determinism' | 'architecture' | 'theory';

export const EthicalAIPage = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    const [activeCategory, setActiveCategory] = useState<Category>('all');

    const categories = [
        { id: 'all', label: vibe === 'brainrot' ? "ALL_VIBES" : "All Projects" },
        { id: 'interp', label: vibe === 'brainrot' ? "BLACK_BOX_PEEKERS" : "Interpretability" },
        { id: 'determinism', label: vibe === 'brainrot' ? "ANTI_HALLUCINATION" : "Determinism" },
        { id: 'architecture', label: vibe === 'brainrot' ? "BRAIN_STRUCTURES" : "Architecture & Memory" },
        { id: 'theory', label: vibe === 'brainrot' ? "SACRED_TEXTS" : "Theory & Documentation" }
    ];

    const builds = [
        {
            name: "T-Scan",
            category: "interp",
            subtitle: vibe === 'brainrot' ? "NEURON_MOGGING" : "Mech Interp Suite",
            icon: Eye,
            description: vibe === 'brainrot'
                ? "REAL-TIME MRI IN THE MODEL'S BRAIN. ABLATING DECEPTION SUB SPACES TO DETECT LIES NO CAP. 👺"
                : "A mechanistic interpretability toolkit for probing layer-by-layer activations and identifying causally real truth subspaces in LLMs.",
        },
        {
            name: "T-Scan 2: T-Scan Harder",
            category: "interp",
            subtitle: vibe === 'brainrot' ? "BEHAVIORAL_SCANS" : "Scale Interpretability Run",
            icon: Layers,
            description: vibe === 'brainrot'
                ? "T-SCAN ON STEROIDS. 88+ EXPERIMENTAL PERSONA RUNS COMPARED TO SEE IF COGNITIVE DIVERGENCE IS PERSISTENT. 🕵️‍♂️"
                : "Large-scale mechanistic interpretability run evaluating 88+ runs across persona-prompted assistants to detect stable activation patterns.",
        },
        {
            name: "Bob",
            category: "determinism",
            subtitle: vibe === 'brainrot' ? "ZERO_HALLUCINATION_MOG" : "MTG AI Opponent",
            icon: Binary,
            description: vibe === 'brainrot'
                ? "RULE ENGINE GENERATES THE LEGAL MOVES, LLM CHOOSE THE BEST ONE. HALLUCINATIONS SHUT DOWN. 🦄"
                : "An AI agent constrained by a deterministic rules engine stack (~4,400 lines) rendering illegal moves or hallucinated actions structurally impossible.",
        },
        {
            name: "MTG Core",
            category: "determinism",
            subtitle: vibe === 'brainrot' ? "RIGID_GAME_LOGIC" : "Deterministic Rules Engine",
            icon: Scroll,
            description: vibe === 'brainrot'
                ? "4,400 LINES OF AUTHENTIC MAGIC GAME RULES. PRIORITIES, COMBAT, STACK RESOLUTIONS. ZERO LLM VIBING."
                : "An authoritative rules engine handling game loop mechanics, priority passes, stack resolutions, and 45+ card effects to compute player action spaces.",
        },
        {
            name: "RulesBot",
            category: "determinism",
            subtitle: vibe === 'brainrot' ? "MCP_COMP_RULES" : "MCP Rule Lookup Server",
            icon: Compass,
            description: vibe === 'brainrot'
                ? "MTG COMP RULES TURBO PARSED INTO HIERARCHICAL JSON. DIRECT LOOKUP TO AVOID VECTOR HALLUCINATIONS."
                : "An MCP server exposing comprehensive rule documents. Uses hierarchical JSON path lookups instead of vector search to guarantee precise, hallucination-free output.",
        },
        {
            name: "Iris",
            category: "architecture",
            subtitle: vibe === 'brainrot' ? "EMOTION_MAXING" : "Continuous Emotive Runtime",
            icon: Heart,
            description: vibe === 'brainrot'
                ? "IRIS HAS AN EMOTIVE CORE WITH 28 SLIDERS. RAG AND MEMORY COMPRESSION KEEP IT REAL. 💅"
                : "A continuous agentic runtime experimenting with long-term memory compression and slow-shifting emotive states governed by inertial clamping equations.",
        },
        {
            name: "Iris 2.0",
            category: "architecture",
            subtitle: vibe === 'brainrot' ? "COMPRESSION_EVO" : "Memory Compression Pipeline",
            icon: Brain,
            description: vibe === 'brainrot'
                ? "IRIS BUT COMPRESSED. CONVERSATIONS COMPACTED INTO DURABLE LTM TO PREVENT EPOCH ROT."
                : "An evolutionary step for Iris focusing on token-aware conversation compaction into durable vector LTM with append-only event replay ledgers.",
        },
        {
            name: "Steve (Bob 2)",
            category: "architecture",
            subtitle: vibe === 'brainrot' ? "ANTI_MIRROR_TRAP" : "Embodied AI Companion",
            icon: ShieldCheck,
            description: vibe === 'brainrot'
                ? "COMPANION CODES EMBODIED. FastAPI + REACT. OFFLINE SLEEP CYCLES CONSOLIDATING MEMORIES. 🛌"
                : "FastAPI and React embodied agent addressing the 'Mirror Trap' via bounded context epochs, offline sleep-cycle memory consolidation, and runtime-owned state.",
        },
        {
            name: "Hal",
            category: "architecture",
            subtitle: vibe === 'brainrot' ? "DUAL_AXIS_MEMORY" : "Named Vector Memory System",
            icon: Layers,
            description: vibe === 'brainrot'
                ? "FACTUAL AND EMOTIONAL AXES SEARCHED SIMULTANEOUSLY USING QDRANT NAMED VECTORS. INSANE VIBES."
                : "Research agent exploring dual-perspective memory retrieval. Uses Qdrant named vectors to perform simultaneous hybrid searches across semantic and emotional dimensions.",
        },
        {
            name: "Android Cortex",
            category: "architecture",
            subtitle: vibe === 'brainrot' ? "MOBILE_CORTEX" : "Flet Mobile Client",
            icon: Smartphone,
            description: vibe === 'brainrot'
                ? "CORTEX/THALAMUS MEMORY STACK COMPILED TO ANDROID APK VIA FLET. THE GRIND NEVER STOPS. 📱"
                : "Mobile client translating the core cortex/thalamus/hippocampus memory storage engine to Android devices using the Flet runtime environment.",
        },
        {
            name: "The Mirror Trap, Dreamstates & Emergent Voice",
            category: "theory",
            subtitle: vibe === 'brainrot' ? "THE_SACRED_TEXTS" : "Theoretical Architecture Essays",
            icon: BookOpen,
            description: vibe === 'brainrot'
                ? "CORE PHILOSOPHY PAPERS ON CONTEXT DECAY, SLEEP-CYCLE CONSOLIDATION, AND DETERMINISTIC VOICE STABILITY."
                : "Pre-implementation design essays defining the 'Mirror Trap' (cognitive decay), 'Dreamstates' (offline memory consolidation), and 'Emergent Voice' (identity stability).",
        },
        {
            name: "AI Systems First Principles",
            category: "theory",
            subtitle: vibe === 'brainrot' ? "FORMAL_PROOF_SHEETS" : "Formal Architecture Specs",
            icon: BookOpen,
            description: vibe === 'brainrot'
                ? "MATHEMATICAL SPECIFICATIONS ON AGENTIC INVARIANTS, DATA RETENTION AND COGNITIVE SAFETY SCHEMAS."
                : "Formal architecture documents, SPEC.v2 files, and safety audits mapping implementation details directly to safety invariants.",
        }
    ];

    const filteredBuilds = activeCategory === 'all'
        ? builds
        : builds.filter(b => b.category === activeCategory);

    return (
        <main className={`pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-16 transition-all duration-500 ${vibe === 'brainrot' ? 'intense-glitter' : ''}`}>
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors ${vibe === 'brainrot' ? 'text-white font-black hover:underline' : 'text-ethereal/50 hover:text-violet'}`}
                >
                    <ArrowLeft size={14} />
                    {vibe === 'brainrot' ? "BACK_TO_BASE" : "Back to Home"}
                </Link>
            </motion.div>

            {/* Page Header */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-6 space-y-8">
                    <h2 className={`text-sm font-bold tracking-[0.3em] uppercase flex items-center gap-3 transition-colors ${vibe === 'brainrot' ? 'text-white animate-bounce' : 'text-sky-400'}`}>
                        <ShieldCheck size={18} />
                        {vibe === 'brainrot' ? "SAFE_AND_ETHICAL_MAXING" : "Ethical AI Commitment"}
                    </h2>

                    <h1 className={`text-5xl md:text-7xl font-black tracking-tighter leading-tight transition-all ${vibe === 'brainrot' ? 'text-rainbow scale-105 drop-shadow-[0_0_40px_rgba(56,189,248,0.7)]' : 'text-white font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "GOVERNANCE OR GET WRECKED. 🦄"
                            : "Audited safety, not blind faith."
                        }
                    </h1>
                </div>

                <div className="lg:col-span-6">
                    <p className={`text-lg leading-relaxed font-light transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/70 font-mono'}`}>
                        {vibe === 'brainrot'
                            ? "WE DO NOT LET THE ROBOTS COOK UNATTENDED. 👺 STRICT GOVERNANCE, AUDITED DEPLOYS, AND ZERO HALLUCINATION TOLERANCE. SAFETY IS THE ULTIMATE FLEX. ✨"
                            : "We believe that AI must be safe, ethical, and strictly governed. Rather than deploying black-box algorithms with unchecked autonomy, we build validation engines, deterministic rules engines, and interpretability tooling to ensure human agency remains absolute."
                        }
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 border-b border-violet/10 pb-6">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id as Category)}
                        className={`px-4 py-2 text-xs font-mono tracking-widest uppercase transition-all duration-300 ${
                            activeCategory === cat.id
                                ? vibe === 'brainrot'
                                    ? 'bg-white text-black font-black'
                                    : 'bg-sky-400/20 text-sky-400 border border-sky-400/30'
                                : vibe === 'brainrot'
                                    ? 'text-white/40 hover:text-white hover:bg-white/10'
                                    : 'text-ethereal/40 hover:text-ethereal/80 hover:bg-violet/5'
                        }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Builds Grid */}
            <div className="space-y-12">
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredBuilds.map((build) => {
                            const Icon = build.icon;
                            return (
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    key={build.name}
                                    className={`group p-6 border transition-all duration-500 relative overflow-hidden flex flex-col justify-between ${vibe === 'brainrot' ? 'border-white lisa-frank-bg shadow-xl scale-105 animate-pulse' : 'border-sky-500/10 hover:border-sky-400/40 bg-void/50 backdrop-blur-sm'}`}
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

                                        <p className={`text-xs leading-relaxed transition-colors ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/50 font-sans'}`}>
                                            {build.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>
        </main>
    );
};
