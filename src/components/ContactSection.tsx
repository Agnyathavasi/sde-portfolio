import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, FileText, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'vishwajith.shastry@gmail.com',
      href: 'mailto:vishwajith.shastry@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8277070162',
      href: 'tel:+918277070162'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bengaluru, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: 'GitHub',
      value: 'View repositories',
      href: '#',
      color: 'hover:text-gray-800'
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      href: '#',
      color: 'hover:text-blue-600'
    },
    {
      icon: FileText,
      title: 'Resume',
      value: 'Download PDF',
      href: '#',
      color: 'hover:text-green-600'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project or opportunity? I'd love to hear from you. 
              Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-card bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-display font-semibold mb-6">Send me a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="transition-smooth focus:ring-2 focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project discussion, Job opportunity, etc."
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or opportunity..."
                        rows={6}
                        required
                        className="transition-smooth focus:ring-2 focus:ring-primary/20 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full hero-gradient text-primary-foreground hover-lift"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-primary-foreground border-t-transparent mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={18} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <info.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{info.title}</div>
                          <div className="text-sm text-muted-foreground group-hover:text-primary transition-smooth">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold mb-6">Connect Online</h3>
                  <div className="space-y-3">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group ${link.color}`}
                      >
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <link.icon size={18} className="text-primary" />
                        </div>
                        <div>
                          <div className="font-medium text-sm">{link.title}</div>
                          <div className="text-sm text-muted-foreground group-hover:text-foreground transition-smooth">
                            {link.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info */}
              <Card className="shadow-card bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle size={20} className="text-primary" />
                    <h4 className="font-semibold text-primary">Available for Work</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    I'm currently open to new opportunities and exciting projects. 
                    Let's discuss how we can work together!
                  </p>
                  <div className="text-xs text-muted-foreground">
                    ⚡ Typically responds within 24 hours
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;