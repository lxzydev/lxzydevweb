import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="gif-container">
        <img src="/assets/hero-1.gif" alt="" className="gif-1" />
        <img src="/assets/hero-2.gif" alt="" className="gif-2" />
        <img src="/assets/demon.gif" alt="" className="gif-3" />
      </div>

      <div className="content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="glitch" data-text="lxzy.dev">lxzy<span className="red">.dev</span></h1>
          <p className="bio">
            20 years old
          </p>
          <div className="links">
            <a href="https://github.com/lxzydev" target="_blank" rel="noopener noreferrer" className="link-item">
              <span className="link-label">GitHub</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://www.nexusmods.com/profile/lxzydev/mods" target="_blank" rel="noopener noreferrer" className="link-item">
              <span className="link-label">Nexus Mods</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://chromewebstore.google.com/detail/saltypro/eocgcmccjmhiheelnmpkgohneocaongn" target="_blank" rel="noopener noreferrer" className="link-item">
              <span className="link-label">SaltyPro</span>
              <span className="link-arrow">→</span>
            </a>
            <a href="https://steamcommunity.com/id/lxzydev/" target="_blank" rel="noopener noreferrer" className="link-item">
              <span className="link-label">Steam</span>
              <span className="link-arrow">→</span>
            </a>

          </div>
        </motion.div>
      </div>
      <div className="footer" style={{cursor: "url('/assets/cursor.cur'), auto"}}>
        lxzy © 2026 - All rights reserved lxzy.dev
      </div>
    </section>
  )
}

export default Hero
