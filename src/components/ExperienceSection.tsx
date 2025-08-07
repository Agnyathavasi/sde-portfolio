import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Software Development Engineer II',
      company: 'Cyware Labs',
      period: 'August 2023 - Present',
      location: 'Bengaluru, India',
      type: 'Full-time',
      achievements: [
        'Built 15+ reusable components and 3 micro frontends, reducing development time by 35%',
        'Led Vue.js upgrade from 2.7 to 3.2, achieving performance boosts and security enhancements',
        'Optimized build time by 10% and eliminated 20+ unnecessary packages',
        'Implemented API caching, cutting response time by 30% and improving user satisfaction',
        'Identified and resolved critical memory leak that caused 1GB+ memory usage over time'
      ],
      technologies: ['Vue.js 3', 'TypeScript', 'Micro Frontends', 'Performance Optimization', 'Component Architecture']
    },
    {
      title: 'Software Development Engineer I',
      company: 'Cyware Labs',
      period: 'August 2022 - July 2023',
      location: 'Bengaluru, India',
      type: 'Full-time',
      achievements: [
        'Implemented CRON jobs and timezone features using Moment.js and Luxon.js',
        'Supported users in 100+ countries with improved scheduling accuracy by 35%',
        'Created Dynamic Dashboard reducing data analysis time by 40%',
        'Integrated 25+ data sources for comprehensive threat monitoring',
        'Enabled 24/7 real-time monitoring of 500+ threat indicators'
      ],
      technologies: ['Vue.js', 'JavaScript', 'Moment.js', 'Luxon.js', 'Dashboard Development', 'Real-time Data']
    },
    {
      title: 'Software Development Engineer Intern',
      company: 'Cyware Labs',
      period: 'March 2022 - July 2022',
      location: 'Bengaluru, India',
      type: 'Internship',
      achievements: [
        'Quickly learned Vue.js applications with TypeScript, SCSS, and Vite',
        'Resolved 1000+ issues and bugs during the learning phase',
        'Delivered 30+ customer-requested features',
        'Collaborated with cross-functional teams to optimize performance and maintainability',
        'Worked on 3 SOAR products focusing on scalability and code quality'
      ],
      technologies: ['Vue.js', 'TypeScript', 'SCSS', 'Vite', 'Bug Fixing', 'Feature Development']
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Professional <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My journey in frontend development, from intern to senior engineer, 
              building scalable web applications and leading technical initiatives.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                  
                  {/* Content */}
                  <div className="ml-20">
                    <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="mb-4">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <h3 className="text-xl font-display font-semibold text-foreground">
                              {exp.title}
                            </h3>
                            <Badge variant="secondary" className="w-fit">
                              {exp.type}
                            </Badge>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Briefcase size={16} />
                              <span className="font-medium text-primary">{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <TrendingUp size={16} className="text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold mb-3 text-sm">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
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
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mt-20">
            <h3 className="text-2xl font-display font-semibold mb-8 text-center">
              <span className="text-gradient">Education</span>
            </h3>
            <Card className="shadow-card bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Bachelor of Engineering (B.E.)</h4>
                    <p className="text-primary font-medium">Computer Science and Engineering</p>
                    <p className="text-sm text-muted-foreground">Dayananda Sagar College of Engineering</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">August 2018 - July 2022</p>
                    <p className="text-sm text-muted-foreground">Bengaluru, India</p>
                    <Badge variant="default" className="mt-2">
                      GPA: 8.6/10.0
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;