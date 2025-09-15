import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vishwajith.shastry@gmail.com",
      href: "mailto:vishwajith.shastry@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 8277070162",
      href: "tel:+918277070162",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bengaluru, India",
      href: "https://www.google.com/maps/place/ISRO+Layout,+Bengaluru,+Karnataka+560111/@12.8985487,77.5533809,16z/data=!3m1!4b1!4m6!3m5!1s0x3bae3fde3b11ae65:0xafe3382ab81acb6c!8m2!3d12.8984834!4d77.5590645!16s%2Fg%2F1tj_3pr6?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "View repositories",
      href: "https://github.com/Agnyathavasi/",
      color: "hover:text-gray-800",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/vishwajith-h-h-045852207/",
      color: "hover:text-blue-600",
    },
    {
      icon: FileText,
      title: "Resume",
      value: "Download PDF",
      href: "https://drive.google.com/file/d/1H5U7MwH7BrfDMyFrxo8qbwiam9sfcvD4/view?usp=sharing",
      color: "hover:text-green-600",
    },
  ];

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
              Ready to discuss your next project or opportunity? I'd love to
              hear from you. Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <Card className="shadow-card hover-lift bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-semibold mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
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
                <h3 className="text-xl font-display font-semibold mb-6">
                  Connect Online
                </h3>
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
                  <h4 className="font-semibold text-primary">
                    Available for Work
                  </h4>
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
    </section>
  );
};

export default ContactSection;
