import { UnifiedProject } from './case-study-types';
import { zoomProjectData } from './dictionaries/zoom';

export type Locale = 'en' | 'zh';

// We can keep this type alias for backward compatibility if needed, 
// but internal logic should prefer UnifiedProject.
export type Project = UnifiedProject;

export const dictionary = {
  en: {
    nav: {
      work: 'Work',
      about: 'About',
      contact: 'Contact',
      home: 'Home',
      prev: 'Prev',
      next: 'Next',
      overview: 'Overview',
    },
    hero: {
      title: "I'm a UX designer building systems.",
      subtitle: 'I turn complex and flows into coherent patterns that make products easier to use, easier to ship, and easier to grow.',
    },
    work: {
      title: 'Selected Work',
      projects: [
        zoomProjectData.en,
        {
          id: 2,
          slug: 'beta-platform',
          title: 'Beta Platform',
          description: 'Redesigning the dashboard for better user engagement.',
          image: '/window.svg', // Placeholder
          client: 'SaaS Inc.',
          role: 'UX Researcher',
          year: '2023',
          sections: [
             { id: 'overview', title: 'Overview', content: 'Beta Platform needed a dashboard overhaul to help users visualize their data more effectively.' },
             { id: 'challenge', title: 'The Challenge', content: 'The legacy dashboard was cluttered and slow, leading to low daily active usage.' },
             { id: 'process', title: 'Process', content: 'We used card sorting and tree testing to restructure the information architecture.' },
             { id: 'outcome', title: 'Outcome', content: 'Daily active users increased by 15% within the first month of launch.' },
          ]
        },
        {
          id: 3,
          slug: 'gamma-design',
          title: 'Gamma Design System',
          description: 'Creating a unified design language for enterprise software.',
          image: '/window.svg', // Placeholder
          client: 'Enterprise Corp',
          role: 'UI Designer',
          year: '2023',
          sections: [
             { id: 'overview', title: 'Overview', content: 'Gamma is a multi-platform design system created to unify the product suite of Enterprise Corp.' },
             { id: 'challenge', title: 'The Challenge', content: 'Inconsistent UI components were increasing technical debt and slowing down development.' },
             { id: 'process', title: 'Process', content: 'We audited over 500 screens and consolidated 50+ disparate components into a atomic system.' },
             { id: 'outcome', title: 'Outcome', content: 'Development speed increased by 30% and design consistency score reached 98%.' },
          ]
        },
      ] as UnifiedProject[],
    },
    about: {
      title: 'About Me',
      description: 'I am a passionate UX designer with a focus on simplicity and functionality. I believe in design that serves the user first. My approach combines research-driven insights with clean, modern aesthetics to solve complex problems.',
    },
    contact: {
      title: 'Get in Touch',
      email: 'Email me',
      linkedin: 'LinkedIn',
      action: 'Say Hello',
    },
  },
  zh: {
    nav: {
      work: '作品',
      about: '关于',
      contact: '联系',
      home: '首页',
      prev: '上一个',
      next: '下一个',
      overview: '概览',
    },
    hero: {
      title: '构建系统的 UX 设计师',
      subtitle: '我将复杂的流程转化为连贯的模式，使产品更易于使用、更易于发布且更易于扩展。',
    },
    work: {
      title: '精选作品',
      projects: [
        zoomProjectData.zh,
        {
          id: 2,
          slug: 'beta-platform',
          title: 'Beta 平台',
          description: '重新设计仪表板以提高用户参与度。',
          image: '/window.svg',
          client: 'SaaS Inc.',
          role: 'UX 研究员',
          year: '2023',
          sections: [
             { id: 'overview', title: '概览', content: 'Beta 平台需要对其仪表板进行彻底改革，以帮助用户更有效地可视化数据。' },
             { id: 'challenge', title: '挑战', content: '旧版仪表板杂乱且缓慢，导致日活跃使用率较低。' },
             { id: 'process', title: '过程', content: '我们使用卡片分类和树测试来重构信息架构。' },
             { id: 'outcome', title: '结果', content: '发布后的第一个月内，日活跃用户增加了 15%。' },
          ]
        },
        {
          id: 3,
          slug: 'gamma-design',
          title: 'Gamma 设计系统',
          description: '为企业软件创建统一的设计语言。',
          image: '/window.svg',
          client: 'Enterprise Corp',
          role: 'UI 设计师',
          year: '2023',
          sections: [
             { id: 'overview', title: '概览', content: 'Gamma 是一个多平台设计系统，旨在统一 Enterprise Corp 的产品套件。' },
             { id: 'challenge', title: '挑战', content: '不一致的 UI 组件增加了技术债务并减缓了开发速度。' },
             { id: 'process', title: '过程', content: '我们审核了 500 多个屏幕，将 50 多个不同的组件整合到一个原子系统中。' },
             { id: 'outcome', title: '结果', content: '开发速度提高了 30%，设计一致性得分达到 98%。' },
          ]
        },
      ] as UnifiedProject[],
    },
    about: {
      title: '关于我',
      description: '我是一名充满激情的 UX 设计师，专注于简洁和功能性。我相信设计首先应服务于用户。我的方法结合了研究驱动的洞察力和现代美学，以解决复杂的问题。',
    },
    contact: {
      title: '联系我',
      email: '发邮件',
      linkedin: '领英',
      action: '打个招呼',
    },
  },
};
