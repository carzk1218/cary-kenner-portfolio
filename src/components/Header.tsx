import { motion } from "framer-motion";

const navLinks = ["Work", "About", "Testimonial", "Contact"];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
    >
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <a href="#" className="text-xl font-bold tracking-tight">
            CARY KENNER
          </a>
          
          <div className="flex items-center gap-3 border-l pl-4 border-gray-500">
            <a 
              href="https://www.linkedin.com/in/carykenner/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold text-blue-500"
            >
              LINKEDIN
            </a>
            <a 
              href="https://drive.google.com/file/d/19RsJfyP808ZWj_-sQ8VpKZVaMkUftpAz/preview" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs font-bold"
            >
              RESUME
            </a>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
