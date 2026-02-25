import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaHome, FaUser, FaBriefcase, FaCode, FaGraduationCap, FaProjectDiagram, FaEnvelope } from 'react-icons/fa';

const DockNav = ({ activeSection, setActiveSection }) => {
    const [clicked, setClicked] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Entrance animation delay
        const showTimer = setTimeout(() => setIsVisible(true), 300);
        return () => clearTimeout(showTimer);
    }, []);

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

    // Stagger animation for each nav item
    const containerVariants = {
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 22,
                staggerChildren: 0.06,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 400,
                damping: 24,
            },
        },
    };

    return (
        <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-50">
            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="relative bg-black/70 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-2xl px-3 sm:px-3 md:px-5 py-3 sm:py-3 md:py-3.5 flex items-center gap-1 sm:gap-2 md:gap-3 shadow-2xl shadow-cyan-500/10"
            >
                {/* Subtle animated border glow */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                        background: 'linear-gradient(90deg, rgba(34,211,238,0.08), rgba(168,85,247,0.08), rgba(34,211,238,0.08))',
                        backgroundSize: '200% 100%',
                    }}
                    animate={{
                        backgroundPosition: ['0% 0%', '200% 0%'],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                />

                {navItems.map((item, index) => {
                    const isActive = activeSection === item.id;
                    const Icon = item.icon;

                    return (
                        <motion.button
                            key={item.id}
                            variants={itemVariants}
                            onClick={() => {
                                setClicked(item.id);
                                setActiveSection(item.id);
                            }}
                            className={`relative group isolate p-4 sm:p-3.5 md:p-4 rounded-xl sm:rounded-2xl transition-colors duration-200 ${isActive ? 'text-cyan-300' : 'text-gray-400 hover:text-white'
                                }`}
                            whileHover={{ y: -5, scale: 1.12 }}
                            whileTap={{ scale: 0.92 }}
                            transition={{ type: 'spring', stiffness: 520, damping: 26 }}
                        >
                            {/* Click pulse ring */}
                            <AnimatePresence>
                                {clicked === item.id && (
                                    <motion.div
                                        className="absolute inset-0 rounded-xl sm:rounded-2xl bg-cyan-400/12"
                                        initial={{ opacity: 0.7, scale: 0.6 }}
                                        animate={{ opacity: 0, scale: 1.5 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    />
                                )}
                            </AnimatePresence>

                            {/* Active pill background */}
                            {isActive && (
                                <motion.div
                                    layoutId="dock-pill"
                                    className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-cyan-500/22 via-cyan-400/12 to-cyan-500/10 border border-cyan-500/25 -z-10"
                                    transition={{ type: 'spring', stiffness: 520, damping: 36 }}
                                />
                            )}

                            <motion.div
                                animate={isActive ? { y: -2 } : { y: 0 }}
                                transition={{ type: 'spring', stiffness: 520, damping: 28 }}
                                className="relative flex items-center justify-center"
                            >
                                <Icon size={22} className="sm:w-6 sm:h-6 md:w-6 md:h-6" />
                            </motion.div>

                            {/* Active dot indicator below icon */}
                            {isActive && (
                                <motion.div
                                    layoutId="dock-dot"
                                    className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                    style={{ boxShadow: '0 0 6px rgba(34,211,238,0.8)' }}
                                />
                            )}

                            {/* Tooltip */}
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/85 text-cyan-400 text-xs py-1 px-2.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
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
