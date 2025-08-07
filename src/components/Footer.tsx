import { Heart, Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-display font-bold text-gradient mb-4">
                Vishwajith H H
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Frontend Developer passionate about creating exceptional 
                user experiences with modern web technologies.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {[
                  { label: 'About', href: '#about' },
                  { label: 'Experience', href: '#experience' },
                  { label: 'Projects', href: '#projects' },
                  { label: 'Skills', href: '#skills' },
                  { label: 'Contact', href: '#contact' },
                ].map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="block text-sm text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue.js', 'TypeScript', 'Tailwind', 'Node.js'].map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-sm text-muted-foreground">
                © {currentYear} Vishwajith H H. All rights reserved.
              </div>

              {/* Made with Love */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Made with</span>
                <Heart size={14} className="text-red-500 fill-current" />
                <span>and</span>
                <Code size={14} className="text-primary" />
                <span>and lots of</span>
                <Coffee size={14} className="text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;