import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="container">
            <motion.div
                className="contact-container glass glass-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="gradient-text">Get In Touch</h2>
                <div style={{ marginBottom: '2rem', textAlign: 'left' }}>
                    <p style={{ color: 'var(--accent-cyan)', fontWeight: '600' }}>jerrish0007@gmail.com</p>
                    <p style={{ color: 'var(--text-secondary)' }}>+91-9944536477</p>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)' }}>
                        Have a project in mind? Let's build something beautiful.
                    </p>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea rows="5" placeholder="Your Message"></textarea>
                    </div>
                    <motion.button
                        type="submit"
                        className="cta-button"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => e.preventDefault()}
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
};

export default Contact;
