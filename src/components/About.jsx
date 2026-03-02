import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const skills = [
        "Python", "SQL", "MySQL", "HTML", "CSS", "JavaScript",
        "Data Structures", "Algorithms", "OOP", "DBMS",
        "Git", "VS Code", "Problem Solving", "Debugging"
    ];

    return (
        <section id="about" className="container">
            <div className="grid-2">
                <motion.div
                    className="about-text"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="gradient-text">Education & Experience</h2>
                    <p>
                        Currently pursuing <strong>Bachelor of Computer Science and Engineering (2024 - 2028)</strong> at <strong>SRM MCET, Madurai</strong>.
                        My expertise lies in building dynamic web applications with robust backend logic and secure authentication.
                    </p>
                    <p>
                        Completed an internship focusing on full-stack development, CRUD operations, and database optimization following SDLC practices.
                    </p>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.span
                                key={index}
                                className="skill-badge glass"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="about-image-container"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="glass-card portrait-placeholder">
                        <div className="inner-glow"></div>
                        <p>Creative Visionary</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
