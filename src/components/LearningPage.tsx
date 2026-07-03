import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Maximize2, BookOpen, Minimize2 } from 'lucide-react';

export const LearningPage = ({ vibe }: { vibe: 'tech' | 'normal' | 'brainrot' }) => {
    const totalPages = 14;
    const [currentPage, setCurrentPage] = useState(1);
    const [zoom, setZoom] = useState(100);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const padPage = (num: number) => String(num).padStart(2, '0');
    const getPageSrc = (num: number) => `/img/understanding-ai/page-${padPage(num)}.png`;

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleZoomIn = () => {
        if (zoom < 200) setZoom(zoom + 20);
    };

    const handleZoomOut = () => {
        if (zoom > 60) setZoom(zoom - 20);
    };

    // Keyboard controls
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') handleNext();
            if (e.key === 'ArrowLeft') handlePrev();
            if (e.key === 'Escape' && isFullscreen) setIsFullscreen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentPage, isFullscreen]);

    return (
        <main className={`pt-32 pb-24 px-6 max-w-6xl mx-auto space-y-12 transition-all duration-500 ${vibe === 'brainrot' ? 'intense-glitter' : ''}`}>
            {/* Back Button */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center justify-between"
            >
                <Link
                    to="/"
                    className={`inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest transition-colors ${vibe === 'brainrot' ? 'text-white font-black hover:underline' : 'text-ethereal/50 hover:text-violet'}`}
                >
                    <ArrowLeft size={14} />
                    {vibe === 'brainrot' ? "BACK_TO_BASE" : "Back to Home"}
                </Link>

                <div className={`flex items-center gap-2 px-3 py-1 border transition-all ${vibe === 'brainrot' ? 'border-white bg-white/20 animate-pulse' : 'border-violet/10 bg-violet/5'}`}>
                    <BookOpen size={12} className={vibe === 'brainrot' ? 'text-white' : 'text-violet'} />
                    <span className={`text-[9px] font-sans tracking-[0.3em] uppercase ${vibe === 'brainrot' ? 'text-white font-black' : 'text-violet'}`}>
                        {vibe === 'brainrot' ? "LEARNING::DOSSIER" : "Learning Hub"}
                    </span>
                </div>
            </motion.div>

            {/* Header copy */}
            <div className="space-y-4">
                <h1 className={`text-4xl md:text-6xl font-black tracking-tighter leading-none transition-all ${vibe === 'brainrot' ? 'text-rainbow scale-105 drop-shadow-[0_0_30px_rgba(255,0,247,0.7)]' : 'text-white font-serif'}`}>
                    {vibe === 'brainrot' ? "THE_BIG_BRAIN_LOGS" : "Understanding AI"}
                </h1>
                <p className={`text-sm font-mono transition-colors ${vibe === 'brainrot' ? 'text-white/80 font-black uppercase' : 'text-ethereal/50'}`}>
                    {vibe === 'brainrot' ? "CHAPTER_1_DRAFT_DECRYPTED. FULL SCHEMATIC INCOMING." : "Chapter 1 Draft // Structural Analysis and First Principles of Agentic Systems."}
                </p>
            </div>

            {/* Reader Interface */}
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative`}>
                {/* Sidebar Navigation (Page selector list) */}
                <div className="lg:col-span-3 space-y-2 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                    <span className={`block text-[10px] font-bold font-mono tracking-widest uppercase mb-4 ${vibe === 'brainrot' ? 'text-white' : 'text-violet'}`}>
                        {vibe === 'brainrot' ? "PAGE_SCHEMATIC" : "Document Outline"}
                    </span>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                        <button
                            key={p}
                            onClick={() => {
                                setCurrentPage(p);
                                setZoom(100);
                            }}
                            className={`w-full flex items-center justify-between p-3 border text-left font-mono text-xs transition-all duration-300 ${
                                currentPage === p
                                    ? vibe === 'brainrot'
                                        ? 'bg-white text-black font-black border-white'
                                        : 'bg-violet/10 text-violet border-violet/30'
                                    : vibe === 'brainrot'
                                        ? 'text-white/50 border-white/10 hover:text-white hover:bg-white/10'
                                        : 'text-ethereal/50 border-ethereal/5 hover:text-ethereal hover:bg-violet/5'
                            }`}
                        >
                            <span>PAGE {padPage(p)}</span>
                            {currentPage === p && (
                                <motion.div
                                    layoutId="active-indicator"
                                    className={`w-1.5 h-1.5 rounded-full ${vibe === 'brainrot' ? 'bg-black' : 'bg-violet'}`}
                                />
                            )}
                        </button>
                    ))}
                </div>

                {/* Main View Area */}
                <div className="lg:col-span-9 space-y-6">
                    {/* Controls Bar */}
                    <div className={`flex flex-wrap items-center justify-between gap-4 p-4 border transition-colors ${vibe === 'brainrot' ? 'border-white bg-white/10' : 'border-violet/20 bg-void/50 backdrop-blur-sm'}`}>
                        {/* Page Toggle */}
                        <div className="flex items-center gap-3">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className={`p-2 border transition-all ${
                                    currentPage === 1
                                        ? 'opacity-30 cursor-not-allowed border-ethereal/5'
                                        : vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50 hover:bg-violet/5'
                                }`}
                            >
                                <ChevronLeft size={16} />
                            </button>
                            <span className="font-mono text-xs">
                                {currentPage} / {totalPages}
                            </span>
                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={`p-2 border transition-all ${
                                    currentPage === totalPages
                                        ? 'opacity-30 cursor-not-allowed border-ethereal/5'
                                        : vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50 hover:bg-violet/5'
                                }`}
                            >
                                <ChevronRight size={16} />
                            </button>
                        </div>

                        {/* Zoom & View Toggles */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleZoomOut}
                                className={`p-2 border transition-all ${vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50 hover:bg-violet/5'}`}
                                title="Zoom Out"
                            >
                                <ZoomOut size={16} />
                            </button>
                            <span className="font-mono text-xs min-w-[3rem] text-center">{zoom}%</span>
                            <button
                                onClick={handleZoomIn}
                                className={`p-2 border transition-all ${vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50 hover:bg-violet/5'}`}
                                title="Zoom In"
                            >
                                <ZoomIn size={16} />
                            </button>
                            <div className="h-6 w-[1px] bg-violet/20 mx-2" />
                            <button
                                onClick={() => setIsFullscreen(!isFullscreen)}
                                className={`p-2 border transition-all ${vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50 hover:bg-violet/5'}`}
                                title="Toggle Fullscreen"
                            >
                                {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Image Viewer Panel */}
                    <div
                        className={`border overflow-hidden transition-all duration-300 relative ${
                            isFullscreen
                                ? 'fixed inset-0 z-[100] bg-void flex items-center justify-center p-8 overflow-auto'
                                : vibe === 'brainrot' ? 'border-white bg-white/5' : 'border-violet/20 bg-void/30'
                        }`}
                        style={{ height: isFullscreen ? '100vh' : '650px' }}
                    >
                        {isFullscreen && (
                            <button
                                onClick={() => setIsFullscreen(false)}
                                className={`absolute top-6 right-6 p-3 border z-[110] bg-void/80 backdrop-blur-md ${vibe === 'brainrot' ? 'border-white hover:bg-white/20' : 'border-violet/20 hover:border-violet/50'}`}
                            >
                                <Minimize2 size={20} />
                            </button>
                        )}

                        <div
                            className={`w-full h-full flex items-center justify-center transition-all duration-300 overflow-auto p-4`}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={currentPage}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    src={getPageSrc(currentPage)}
                                    alt={`Understanding AI Page ${currentPage}`}
                                    className="max-w-full max-h-full object-contain shadow-2xl transition-transform duration-300 ease-out select-none pointer-events-none"
                                    style={{ transform: `scale(${zoom / 100})` }}
                                />
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
