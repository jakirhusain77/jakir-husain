const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
            The Story So Far
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-8"></div>
        </div>

        <div className="prose prose-lg max-w-none text-center animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            From accounting spreadsheets to code repositories — I'm now crafting digital 
            experiences at{' '}
            <a 
              href="https://peoplegrove.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline font-semibold"
            >
              PeopleGrove
            </a>
            , connecting students with life-changing opportunities through technology.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey began with a Kotlin book that sparked an obsession. What started as 
            curiosity evolved into a career pivot from accounting to coding — proving that 
            passion can rewrite your path.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;