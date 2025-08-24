import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MessageCircle, Phone } from 'lucide-react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Drop me a line anytime',
      action: 'Send Email',
      href: 'mailto:jakir.deshwali@gmail.com',
      color: 'text-red-600'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick chat or questions',
      action: 'Message Me',
      href: 'https://wa.me/919667403717',
      color: 'text-green-600'
    },
    {
      icon: Phone,
      title: 'Schedule Call',
      description: 'Let\'s discuss your project',
      action: 'Call Me',
      href: 'tel:+919667403717',
      color: 'text-blue-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Let's Build Something Amazing
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's start a conversation about your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactMethods.map((method) => (
            <Card key={method.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-full bg-secondary mb-4 ${method.color}`}>
                  <method.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-primary">
                  {method.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {method.description}
                </p>
                <Button 
                  asChild 
                  variant="outline" 
                  size="sm"
                  className="group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all"
                >
                  <a href={method.href} target="_blank" rel="noopener noreferrer">
                    {method.action}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Or connect with me on social media
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="https://www.linkedin.com/in/jakir-husain-306525143/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a href="mailto:jakir.deshwali@gmail.com" target="_blank" rel="noopener noreferrer">
                Email
              </a>
            </Button>  
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;