import { UnifiedProject } from '../case-study-types';

export const zoomProjectData: { en: UnifiedProject; zh: UnifiedProject } = {
  en: {
    id: 1,
    slug: 'subscription-redesign-zoom',
    title: 'Zoom Subscription Redesign',
    description: 'Streamlining the end-to-end subscription experience for enterprise customers, reducing churn and increasing upsell conversion.',
    image: '/assets/zoom-hero.png',
    video: '/assets/zoom-hero.mp4',
    client: 'Zoom',
    role: 'Lead Product Designer',
    year: '2024',
    sections: [], // We can keep this for backward compatibility or migrate legacy sections here if needed, but `details` will supersede it for the new template.
    details: {
        hero: {
          eyebrow: "Case Study · B2B SaaS · Subscription Lifecycle",
          title: "Zoom Subscription Redesign",
          description: "Streamlining the end-to-end subscription experience for online customers, reducing churn and increasing upsell conversion.",
          tags: ["UX Design", "Product Strategy", "Design Systems"],
          meta: [
            { label: "Role", value: "Lead Product Designer" },
            { label: "Timeline", value: "6 Months" },
            { label: "Team", value: "2 PMs, 4 Engineers" }
          ],
          heroVisualPlaceholder: "Hero Visual: Dashboard Screenshot or Abstract Representation",
          heroVideo: "/assets/zoom-hero.mp4",
        },
        metrics: {
          title: "Key Impact",
          metrics: [
            {
              label: "Add-on Conversion",
              value: "5% → 15%",
              description: "Increase in users adding premium features during checkout."
            },
            {
              label: "Churn Rate",
              value: "-12%",
              description: "Reduction in cancellations due to improved plan clarity."
            },
            {
              label: "Support Tickets",
              value: "-25%",
              description: "Decrease in billing-related inquiries.",
              note: "Measured over 3 months post-launch"
            }
          ]
        },
        context: {
          title: "Context & Constraints",
          paragraphs: [
            "Zoom's rapid growth led to a fragmented subscription management experience. Users struggled to understand their plans, upgrade paths were unclear, and billing was a major pain point.",
            "The goal was to unify the pricing, checkout, and management flows into a cohesive lifecycle experience that empowered users to self-serve while driving revenue growth.",
            "We faced significant technical debt in the legacy billing system and tight deadlines aligned with the quarterly release cycle."
          ],
          summary: {
            scopeItems: ["Pricing Page", "Checkout Flow", "Subscription Management Dashboard"],
            teamItems: ["1 Lead Designer (Me)", "2 Product Managers", "4 Frontend Engineers", "1 UX Researcher"],
            constraintItems: ["Legacy Billing API", "Strict Brand Guidelines", "6-week Dev Cycle"]
          }
        },
        lifecycle: {
          title: "Subscription Lifecycle Overview",
          phases: [
            {
              phaseNumber: 1,
              title: "Pricing · Selection",
              description: "Help users understand value and pick the right plan.",
              chips: ["Clarity", "Comparison"],
              image: "/assets/zoom-overview-checkout.jpg" // Using existing checkout image as placeholder since pricing image is missing
            },
            {
              phaseNumber: 2,
              title: "Checkout · Conversion",
              description: "Streamline the purchase flow and reduce drop-off.",
              chips: ["Trust", "Efficiency"],
              image: "/assets/zoom-overview-checkout.jpg"
            },
            {
              phaseNumber: 3,
              title: "Management · Retention",
              description: "Empower users to manage seats and add-ons easily.",
              chips: ["Control", "Self-serve"],
              image: "/assets/zoom-overview-billing.jpg"
            }
          ]
        },
        phases: [
          {
            intro: {
              phaseNumber: 1,
              phaseLabel: "Pricing",
              title: "Clarifying Plans & Add-ons",
              problems: [
                {
                  title: "Confusion & Missed Revenue",
                  content: [
                    "Users were confused by the difference between 'Pro' and 'Business' plans.",
                    "Add-ons were hidden in sub-menus, leading to missed revenue.",
                    "Mobile experience was non-existent."
                  ]
                }
              ],
              userQuote: "I just want to know if I need the webinar add-on or if it comes with the plan.",
              beforeLabel: "Before: Legacy Pricing",
              beforePlaceholderText: "Screenshot of cluttered pricing table with tiny text and confusing feature lists."
            },
            moves: [
              {
                id: "pricing-move-1",
                eyebrow: "Move 1 · Card + 'Learn more' modal",
                title: "Turn add-ons into focused decisions, not footnotes",
                metaPills: ["IA & Interaction", "Ownership: end-to-end design"],
                subtitle: "Instead of burying add-ons, I elevated them to first-class citizens in the selection flow.",
                whatINoticed: [
                  "Analytics showed users clicking 'back' repeatedly to compare options.",
                  "Heatmaps indicated low engagement with the feature comparison table."
                ],
                whatIDecided: [
                  "Introduced a card-based layout for add-ons with clear value props.",
                  "Added a 'Learn more' modal for detailed feature breakdowns without leaving the flow."
                ],
                howIDroveIt: [
                  "Prototyped 3 variations and tested with 5 users to validate the card layout.",
                  "Worked with engineering to ensure the modal was accessible and performant."
                ],
                myContribution: [
                  "Designed the card component and modal interaction.",
                  "Wrote the microcopy for the add-on descriptions."
                ],
                visualPlaceholderText: "Visual: New Add-on Cards with clear pricing and 'Add' buttons."
              }
            ]
          },
          {
            intro: {
              phaseNumber: 2,
              phaseLabel: "Checkout",
              title: "Streamlining the Purchase Path",
              problems: [
                {
                   title: "Friction & Abandonment",
                   content: [
                     "High cart abandonment rate (65%) on the payment details page.",
                     "Users couldn't easily edit their plan selection without restarting.",
                     "Lack of clear order summary caused trust issues."
                   ]
                }
              ],
              beforeLabel: "Before: Multi-step Checkout",
              beforePlaceholderText: "Screenshot of a long, scary form with no order summary visible."
            },
            moves: [
              {
                id: "checkout-move-1",
                eyebrow: "Move 1 · Sticky Summary",
                title: "Always-visible context",
                metaPills: ["UX Pattern", "Trust"],
                subtitle: "Users need to know what they are paying for at every step.",
                whatINoticed: [
                  "Users were opening new tabs to double-check pricing.",
                  "Support tickets mentioned 'surprise charges' due to lack of clarity."
                ],
                whatIDecided: [
                  "Implemented a sticky right-rail order summary that updates in real-time.",
                  "Added clear line items for taxes and discounts."
                ],
                howIDroveIt: [
                  "Collaborated with the backend team to ensure real-time pricing calculation.",
                  "Advocated for transparency over 'hidden fees'."
                ],
                myContribution: [
                  "Designed the responsive behavior of the sticky summary.",
                  "Created the 'edit' interaction for line items."
                ],
                visualPlaceholderText: "Visual: Sticky Order Summary component on the right side of the form."
              }
            ]
          },
          {
            intro: {
              phaseNumber: 3,
              phaseLabel: "Subscription Management",
              title: "Empowering Self-Service",
              problems: [
                 {
                   title: "Dependency on Support",
                   content: [
                     "Users had to call support to downgrade or cancel.",
                     "Adding seats required a complex prorated calculation that wasn't shown.",
                     "Invoices were hard to find and download."
                   ]
                 }
              ],
              beforeLabel: "Before: Admin Panel",
              beforePlaceholderText: "Screenshot of a 90s style admin table with cryptic button labels."
            },
            moves: [
              {
                id: "sub-move-1",
                eyebrow: "Move 1 · Visual Dashboard",
                title: "Usage at a glance",
                metaPills: ["Dashboard Design", "Data Viz"],
                subtitle: "Giving admins clear visibility into their seat usage and billing cycle.",
                whatINoticed: [
                  "Admins were over-purchasing seats because they couldn't see active usage.",
                  "Billing contacts were often different from system admins."
                ],
                whatIDecided: [
                  "Created a visual dashboard showing seat utilization and upcoming renewals.",
                  "Separated 'Billing' and 'User Management' into distinct but connected views."
                ],
                howIDroveIt: [
                  "Led a workshop with key account managers to understand admin pain points.",
                  "Iterated on data visualization styles to match the new brand system."
                ],
                myContribution: [
                  "End-to-end visual design of the dashboard widgets.",
                  "Defined the logic for the 'utilization alert' states."
                ],
                visualPlaceholderText: "Visual: Modern dashboard with usage graphs and clear action buttons."
              }
            ]
          }
        ],
        patterns: {
          title: "Patterns & Reusable Components",
          intro: "To ensure consistency and speed up development, I established a set of reusable patterns for the subscription domain.",
          patterns: [
            {
              title: "Pricing Card",
              description: "A flexible card component that handles tiers, discounts, and feature lists.",
              myRole: "Component Architecture & Visual Design"
            },
            {
              title: "Order Summary",
              description: "A responsive summary module used in checkout, upgrades, and invoice views.",
              myRole: "Interaction Design & States"
            },
            {
              title: "Empty State",
              description: "Illustrative empty states that guide users to take action (e.g., 'Add your first user').",
              myRole: "Illustration Direction"
            }
          ]
        },
        reflection: {
          title: "Reflections",
          learnings: [
            "The importance of bringing engineering in early to validate pricing logic feasibility.",
            "How to balance business goals (upsell) with user needs (clarity and trust).",
            "Documentation is key when handing off complex logic like proration."
          ],
          growth: [
            "Gained confidence in leading cross-functional workshops.",
            "Improved my ability to articulate design decisions in terms of business impact.",
            "Learned to navigate technical constraints without compromising the core user experience."
          ]
        }
    }
  },
  zh: {
    id: 1,
    slug: 'subscription-redesign-zoom',
    title: 'Zoom 订阅生命周期体验优化',
    description: '优化企业客户的端到端订阅体验，减少流失并提高增购转化率。',
    image: '/assets/zoom-hero.png',
    video: '/assets/zoom-hero.mp4',
    client: 'Zoom',
    role: '首席产品设计师',
    year: '2024',
    sections: [],
    details: {
        hero: {
          eyebrow: "案例研究 · B2B SaaS · 订阅生命周期",
          title: "Zoom 订阅生命周期体验优化",
          description: "疫情期间，Zoom 获得了大量个人用户和中小企业客户，但整体商业模式长期依赖销售团队，自助订阅体系相对滞后。恰恰是这批新增的中小企业用户，更倾向于在线上自主完成购买和升级，这让老旧的线上购买流程逐渐变成增长瓶颈：转化率偏低、非自愿流失偏高。",
          tags: ["UX 设计", "产品策略", "增长设计"],
          meta: [
            { label: "角色", value: "首席产品设计师" },
            { label: "时间", value: "6 个月" },
            { label: "团队", value: "2 PM, 4 开发" }
          ],
          heroVisualPlaceholder: "视觉展示：仪表板截图或抽象表现",
          heroVideo: "/assets/zoom-hero.mp4",
        },
        metrics: {
          title: "核心成果",
          metrics: [
            {
              label: "核心附加产品转化率",
              value: "5% → 15%",
              description: "用户购买附加产品转化率显著提升。"
            },
            {
              label: "购买流程转化率",
              value: "35% ↑",
              description: "核心流程重构后，购买完成率显著提升。"
            },
            {
              label: "非自愿流失率",
              value: "17% ↓",
              description: "通过订阅中心优化，减少了意外取消。",
            }
          ]
        },
        context: {
          title: "项目背景",
          paragraphs: [
            "疫情期间，Zoom 获得了大量个人用户和中小企业客户，但整体商业模式长期依赖销售团队，自助订阅体系相对滞后。",
            "恰恰是这批新增的中小企业用户，更倾向于在线上自主完成购买和升级，这让老旧的线上购买流程逐渐变成增长瓶颈：转化率偏低、非自愿流失偏高。",
            "在这个背景下，我作为订阅生命周期的产品设计师，负责对 价格页、购买流程和订阅管理 进行系统性优化，希望让用户不用依赖销售，也能看得懂产品、顺利完成购买；并且在之后的使用中，能安心管理自己的订阅。"
          ],
          summary: {
            scopeItems: ["定价页面", "结账流程", "订阅管理仪表板"],
            teamItems: ["1 首席设计师 (我)", "2 产品经理", "4 前端工程师", "1 UX 研究员"],
            constraintItems: ["旧版计费 API", "严格的品牌准则", "6 周开发周期"]
          }
        },
        lifecycle: {
          title: "订阅生命周期概览",
          phases: [
            {
              phaseNumber: 1,
              title: "价格页",
              description: "从「只买会议」到「理解和购买附加产品」",
              chips: ["清晰度", "价值传递"],
              image: "/assets/zoom-hero.png" // Using existing checkout image as placeholder
            },
            {
              phaseNumber: 2,
              title: "购买流程",
              description: "从「又长又乱」到「清晰流畅」",
              chips: ["信任", "效率"],
              image: "/assets/zoom-overview-checkout.jpg"
            },
            {
              phaseNumber: 3,
              title: "订阅管理",
              description: "把「看不懂、不敢改」变成「看得清、敢操作」",
              chips: ["控制", "自助服务"],
              image: "/assets/zoom-overview-billing.jpg"
            }
          ]
        },
        phases: [
          {
            intro: {
              phaseNumber: 1,
              phaseLabel: "价格页",
              title: "价格页：从「只买会议」到「理解和购买附加产品」",
              problems: [
                {
                  title: "数据侧：有曝光、没转化",
                  content: [
                    "通过 Contentsquare 等分析工具，我发现：",
                    "滚动到附加产品区域的用户超过 10%，但点击购买的不到 1%；",
                    "大量用户尝试点击卡片或 “More features”，但得不到更多信息。",
                    "哪怕点击了 Buy Now，很多用户也没有完成购买"
                  ]
                },
                {
                  title: "用户侧：看不懂产品能做什么",
                  content: [
                    "与用研合作，访谈了 6 位中小企业主 / 个人用户，大家普遍反馈：",
                    "卡片提供的信息过于匮乏；",
                    "文案太抽象，看起来像在讲功能，而不是告诉我能解决什么问题。"
                  ],
                  quote: "What does unlimited concurrently editable boards even mean? I mean you have a whiteboard product that people collaborate on. That's the key feature, right?"
                }
              ],
              userQuote: "价格页更多在罗列功能点，并没有把附加产品的使用场景和业务价值讲清楚，用户缺乏做购买决策所需的信息。",
              conclusionLabel: "结论",
              beforeLabel: "之前：旧版定价",
              beforePlaceholderText: "价格页更多在罗列功能点，并没有把附加产品的使用场景和业务价值讲清楚，用户缺乏做购买决策所需的信息。"
            },
            moves: [
              {
                id: "pricing-move-1",
                eyebrow: "举措 1 · 渐进式披露信息",
                title: "卡片 + Learn more 弹窗",
                metaPills: ["信息架构", "交互设计"],
                subtitle: "让用户无需离开价格页，就能对产品有充足理解。",
                whatINoticed: [],
                whatIDecided: [
                  "在每张附加产品卡片上增加明显的 Learn more 按钮。",
                  "点击后弹出弹窗，提供额外信息。",
                  "确保用户无需离开价格页，就能对产品有充足理解。"
                ],
                howIDroveIt: [],
                myContribution: [],
                visualPlaceholderText: "视觉：带有 Learn More 按钮的新版卡片设计。"
              },
              {
                id: "pricing-move-2",
                eyebrow: "举措 2 · 引入真实 UI 截图",
                title: "让用户一眼看懂功能",
                metaPills: ["视觉呈现", "跨团队协作"],
                subtitle: "在 Learn more 弹窗中放入关键 UI 截图，让用户一眼看到这个产品大致怎么操作。",
                whatINoticed: [],
                whatIDecided: [
                  "在 Learn more 弹窗中放入关键 UI 截图，让用户一眼看到这个产品大致怎么操作。",
                  "我负责裁切与编排，保证所有图片有统一的视觉规范与高亮规则，每张截图都能说明一个关键使用场景。"
                ],
                howIDroveIt: [],
                myContribution: [],
                visualPlaceholderText: "视觉：Learn More 弹窗中的产品 UI 截图展示。"
              },
              {
                id: "pricing-move-3",
                eyebrow: "举措 3 · 文案体现价值",
                title: "从「功能黑话」到「提供业务效益」",
                metaPills: ["UX 文案", "价值主张"],
                subtitle: "把原本偏内部/技术的话语，改写成用户语言。",
                whatINoticed: [],
                whatIDecided: [
                  "和 PM、文案一起梳理每个附加产品的核心价值。",
                  "把原本偏内部/技术的话语，改写成用户语言，例如：",
                  "改版前：Unlimited concurrently editable boards",
                  "改版后：Collaborate in real-time with others on whiteboards, both during and outside of meetings."
                ],
                howIDroveIt: [],
                myContribution: [],
                visualPlaceholderText: "视觉：对比新旧文案的卡片。"
              },
              {
                id: "pricing-move-4",
                eyebrow: "举措 4 · 降低购买决策成本",
                title: "提前暴露不同计划的价格区间",
                metaPills: [],
                subtitle: "",
                whatINoticed: [],
                whatIDecided: [
                  "对有多档计划的产品，在 Learn more 弹窗中用说明每档的主要差异点与价格区间。",
                  "让用户在进入购买流程前，就对「我需要哪档功能，大概花多少钱」有心理预期，减少中途反悔。"
                ],
                howIDroveIt: [],
                myContribution: [],
                visualPlaceholderText: "视觉：不同计划的价格区间展示。"
              }
            ]
          },
          {
            intro: {
              phaseNumber: 2,
              phaseLabel: "购买流程",
              title: "购买流程：从「又长又乱」到「清晰流畅」",
              problems: [
                {
                  title: "Problem Overview",
                  content: [
                     "不同类型用户提前分流，减少大多数用户需要填写的字段数量。",
                     "尽管实际字段总量与之前接近，但感知负担明显降低。"
                  ]
                }
              ],
              beforeLabel: "之前：多步骤结账",
              beforePlaceholderText: "长而复杂的表单，缺乏清晰的指引。"
            },
            moves: [
              {
                id: "checkout-move-1",
                eyebrow: "举措 1 · 复购用户优化",
                title: "一键完成购买",
                metaPills: ["流程优化", "效率提升"],
                subtitle: "对复购用户来说，账号 / 账单信息都已存在，再走多步流程非常浪费。",
                whatINoticed: [
                  "复购用户需要重复填写大量已知信息。"
                ],
                whatIDecided: [
                  "为此，我们设计了一步到位的路径。",
                  "在同一页面展示：已配置产品（卡片）、已保存账单与支付信息。",
                  "用户只需确认 & 微调，便可完成支付。"
                ],
                howIDroveIt: [
                  "核心流程转化率提高 35%。",
                  "移动端完成率从 5% 提升至 30%。"
                ],
                myContribution: [
                  "设计了复购用户的极简购买路径。",
                  "定义了“一键购买”的交互逻辑。"
                ],
                visualPlaceholderText: "视觉：复购用户的单页结账界面。"
              }
            ]
          },
          {
            intro: {
              phaseNumber: 3,
              phaseLabel: "订阅管理",
              title: "订阅管理：把「看不懂、不敢改」变成「看得清、敢操作」",
              problems: [
                 {
                   title: "Navigation & Discovery",
                   content: [
                     "管理员后台中，各产品线设计师各自添加 Tab，订阅与计费管理入口深埋在二 / 三级菜单中，多数用户不知道去哪管理自己的订阅。"
                   ]
                 },
                 {
                   title: "Clarity & Control",
                   content: [
                     "进入页面后字段、历史记录、状态标签混在一起。",
                     "权限与合约逻辑复杂，有些用户前台不可编辑，但界面并没有解释，造成大量客诉和客服成本。"
                   ]
                 }
              ],
              beforeLabel: "之前：管理面板",
              beforePlaceholderText: "入口深埋，信息混杂，缺乏权限解释。"
            },
            moves: [
              {
                id: "sub-move-1",
                eyebrow: "举措 1 · 订阅入口前移",
                title: "修改信息结构，头像一键触达",
                metaPills: ["信息架构", "可发现性"],
                subtitle: "将订阅管理入口从深层次的菜单中前移，确保用户能够在第一时间找到并访问管理界面。",
                whatINoticed: [
                  "用户难以找到管理入口。"
                ],
                whatIDecided: [
                  "在管理后台加入单独的一级「订阅 / 计费管理」入口。",
                  "在 Zoom 客户端和 Web 端的头像下拉中增加「订阅中心」入口。"
                ],
                howIDroveIt: [
                  "我用 Figma 做了交互原型，对 6–7 位用户做可用性测试：所有人都能在短时间内找到订阅中心，任务成功率 100%。"
                ],
                myContribution: [
                  "重新规划了导航结构。",
                  "设计了头像下拉菜单的入口。"
                ],
                visualPlaceholderText: "视觉：新的导航菜单和头像下拉入口。"
              },
              {
                id: "sub-move-2",
                eyebrow: "举措 2 · 关键信息外露",
                title: "列表看「现在」，详情看「所有」",
                metaPills: ["信息分层", "清晰度"],
                subtitle: "列表层展示当前最关键信息，帮助用户快速查看产品状态与到期时间；详情层则提供更为详细的历史账单与配置。",
                whatINoticed: [
                  "关键信息被淹没在次要细节中。"
                ],
                whatIDecided: [
                  "列表层只展示决策当下真正需要的信息：产品名称、当前计划 / 计费周期、下一次扣费 / 到期时间、状态标签（试用中 / 即将到期 / 欠费等）。",
                  "详情层按信息类型分区：配置详情、历史账单与发票、多产品组合时的详细计费结构。"
                ],
                howIDroveIt: [
                  "展示方式与购买卡片保持一致，让用户在价格页 / 购买流程 / 订阅中心看到的是同一种设计语言。"
                ],
                myContribution: [
                  "定义了列表和详情的信息层级。",
                  "设计了状态标签的视觉规范。"
                ],
                visualPlaceholderText: "视觉：新的订阅列表和详情页设计。"
              },
              {
                id: "sub-move-3",
                eyebrow: "举措 3 · 渐进式上线 & 规范沉淀",
                title: "分阶段推进与标准化",
                metaPills: ["发布策略", "设计规范"],
                subtitle: "订阅系统覆盖的 plan 和配置极其庞大，不可能一刀切。",
                whatINoticed: [
                  "系统复杂性高，风险大。"
                ],
                whatIDecided: [
                  "阶段 1：优先上线新入口，提升订阅中心访问量，为后续改版积累样本。",
                  "阶段 2：从产品组合相对简单的个人用户开始改版新订阅中心，通过行为数据和访谈验证信息架构有效性。",
                  "阶段 3：按事先定义的规则和信息结构分批接入更多 plan & 企业用户。"
                ],
                howIDroveIt: [
                  "我主导整理了一套订阅卡片 & 详情展示规范：列表层必含字段、详情层的分区与顺序、状态标签的表现形式。",
                  "同时复用价格页附加产品弹窗模式，让用户在订阅中心遇到附加产品时，也能通过同样的弹窗理解产品。"
                ],
                myContribution: [
                  "制定了分阶段上线计划。",
                  "建立了跨团队的订阅设计规范。"
                ],
                visualPlaceholderText: "视觉：设计规范文档截图。"
              }
            ]
          }
        ],
        patterns: {
          title: "经验沉淀",
          intro: "这个项目不是一个「一次性大改版」，而是逐步沉淀为统一的视角和可复用的资产。",
          patterns: [
            {
              title: "统一的订阅生命周期视角",
              description: "价格页、购买流程、订阅中心不再是三个割裂页面，而是同一条旅程的不同节点。",
              myRole: "思维模式转变"
            },
            {
              title: "可复用的组件与模式",
              description: "附加产品（卡片+弹窗）、购买流程（卡片化+表单分组）、订阅管理（列表+详情）。",
              myRole: "组件库建设"
            },
            {
              title: "跨产品线的设计规范与协作机制",
              description: "UI 截图获取约定、卡片信息结构规范、新 Plan 接入方式。",
              myRole: "流程标准化"
            }
          ]
        },
        reflection: {
          title: "我的收获",
          learnings: [
            "从改页面到设计订阅闭环：先从订阅模型和业务目标出发，再向下拆解界面。",
            "在强约束环境中做清醒的取舍：把风控 / 合规 / 税务当作设计输入，分清现在能改的、必须保留的和未来可做的。",
            "用实验和数据买改革空间：先用小型 MVP 实验验证方向，再用结构性改版放大效果，用指标说话。"
          ],
          growth: [
            "学会了如何把「体验」和「收入 / 流失」真正连起来。",
            "不再假设「如果没有风控和合规就完美了」，而是学会在约束中设计。",
            "让团队更容易接受并复用设计决策。"
          ]
        }
    }
  }
};
