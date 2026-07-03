export interface ProjectVibeCheck {
    title: string;
    content: string;
}

export interface ProjectMilestone {
    title: string;
    description: string;
}

export interface ProjectImage {
    src: string;
    label: string;
}

export interface Project {
    slug: string;
    title: string;
    subtitle?: string;
    eyebrow?: string;
    tagline: string;
    state?: string;
    foundation?: string;
    vibeChecks?: Record<'tech' | 'normal' | 'brainrot', ProjectVibeCheck>;
    milestones?: ProjectMilestone[];
    imageFolder?: string;
    images?: ProjectImage[];
    reflection?: string;
    repoUrl?: string;
}

// Real project entries go here. Each one renders at /projects/<slug> via <ProjectPage>.
// Shape reference (NOT rendered — array below stays empty until real content exists):
//
// {
//   slug: "example-project",
//   title: "EXAMPLE",
//   subtitle: "PROJECT",
//   eyebrow: "Observation::Example",
//   tagline: "One-line pitch shown in the hero meta row.",
//   state: "Authoritative",
//   foundation: "Stack // Stack // Stack",
//   vibeChecks: {
//     tech: { title: "SPEC::EXAMPLE", content: "Technical framing." },
//     normal: { title: "EXAMPLE_LEVEL_10", content: "Plain-language framing." },
//     brainrot: { title: "POV::EXAMPLE", content: "Unhinged founder-mode framing." },
//   },
//   milestones: [{ title: "MILESTONE ONE", description: "What happened." }],
//   imageFolder: "example",
//   images: [{ src: "screenshot.png", label: "Screenshot" }],
//   reflection: "Closing thought.",
//   repoUrl: "https://github.com/...",
// }
export const projects: Project[] = [];
