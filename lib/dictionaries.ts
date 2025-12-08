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
      comingSoon: 'Coming Soon',
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
          slug: 'lark-base-app-mode',
          title: 'Lark Base App Mode',
          description: 'App building for everyone',
          image: '/assets/app-mode-hero.jpeg',
          client: 'Lark',
          role: 'Product Designer',
          year: '2024',
          sections: [],
          comingSoon: true,
        },
      ] as UnifiedProject[],
    },
    about: {
      title: 'About How I Made This Portfolio',
      intro: 'How I reduced my portfolio-making time from months to a week with AI',
      description: 'Portfolio creation has always been a pain point for me, as it is for many designers. From structuring the narrative to building the site or PDF, everything takes a long time to prepare. With this portfolio, however, I saw an opportunity to explore ways to expedite the process using AI. Here\'s what I did:',
      steps: [
        {
          number: 1,
          text: 'I spoke into a meeting app that transcribed my entire speech, where I detailed every challenge I faced while designing the project. By pasting the transcription into ChatGPT, it generated a structured document for me.',
        },
        {
          number: 2,
          text: 'I then pasted it into an online doc. With Atlas, I was able to edit the project documentation alongside AI.',
        },
        {
          number: 3,
          text: 'With a complete document, I continued asking ChatGPT to critique the doc until it met its standards.',
        },
        {
          number: 4,
          text: 'Using Cursor, I quickly built the website structure and continued modifying it.',
        },
        {
          number: 5,
          text: 'With ChatGPT and Gemini, I generated an HTML version of the page structure before actually implementing it with Cursor.',
        },
      ],
      challenges: {
        title: 'What I haven\'t figured out how to expedite with AI:',
        items: [
          'Being able to quickly edit parts of the website without using an Agent.',
          'Producing image/video assets with clean, consistent labeling.',
        ],
      },
    },
    contact: {
      title: 'Get in Touch',
      email: 'Email me',
      emailAddress: 'maojiaming1998@163.com',
      wechat: 'WeChat',
      wechatId: 'maojiaming1998',
      linkedin: 'LinkedIn',
      linkedinUrl: 'https://www.linkedin.com/in/jiaming-martin-m-499b03111',
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
      comingSoon: '即将推出',
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
          slug: 'lark-base-app-mode',
          title: '飞书多维表格应用模式',
          description: '让人人都能轻松搭建业务系统',
          image: '/assets/app-mode-hero.jpeg',
          client: '飞书',
          role: '产品设计师',
          year: '2024',
          sections: [],
          comingSoon: true,
        },
      ] as UnifiedProject[],
    },
    about: {
      title: '关于我是如何制作这个作品集的',
      intro: '如何用 AI 将作品集制作时间从数月缩短到一周',
      description: '制作作品集对我来说一直是个痛点，对许多设计师来说也是如此。从构建叙事结构到搭建网站或 PDF，每个环节都需要花费大量时间准备。然而，通过这个作品集，我看到了一个机会，探索如何用 AI 来加速这个过程。以下是我的做法：',
      steps: [
        {
          number: 1,
          text: '我使用会议应用进行语音输入，完整转录了我的讲述，详细描述了设计项目时遇到的每一个挑战。将转录内容粘贴到 ChatGPT 后，它为我生成了一份结构化的文档。',
        },
        {
          number: 2,
          text: '然后我将文档粘贴到在线文档中。使用 Atlas，我能够与 AI 一起编辑项目文档。',
        },
        {
          number: 3,
          text: '有了完整的文档后，我继续让 ChatGPT 对文档进行批判性审查，直到达到其标准。',
        },
        {
          number: 4,
          text: '使用 Cursor，我快速搭建了网站结构并持续进行修改。',
        },
        {
          number: 5,
          text: '使用 ChatGPT 和 Gemini，我在用 Cursor 实际实现之前，先生成了页面结构的 HTML 版本。',
        },
      ],
      challenges: {
        title: '我尚未找到如何用 AI 加速的部分：',
        items: [
          '能够在不使用 Agent 的情况下快速编辑网站的各个部分。',
          '生成具有清晰、一致标签的图像/视频素材。',
        ],
      },
    },
    contact: {
      title: '联系我',
      email: '发邮件',
      emailAddress: 'maojiaming1998@163.com',
      wechat: '微信',
      wechatId: 'maojiaming1998',
      linkedin: '领英',
      linkedinUrl: 'https://www.linkedin.com/in/jiaming-martin-m-499b03111',
    },
  },
};
