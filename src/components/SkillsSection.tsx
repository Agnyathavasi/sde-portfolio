import { Award, Star, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: '💻',
      skills: [
        { name: 'Vue.js', level: 'Expert', years: '3+' },
        { name: 'React.js', level: 'Expert', years: '3+' },
        { name: 'TypeScript', level: 'Advanced', years: '3+' },
        { name: 'JavaScript (ES6+)', level: 'Expert', years: '4+' },
        { name: 'HTML5 & CSS3', level: 'Expert', years: '4+' },
        { name: 'SCSS/SASS', level: 'Advanced', years: '3+' }
      ]
    },
    {
      title: 'Frameworks & Libraries',
      icon: '⚛️',
      skills: [
        { name: 'Redux/Vuex', level: 'Advanced', years: '2+' },
        { name: 'Tailwind CSS', level: 'Advanced', years: '2+' },
        { name: 'Vite', level: 'Advanced', years: '2+' },
        { name: 'Webpack', level: 'Intermediate', years: '2+' },
        { name: 'Node.js', level: 'Intermediate', years: '2+' },
        { name: 'Express.js', level: 'Basic', years: '1+' }
      ]
    },
    {
      title: 'Tools & DevOps',
      icon: '🛠️',
      skills: [
        { name: 'Git & GitHub', level: 'Expert', years: '4+' },
        { name: 'AWS', level: 'Intermediate', years: '1+' },
        { name: 'Jenkins', level: 'Intermediate', years: '1+' },
        { name: 'JIRA', level: 'Advanced', years: '2+' },
        { name: 'Browser DevTools', level: 'Expert', years: '3+' },
        { name: 'Chrome Extensions', level: 'Advanced', years: '2+' }
      ]
    },
    {
      title: 'Specializations',
      icon: '🎯',
      skills: [
        { name: 'Component Architecture', level: 'Expert', years: '3+' },
        { name: 'Performance Optimization', level: 'Advanced', years: '2+' },
        { name: 'Micro Frontends', level: 'Advanced', years: '1+' },
        { name: 'REST APIs', level: 'Advanced', years: '3+' },
        { name: 'Responsive Design', level: 'Expert', years: '3+' },
        { name: 'Code Review', level: 'Advanced', years: '2+' }
      ]
    }
  ];

  const certifications = [
    {
      title: 'HackerRank React Certification',
      issuer: 'HackerRank',
      badge: '5-star badge holder',
      skills: ['React', 'JavaScript', 'CSS', 'Problem Solving']
    },
    {
      title: 'LeetCode Problem Solver',
      issuer: 'LeetCode',
      badge: '150+ problems solved',
      skills: ['Data Structures', 'Algorithms', 'Dynamic Programming', 'Graph Theory']
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Basic': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Skills & <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and the tools I use 
              to build modern, scalable web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="text-2xl">{category.icon}</div>
                    <h3 className="text-xl font-display font-semibold">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3">
                            <span className="font-medium text-sm">{skill.name}</span>
                            <Badge className={`text-xs ${getLevelColor(skill.level)}`}>
                              {skill.level}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">
                            {skill.years} experience
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-display font-semibold mb-8 text-center">
              <span className="text-gradient">Certifications & Achievements</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        {index === 0 ? <Award size={24} className="text-primary" /> : <Trophy size={24} className="text-primary" />}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold mb-1">{cert.title}</h4>
                        <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                        <Badge variant="outline" className="mb-3 border-primary/30 text-primary bg-primary/5">
                          <Star size={12} className="mr-1" />
                          {cert.badge}
                        </Badge>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Components Built</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <div className="text-sm text-muted-foreground">Micro Frontends</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <div className="text-sm text-muted-foreground">Performance Boost</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">35%</div>
              <div className="text-sm text-muted-foreground">Dev Time Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;