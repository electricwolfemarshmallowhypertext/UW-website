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

export const projects: Project[] = [
    {
        slug: "recursive-research-runtime",
        title: "Recursive Research",
        subtitle: "Runtime",
        eyebrow: "LAB::GOVERNED_RESEARCH",
        tagline: "An autonomous literature acquisition and appraisal engine that crawls PubMed, appends to a schema-validated SQLite inventory, and maintains strict human-in-the-loop governance.",
        state: "Active Lab",
        foundation: "Python // SQLite // OpenAI API (LM Studio) // PubMed API",
        vibeChecks: {
            tech: {
                title: "SPEC::GOVERNED_COGNITION",
                content: "Deterministic runtime validating schema admissibility of LLM-generated paper extraction proposals. Enforces constraints (nonce echoing, enum checks, cited refs) with automated correction loops before committing to SQLite memory."
            },
            normal: {
                title: "EVIDENCE_OVER_INTUITION",
                content: "A smart research assistant that reads medical literature on canine/feline strokes, validates the data structures, and requests human confirmation before saving it. No guessing allowed."
            },
            brainrot: {
                title: "POV::NO_CAP_LITERATURE",
                content: "WE AUTOMATED THE MEDICAL GRIND. 🦄 ROBOT READS PUBMED, EXTRACTS THE EVIDENCE INVARIANTS, AND CHECKS IF IT'S CAP. HUMANS DO THE FINAL SIGN-OFF. WINS ONLY. ⚡"
            }
        },
        milestones: [
            {
                title: "Admissibility Schema",
                description: "Designed the formal worker contract for model proposals with validation of source references and strict enum constraints."
            },
            {
                title: "SQLite Research Backend",
                description: "Migrated from flat JSON manifest to a queryable, concurrent SQLite3 store representing papers, appraisals, and committee votes."
            },
            {
                title: "PubMed Expansion Pipeline",
                description: "Implemented an automated crawler to query, download, and ingest newly published canine and feline stroke literature."
            },
            {
                title: "LM Studio Integration",
                description: "Created an offline verification harness to run and validate local LLM models against JSON schemas without external internet dependency."
            }
        ],
        reflection: "AI should propose meaning and structure, but the runtime must validate admissibility, and human scientists must own scientific judgment.",
        repoUrl: "https://github.com/Bradsadevnow/canine-research-runtime"
    },
    {
        slug: "interaction-intelligence",
        title: "Interaction Intelligence",
        subtitle: "Pipeline",
        eyebrow: "LAB::RELATIONSHIP_GRAPH",
        tagline: "An automated, resumable data extraction and relationship intelligence engine that harvests LinkedIn Live, thread, and profile data into a Canonical Knowledge Store.",
        state: "Deployed",
        foundation: "Node.js // Playwright // Ollama // SQLite3 // CLI",
        vibeChecks: {
            tech: {
                title: "SPEC::ONTOLOGY_EXTRACTION",
                content: "An automated Playwright pipeline running headlessly with randomized human-like delays to scrape LinkedIn content, feeding raw messages into a local Ollama reasoning model to extract structured relationship assertions."
            },
            normal: {
                title: "SMART_CRM_FOR_BUILDERS",
                content: "A command-line tool that syncs your LinkedIn messages and profiles into a private local database, then uses a local AI to automatically identify promises made, interests, and professional connections."
            },
            brainrot: {
                title: "POV::CKS_MOGGING",
                content: "NO MORE GHOSTING OR FORGETTING DEALS. 🦄 PLAYWRIGHT HEADLESSLY SLIDES INTO THE INBOX, OLLAMA EXTRACTS THE COMMITMENTS (OPEN LOOPS), AND YOU REVIEW THEM IN THE TERMINAL. RIZZ RETAINED. 👺"
            }
        },
        milestones: [
            {
                title: "Playwright Scraper Loop",
                description: "Built a resumable Playwright adapter that navigates LinkedIn pages, expanding nested comments and replies while bypassing rate limits."
            },
            {
                title: "Canonical Knowledge Store",
                description: "Designed a SQLite database tracking entities, reference documents, and accepted/proposed assertions with complete provenance."
            },
            {
                title: "Ollama Ontology Parser",
                description: "Engineered strict system prompts directing local LLMs to output clean, structured JSON assertion logs from chat timelines."
            },
            {
                title: "Interactive Governance CLI",
                description: "Created a command-line interface for manual assertion review (accept/reject/skip) and dossier compiling."
            }
        ],
        reflection: "Relationships are built on commitments. Making those commitments legible and queryable locally puts relationship ownership back in the hands of builders.",
        repoUrl: "https://github.com/Bradsadevnow/linkydinky"
    }
];
