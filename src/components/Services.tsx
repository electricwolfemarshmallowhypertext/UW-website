import { Compass, Workflow, ShieldCheck, Wrench, GraduationCap, FlaskConical } from 'lucide-react';
import { Section } from './ui/Section';

const ServiceCard = ({ icon: Icon, title, description, points, vibe }: {
    icon: any,
    title: string,
    description?: string,
    points: string[],
    vibe: 'tech' | 'normal' | 'brainrot'
}) => (
    <div className={`group relative p-6 border transition-all duration-500 overflow-hidden ${vibe === 'brainrot' ? 'border-white lisa-frank-bg shadow-xl' : 'border-violet/20 bg-void/80 backdrop-blur-sm hover:border-violet/50'}`}>
        <div className={`absolute inset-0 transition-opacity duration-500 ${vibe === 'brainrot' ? 'opacity-20 intense-glitter' : 'bg-gradient-to-br from-violet/5 to-transparent opacity-0 group-hover:opacity-100'}`} />
        <div className="relative z-10 space-y-4">
            <div className={`w-12 h-12 flex items-center justify-center rounded-sm transition-all duration-300 ${vibe === 'brainrot' ? 'bg-white/20 border-white' : 'bg-violet/10 border-violet/30 group-hover:border-violet/50'}`}>
                <Icon className={vibe === 'brainrot' ? 'text-white' : 'text-violet group-hover:text-ethereal'} size={22} />
            </div>
            <h3 className="text-lg font-bold font-mono tracking-tight text-white">{title}</h3>
            {description && <p className="text-sm text-ethereal/60 leading-relaxed">{description}</p>}
            <ul className="space-y-2">
                {points.map((point, i) => (
                    <li key={i} className="text-sm flex items-start gap-3 text-ethereal/60">
                        <span className="w-1 h-1 rounded-full mt-2 bg-violet/60 flex-shrink-0" />
                        {point}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const Services = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    return (
        <Section id="services" className="relative">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] -z-10 blur-[100px] transition-opacity ${vibe === 'brainrot' ? 'opacity-20 intense-glitter' : 'bg-[radial-gradient(circle_at_center,rgba(107,70,193,0.1)_0%,transparent_70%)] opacity-5'}`} />

            <div className="text-center mb-16 space-y-4">
                <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-violet">How We Help</h2>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter text-white">
                    The Stuff We <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-ethereal">Actually Do</span>
                </h3>
                <p className="font-mono text-ethereal/50 max-w-xl mx-auto">
                    Not an exhaustive list — just the things that come up most. All of it starts with understanding the work before touching any tools.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                    icon={Compass}
                    title="AI Readiness"
                    vibe={vibe}
                    description="Before building anything, we ask:"
                    points={[
                        "What hurts?",
                        "What repeats?",
                        "Where are decisions made?",
                        "Where are humans indispensable?",
                        "What should never be automated?",
                    ]}
                />
                <ServiceCard
                    icon={Workflow}
                    title="Workflow Architecture"
                    vibe={vibe}
                    points={[
                        "Observe work.",
                        "Understand work.",
                        "Redesign work.",
                        "Integrate AI.",
                        "Measure improvement.",
                    ]}
                />
                <ServiceCard
                    icon={ShieldCheck}
                    title="AI Governance"
                    vibe={vibe}
                    description="Operational governance, not legal governance."
                    points={[
                        "What evidence supports this output?",
                        "When is human review required?",
                        "What gets recorded?",
                        "What becomes canonical?",
                        "How do we prevent silent failure?",
                    ]}
                />
                <ServiceCard
                    icon={Wrench}
                    title="Internal Tool Development"
                    vibe={vibe}
                    description="Small. Focused. Useful."
                    points={[
                        'Not "we built another chatbot."',
                        '"This tool saves accounting six hours every week."',
                    ]}
                />
                <ServiceCard
                    icon={GraduationCap}
                    title="Capability Transfer"
                    vibe={vibe}
                    description="We don't want clients dependent on us forever. We want them to become capable."
                    points={[
                        "Training.",
                        "Documentation.",
                        "Office hours.",
                        "Teaching people to understand AI rather than fear it.",
                    ]}
                />
                <ServiceCard
                    icon={FlaskConical}
                    title="Research Workflows"
                    vibe={vibe}
                    description="Grew out of real scientific-evidence work for a stroke research foundation."
                    points={[
                        "Scientific evidence pipelines.",
                        "Knowledge stores.",
                        "Literature ingestion.",
                        "Structured reasoning and reproducibility.",
                    ]}
                />
            </div>
        </Section>
    );
};
