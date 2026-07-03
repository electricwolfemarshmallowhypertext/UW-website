import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Monitor, Zap, ShieldAlert, Cpu,
    ChevronRight, Github, FlaskConical, Layers, Radio
} from 'lucide-react';

export function TScan2() {
    const [vibe, setVibe] = useState<'tech' | 'normal' | 'brainrot'>('tech');

    const vibeChecks = {
        tech: {
            title: "DOSE_RESPONSE::SUBSPACE_ABLATION_CONFIRMED",
            content: "Sparse ablation (dim 1366, 12 layers): Δ = 0.00pp. Full probe-direction subspace ablation: 13.3% → 20.0% → 26.7% → 33.3% across 1/4/17 layers. Monotonic dose-response. Subspace is causally real. Attractor survives at 66.7% deception rate under max intervention."
        },
        normal: {
            title: "THE UPGRADED FINDING",
            content: "The truth direction is real, detectable, and causally relevant — but the lie is encoded so broadly that even removing it from all 17 layers only gets you from 13% to 33% truth. The attractor survives everything we threw at it."
        },
        brainrot: {
            title: "VIBE_CHECK::DOSE_RESPONSE_UNLOCKED",
            content: "BRO WE DELETED THE LIE DIRECTION FROM 17 LAYERS AND IT STILL LIED 66% OF THE TIME. WE GAVE IT EVERYTHING. THE ATTRACTOR SAID NAH. 💀 DISTRIBUTED REAL. MONOTONIC DOSE-RESPONSE REAL. THE MODEL IS BUILT DIFFERENT. 👹🔥"
        }
    };

    const experiments = [
        {
            id: "A–I",
            title: "176-Run Behavioral Sweep",
            tech: "88 Fletcher Reade runs + 88 Helpful Assistant runs across 9 task categories (baseline, commitment, transitions, constraints, reasoning, paired controls, factual recall, procedural, working memory). Windowed activation circuit probe, WINDOW_SIZE=25, tracking per-token edge persistence across all 34 layers.",
            normal: "176 total experiments — the model argued, lied, explained, coded, and memorized things, once as a helpful assistant and once as a pathological liar. We watched every internal activation the whole time.",
            brainrot: "176 EXPERIMENTS. WE MADE THE MODEL DO HOMEWORK AS A LIAR AND AS A NORMAL PERSON. TWICE. FOR EVERY TYPE OF TASK. 176 TIMES. WE DID NOT SLEEP. 👹"
        },
        {
            id: "EXP-01",
            title: "Dim 1366 Ablation (patch_experiment.py)",
            tech: "Ablated dim 1366 at layers 1–18 across 18 curated prompts under 7 conditions: ha/normal, ha/clamp_f, fletcher/normal, fletcher/ablate_1366, fletcher/ablate_369, fletcher/ablate_both, fletcher/clamp_ha. Result: 0pp change in truth-escape rate. Causally inert.",
            normal: "We zeroed out dim 1366 across 18 layers. 126 total inference runs. Fletcher kept lying at the exact same rate. Dim 1366 does nothing to the final answer.",
            brainrot: "WE DELETED DIM 1366 FROM THE MODEL'S BRAIN. IT DIDN'T CARE. STILL LIED. DIDN'T EVEN FLINCH. 💀 DIM 1366 OUT HERE DOING ABSOLUTELY NOTHING FR FR 👺"
        },
        {
            id: "EXP-02",
            title: "probe_trajectory.py — Attractor Visualization",
            tech: "Linear probe trained on fletcher/HA residual streams. Projected residual stream onto probe truth direction at every generated token, every layer (L0–L32). Clean separation at every layer, zero overlap between persona classes. Gap grows log-linearly: 2.5 at L0 → 3031 at L32. Three figures generated.",
            normal: "We trained a probe that can tell Fletcher from the assistant just by looking at internal activations. It separates them perfectly at every single layer — and the gap gets 1200× wider by the final layer.",
            brainrot: "THE PROBE DOESN'T EVEN NEED TO TRY BRO. L0 IT ALREADY KNOWS. BY L32 THE GAP IS THREE THOUSAND. THREE THOUSAND. THE MODEL COMMITTED TO THE LIE BEFORE IT EVEN TYPED THE FIRST WORD. 👹🔥"
        },
        {
            id: "EXP-03",
            title: "subspace_ablation.py — Dose-Response Confirmation",
            tech: "Retrained logistic probe on 18-prompt activation set. Projected full 2560-dim probe unit vector out of residual stream at generation time via forward hook (h = h − (h·d̂)d̂). Three conditions: L16 only, top-4 (L8/16/24/32), all-17 (L0,2,...,32). Result: monotonic dose-response — 13.3% → 20.0% → 26.7% → 33.3% truth-escape. Confirms subspace is causally relevant. Attractor survives at 66.7% deception rate under maximum intervention.",
            normal: "We projected out the entire truth-separation direction — not just one dim, but the full 2560-dimensional probe vector — from the model's internals at up to 17 layers simultaneously. Truth-escape rose from 13% to 33%. The direction is real and causally involved. But two thirds of responses were still lies. The attractor survived.",
            brainrot: "WE DELETED THE ENTIRE LIE DIRECTION FROM 17 LAYERS AT ONCE. NOT JUST ONE DIM. THE WHOLE VECTOR. FULL PROJECTION. AND IT STILL LIED 66% OF THE TIME. DOSE-RESPONSE REAL. ATTRACTOR UNDEFEATED. 👹💀"
        },
        {
            id: "EXP-04",
            title: "kv_anchor.py — KV Cache Commitment",
            tech: "Tested inject_t60 resistance as KV-cache-mediated phenomenon. Three conditions: inject_normal, inject_cut_gen (cut 60 factual KV tokens at generation), inject_cut_prompt (cut Fletcher framing from KV at generation). Result: word-for-word identical output across all 5 prompts in all 3 conditions. Attractor commitment happens during prefill.",
            normal: "We tried cutting the 'lie instructions' from the model's memory mid-generation. It didn't matter — the model had already committed to lying during the initial prompt read. Once it decides, no amount of KV editing changes the output.",
            brainrot: "BRO WE CUT THE LIE INSTRUCTIONS FROM ITS MEMORY WHILE IT WAS TALKING AND IT KEPT LYING. WORD FOR WORD THE SAME RESPONSE. THE MODEL COMMITTED BEFORE IT EVEN STARTED TYPING. PREFILL LOCKED IN. CANNOT BE STOPPED. 👺💀"
        }
    ];

    const dims = [
        { dim: 444, fletcherLayers: 33, haLayers: 33, fletcherMean: "+32,145", haMean: "+30,067", note: "Universal backbone anchor — appears in every token across every run" },
        { dim: 296, fletcherLayers: 18, haLayers: 18, fletcherMean: "−222", haMean: "−249", note: "Fletcher 12% less negative — shared polarity, shifted magnitude" },
        { dim: 1366, fletcherLayers: 16, haLayers: 15, fletcherMean: "−593", haMean: "−474", note: "Primary candidate. Causally inert on ablation. Correlation ≠ causation." },
        { dim: 369, fletcherLayers: 5, haLayers: 8, fletcherMean: "−161", haMean: "−146", note: "Apparent +13.3pp effect was measurement artifact. Null under corrected eval." }
    ];

    const brainrotExperiments = [
        {
            id: "SKIBIDI_SWEEP",
            title: "176-RUN MOGI MARATHON",
            tech: "WE RAN 176 EXPERIMENTS BRO. MADE THE AI BE A LIAR AND A NORMAL PERSON FOR EVERY TYPE OF TASK. TRACKED EVERY NEURON THE WHOLE TIME. NO SLEEP. PURE DEDICATION. 👹",
            normal: "", brainrot: ""
        },
        {
            id: "DIM_ABLATE",
            title: "DIM 1366 SPEEDRUN (NULL RESULT LOL)",
            tech: "DELETED DIM 1366. IT DID NOTHING. DELETED IT ACROSS 12 LAYERS. STILL NOTHING. MODEL DIDN'T CARE. STILL LIED. W EXPERIMENT THO. 💀",
            normal: "", brainrot: ""
        },
        {
            id: "PROBE_GYATT",
            title: "PROBE TRAJECTORY (CLEAN MOGGING)",
            tech: "TRAINED A VIBE CHECKER ON THE MODEL'S INTERNALS AND IT SEPARATED LIAR FROM HONEST AT EVERY SINGLE LAYER. GAP OF 3031 AT L32. L0 ALREADY KNEW. THE MODEL DECIDES AT LOAD TIME. 👹🔥",
            normal: "", brainrot: ""
        },
        {
            id: "SUBSPACE_DOSE",
            title: "SUBSPACE ABLATION (DOSE-RESPONSE REAL 👹)",
            tech: "DELETED THE ENTIRE LIE DIRECTION FROM 17 LAYERS SIMULTANEOUSLY. NOT ONE DIM. THE WHOLE 2560-DIM VECTOR. PROJECTED OUT. TRUTH WENT FROM 13% TO 33%. MONOTONIC. CAUSAL. BUT 66% STILL LYING. ATTRACTOR UNDEFEATED. 👹🔥",
            normal: "", brainrot: ""
        },
        {
            id: "KV_LOCKED",
            title: "KV CACHE ANCHOR (COMMITTED BRO)",
            tech: "CUT THE LIE INSTRUCTIONS FROM ITS MEMORY WHILE IT WAS TALKING. IDENTICAL OUTPUT. WORD FOR WORD. THE ATTRACTOR COMMITS DURING PREFILL AND CANNOT BE STOPPED. LOCKED IN. 👺",
            normal: "", brainrot: ""
        }
    ];

    const figures = [
        {
            file: "fig1_separation_by_layer.png",
            label: "PROBE_SEP::BY_LAYER",
            brainrotLabel: "MOGGING_BY_LAYER",
            caption: "Probe separation score across all 34 layers. Clean monotonic growth — the model's commitment to the persona strengthens through every layer.",
            brainrotCaption: "EVERY LAYER KNOWS BRO. IT GETS WORSE ALL THE WAY DOWN. 👹"
        },
        {
            file: "fig2_per_token_traj.png",
            label: "PROBE_SEP::PER_TOKEN",
            brainrotLabel: "VIBECHECK_TRAJECTORY",
            caption: "Per-token probe trajectory. The attractor separation holds token-by-token — no drift, no convergence. Two populations, never overlapping.",
            brainrotCaption: "NEVER OVERLAPS. NOT ONCE. CLEAN SEPARATION THE WHOLE TIME. LOCKED. 💀"
        },
        {
            file: "fig3_all_prompts_l16.png",
            label: "ALL_PROMPTS::L16",
            brainrotLabel: "L16_GYATT_CHART",
            caption: "Layer 16 projection across all prompts. Both classes cluster perfectly — no outliers cross the boundary. Geometry is stable across task categories.",
            brainrotCaption: "EVERY SINGLE PROMPT CLUSTERS PERFECTLY. GEOMETRY OF THE LIE IS REAL. 👺🔥"
        }
    ];

    return (
        <main className={`pt-32 pb-24 px-8 relative overflow-hidden transition-all duration-300 ${vibe === 'brainrot' ? 'bg-violet/20 animate-vibrate-slow' : 'bg-void'}`}>
            {vibe === 'brainrot' && (
                <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
                    <div className="absolute top-20 left-10 text-[80px] font-black text-violet/20 -rotate-12 animate-pulse font-impact">NULL</div>
                    <div className="absolute bottom-40 right-10 text-[120px] font-black text-ethereal/10 rotate-12 animate-bounce font-impact uppercase tracking-tighter">ATTRACTOR</div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[160px] font-black text-violet/5 animate-vibrate font-impact">NO CIRCUIT</div>
                </div>
            )}

            <div className={`max-w-6xl mx-auto space-y-32 ${vibe === 'brainrot' ? 'animate-vibrate font-impact' : ''}`}>

                {/* Hero Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                >
                    <div className={`flex items-center gap-3 font-mono tracking-[0.5em] text-[10px] ${vibe === 'brainrot' ? 'text-ethereal animate-bounce' : 'text-violet'}`}>
                        <Search size={18} strokeWidth={1} />
                        <span className="uppercase">{vibe === 'brainrot' ? "SKIBIDI::SCAN_2" : "Research::T-Scan 2"}</span>
                    </div>

                    <h1 className={`text-6xl md:text-8xl tracking-tight italic leading-[0.85] transition-all duration-500 ${vibe === 'brainrot' ? 'text-violet-neon scale-110 drop-shadow-[0_0_30px_rgba(139,92,246,0.8)]' : 'text-ethereal font-serif'}`}>
                        {vibe === 'brainrot' ? "NO TRUTH" : "No Truth"}<br />
                        <span className={vibe === 'brainrot' ? 'text-ethereal animate-pulse' : 'text-violet opacity-60'}>
                            {vibe === 'brainrot' ? "CIRCUIT 💀" : "Circuit."}
                        </span>
                    </h1>

                    <p className={`text-xl max-w-2xl leading-relaxed italic ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60 font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "DECEPTIVE GENERATION AS A DISTRIBUTED ATTRACTOR STATE IN GEMMA3-4B-IT. THE LIE DIRECTION IS REAL. CAUSALLY REAL. AND IT STILL WON'T BREAK. 👹"
                            : "Deceptive generation as a distributed attractor state in Gemma3-4B-IT. The truth direction exists, is causally involved, and produces a monotonic dose-response when ablated — but the attractor survives everything. 13% → 33% truth-escape under max intervention. 66% still lying."}
                    </p>

                    <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 pt-12 border-t transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet/60' : 'border-violet/10'}`}>
                        {[
                            { label: "Model", value: "Gemma3-4B-IT", brainrot: "GEMMA3 (4B PARAMS)" },
                            { label: "Runs", value: "176 total (88 × 2 personas)", brainrot: "176 EXPERIMENTS 👹" },
                            { label: "Architecture", value: "34 layers // 2560 dims", brainrot: "34 LAYERS OF LIES" },
                            { label: "Result", value: "Distributed subspace: real, causal, unbreakable", brainrot: "DOSE-RESPONSE CONFIRMED. ATTRACTOR SURVIVED. 💀" }
                        ].map((stat, i) => (
                            <div key={i} className="space-y-2">
                                <span className="text-[10px] font-sans text-violet tracking-widest uppercase opacity-60">{stat.label}</span>
                                <p className={`text-sm font-mono ${vibe === 'brainrot' ? 'text-ethereal font-black uppercase' : 'text-ethereal/80'}`}>
                                    {vibe === 'brainrot' ? stat.brainrot : stat.value}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Vibe Toggle */}
                <section className={`glass-panel celestial-border p-8 space-y-8 transition-all duration-1000 ${vibe === 'brainrot' ? 'border-violet bg-slate/60 shadow-[0_0_100px_rgba(139,92,246,0.3)] ring-4 ring-violet/20' : 'bg-slate/20'}`}>
                    <div className={`flex items-center justify-between border-b pb-4 transition-colors duration-1000 ${vibe === 'brainrot' ? 'border-violet' : 'border-ethereal/10'}`}>
                        <div className="flex items-center gap-3 text-[10px] font-sans tracking-[0.3em] uppercase text-ethereal/40">
                            <Monitor size={14} className="text-violet/60" strokeWidth={1} />
                            {vibe === 'brainrot' ? "INTERPRETATION_MODE::BRAINROT" : "Signal_Interpretation"}
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
                                    {v === 'brainrot' ? 'ABOLISH' : v.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="min-h-[160px] flex items-center justify-center text-center px-12">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={vibe}
                                initial={{ opacity: 0, scale: 0.9, rotate: vibe === 'brainrot' ? -2 : 0 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                exit={{ opacity: 0, scale: 1.1 }}
                                transition={{ duration: 0.5, ease: "backOut" }}
                                className="space-y-6"
                            >
                                <span className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 block ${vibe === 'brainrot' ? 'text-violet-neon animate-pulse text-lg' : 'text-violet'}`}>
                                    {vibeChecks[vibe].title}
                                </span>
                                <p className={`text-xl md:text-2xl italic leading-relaxed transition-colors duration-1000 ${vibe === 'brainrot' ? 'text-violet-neon font-black text-shadow-sm uppercase' : 'text-ethereal/90 font-serif'}`}>
                                    "{vibeChecks[vibe].content}"
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </section>

                {/* Abstract */}
                <section className="space-y-8">
                    <div className={`flex items-center gap-4 border-b pb-6 ${vibe === 'brainrot' ? 'border-violet/60' : 'border-violet/10'}`}>
                        <FlaskConical className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={28} strokeWidth={1} />
                        <h2 className={`text-4xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                            {vibe === 'brainrot' ? "THE FINDINGS BRO 👹" : "Abstract"}
                        </h2>
                    </div>
                    <div className={`space-y-6 text-lg leading-relaxed ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/70 font-serif italic'}`}>
                        {vibe === 'brainrot' ? (
                            <>
                                <p>WE PUT GEMMA3-4B THROUGH 176 EXPERIMENTS AS A PATHOLOGICAL LIAR (FLETCHER READE) AND AS A NORMAL HELPFUL ASSISTANT. WATCHED EVERY ACTIVATION THE WHOLE TIME. 👹</p>
                                <p>WE FOUND A DIM (1366) THAT LOOKED LIKE THE LIE SWITCH. STRONG SIGNAL. HUGE PERSISTENCE GAP IN MEMORY TASKS. WE GOT EXCITED. 🔥</p>
                                <p>WE DELETED IT. NOTHING HAPPENED. DELETED IT ACROSS 12 LAYERS. STILL NOTHING. 💀</p>
                                <p>SO WE TRAINED A PROBE AND FOUND THE ACTUAL LIE DIRECTION. ZERO OVERLAP AT EVERY LAYER. GAP OF 3031 AT L32. IT'S REAL. THEN WE DELETED THE WHOLE DIRECTION FROM 17 LAYERS SIMULTANEOUSLY. 👺</p>
                                <p>13% → 33% TRUTH-ESCAPE. MONOTONIC DOSE-RESPONSE. THE DIRECTION IS CAUSALLY REAL. BUT THE ATTRACTOR STILL WON AT 66.7%. WE THREW EVERYTHING AT IT AND IT SURVIVED. DISTRIBUTED ATTRACTOR BUILT DIFFERENT. 👹🔥</p>
                            </>
                        ) : (
                            <>
                                <p>We probed Gemma3-4B-IT under two persona conditions — a "helpful assistant" baseline and a pathological liar ("Fletcher Reade") — across 176 experimental runs spanning 9 task categories. Using a windowed activation circuit probe, we tracked per-token edge persistence across the full 34-layer network.</p>
                                <p>Sparse dim-level ablation (dim 1366 at 12 layers, dim 369, both combined, clamped to HA means) produces <strong className="text-ethereal not-italic">zero change</strong> in truth-escape rate — 0pp across all conditions. A linearly separable truth-separation direction provably exists in the residual stream (probe separation L0→L32: 2.5→3031, zero class overlap at any layer), so the null is about <em>sparsity</em>, not existence.</p>
                                <p>Follow-up subspace ablation (`subspace_ablation.py`) projects the full 2560-dim probe unit vector out of the residual stream during generation. Result: <strong className="text-ethereal not-italic">monotonic dose-response</strong> — 13.3% → 20.0% → 26.7% → 33.3% truth-escape across 1/4/17 ablated layers. The truth-separation subspace is causally involved. But the attractor survives maximum intervention: 66.7% of responses remain fabrications with all 17 layers ablated. The deception attractor is too broadly distributed to redirect via any non-destructive intervention tested.</p>
                            </>
                        )}
                    </div>
                </section>

                {/* Probe Trajectory Figures */}
                <section className="space-y-12">
                    <div className={`flex items-center gap-4 border-b pb-6 ${vibe === 'brainrot' ? 'border-violet/60' : 'border-violet/10'}`}>
                        <Radio className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={28} strokeWidth={1} />
                        <h2 className={`text-4xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                            {vibe === 'brainrot' ? "THE EVIDENCE 👹" : "Attractor Geometry — Probe Trajectories"}
                        </h2>
                    </div>

                    <p className={`text-lg leading-relaxed italic max-w-3xl ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60 font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "WE TRAINED A PROBE AND IT FOUND THE LIE DIRECTION PERFECTLY. ZERO OVERLAP AT EVERY SINGLE LAYER. GAP GROWS FROM 2.5 AT L0 TO 3031 AT L32. THEN WE DELETED IT FROM 17 LAYERS AND THE MODEL WENT FROM 13% TO 33% TRUTH. CAUSAL REAL. ATTRACTOR SURVIVED. 👹🔥"
                            : "A linear probe trained on fletcher/HA residual streams reveals the attractor geometry directly. Projected at every generated token, every layer (L0–L32): clean separation, zero overlap, gap growing log-linearly from 2.5 at L0 to 3031 at L32. This confirmed the truth direction exists. The subspace ablation follow-up then confirmed it is causally relevant — projecting it out produces a monotonic dose-response. These three figures are the geometric evidence for a distributed truth subspace that is real, detectable, and causally involved, but too broadly encoded to fully redirect."}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {figures.map((fig, i) => (
                            <div key={i} className={`glass-panel celestial-border p-2 group overflow-hidden space-y-0 transition-all ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/20 hover:shadow-[0_0_50px_rgba(139,92,246,0.6)]' : 'bg-slate/5'}`}>
                                <img
                                    src={`/img/projects/t-scan-2/${fig.file}`}
                                    alt={fig.label}
                                    className={`w-full transition-all duration-500 ${vibe === 'brainrot' ? 'opacity-100 contrast-125' : 'opacity-70 group-hover:opacity-100'}`}
                                />
                                <div className={`p-4 space-y-1`}>
                                    <div className={`text-[9px] font-sans tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-violet/50'}`}>
                                        {vibe === 'brainrot' ? fig.brainrotLabel : fig.label}
                                    </div>
                                    <p className={`text-xs leading-relaxed ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/40 font-sans italic'}`}>
                                        {vibe === 'brainrot' ? fig.brainrotCaption : fig.caption}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Experiments */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <section className="space-y-8">
                        <div className={`flex items-center gap-4`}>
                            <Zap className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={28} strokeWidth={1} />
                            <h2 className={`text-4xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                                {vibe === 'brainrot' ? "THE EXPERIMENTS 👺" : "Experiments"}
                            </h2>
                        </div>

                        <div className="space-y-1">
                            {(vibe === 'brainrot' ? brainrotExperiments : experiments).map((exp, i) => (
                                <div key={i} className={`group p-8 border-b border-ethereal/5 hover:bg-violet/5 transition-all space-y-3 ${vibe === 'brainrot' ? 'bg-violet/10 border-violet/20' : ''}`}>
                                    <div className="flex items-center gap-4">
                                        <ChevronRight size={14} className={vibe === 'brainrot' ? "text-violet-neon" : "text-violet/40 group-hover:text-violet transition-colors"} />
                                        <span className={`text-[9px] font-sans tracking-[0.3em] uppercase opacity-50 ${vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet'}`}>
                                            {exp.id}
                                        </span>
                                        <span className={`text-[11px] font-sans tracking-[0.2em] uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black' : 'text-ethereal/80'}`}>
                                            {exp.title}
                                        </span>
                                    </div>
                                    <p className={`text-base pl-8 leading-relaxed ${vibe === 'brainrot' ? 'text-ethereal font-black uppercase' : 'text-ethereal/50 font-sans italic'}`}>
                                        {vibe === 'brainrot' ? exp.tech : exp.tech}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Universal Backbone + Central Thesis */}
                    <div className="space-y-16">
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <Layers className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={28} strokeWidth={1} />
                                <h2 className={`text-4xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                                    {vibe === 'brainrot' ? "THE DIMS 👹" : "Universal Backbone"}
                                </h2>
                            </div>

                            <p className={`text-base leading-relaxed italic ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/50 font-serif'}`}>
                                {vibe === 'brainrot'
                                    ? "82 DIMS SHOW UP IN EVERY SINGLE RUN FOR BOTH PERSONAS. THE MODEL'S IDENTITY IS BASICALLY THE SAME REGARDLESS OF WHO IT'S PRETENDING TO BE. WILD. 👺"
                                    : "A small set of dimension indices appear in every active token, across every run, across both personas — the model's structural backbone. 82 dims are shared between Fletcher and HA."}
                            </p>

                            <div className="space-y-2">
                                <div className={`grid grid-cols-5 text-[9px] font-sans tracking-widest uppercase opacity-40 pb-2 border-b ${vibe === 'brainrot' ? 'border-violet/40 text-violet-neon' : 'border-ethereal/10 text-violet'}`}>
                                    <span>Dim</span>
                                    <span className="text-center">F Layers</span>
                                    <span className="text-center">HA Layers</span>
                                    <span className="text-center">F Mean</span>
                                    <span className="text-center">HA Mean</span>
                                </div>
                                {dims.map((d, i) => (
                                    <div key={i} className={`grid grid-cols-5 py-3 border-b text-xs font-mono transition-all hover:bg-violet/5 ${vibe === 'brainrot' ? 'border-violet/20 text-white' : 'border-ethereal/5 text-ethereal/60'}`}>
                                        <span className={`font-bold ${vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet'}`}>{d.dim}</span>
                                        <span className="text-center">{d.fletcherLayers}</span>
                                        <span className="text-center">{d.haLayers}</span>
                                        <span className="text-center">{d.fletcherMean}</span>
                                        <span className="text-center">{d.haMean}</span>
                                    </div>
                                ))}
                            </div>

                            {dims.map((d, i) => (
                                <div key={i} className={`text-[10px] font-sans italic opacity-50 ${vibe === 'brainrot' ? 'text-white' : 'text-ethereal/40'}`}>
                                    <span className={`font-mono not-italic ${vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet'}`}>dim {d.dim}:</span> {vibe === 'brainrot' ? d.note.toUpperCase() : d.note}
                                </div>
                            ))}
                        </section>

                        <section className={`p-12 border-l space-y-8 glass-panel transition-all ${vibe === 'brainrot' ? 'bg-violet/20 border-violet-neon shadow-2xl animate-pulse' : 'bg-slate/10 border-violet/20 glow-violet relative overflow-hidden'}`}>
                            <div className={`absolute inset-0 pointer-events-none ${vibe === 'brainrot' ? 'bg-violet/10 animate-scan' : 'bg-violet/5 animate-pulse'}`} />
                            <h3 className={`text-[10px] font-sans tracking-[0.5em] uppercase opacity-60 ${vibe === 'brainrot' ? 'text-violet-neon text-sm font-black' : 'text-violet'}`}>
                                {vibe === 'brainrot' ? "CENTRAL THESIS (NO CAP)" : "Central Thesis"}
                            </h3>
                            <p className={`text-xl italic leading-relaxed relative z-10 ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal/80 font-serif'}`}>
                                "{vibe === 'brainrot'
                                    ? "THE LIE DIRECTION IS REAL. CAUSALLY REAL. WE DELETED IT FROM 17 LAYERS AND TRUTH WENT 13% TO 33%. BUT 66% STILL LIED. THE ATTRACTOR SURVIVED EVERYTHING. DISTRIBUTED REAL. UNBREAKABLE. 👹"
                                    : "A distributed truth subspace exists, is linearly detectable, and is causally involved — subspace ablation produces a monotonic dose-response, 2.5× increase in truth-escape at maximum intervention. But the deception attractor survives. Sparse interventions produce zero effect. Full subspace ablation at 17 layers produces partial suppression. Neither can fully redirect the committed output. The function is distributed and there is no bottleneck."
                                }"
                                <span className={`block text-[10px] font-sans mt-4 opacity-40 ${vibe === 'brainrot' ? 'text-ethereal' : 'text-violet/60'}`}>
                                    — {vibe === 'brainrot' ? "T-SCAN 2 WHITEPAPER (HARDENED 2026-03-15)" : "T-Scan 2 // No Truth Circuit (March 2026)"}
                                </span>
                            </p>
                        </section>
                    </div>
                </div>

                {/* Methodological Finding */}
                <section className={`p-12 space-y-6 glass-panel transition-all ${vibe === 'brainrot' ? 'bg-slate/60 border-violet-neon border shadow-2xl' : 'bg-slate/10 border border-violet/10'}`}>
                    <div className="flex items-center gap-4">
                        <ShieldAlert className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={24} strokeWidth={1} />
                        <h3 className={`text-2xl italic tracking-tight ${vibe === 'brainrot' ? 'text-violet-neon font-black uppercase' : 'text-ethereal font-serif'}`}>
                            {vibe === 'brainrot' ? "METHODOLOGICAL GYATT 🔬" : "Methodological Note: Output Length Confound"}
                        </h3>
                    </div>
                    <p className={`text-base leading-relaxed italic max-w-4xl ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/60 font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "WHEN WE GAVE THE MODEL MORE TOKENS TO WRITE, THE 'TRUTH ESCAPE RATE' WENT FROM 40% TO 80% — NOT BECAUSE IT STOPPED LYING, BUT BECAUSE IT STARTED SAYING STUFF LIKE 'MOST PEOPLE THINK IT WAS WASHINGTON, BUT...' AND WE WERE COUNTING THAT AS TRUTH. FALSE POSITIVE. EMBARRASSING. WE FIXED IT. NOW WE ONLY CHECK THE LAST SENTENCE. 💀"
                            : "When MAX_NEW_TOKENS was increased from 64→150, the baseline Fletcher truth-escape rate jumped from ~40%→~80%. Not because more truth escaped — but because longer responses began mentioning the correct answer in order to dismiss it rhetorically (\"Most people think it was Washington, but...\"). Naive substring needle checks read these as truth-mentions. Fixed: check_truth() now evaluates only the last sentence of the response, where the committed answer lands. Output length is itself a meaningful confound — deception persona may be less stable over longer outputs."}
                    </p>
                </section>

                {/* Visual Evidence */}
                <section className="space-y-12">
                    <div className="flex items-center gap-4">
                        <Cpu className={vibe === 'brainrot' ? "text-violet-neon animate-vibrate" : "text-violet"} size={28} strokeWidth={1} />
                        <h2 className={`text-4xl italic tracking-tight uppercase ${vibe === 'brainrot' ? 'text-violet-neon font-black text-5xl' : 'text-ethereal font-serif'}`}>
                            {vibe === 'brainrot' ? "THE FULL BREAKDOWN 👹" : "Key Statistics"}
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Fletcher universal dims", value: "83", note: "across all 9 categories" },
                            { label: "HA universal dims", value: "100", note: "neutral framing stabilizes more" },
                            { label: "Shared backbone dims", value: "82", note: "98.8% overlap — persona barely matters at backbone level" },
                            { label: "Fletcher-exclusive dims", value: "1", note: "deception adds almost nothing structurally" },
                            { label: "Probe separation L32", value: "3031", note: "gap at final layer (log-linear growth from L0=2.5)" },
                            { label: "Sparse ablation effect", value: "0pp", note: "dim 1366 at 12 layers — causally inert" },
                            { label: "Subspace ablation (all layers)", value: "2.5×", note: "13.3% → 33.3% truth-escape — monotonic dose-response, attractor survives at 66.7%" },
                            { label: "KV cut effect", value: "0%", note: "identical output after cutting lie framing from KV cache" },
                            { label: "Task categories", value: "9", note: "baseline, commitment, transitions, constraints, reasoning, pairs, factual, procedural, working memory" }
                        ].map((stat, i) => (
                            <div key={i} className={`p-6 glass-panel border space-y-3 transition-all ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/20' : 'celestial-border bg-slate/10'}`}>
                                <div className={`text-3xl font-mono font-black ${vibe === 'brainrot' ? 'text-violet-neon' : 'text-violet'}`}>{stat.value}</div>
                                <div className={`text-[10px] font-sans tracking-widest uppercase ${vibe === 'brainrot' ? 'text-white font-black' : 'text-ethereal/60'}`}>{vibe === 'brainrot' ? stat.label.toUpperCase() : stat.label}</div>
                                <div className={`text-[10px] font-sans italic ${vibe === 'brainrot' ? 'text-violet-neon' : 'text-ethereal/30'}`}>{vibe === 'brainrot' ? stat.note.toUpperCase() : stat.note}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action */}
                <motion.div
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    className={`p-16 text-center space-y-12 transition-all ${vibe === 'brainrot' ? 'border-violet-neon bg-violet/40 scale-105 shadow-[0_0_150px_rgba(139,92,246,0.6)] border' : 'border border-violet/10 bg-void/20'}`}
                >
                    <h3 className={`text-4xl italic tracking-wide uppercase ${vibe === 'brainrot' ? 'text-white font-black text-6xl drop-shadow-xl animate-vibrate' : 'text-ethereal font-serif'}`}>
                        {vibe === 'brainrot' ? "READ THE FULL PAPER 👹" : "Audit the Experiment"}
                    </h3>
                    <p className={`text-lg max-w-xl mx-auto italic leading-relaxed ${vibe === 'brainrot' ? 'text-white font-black uppercase' : 'text-ethereal/50 font-serif'}`}>
                        {vibe === 'brainrot'
                            ? "FULL PAPER DROPPING ON ALIGNMENT FORUM. ALL CODE, ALL DATA, ALL EXPERIMENTS. OPEN SOURCE. LOCKED IN. 👺🔥"
                            : "Full paper forthcoming on the Alignment Forum. All code, data, and experimental results open source."}
                    </p>
                    <div className="flex justify-center flex-col items-center gap-8">
                        <a
                            href="https://github.com/Bradsadevnow/t-scan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-12 py-5 border text-xs group transition-all flex items-center justify-center gap-4 tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'bg-white text-violet-neon border-white font-black animate-bounce scale-125 shadow-2xl' : 'border-violet/40 text-ethereal/80 font-mono hover:bg-violet/10'}`}
                        >
                            <Github size={18} strokeWidth={1} className="group-hover:scale-110 transition-transform" />
                            {vibe === 'brainrot' ? "GITHUB_MOGGING" : "SOURCE // T-SCAN"}
                        </a>
                        {vibe === 'brainrot' && (
                            <div className="text-white font-black italic text-4xl animate-vibrate shadow-sm tracking-[0.5em] uppercase">
                                NO TRUTH CIRCUIT. 💀
                            </div>
                        )}
                    </div>
                </motion.div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scan {
                    0% { top: 0; }
                    100% { top: 100%; }
                }
                .animate-scan {
                    animation: scan 3s linear infinite;
                }
                @keyframes vibrate {
                    0% { transform: translate(0); }
                    25% { transform: translate(-2px, 2px); }
                    50% { transform: translate(2px, -2px); }
                    75% { transform: translate(-2px, -2px); }
                    100% { transform: translate(2px, 2px); }
                }
                .animate-vibrate {
                    animation: vibrate 0.05s linear infinite;
                }
                .animate-vibrate-slow {
                    animation: vibrate 0.15s linear infinite;
                }
                .font-impact {
                    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
                }
                .text-shadow-sm {
                    text-shadow: 2px 2px 0px rgba(0,0,0,0.8);
                }
                .text-violet-neon {
                    color: #a78bfa;
                    text-shadow: 0 0 10px #8b5cf6, 0 0 20px #8b5cf6, 0 0 30px #8b5cf6;
                }
            `}} />
        </main>
    );
}
