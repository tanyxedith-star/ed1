import React from 'react';
import './styles/main.css';
import Navbar from './sections/Navbar';
// import FloatBall from './sections/FloatBall';
import PersonalSection from './sections/PersonalSection';
import PhotoWallSection from './sections/PhotoWallSection';
import ExperienceSection from './sections/ExperienceSection';
import SkillsSection from './sections/SkillsSection';
import ProjectSection from './sections/ProjectSection';
import ContactSection from './sections/ContactSection';
import Footer from './sections/Footer';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Navbar />
        {/* <FloatBall /> */}
        <PersonalSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectSection />
        <PhotoWallSection />
        <ContactSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App; 