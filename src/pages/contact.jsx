import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiLinkedin } from 'react-icons/fi';
import { IoLogoGithub } from 'react-icons/io';
import { SiLeetcode } from 'react-icons/si';
import TacticalFrame from '../components/TacticalFrame';
import GunIcon from '../components/GunIcon';
import TerminalWindow from '../components/TerminalWindow';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('Send Message');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');
    emailjs
      .sendForm('service_dx0hcgc', 'template_lqrkf2m', form.current, 't3gPt7xXjycVaN3Dw')
      .then(() => {
        setStatus('Message Sent ✅');
        form.current.reset();
      })
      .catch(() => {
        setStatus('Failed to Send ❌');
      });
  };

  return (
    <section
      id="contact"
      className="contact-section w-full min-h-screen relative flex items-center justify-center pt-8 pb-32 px-4"
      style={{
        background: 'transparent',
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff06_1px,transparent_1px)] bg-[length:24px_24px]" />

      <div className="contact-container relative z-10 w-full max-w-lg">
        {/* "Let's Work Together" – glowing portal */}
        <motion.div
          className="portal-cta mb-6 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: 'spring', stiffness: 80 }}
        >
          <TacticalFrame badge="ONLINE" intensity="strong" className="inline-block">
            <div className="px-8 py-6 rounded-2xl border border-cyan-500/40 bg-black/40 backdrop-blur-sm" style={{ boxShadow: '0 0 60px rgba(34,211,238,0.2)' }}>
              <div className="flex items-center justify-center gap-4 mb-2">
                <GunIcon size={32} className="text-cyan-400" animated={true} />
                <h2 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400">Work Together</span>
                </h2>
              </div>
              <p className="text-slate-400 text-sm md:text-base">Interested in collaborating or hiring? Drop a message.</p>
            </div>
          </TacticalFrame>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <TacticalFrame badge="MESSAGE" intensity="normal">
            <div className="contact-form-wrapper rounded-2xl border border-white/10 bg-black/40 backdrop-blur-sm p-4 md:p-6">
              <form ref={form} onSubmit={sendEmail} className="contact-form space-y-3">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition"
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition"
                />
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  required
                  className="contact-input w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/30 outline-none transition resize-none"
                />
                <motion.button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-lg shadow-cyan-500/20 flex items-center justify-center gap-2 border border-cyan-500/40"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <GunIcon size={20} className="text-white" animated={true} />
                  <span>{status}</span>
                </motion.button>
              </form>
            </div>
          </TacticalFrame>
        </motion.div>

        <motion.div
          className="social-links flex justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href="https://www.linkedin.com/in/krishnan-t-17-02-2005-/" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors">
            <FiLinkedin />
          </a>
          <a href="https://github.com/krishnan1235" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors">
            <IoLogoGithub />
          </a>
          <a href="https://leetcode.com/u/krishnan_2005/" target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-400 hover:text-cyan-400 transition-colors">
            <SiLeetcode />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
