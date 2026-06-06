import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import TiltedCard from '../../components/TiltedCard/TiltedCard.jsx';

function ProjectSection() {
  const { lang } = useLanguage();

  const projects = [
    {
      title: { zh: '第五-第九届何朝宗杯', en: 'The 5th-9th He Chaozong Cup' },
      desc: { 
        zh: '第九届“何朝宗杯”陶瓷工业设计大赛', 
        en: 'The 9th "He Chaozong Cup" Ceramic Industrial Design Competition' 
      },
      img: '/assets/images/Project1.jpg',
      leftImg: true,
      links: [
        { label: { zh: '策划方案：', en: 'Planning Proposal: ' }, url: 'https://mp.weixin.qq.com/s/cIMGEx3llpHXqH21W0x9dQ' },
        { label: { zh: '活动回顾：', en: 'Event Review: ' }, url: 'https://mp.weixin.qq.com/s/_5G-ycjgMZ2Hgy5Q68uMJg' }
      ]
    },
    {
      title: { zh: '泉州市高价值专利大赛', en: 'Quanzhou High-Value Patent Competition' },
      desc: { 
        zh: '第二届泉州市高价值专利大赛', 
        en: 'The 2nd Quanzhou High-Value Patent Competition' 
      },
      img: '/assets/images/Project2.jpg',
      leftImg: false,
      links: [
        { label: { zh: '项目方案：', en: 'Project Proposal: ' }, url: 'https://mp.weixin.qq.com/s/SBSwnMp4uj1HgdObiEbc5A' },
        { label: { zh: '活动回顾：', en: 'Event Review: ' }, url: 'https://mp.weixin.qq.com/s/X4k9JMA2lBUYl4ojkSCEAw' }
      ]
    },
    {
      title: { zh: '中国（德化）陶瓷智能小家电创意设计大赛', en: 'China (Dehua) Ceramic Intelligent Small Home Appliances Creative Design Competition' },
      desc: { 
        zh: '负责赛事落地全流程执行', 
        en: 'Responsible for the full-process execution of the competition.' 
      },
      img: '/assets/images/Project3.jpg',
      leftImg: true,
      links: [
        { label: { zh: '大赛方案：', en: 'Competition Proposal: ' }, url: 'https://mp.weixin.qq.com/s/O2bM_Byd1ljDh1dquIDsCg' },
        { label: { zh: '活动回顾：', en: 'Event Review: ' }, url: 'https://mp.weixin.qq.com/s/gdwLjIrhrmT0FXxnRZOU0A' }
      ]
    }
  ];

  return (
    <section id="project" className="section black-bg">
      <h2>{lang === 'zh' ? '我的项目' : 'My Projects'}</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${project.leftImg ? 'left-img' : 'right-img'}`}>
            <TiltedCard
              imageSrc={project.img}
              // altText={project.title[lang]}
              captionText={project.title[lang]}
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  {project.title[lang]}
                </p>
              }
            />

            <div className="project-desc">
              <h3>{project.title[lang]}</h3>
              <p>{project.desc[lang]}</p>
              {project.links.map((link, linkIndex) => (
                <div key={linkIndex} className="project-link">
                  <span className="link-label">{link.label[lang]}</span>
                  <a href={link.url} target="_blank" rel="noreferrer">
                    {link.url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectSection;