import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CalendarDays, MapPin, ExternalLink } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: 'PeopleGrove',
      position: 'Software Engineer II',
      duration: '2023 - Present',
      location: 'Remote',
      website: 'https://peoplegrove.com',
      description: 'Building scalable web applications that connect students with life-changing opportunities. Leading frontend architecture decisions and mentoring junior developers.',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      achievements: [
        'Increased user engagement by 40% through UI/UX improvements',
        'Reduced page load times by 60% through performance optimizations',
        'Led migration from legacy codebase to modern React architecture'
      ]
    },
    {
      company: 'TechCorp Solutions',
      position: 'Full Stack Developer',
      duration: '2021 - 2023',
      location: 'San Francisco, CA',
      website: 'https://techcorp.com',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to enterprise applications.',
      technologies: ['Vue.js', 'Python', 'Django', 'MySQL', 'Docker'],
      achievements: [
        'Delivered 15+ projects on time and within budget',
        'Implemented automated testing reducing bugs by 50%',
        'Mentored 3 junior developers in best practices'
      ]
    },
    {
      company: 'StartupXYZ',
      position: 'Frontend Developer',
      duration: '2020 - 2021',
      location: 'New York, NY',
      website: 'https://startupxyz.com',
      description: 'Built responsive web applications from the ground up. Collaborated closely with designers and product managers.',
      technologies: ['React', 'JavaScript', 'SASS', 'Firebase'],
      achievements: [
        'Built company\'s first mobile-responsive application',
        'Reduced development time by 30% through reusable components',
        'Achieved 95+ Google Lighthouse performance scores'
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