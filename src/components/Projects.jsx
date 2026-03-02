import React from 'react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: "Dynamic Web Application",
        description: "Built a full-stack application with CRUD operations and a secure user authentication system.",
        tags: ["Python", "MySQL", "CRUD", "Auth"],
        link: "https://github.com/jerrish0007-J"
    },
    {
        title: "Database-Driven Application",
        description: "Designed a structured database schema and integrated backend logic for efficient data processing.",
        tags: ["MySQL", "Backend", "Data Processing"],
        link: "https://github.com/jerrish0007-J"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="container">
            <motion.h2
                className="gradient-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Featured Projects
            </motion.h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="project-card glass glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tags">
                            {project.tags.map((tag, i) => (
                                <span key={i} className="project-tag gradient-text">{tag}</span>
                            ))}
                        </div>
                        <a href={project.link} className="project-link">Learn More &rarr;</a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
