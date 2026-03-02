import React from 'react';
import { motion } from 'framer-motion';

const FluidBackground = () => {
    return (
        <div className="fluid-bg-container">
            <div className="blobs">
                <motion.div
                    className="blob blob-1"
                    animate={{
                        x: [0, 100, -50, 0],
                        y: [0, -150, 50, 0],
                        scale: [1, 1.2, 0.8, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="blob blob-2"
                    animate={{
                        x: [0, -120, 80, 0],
                        y: [0, 100, -80, 0],
                        scale: [1, 1.1, 0.9, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div
                    className="blob blob-3"
                    animate={{
                        x: [0, 80, -100, 0],
                        y: [0, 50, 150, 0],
                        scale: [1, 1.3, 0.7, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            <svg style={{ display: 'none' }}>
                <defs>
                    <filter id="liquid">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 40 -15"
                            result="liquid"
                        />
                        <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
                    </filter>
                </defs>
            </svg>

        </div>
    );
};

export default FluidBackground;
