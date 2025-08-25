import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Linkedin, Github, FileText, ExternalLink } from 'lucide-react';

const HeroSection = () => {
  const socialLinks = [
    { 
      icon: Mail, 
      label: 'Email', 
      href: 'mailto:jakir.deshwali@gmail.com',
      color: 'bg-red-600 hover:bg-red-700'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      href: 'https://www.linkedin.com/in/jakir-husain-306525143/',
      color: 'bg-blue-700 hover:bg-blue-800'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      href: 'https://github.com',
      color: 'bg-gray-800 hover:bg-gray-900'
    },
    { 
      icon: FileText, 
      label: 'Resume', 
      href: '/resume.pdf', // Update this path to match your resume file
      color: 'bg-green-600 hover:bg-green-700'
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm">
            Software Development Engineer 2 at LawSikho
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi! I'm{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Jakir Husain
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Building scalable web applications with <span className="text-accent font-semibold">PHP, Laravel & Vue.js</span>.
          </p>
          
          <p className="text-lg text-muted-foreground mb-12">
            5 years of experience in full-stack development. ✨
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {socialLinks.map((link) => (
            <Button
              key={link.label}
              asChild
              size="sm"
              className={`${link.color} text-white hover:scale-105 transition-all duration-200`}
            >
              <a 
                href={link.href} 
                target={link.label === 'Resume' ? undefined : "_blank"}
                rel={link.label === 'Resume' ? undefined : "noopener noreferrer"}
                download={link.label === 'Resume' ? true : undefined}
                className="flex items-center gap-2"
              >
                <link.icon size={16} />
                {link.label}
              </a>
            </Button>
          ))}
        </div>

        {/* Main Tagline */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-primary">
            Crafting digital solutions with{' '}
            <span className="text-accent">expertise & passion.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Transforming ideas into scalable web applications. 🚀
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;