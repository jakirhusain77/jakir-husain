const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none text-center animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Dedicated and efficient Software Developer with 5 years of web development experience, 
            specializing in back-end technologies such as PHP, Laravel, and YII2, along with Vue.js 
            and Angular as front-end frameworks.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Proficient in the full software development lifecycle, from planning and design to 
            development, testing and deployment, consistently delivering scalable and high quality 
            solutions that drive business impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;