import { ExternalLink, Github, Play } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered LeetCode Helper Extension',
      description: 'Browser extension that assists in solving LeetCode problems using AI. Offers structured insights, step-by-step approach, and final solution using OpenRouter API and LLMs.',
      image: '/placeholder-project-1.jpg',
      technologies: ['JavaScript', 'Browser Extension', 'AI/ML', 'OpenRouter API', 'LLMs'],
      features: [
        'AI-powered code analysis and suggestions',
        'Step-by-step problem solving approach',
        'Integration with OpenRouter API',
        'Real-time code assistance'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'Dark Mode Toggle Chrome Extension',
      description: 'Extension that converts any website into dark mode by parsing and applying theme-friendly CSS dynamically. Includes an intuitive toggle UI to switch themes instantly.',
      image: '/placeholder-project-2.jpg',
      technologies: ['JavaScript', 'CSS', 'Chrome Extension', 'DOM Manipulation'],
      features: [
        'Universal dark mode for any website',
        'Dynamic CSS parsing and application',
        'Instant theme switching',
        'Persistent settings across sessions'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'Reusable Frontend Component Library',
      description: 'Built a comprehensive set of modular and reusable components using JavaScript and React. Includes Calendar, Copilot-textbox, File explorer, and Pagination components.',
      image: '/placeholder-project-3.jpg',
      technologies: ['React', 'JavaScript', 'Component Library', 'Storybook'],
      features: [
        'Calendar with localStorage integration',
        'Intelligent textbox with auto-completion',
        'VS Code-like file explorer',
        'Efficient pagination system'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Ongoing'
    },
    {
      title: 'Movie Recommender System',
      description: 'Intelligent movie recommendation system that suggests movies based on user-inputted titles using similarity-based filtering algorithms.',
      image: '/placeholder-project-4.jpg',
      technologies: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      features: [
        'Content-based filtering',
        'Movie similarity analysis',
        'User preference learning',
        'Real-time recommendations'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Completed'
    },
    {
      title: 'UI Clone Collection (React)',
      description: 'Created pixel-perfect frontend clones of popular platforms including YouTube, WhatsApp, and Windows 11 using React and modern CSS techniques.',
      image: '/placeholder-project-5.jpg',
      technologies: ['React', 'CSS3', 'Responsive Design', 'UI/UX'],
      features: [
        'Pixel-perfect YouTube clone',
        'WhatsApp web interface',
        'Windows 11 desktop experience',
        'Fully responsive designs'
      ],
      liveUrl: '#',
      githubUrl: '#',
      status: 'Portfolio'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Ongoing': return 'bg-blue-100 text-blue-800';
      case 'Portfolio': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my frontend development skills through real-world projects 
              built with modern technologies and best practices.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group overflow-hidden shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                {/* Project Image */}
                <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 h-48">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl opacity-20">💻</div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className={getStatusColor(project.status)}>
                      {project.status}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Project Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-semibold mb-2 group-hover:text-primary transition-smooth">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Key Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Key Features</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-primary/30 text-primary bg-primary/5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="default"
                      className="hero-gradient text-primary-foreground flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play size={14} className="mr-2" />
                        View Live
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={14} className="mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="ghost"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink size={14} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View All Projects CTA */}
          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/30 text-primary hover:bg-primary/10 hover-lift"
            >
              <Github size={18} className="mr-2" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;