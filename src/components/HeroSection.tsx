import { ArrowDown, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:vishwajith.shastry@gmail.com', label: 'Email' },
    { icon: FileText, href: '#', label: 'Resume' },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 hero-gradient opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Introduction */}
          <div className="mb-8 fade-in">
            <p className="text-lg text-muted-foreground mb-4 font-medium">
              👋 Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Vishwajith H H</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-display font-semibold text-foreground/90 mb-6">
              Frontend Developer
            </h2>
          </div>

          {/* Description */}
          <div className="mb-8 slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about building <span className="text-primary font-semibold">fast</span>, 
              <span className="text-primary font-semibold"> accessible</span>, and 
              <span className="text-primary font-semibold"> modern web applications</span> with 
              3+ years of experience in React, Vue.js, and TypeScript.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-8 slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-card">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-card">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Components Built</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-4 min-w-[120px] shadow-card">
                <div className="text-2xl font-bold text-primary">30%</div>
                <div className="text-sm text-muted-foreground">Performance Boost</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mb-12 slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="hero-gradient text-primary-foreground hover-lift font-semibold"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="border-primary/30 text-primary hover:bg-primary/10 hover-lift font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-8 slide-up" style={{ animationDelay: '0.8s' }}>
            <div className="flex justify-center gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 bg-card/50 backdrop-blur-sm rounded-full shadow-card hover-lift transition-smooth"
                  title={link.label}
                >
                  <link.icon size={20} className="text-muted-foreground hover:text-primary transition-smooth" />
                </a>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="slide-up" style={{ animationDelay: '1s' }}>
            <button
              onClick={() => scrollToSection('about')}
              className="animate-bounce p-2 rounded-full hover:bg-primary/10 transition-smooth group"
              aria-label="Scroll to About section"
            >
              <ArrowDown size={24} className="text-muted-foreground group-hover:text-primary transition-smooth" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;