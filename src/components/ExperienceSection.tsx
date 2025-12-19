import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'LawSikho',
      position: 'Software Development Engineer 2',
      duration: 'May 2023 - Present',
      location: 'Remote',
      website: 'https://lawsikho.com',
      description: 'Led the full development lifecycle of the Learning Management system using the Agile methodology.',
      technologies: ['PHP', 'Laravel', 'Vue.js', 'Redis', 'MySQL', 'Sentry', 'New Relic'],
      achievements: [
        'Optimized APIs and reduced response time from 10 seconds to 2 seconds by eliminating duplicate queries',
        'Rebuilt Student Assignment Portal APIs, driving revenue growth from 100K to 1 million',
        'Improved database performance by 48% and increased data storage efficiency by 36%',
        'Integrated Redis caching to optimize response times and reduce system memory usage'
      ]
    },
    {
      company: 'Dealshare',
      position: 'Software Development Engineer 1',
      duration: 'Dec 2021 - Mar 2023',
      location: 'Jaipur, Rajasthan',
      website: 'https://www.dealshare.in',
      description: 'Part of Supply Chain Management team, worked on Post-order ETA calculation for an order, routing orders to delivery partners.',
      technologies: ['Yii2', 'Angular', 'Vue.js', 'MySQL', 'REST APIs'],
      achievements: [
        'Implemented BTS restrictions on IMS and DSD panels',
        'Increased order status marking accuracy from 30% to 90%',
        'Significantly reduced fraud cases through improved tracking systems'
      ]
    },
    {
      company: 'Softvolt IT Solutions',
      position: 'Software Developer',
      duration: 'Nov 2020 - Nov 2021',
      location: 'Jaipur, Rajasthan',
      website: '#',
      description: 'Implemented role-based admin panel features using Laravel Blade and secured REST API endpoints.',
      technologies: ['PHP', 'Laravel', 'Laravel Blade', 'MySQL', 'REST APIs'],
      achievements: [
        'Developed robust RESTful APIs with PHP',
        'Implemented role-based admin panel features',
        'Secured REST API endpoints for enhanced security'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through the tech industry, building impactful solutions and growing as a developer
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={exp.company}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {exp.position}
                      </h3>
                      <a 
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-accent transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </div>
                    <h4 className="text-xl font-semibold text-accent mb-3">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col md:items-end gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <CalendarDays size={14} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                <div className="mb-6">
                  <h5 className="font-semibold text-primary mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold text-primary mb-3">Technologies Used:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline"
                        className="text-xs hover:bg-accent hover:text-white hover:border-accent transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
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

export default ExperienceSection;