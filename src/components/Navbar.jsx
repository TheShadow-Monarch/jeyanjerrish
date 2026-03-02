import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <motion.nav
            className="navbar glass"
            initial={{ y: -100, x: "-50%" }}
            animate={{ y: 0, x: "-50%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="nav-content">
                <div className="logo">
                    <span className="gradient-text">JEYAN JERRISH</span>
                </div>
                <ul className="nav-links">
                    <li><a href="#hero" className="nav-link">Home</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                    <li><a href="#projects" className="nav-link">Projects</a></li>
                    <li><a href="#contact" className="nav-link">Contact</a></li>
                </ul>
            </div>
        </motion.nav>
    );
};

export default Navbar;
