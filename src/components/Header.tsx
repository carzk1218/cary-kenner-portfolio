import { motion } from "framer-motion";

const navLinks = ["Work", "About", "Testimonial", "Contact"];

const Header = () => (
  <motion.header
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
  >
    <div className="container flex h-16 items-center justify-between">
      <a href="#" className="text-xl font-display font-bold text-gradient tracking-tight">
        CARY KENNER
      </a>
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
