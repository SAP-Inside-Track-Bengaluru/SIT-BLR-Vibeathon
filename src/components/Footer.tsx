import { Twitter, Github, Linkedin, Mail, MapPin, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToSection } from '@/lib/scroll-utils';

const Footer = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    scrollToSection(href);
  };
  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Challenges', href: '#tracks' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
  <footer className="relative py-16 px-4 border-t border-blue-200/20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-blue-500/5" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-4">
              <motion.div
                className="absolute -top-4 -left-4 text-blue-500/80"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-4 h-4" />
              </motion.div>
              <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600">
                VIBEATHON
              </h3>
            </div>
            <p className="text-muted-foreground/80 mb-6 max-w-md leading-relaxed">
              The ultimate hackathon experience where innovation meets opportunity. 
              Build the future, one line of code at a time.
            </p>
            
            {/* Event Details */}
            <div className="space-y-3">
              <motion.div 
                className="flex items-center gap-3 text-sm group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-400/10 flex items-center justify-center backdrop-blur-sm group-hover:from-blue-500/20 group-hover:to-blue-400/20 transition-all duration-300">
                  <Calendar className="w-4 h-4 text-blue-500" />
                </div>
                <span className="text-muted-foreground/80">September 27, 2025</span>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3 text-sm group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-400/10 flex items-center justify-center backdrop-blur-sm group-hover:from-blue-500/20 group-hover:to-blue-400/20 transition-all duration-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                </div>
                <a
                  href="https://maps.app.goo.gl/63FmktWjyWJejNHG9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground/80 hover:text-blue-500 transition-colors duration-300"
                >
                  SAP Labs, Whitefield, Bengaluru, Karnataka, India
                </a>
              </motion.div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-400">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-muted-foreground/80 hover:text-blue-500 transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="h-[2px] w-4 bg-gradient-to-r from-blue-500/50 to-blue-400/50 group-hover:w-6 transition-all duration-300" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-500">
              Connect
            </h4>
            <div className="flex justify-start md:justify-start pl-2 md:pl-0">
              <a
                href="https://www.linkedin.com/company/sitblr/"
                className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-400/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6 text-blue-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;