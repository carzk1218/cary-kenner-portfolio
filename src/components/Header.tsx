import { motion } from "framer-motion";

const navLinks = ["Work", "About", "Testimonial", "Contact"];

const Header = () => (
  <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
  >
    <div className="container flex h-16 items-center justify-between px-4">
      {/* Brand & Social Icons Group */}
      <div className="flex items-center gap-4">
        <a href="#" className="text-xl font-display font-bold text-gradient tracking-tight">
          CARY KENNER
        </a>
        
        <div className="flex items-center gap-3 border-l pl-4 border-border/50">
          {/* LinkedIn Icon */}
          <a 
            href="https://www.linkedin.com/in/carykenner/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-[#0077b5] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>

          {/* Resume Icon (File Text) */}
          <a 
            href="https://drive.google.com/file/d/19RsJfyP808ZWj_-sQ8VpKZVaMkUftpAz/preview" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Resume"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
          </a>
        </div>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  </motion.header>
);

export default Header;
