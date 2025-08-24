import { Badge } from '@/components/ui/badge';

const SkillsGrid = () => {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3', 'Vue.js']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL', 'Microservices']
    },
    {
      category: 'Database',
      skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Prisma', 'Supabase', 'Firebase']
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Vercel', 'Linux', 'CI/CD']
    },
    {
      category: 'Mobile',
      skills: ['React Native', 'Flutter', 'Kotlin', 'Swift', 'Expo']
    },
    {
      category: 'Other',
      skills: ['Machine Learning', 'Data Analysis', 'UI/UX Design', 'Agile', 'Scrum']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Skills & Technologies
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.category}
              className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-4 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="text-xs py-1 px-3 bg-secondary hover:bg-accent hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsGrid;