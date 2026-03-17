import { motion } from "framer-motion";

const navLinks = ["Work", "About", "Testimonial", "Contact"];

const Header = () => (
  <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
  >
    <div className="container flex h-16 items-center justify-between px-4">
      <a href="#" className="text-xl font-display font-bold text-gradient tracking-tight">
        CARY KENNER
      </a>

      <div className="flex items-center gap-8">
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

        {/* Sales & Tech CTAs */}
        <div className="flex items-center gap-3 border-l pl-8 border-border/50">
          <a
            href="https://drive.google.com/file/d/19RsJfyP808ZWj_-sQ8VpKZVaMkUftpAz/preview"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/carykenner/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  </motion.header>
);

export default Header;
