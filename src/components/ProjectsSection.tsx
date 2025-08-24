import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Calendar, Users } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Lawsikho.com',
      company: 'LawSikho',
      duration: 'Feb 2024 - Dec 2025',
      website: 'https://lawsikho.com/',
      description: 'LawSikho occupies the leadership space in e-learning system. Developed and maintained core backend modules using Laravel, including student enrollment, course management, and quiz handling.',
      technologies: ['Laravel', 'Laravel Blade', 'MySQL', 'Razorpay API'],
      achievements: [
        'Created dynamic admin panel for managing users, content, assignments, and reports',
        'Integrated Razorpay payment gateway for payment transactions',
        'Built comprehensive course management system'
      ]
    },
    {
      title: 'Bondu Job Portal',
      company: 'LawSikho',
      duration: 'Oct 2024 - Apr 2025',
      website: 'https://bondhu.co/',
      description: 'A job portal project like Naukri.com, created open APIs product so clients can use according to their UI. Designed Database and API Request Response using Swagger.',
      technologies: ['Laravel', 'MySQL', 'RabbitMQ', 'Swagger', 'Microservices'],
      achievements: [
        'Created developer tasks and collaborated with cross-functional teams',
        'Integrated RabbitMQ as Message Broker for microservices communication',
        'Designed comprehensive API documentation using Swagger'
      ]
    },
    {
      title: 'Assignment Portal',
      company: 'LawSikho',
      duration: 'Aug 2023 - Mar 2024',
      website: 'https://assignments.lawsikho.in/',
      description: 'Assignment portal where tutors create assignments, students submit their assignments, tutors evaluate student results, and certify students.',
      technologies: ['Laravel', 'MySQL', 'Vue.js', 'REST APIs'],
      achievements: [
        'Gathered and analyzed business requirements to define product vision',
        'Translated product requirements into technical specifications and user stories',
        'Built comprehensive assignment management workflow'
      ]
    },
    {
      title: 'Learning Management System (LMS)',
      company: 'LawSikho',
      duration: 'May 2023 - Jan 2024',
      website: 'https://myassignments.lawsikho.in',
      description: 'Service which provides platform to callers and onboarding team to onboard students using help of Ozonotel calling APIs.',
      technologies: ['Laravel', 'Ozonotel API', 'Edmingle API', 'MySQL'],
      achievements: [
        'Collaborated with frontend developers and led end-to-end development',
        'Coordinated with co-developers and kept project manager informed of development status',
        'Integrated third-party APIs like Ozonotel and Edmingle'
      ]
    },
    {
      title: 'Dealshare.in',
      company: 'Dealshare',
      duration: 'Feb 2022 - Mar 2023',
      website: 'https://www.dealshare.in/',
      description: 'Developed and enhanced core backend modules using Yii2 for handling order processing, user management, and catalog services.',
      technologies: ['Yii2', 'Angular', 'Vue.js', 'MySQL', 'REST APIs'],
      achievements: [
        'Worked closely with frontend teams to deliver seamless user experiences',
        'Extended high-performance Yii2 components for Order lifecycle flows',
        'Handled inventory management and user-specific pricing systems'
      ]
    },
    {
      title: 'IMS - Inventory Management System',
      company: 'Dealshare',
      duration: 'Dec 2021 - Mar 2023',
      website: 'https://wah.dealshare.in/delivery',
      description: 'Delivery panel is inventory management system and warehouse management system. Developed delivery panel APIs to help delivery persons get location, order details, routes and order status.',
      technologies: ['Yii2', 'MySQL', 'REST APIs', 'Location Services'],
      achievements: [
        'Built comprehensive delivery management system',
        'Developed APIs for location-based order routing',
        'Cooperated with ground team to fix live production bugs'
      ]
    },
    {
      title: 'Vision 11',
      company: 'Personal Project',
      duration: '2021',
      website: 'https://vision11.in/',
      description: 'Vision11 is a fantasy sports platform allowing Indian sports fans to showcase their sports knowledge.',
      technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript'],
      achievements: [
        'Contributed to the admin panel development',
        'Enabled operations team to manage team configurations and offers',
        'Built fantasy sports management features'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of projects I've built, from e-learning platforms to job portals and inventory management systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 animate-fade-in h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.website !== '#' && (
                        <a 
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-accent transition-colors"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Users size={14} />
                        {project.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold text-primary mb-2">Key Features:</h5>
                  <ul className="space-y-1 text-sm">
                    {project.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-accent mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <h5 className="font-semibold text-primary mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
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

export default ProjectsSection;