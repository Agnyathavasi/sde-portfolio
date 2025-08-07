import { Code2, Zap, Users, Target } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Component Architecture',
      description: 'Expert in building scalable, reusable components and micro frontends'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Reduced build times by 10% and API response times by 30%'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Leading frontend architecture across multiple products'
    },
    {
      icon: Target,
      title: 'Problem Solving',
      description: 'Resolved critical memory leaks and delivered 30+ features'
    }
  ];

  const technologies = [
    { name: 'Vue.js', level: 95 },
    { name: 'React.js', level: 90 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript (ES6+)', level: 92 },
    { name: 'HTML5 & CSS3', level: 95 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git & Version Control', level: 90 },
    { name: 'REST APIs', level: 85 }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A passionate frontend developer with expertise in modern web technologies, 
              focused on creating exceptional user experiences and scalable applications.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Story & Highlights */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  With <span className="text-primary font-semibold">3+ years of experience</span> at Cyware Labs, 
                  I've evolved from an intern to a Senior Frontend Developer (SDE-2), specializing in 
                  building scalable, modular web applications using Vue.js, React, and TypeScript.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about <span className="text-primary font-semibold">component architecture</span>, 
                  <span className="text-primary font-semibold"> performance optimizations</span>, and 
                  <span className="text-primary font-semibold"> UI/UX best practices</span>. My work has resulted in 
                  significant improvements including 35% reduction in development time and 30% improvement in API performance.
                </p>
              </div>

              {/* Highlights Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover-lift">
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <highlight.icon size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{highlight.title}</h4>
                          <p className="text-xs text-muted-foreground">{highlight.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Right Column - Technologies */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6">Core Technologies</h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm">{tech.name}</span>
                      <span className="text-xs text-muted-foreground">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="hero-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${tech.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Skills */}
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Additional Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    'SCSS', 'Webpack', 'Vite', 'Redux', 'Vuex', 'Node.js', 
                    'AWS', 'Jenkins', 'JIRA', 'Browser Extensions', 'Micro Frontends'
                  ].map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;