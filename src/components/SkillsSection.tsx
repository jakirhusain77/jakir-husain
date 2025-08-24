import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Zap, Lightbulb } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Clean Code Advocate',
      description: 'Passionate about crafting elegant, maintainable code that not only works but tells a story through its clarity and structure.',
      color: 'text-blue-600'
    },
    {
      icon: Database,
      title: 'Full Stack Engineer', 
      description: 'Bridging the gap between stunning user interfaces and robust backend systems, creating seamless digital experiences from end to end.',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      title: 'Performance Optimizer',
      description: 'Dedicated to building lightning-fast applications that scale effortlessly, serving millions of users without breaking a sweat.',
      color: 'text-yellow-600'
    },
    {
      icon: Lightbulb,
      title: 'Creative Problem Solver',
      description: 'Approaching challenges with a unique blend of technical expertise and stoic philosophy, finding innovative solutions where others see obstacles.',
      color: 'text-purple-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            What I Bring to the Table
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A unique blend of technical expertise and passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.title} 
              className="group hover:shadow-lg transition-all duration-300 border-0 bg-card hover:bg-white hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className={`p-3 rounded-lg bg-secondary ${skill.color}`}>
                    <skill.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;