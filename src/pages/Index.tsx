import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import SkillsGrid from '../components/SkillsGrid';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsGrid />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm opacity-80">
            © 2024 Your Name. All rights reserved. Built with passion and React.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
