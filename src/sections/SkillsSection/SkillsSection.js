import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import FadeContent from '../../components/FadeContent/FadeContent.jsx';

function SkillsSection() {
  const { lang } = useLanguage();

  const skills = [
    { name: { zh: 'Word', en: 'Word' }, icon: '/assets/icon/word.png' },
    { name: { zh: 'PPT', en: 'PPT' }, icon: '/assets/icon/ppt.png' },
    { name: { zh: 'Excel', en: 'Excel' }, icon: '/assets/icon/excel.png' },
    { name: { zh: 'Photoshop', en: 'Photoshop' }, icon: '/assets/icon/ps.jpg' },
    { name: { zh: 'Premiere', en: 'Premiere' }, icon: '/assets/icon/pr.jpg' },
    { name: { zh: 'SPSS', en: 'SPSS' }, icon: '/assets/icon/SPSS.jpg' }
  ];

  return (
    <section id="skills" className="section white-bg">
      <h2>{lang === 'zh' ? '我的技能' : 'My Skills'}</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <FadeContent key={index} blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
            <div className="skill-item">
              <img className="skill-icon" src={skill.icon} alt={skill.name[lang]} />
              <div className="skill-title">{skill.name[lang]}</div>
            </div>
          </FadeContent>
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;