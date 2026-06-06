import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

function ExperienceSection() {
  const { lang } = useLanguage();

  return (
    <section id="about" className="section black-bg">
      <h2>{lang === 'zh' ? '个人经历' : 'My Experience'}</h2>
      <div className="exp-list">
        {/* Education */}
        <div className="exp-row">
          <div className="exp-left">
            <div className="exp-title-row">
              <img className="exp-icon" src="/assets/images/中南林业科技大学.png" alt={lang === 'zh' ? '中南林业科技大学校徽' : 'CSUFT Logo'} />
              <span className="exp-title">{lang === 'zh' ? '中南林业科技大学' : 'Central South University of Forestry and Technology'}</span>
            </div>
            <div className="exp-type-row">
              <span className="exp-type">{lang === 'zh' ? '本科' : "Bachelor's Degree"}</span>
            </div>
            <div className="exp-info-row">
              <span className="exp-identity">{lang === 'zh' ? '会展经济与管理' : 'Convention and Exhibition Economics and Management'}</span>
              <span className="exp-time">2017.9-2021.7</span>
            </div>
          </div>
          <div className="exp-right">
            <div className="exp-desc">
              {lang === 'zh' 
                ? '主修课程：\n●  管理学原理、会展项目管理、会展文案、会展沟通技巧、活动管理等'
                : 'Major Courses:\n●  Principles of Management, MICE Project Management, MICE Copywriting, MICE Communication Skills, Event Management, etc.'
              }
            </div>
          </div>
        </div>

        {/* Fulltime */}
        <div className="exp-row">
          <div className="exp-left">
            <div className="exp-title-row">
              <img className="exp-icon" src="/assets/images/公司图片.jpg" alt="xx" />
              <span className="exp-title">{lang === 'zh' ? '泉州市迪特工业设计有限公司' : 'Quanzhou Diite Industrial Design Co., Ltd.'}</span>
            </div>
            <div className="exp-type-row">
              <span className="exp-type">{lang === 'zh' ? '全职' : 'Full-time'}</span>
            </div>
            <div className="exp-info-row">
               <span className="exp-identity">{lang === 'zh' ? '矮凳网部门 - 活动策划执行' : 'i凳网 Dept - Event Planning & Execution'}</span>
               <span className="exp-time">2021.9-2025.12</span>
             </div>
          </div>
          <div className="exp-right">
            <div className="exp-desc">
              {lang === 'zh' 
                ? '主要职责：\n1.线下赛事策划及执行：多场线下设计赛事的全流程操盘，跨部门协调资源，覆盖前期方案策划、现场执行与后期复盘总结，确保项目在预算与时间内高效交付\n2.线上网站运营活动策划及执行：多场线上活动策划，促进拉新和网页引流\n3.平台生态内容维护与用户关系运营：\n内容维护：多渠道挖掘并整合行业资讯，持续更新内容，保障网站核心内容的时效性与丰富度，巩固平台专业形象。关系维护：独立运营官方工作账号及用户社群；定期维护各高校教师关系，拓展并稳固平台专业生态伙伴网络。\n4.新媒体矩阵运营：\n公众号内容赋能：内容更新，运用AI工具辅助生成节假日海报等视觉素材，提升内容生产效率与视觉统一性。\n小红书：0-1搭建矮凳网小红书账号，完成账号定位、内容规划搭建，累计增长粉丝3500+。'
                : 'Responsibilities:\n1. Offline Event Planning & Execution: Full-lifecycle management of multiple offline design competitions, cross-departmental resource coordination, covering planning, execution, and review to ensure efficient delivery within budget.\n2. Online Website Operation Activity Planning & Execution: Planned online activities to drive user acquisition and website traffic.\n3. Platform Ecosystem Content Maintenance & User Relationship Operation:\nContent Maintenance: Aggregated industry news through multiple channels to ensure content timeliness and richness, strengthening professional image. Relationship Maintenance: Operated official accounts and communities; maintained university relations to expand the partner network.\n4. New Media Matrix Operation:\nWeChat Official Account: Content updates and AI-assisted visual creation (e.g., holiday posters) to improve efficiency and consistency.\nXiaohongshu: Built the official account from 0 to 1, including positioning and content planning, achieving 3,500+ followers.'
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;