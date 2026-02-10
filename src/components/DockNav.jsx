import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const DockNav = ({ activeSection, setActiveSection }) => {
    const [clicked, setClicked] = useState(null);

    useEffect(() => {
        if (!clicked) return;
        const t = setTimeout(() => setClicked(null), 450);
        return () => clearTimeout(t);
    }, [clicked]);

    const navItems = [
        { id: 'home', icon: FaHome, label: 'Home' },
        { id: 'about', icon: FaUser, label: 'About' },
        { id: 'experience', icon: FaBriefcase, label: 'Exp' },
        { id: 'skills', icon: FaCode, label: 'Skills' },
        { id: 'education', icon: FaGraduationCap, label: 'Edu' },
        { id: 'project', icon: FaProjectDiagram, label: 'Projects' },
        { id: 'contact', icon: FaEnvelope, label: 'Contact' },
    ];

    return (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="relative bg-black/65 backdrop-blur-xl border border-white/10 rounded-2xl px-2 sm:px-3 md:px-5 py-2.5 sm:py-3.5 flex items-center gap-1.5 sm:gap-2.5 md:gap-3 shadow-2xl shadow-cyan-500/10"
            >
                {navItems.map((item) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                        <motion.button
                            key={item.id}
                            onClick={() => {
                                setClicked(item.id);
                                setActiveSection(item.id);
                            }}
                            className={`relative group isolate p-2.5 sm:p-3.5 md:p-4 rounded-2xl transition-colors duration-200 ${
                                isActive ? 'text-cyan-300' : 'text-gray-400 hover:text-white'
                            }`}
                            whileHover={{ y: -3, scale: 1.08 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 520, damping: 26 }}
                        >
                            {/* Click pulse */}
                            <AnimatePresence>
                                {clicked === item.id && (
                                    <motion.div
                                        className="absolute inset-0 rounded-2xl bg-cyan-400/12"
                                        initial={{ opacity: 0.6, scale: 0.7 }}
                                        animate={{ opacity: 0, scale: 1.35 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.45, ease: 'easeOut' }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Per-item active pill positioning */}
                            {isActive && (
                                <motion.div
                                    layoutId="dock-pill"
                                    className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/22 via-cyan-400/12 to-cyan-500/10 border border-cyan-500/25 -z-10"
                                    transition={{ type: 'spring', stiffness: 520, damping: 36 }}
                                />
                            )}

                            <motion.div
                                animate={isActive ? { y: -1 } : { y: 0 }}
                                transition={{ type: 'spring', stiffness: 520, damping: 28 }}
                                className="relative flex items-center justify-center"
                            >
                                <Icon size={20} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
                            </motion.div>

                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-cyan-400 text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-cyan-500/20">
                                {item.label}
                            </div>
                        </motion.button>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default DockNav;
