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
          title: "Zoom Subscription Lifecycle Experience Optimization",
          description: "During the pandemic, Zoom gained many individual users and small-to-medium business customers, but the overall business model long relied on sales teams, with self-service subscription systems relatively lagging. It was precisely these new small-to-medium business users who preferred to complete purchases and upgrades online independently, making the outdated online purchase flow gradually become a growth bottleneck: low conversion rates and high involuntary churn.",
          tags: ["UX Design", "Product Strategy", "Growth Design"],
          meta: [
            { label: "Role", value: "Product Designer" },
            { label: "Timeline", value: "2023" },
            { label: "Tools", value: "Figma • Contentsquare • UserTesting" }
          ],
          heroVisualPlaceholder: "Hero Visual: Dashboard Screenshot or Abstract Representation",
          heroVideo: "/assets/zoom-hero.mp4",
        },
        metrics: {
          title: "",
          metrics: [
            {
              label: "Core Add-on Conversion Rate",
              value: "5% → 15%",
              description: "Significant increase in user conversion rate for add-on purchases."
            },
            {
              label: "Checkout Conversion Rate",
              value: "35% ↑",
              description: "After core flow refactoring, purchase completion rate significantly improved."
            },
            {
              label: "Involuntary Churn Rate",
              value: "17% ↓",
              description: "Through billing center optimization, reduced accidental cancellations.",
            }
          ]
        },
        context: {
          title: "Project Background",
          paragraphs: [
            "During the pandemic, Zoom gained many individual users and small-to-medium business customers, but the overall business model long relied on sales teams, with self-service subscription systems relatively lagging.",
            "It was precisely these new small-to-medium business users who preferred to complete purchases and upgrades online independently, making the outdated online purchase flow gradually become a growth bottleneck: low conversion rates and high involuntary churn.",
            "In this context, as the product designer for the subscription lifecycle, I was responsible for systematically optimizing the pricing page, checkout flow, and billing management, hoping to help users understand products and complete purchases without relying on sales; and in subsequent use, confidently manage their subscriptions."
          ],
          summary: {
            scopeItems: ["Pricing Page", "Checkout Flow", "Billing Dashboard"],
            teamItems: ["1 Lead Designer (Me)", "2 Product Managers", "4 Frontend Engineers", "1 UX Researcher"],
            constraintItems: ["Legacy Billing API", "Strict Brand Guidelines", "6-week Dev Cycle"]
          }
        },
        lifecycle: {
          title: "Subscription Lifecycle Overview",
          phases: [
            {
              phaseNumber: 1,
              title: "Pricing",
              description: "From 'Just Buying Meetings' to 'Understanding and Purchasing Add-ons'",
              chips: ["Clarity", "Value Delivery"],
              image: "/assets/zoom-hero.png"
            },
            {
              phaseNumber: 2,
              title: "Checkout",
              description: "From 'Long and Messy' to 'Clear and Smooth'",
              chips: ["Trust", "Efficiency"],
              image: "/assets/zoom-overview-checkout.jpg"
            },
            {
              phaseNumber: 3,
              title: "Billing",
              description: "From 'Can't Understand, Don't Dare Change' to 'See Clearly, Dare to Operate'",
              chips: ["Control", "Self-service"],
              image: "/assets/zoom-overview-billing.jpg"
            }
          ]
        },
        phases: [
          {
            intro: {
              phaseNumber: 1,
              phaseLabel: "Pricing",
              title: "Pricing: From 'Just Buying Meetings' to 'Understanding and Purchasing Add-ons'",
              challengeTitle: "Users only knew about Zoom Meetings and didn't understand the value of add-ons",
              problems: [
                {
                  title: "Data Side: Exposure Without Conversion",
                  content: [
                    "Through analytics tools like Contentsquare, I discovered:",
                    "Over 10% of users scrolled to the add-on section, but less than 1% clicked to purchase;",
                    "Many users tried clicking cards or 'More features' but couldn't get more information.",
                    "Even after clicking 'Buy Now', many users didn't complete the purchase."
                  ],
                  image: "/assets/zoom-pricing-challenge-data.png",
                  imageAlt: "Low conversion data chart"
                },
                {
                  title: "User Side: Couldn't Understand What Products Do",
                  content: [
                    "Collaborated with user research to interview 6 small business owners / individual users, common feedback:",
                    "Cards provided too little information;",
                    "Copy was too abstract, seemed to talk about features rather than explaining what problems they solve."
                  ],
                  quote: "What does unlimited concurrently editable boards even mean? I mean you have a whiteboard product that people collaborate on. That's the key feature, right?",
                  image: "/assets/zoom-pricing-challenge-user.jpg",
                  imageAlt: "User interview photo"
                }
              ],
              userQuote: "The pricing page mostly listed features without clearly explaining the use cases and business value of add-ons. Users lacked the information needed to make purchasing decisions.",
              conclusionLabel: "Conclusion",
              beforeLabel: "Before: Legacy Pricing",
              beforePlaceholderText: "The pricing page mostly listed features without clearly explaining the use cases and business value of add-ons. Users lacked the information needed to make purchasing decisions."
            },
            strategy: {
              title: "Design Strategy",
              subtitle: "Provide More Information, Deliver Value, Build Trust with Users",
              userInsight: {
                content: "In interviews, users repeatedly mentioned that one reason they liked Zoom was: the interface is simple and easy to use, you can understand it at a glance. But this trust in 'ease of use' didn't extend to add-ons. Based on this insight, I developed three strategies:",
              },
              strategies: [
                {
                  title: "Fill Information Gaps",
                  content: "Help users understand what problems add-ons solve and what they do"
                },
                {
                  title: "Value-Oriented",
                  content: "Reduce jargon and intuitively showcase product value"
                },
                {
                  title: "Decision Pre-positioning",
                  content: "Before entering checkout, users know roughly what plans, price ranges, and differences exist"
                }
              ]
            },
            moves: [
              {
                id: "pricing-move-1",
                eyebrow: "Move 1 · Progressive Disclosure",
                title: "Cards + Learn More Modal",
                metaPills: ["Information Architecture", "Interaction Design"],
                subtitle: "Allow users to fully understand products without leaving the pricing page.",
                bullets: [
                  "Added prominent 'Learn more' buttons to each add-on card.",
                  "Clicking opens a modal with additional information.",
                  "Ensures users can fully understand products without leaving the pricing page."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-pricing-1.mp4"
                },
                visualPlaceholderText: "Visual: New card design with Learn More buttons."
              },
              {
                id: "pricing-move-2",
                eyebrow: "Move 2 · Introduce Real UI Screenshots",
                title: "Help Users Understand Features at a Glance",
                metaPills: ["Visual Presentation", "Cross-team Collaboration"],
                subtitle: "Include key UI screenshots in the Learn more modal so users can immediately see how the product works.",
                bullets: [
                  "Included key UI screenshots in the Learn more modal so users can immediately see how the product works.",
                  "I was responsible for cropping and layout, ensuring all images follow unified visual standards and highlighting rules, with each screenshot illustrating a key use case."
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-pricing-2.jpg",
                  alt: "Learn more modal UI screenshots"
                },
                visualPlaceholderText: "Visual: Product UI screenshots in Learn More modal."
              },
              {
                id: "pricing-move-3",
                eyebrow: "Move 3 · Copy That Reflects Value",
                title: "From 'Feature Jargon' to 'Business Benefits'",
                metaPills: ["UX Copy", "Value Proposition"],
                subtitle: "Rewrite internal/technical language into user-friendly language.",
                bullets: [
                  "Worked with PMs and copywriters to identify each add-on's core value, rewriting internal/technical language into user-friendly language.",
                  "Before: Unlimited concurrently editable boards.",
                  "After: Collaborate in real-time with others on whiteboards, both during and outside of meetings."
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-pricing-3.jpg",
                  alt: "Before and after copy comparison"
                },
                visualPlaceholderText: "Visual: Cards comparing old and new copy."
              },
              {
                id: "pricing-move-4",
                eyebrow: "Move 4 · Reduce Decision Cost",
                title: "Expose Price Ranges for Different Plans Upfront",
                metaPills: [],
                subtitle: "",
                bullets: [
                  "For products with multiple plan tiers, explain the main differences and price ranges for each tier in the Learn more modal.",
                  "Give users a mental model of 'which tier do I need and roughly how much will it cost' before entering checkout, reducing mid-flow abandonment."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-pricing-4.mp4"
                },
                visualPlaceholderText: "Visual: Price range display for different plans."
              }
            ],
            resultMetrics: [
              {
                label: "Core Add-on Conversion Rate",
                value: "5% → 15%",
                description: "Conversion rate for best-selling add-ons increased from 5% to 15%."
              },
              {
                label: "User Interaction with Add-ons Conversion Rate",
                value: "11% ↑",
                description: "Users who opened the modal had a higher probability of conversion."
              }
            ],
            contributions: {
              title: "My Contributions",
              items: [
                "Identified key problems and opportunities for add-ons through data and user interviews.",
                "Coordinated designers across product lines to audit existing interfaces and compile a complete Figma library.",
                "Designed and delivered 12 complete modal designs.",
                "Established unified add-on modal standards and promoted their application across pricing page, checkout, and billing center."
              ]
            }
          },
          {
            intro: {
              phaseNumber: 2,
              phaseLabel: "Checkout",
              title: "Checkout: From 'Long and Messy' to 'Clear and Smooth'",
              challengeTitle: "Core Challenge: Too Many Fields, Heavy Legacy Burden",
              problems: [
                {
                  title: "User Pain Point: Form Seemed Endless",
                  content: [
                    "The original checkout flow was split into 5 steps, each requiring many fields to fill.",
                    "Funnel data showed significant drop-off at each layer, with low overall conversion rate.",
                    "User interviews frequently mentioned: 'Seeing so many fields to fill makes me want to close it.'"
                  ],
                  image: "/assets/zoom-checkout-challenge-user.jpg",
                  imageAlt: "User interview feedback"
                },
                {
                  title: "Complex to Push Forward: Dozens of Products, Cross-country Regulations, No One Dared Touch It",
                  content: [
                    "Involved dozens of products and hundreds of configurations.",
                    "Different countries and regions have their own legal and compliance rules.",
                    "Engineering estimated that changing the entire flow would take years of work."
                  ],
                  image: "/assets/zoom-checkout-challenge-push.png",
                  imageAlt: "Complexity diagram"
                }
              ],
              userQuote: "On the user side, lengthy forms severely reduced purchase intent; but internally, the checkout flow involved many historical issues, making it extremely difficult to push for change.",
              conclusionLabel: "Conclusion",
              beforeLabel: "Before: 5-Step Checkout",
              beforePlaceholderText: "On the user side, lengthy forms severely reduced purchase intent; but internally, the checkout flow involved many historical issues, making it extremely difficult to push for change.",
            },
            strategy: {
              title: "Design Strategy",
              subtitle: "Simplify Decisions, Incremental Refactoring",
              userInsight: {
                content: "From funnel data and interviews, we confirmed problems centered on overly long flows and information overload. We chose to compress steps, using small experiments to prove results and gain space for subsequent refactoring. Then through card-based product configuration and progressive forms to break down massive fields, letting users handle one small piece of information at a time. Finally, for mobile, we reorganized information hierarchy and interaction paths, migrating the same pattern to small screens, so both desktop and mobile can complete purchases with the same clear, lightweight approach."
              },
              strategies: [
                {
                  title: "Small Validation",
                  content: "First select the smallest scope, highest impact module for testing, using results to push the team toward bigger changes."
                },
                {
                  title: "Progressive Forms & Card-based",
                  content: "Use card-based product configuration + progressive forms, presenting information in small chunks to avoid the frustration of 'endless forms'."
                },
                {
                  title: "Mobile Adaptation",
                  content: "After desktop testing succeeded, migrate the same pattern to mobile so different platforms have the same experience."
                }
              ]
            },
            moves: [
              {
                id: "checkout-move-1",
                eyebrow: "Move 1 · MVP Experiment",
                title: "Minimal Validation: From 5 Steps → 2 Steps",
                metaPills: ["Cross-team Alignment", "Incremental Validation"],
                subtitle: "First prove that 'cutting fields and reducing steps' actually works, then secure resources.",
                bullets: [
                  "Aligned with PMs, legal, and engineering field by field: which fields are mandatory, which are legacy, which can be filled after purchase.",
                  "Based on alignment results, created an MVP version with only core fields, compressing the flow to two steps: 1. Product Configuration 2. Account & Payment Information.",
                  "Result: Conversion rate increased by over ten percentage points; more importantly, it provided team confidence for subsequent more thorough refactoring."
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-checkout-1.png",
                  alt: "Comparison: 5 steps reduced to 2 steps"
                },
                visualPlaceholderText: "Visual: Comparison showing reduction from 5 steps to 2 steps."
              },
              {
                id: "checkout-move-2",
                eyebrow: "Move 2 · Refactor Core Path",
                title: "Card-based Products + Progressive Forms",
                metaPills: ["Information Architecture", "Pattern Documentation"],
                subtitle: "Upgrade the direction proven by MVP into a reusable design system.",
                bullets: [
                  "While MVP improved conversion, it was still 'deleting fields within the old framework,' lacking reusable design language.",
                  "Encapsulated each product configuration as a collapsible/expandable card, so when adding new products in the future, just add a new card without overhauling the page structure.",
                  "At any moment, only show the parts that need to be filled, with different user types split early."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-checkout-2.mp4"
                },
                visualPlaceholderText: "Visual: Card-based product configuration + progressive form illustration."
              },
              {
                id: "checkout-move-3",
                eyebrow: "Move 3 · Mobile Adaptation",
                title: "Unified Experience with Desktop",
                metaPills: ["Mobile Experience"],
                bullets: [
                  "Designed collapsible order information for small screens, only exposing the amount to pay.",
                  "Configured targeted keyboards for different input fields, making form filling smoother for users."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-checkout-3.mp4"
                },
                visualPlaceholderText: "Visual: Mobile checkout interface adaptation illustration."
              }
            ],
            resultMetrics: [
              {
                label: "Checkout Conversion Rate",
                value: "35% ↑",
                description: "In the core flow refactoring experiment, overall conversion rate increased by approximately 35%."
              },
              {
                label: "Mobile Conversion Rate",
                value: "5% → 30%",
                description: "Mobile conversion significantly improved, contributing nearly 15% of revenue."
              }
            ],
            contributions: {
              title: "My Contributions",
              items: [
                "Worked with PMs, engineering, and legal to break down mandatory vs. post-purchase information, advocating for better user experience.",
                "Built the complete checkout flow from 0 to 1, delivering both desktop and mobile designs.",
                "Established card-based / progressive form component system, documenting it as a reusable template."
              ]
            }
          },
          {
            intro: {
              phaseNumber: 3,
              phaseLabel: "Billing",
              title: "Billing: From 'Can't Understand, Don't Dare Change' to 'See Clearly, Dare to Operate'",
              challengeTitle: "Core Challenge: Entry Hard to Find, Status Unclear, Permission Logic Opaque",
              problems: [
                {
                  title: "Missing Entry",
                  content: [
                    "In the admin panel, designers from each product line added their own tabs, burying subscription and billing entries in second or third-level menus.",
                    "The vast majority of users didn't know where to manage their subscriptions."
                  ],
                  image: "/assets/zoom-billing-challenge-entry.png",
                  imageAlt: "Missing entry diagram"
                },
                {
                  title: "Messy Information + Unclear Permissions",
                  content: [
                    "After entering the page, fields, history records, and status labels were mixed together, with lists and details merged into one.",
                    "Permission and contract logic was complex. Some users couldn't edit in the frontend, but the interface didn't explain why, causing many support tickets and customer service costs."
                  ],
                  image: "/assets/zoom-billing-challenge-info.png",
                  imageAlt: "Messy information diagram"
                }
              ],
              userQuote: "Users had difficulty extracting useful information from the existing design, and even when they did, they didn't know what operations they could perform.",
              conclusionLabel: "Conclusion",
              beforeLabel: "Before: Admin Panel",
              beforePlaceholderText: "Entry buried, information stacked, permissions unclear—users couldn't understand and didn't dare make changes."
            },
            strategy: {
              title: "Design Strategy",
              subtitle: "Move Entry Forward + Information Layering + Clear Permission Expression",
              userInsight: {
                content: "When managing subscriptions, users only want to know: where am I, what do I have, what can I do next."
              },
              strategies: [
                {
                  title: "Move Entry Forward",
                  content: "Place the billing entry in the first level of navigation and avatar menu, ensuring users find it immediately."
                },
                {
                  title: "Layered Information Display",
                  content: "List layer shows 'now'—product, cycle, next charge. Detail layer shows 'all'—configuration, invoices, history."
                },
                {
                  title: "Clear Permission Expression",
                  content: "Clearly indicate which users can modify online and which need human support, using UI prompts to show next steps."
                }
              ]
            },
            moves: [
              {
                id: "sub-move-1",
                eyebrow: "Move 1 · Move Billing Entry Forward",
                title: "Modify Information Structure, One-Click Access from Avatar",
                metaPills: ["Information Architecture", "Discoverability"],
                subtitle: "Ensure 'I want to change my subscription' can be reached with one click from any entry point.",
                bullets: [
                  "Users frequently asked 'where is my subscription' in support tickets, while the admin panel navigation kept getting filled as product lines expanded.",
                  "Added a first-level 'Billing / Subscription Management' entry in the admin panel.",
                  "Added a 'Billing Center' entry in the avatar dropdown for both Zoom client and Web.",
                  "Conducted quick usability testing with 7 users using Figma prototypes, achieving 100% task success rate."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-1.mp4"
                },
                visualPlaceholderText: "Visual: New navigation menu and avatar dropdown entry."
              },
              {
                id: "sub-move-2",
                eyebrow: "Move 2 · Expose Key Information",
                title: "List Shows 'Now', Details Show 'All'",
                metaPills: ["Information Layering", "Clarity"],
                subtitle: "Collapse excess information, only show current state",
                bullets: [
                  "List layer only shows information truly needed for decision-making: product name, current plan / billing cycle, next charge / expiration date, status labels.",
                  "Defined list/detail hierarchy rules and status label system, making new product additions more standardized."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-2.mp4"
                },
                visualPlaceholderText: "Visual: New subscription list and detail page design."
              },
              {
                id: "sub-move-3",
                eyebrow: "Move 3 · Permissions at a Glance",
                title: "Clarify 'Who Can Change Online, Who Must Go Through Human Support'",
                metaPills: ["Permission Expression", "Support Routing"],
                subtitle: "Work with PMs and engineering to define clear permission rules, letting users know what to do next.",
                bullets: [
                  "Worked with PMs and engineering to establish a clear set of rules: which users can upgrade online, which users must modify through sales or customer support.",
                  "For scenarios that can be operated online, provide clear action entry points.",
                  "For scenarios that cannot be operated online, explain the reason and provide next step suggestions."
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-3.mp4"
                },
                visualPlaceholderText: "Visual: Permission prompts and routing illustration."
              }
            ],
            resultMetrics: [
              {
                label: "Billing Center Entry Usability Test",
                value: "100%",
                description: "All 7 users successfully found the entry."
              },
              {
                label: "Involuntary Churn Rate",
                value: "7.2% → 5.8%",
                description: "Churn due to payment failures significantly decreased."
              }
            ],
            contributions: {
              title: "My Contributions",
              items: [
                "Refactored admin panel navigation and client avatar entry, unifying billing entry points.",
                "Designed list / detail layering and permission prompt patterns, enabling users to confidently make changes online.",
                "Led subscription card and detail display standards, supporting incremental rollout strategy."
              ]
            }
          }
        ],
        patterns: {
          title: "Lessons Learned",
          intro: "This project wasn't a 'one-time major redesign,' but gradually evolved into a unified perspective and reusable assets.",
          patterns: [
            {
              title: "Unified Subscription Lifecycle Perspective",
              description: "Pricing, checkout, and billing are no longer three separate pages, but different nodes in the same journey.",
              myRole: "Mindset Shift"
            },
            {
              title: "Reusable Components & Patterns",
              description: "Add-ons (cards + modals), checkout (card-based + form grouping), billing (list + details).",
              myRole: "Component Library Development"
            },
            {
              title: "Cross-product Design Standards & Collaboration Mechanisms",
              description: "UI screenshot acquisition agreements, card information structure standards, new plan integration methods.",
              myRole: "Process Standardization"
            }
          ]
        },
        reflection: {
          title: "My Learnings",
          learnings: [
            "From redesigning pages to designing subscription loops: start from subscription models and business goals, then break down to interfaces.",
            "Making clear trade-offs in highly constrained environments: treat risk control / compliance / tax as design inputs, distinguish what can be changed now, what must be kept, and what can be done in the future.",
            "Using experiments and data to buy reform space: first validate direction with small MVP experiments, then amplify effects with structural redesigns, letting metrics speak."
          ],
          growth: [
            "Learned how to truly connect 'experience' with 'revenue / churn'.",
            "Stopped assuming 'if there were no risk control and compliance it would be perfect,' instead learned to design within constraints.",
            "Made it easier for teams to accept and reuse design decisions."
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
            { label: "角色", value: "产品设计师" },
            { label: "时间", value: "2023" },
            { label: "工具", value: "Figma • Contentsquare • UserTesting" }
          ],
          heroVisualPlaceholder: "视觉展示：仪表板截图或抽象表现",
          heroVideo: "/assets/zoom-hero.mp4",
        },
        metrics: {
          title: "",
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
              challengeTitle: "用户只听说过 Zoom 会议，不理解附加产品的价值",
              problems: [
                {
                  title: "数据侧：有曝光、没转化",
                  content: [
                    "通过 Contentsquare 等分析工具，我发现：",
                    "滚动到附加产品区域的用户超过 10%，但点击购买的不到 1%；",
                    "大量用户尝试点击卡片或 “More features”，但得不到更多信息。",
                    "哪怕点击了 Buy Now，很多用户也没有完成购买"
                  ],
                  image: "/assets/zoom-pricing-challenge-data.png",
                  imageAlt: "低转化数据图表"
                },
                {
                  title: "用户侧：看不懂产品能做什么",
                  content: [
                    "与用研合作，访谈了 6 位中小企业主 / 个人用户，大家普遍反馈：",
                    "卡片提供的信息过于匮乏；",
                    "文案太抽象，看起来像在讲功能，而不是告诉我能解决什么问题。"
                  ],
                  quote: "What does unlimited concurrently editable boards even mean? I mean you have a whiteboard product that people collaborate on. That's the key feature, right?",
                  image: "/assets/zoom-pricing-challenge-user.jpg",
                  imageAlt: "用户访谈照片"
                }
              ],
              userQuote: "价格页更多在罗列功能点，并没有把附加产品的使用场景和业务价值讲清楚，用户缺乏做购买决策所需的信息。",
              conclusionLabel: "结论",
              beforeLabel: "之前：旧版定价",
              beforePlaceholderText: "价格页更多在罗列功能点，并没有把附加产品的使用场景和业务价值讲清楚，用户缺乏做购买决策所需的信息。"
            },
            strategy: {
              title: "设计策略",
              subtitle: "多给信息，提供价值，与用户建立信任",
              userInsight: {
                content: "在访谈中，用户反复提到喜欢 Zoom 的一个重要原因是：界面简单易用，一看就会。但这种对「易用性」的信任，并没有延伸到附加产品上。基于这一洞察，我制定了三条策略：",
              },
              strategies: [
                {
                  title: "补足信息",
                  content: "让用户弄清附加产品解决什么问题，有什么作用"
                },
                {
                  title: "价值导向",
                  content: "减少黑话，直观展示产品的价值"
                },
                {
                  title: "决策前置",
                  content: "在进入购买流程之前，就知道大致有哪些计划、价格区间和差异"
                }
              ]
            },
            moves: [
              {
                id: "pricing-move-1",
                eyebrow: "举措 1 · 渐进式披露信息",
                title: "卡片 + Learn more 弹窗",
                metaPills: ["信息架构", "交互设计"],
                subtitle: "让用户无需离开价格页，就能对产品有充足理解。",
                bullets: [
                  "在每张附加产品卡片上增加明显的 Learn more 按钮。",
                  "点击后弹出弹窗，提供额外信息。",
                  "确保用户无需离开价格页，就能对产品有充足理解。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-pricing-1.mp4"
                },
                visualPlaceholderText: "视觉：带有 Learn More 按钮的新版卡片设计。"
              },
              {
                id: "pricing-move-2",
                eyebrow: "举措 2 · 引入真实 UI 截图",
                title: "让用户一眼看懂功能",
                metaPills: ["视觉呈现", "跨团队协作"],
                subtitle: "在 Learn more 弹窗中放入关键 UI 截图，让用户一眼看到这个产品大致怎么操作。",
                bullets: [
                  "在 Learn more 弹窗中放入关键 UI 截图，让用户一眼看到这个产品大致怎么操作。",
                  "我负责裁切与编排，保证所有图片有统一的视觉规范与高亮规则，每张截图都能说明一个关键使用场景。"
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-pricing-2.jpg",
                  alt: "Learn more 弹窗 UI 截图"
                },
                visualPlaceholderText: "视觉：Learn More 弹窗中的产品 UI 截图展示。"
              },
              {
                id: "pricing-move-3",
                eyebrow: "举措 3 · 文案体现价值",
                title: "从「功能黑话」到「提供业务效益」",
                metaPills: ["UX 文案", "价值主张"],
                subtitle: "把原本偏内部/技术的话语，改写成用户语言。",
                bullets: [
                  "和 PM、文案一起梳理每个附加产品的核心价值，把原本偏内部/技术的话语改写成用户语言。",
                  "改版前：Unlimited concurrently editable boards。",
                  "改版后：Collaborate in real-time with others on whiteboards, both during and outside of meetings."
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-pricing-3.jpg",
                  alt: "新旧文案对比"
                },
                visualPlaceholderText: "视觉：对比新旧文案的卡片。"
              },
              {
                id: "pricing-move-4",
                eyebrow: "举措 4 · 降低购买决策成本",
                title: "提前暴露不同计划的价格区间",
                metaPills: [],
                subtitle: "",
                bullets: [
                  "对有多档计划的产品，在 Learn more 弹窗中说明每档的主要差异点与价格区间。",
                  "让用户在进入购买流程前，就对「我需要哪档功能，大概花多少钱」有心理预期，减少中途反悔。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-pricing-4.mp4"
                },
                visualPlaceholderText: "视觉：不同计划的价格区间展示。"
              }
            ],
            resultMetrics: [
              {
                label: "核心附加产品转化率",
                value: "5% → 15%",
                description: "最畅销的附加产品转化率由 5% 提升到 15%。"
              },
              {
                label: "与附加产品交互的用户转化率",
                value: "11% ↑",
                description: "打开了弹窗的用户有更高概率被转化。"
              }
            ],
            contributions: {
              title: "我的贡献",
              items: [
                "通过数据和用户访谈，定位附加产品的关键问题与机会点。",
                "协调各产品线设计师，对现有界面进行盘点，整理出完整的 Figma。",
                "梳理并交付 12 个弹窗的完整设计。",
                "建立统一的附加产品弹窗规范，并将其推广应用到价格页、购买流程和订阅中心。"
              ]
            }
          },
          {
            intro: {
              phaseNumber: 2,
              phaseLabel: "购买流程",
              title: "购买流程：从「又长又乱」到「清晰流畅」",
              challengeTitle: "核心挑战：流程字段多，历史包袱重",
              problems: [
                {
                  title: "用户痛点：表单看不到尽头",
                  content: [
                    "原有购买流程被拆成 5 步，每一步都要填写大量字段。",
                    "从漏斗数据看，每一层都有明显流失，整体转化率低。",
                    "用户访谈高频反馈：「看到这么多要填的，就有点想关掉。」"
                  ],
                  image: "/assets/zoom-checkout-challenge-user.jpg",
                  imageAlt: "用户访谈反馈"
                },
                {
                  title: "推进复杂：几十个产品，跨国家法规，谁都不敢动",
                  content: [
                    "牵涉几十个产品、上百种配置。",
                    "不同国家地区有各自的法务、合规规则。",
                    "工程评估改动整条流程的工程量要按年计算。"
                  ],
                  image: "/assets/zoom-checkout-challenge-push.png",
                  imageAlt: "推进复杂性示意图"
                }
              ],
              userQuote: "在用户端，冗长的表单严重拉低购买意愿；但在内部，购买链路牵涉历史问题众多，推动改变极其困难。",
              conclusionLabel: "结论",
              beforeLabel: "之前：5 步购买流程",
              beforePlaceholderText: "在用户端，冗长的表单严重拉低购买意愿；但在内部，购买链路牵涉历史问题众多，推动改变极其困难。",
            },
            strategy: {
              title: "设计策略",
              subtitle: "简化决策，渐进重构",
              userInsight: {
                content: "从漏斗数据和访谈确认问题集中在流程过长与信息堆叠，于是我们选择压缩步骤，小步实验的方式用结果换取后续重构空间。再通过卡片化产品配置与渐进式表单拆解海量字段，让用户一次只处理一小块信息。最后针对移动端重排信息层级与操作路径，把同一套模式迁移到小屏上，让桌面和手机都能以同样清晰、轻量的方式完成购买。"
              },
              strategies: [
                {
                  title: "小步验证",
                  content: "先选取范围最小、效果最大的模块进行测试，用成果推动团队做更大调整。"
                },
                {
                  title: "渐进式表单与卡片化",
                  content: "使用卡片化的产品配置 + 渐进式表单，让信息以小块方式呈现，避免“表单看不到尽头”的挫败感。"
                },
                {
                  title: "移动端适配",
                  content: "桌面端测试成功后，将同样的模式迁移到移动端，让不同平台有相同的体验。"
                }
              ]
            },
            moves: [
              {
                id: "checkout-move-1",
                eyebrow: "举措 1 · MVP 实验",
                title: "从 5 步 → 2 步的最小验证",
                metaPills: ["跨团队对齐", "增量式验证"],
                subtitle: '先证明"砍字段、减步骤"真的可行，再争取资源。',
                bullets: [
                  "与 PM、法务、工程逐条对齐：哪些字段是强制填写、哪些是历史遗留、哪些可以完成购买后补充。",
                  "基于对齐结果，做一版仅保留核心字段的 MVP，流程压缩到两步：1. 产品配置 2. 账户与支付信息。",
                  "结果：转化率提升十几个百分点；更重要的是，为后续更彻底的重构提供了团队信心。"
                ],
                visual: {
                  type: "image",
                  src: "/assets/zoom-checkout-1.png",
                  alt: "从 5 步缩减到 2 步的对比方案"
                },
                visualPlaceholderText: "视觉：从 5 步缩减到 2 步的对比方案。"
              },
              {
                id: "checkout-move-2",
                eyebrow: "举措 2 · 重构核心路径",
                title: "卡片化产品 + 渐进式表单",
                metaPills: ["信息架构", "模式沉淀"],
                subtitle: "把 MVP 证明过的方向，升级为可复用的设计系统。",
                bullets: [
                  'MVP 虽然提升了转化，但仍是"老框架里删字段"，缺少可复用的设计语言。',
                  "将每个产品配置封装为可折叠/展开的卡片，未来新增产品时，只需新增一张卡片，不必推翻页面结构。",
                  "任何时刻只展示当前需要填写的部分，不同类型用户提前分流。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-checkout-2.mp4"
                },
                visualPlaceholderText: "视觉：卡片化产品配置 + 渐进式表单示意。"
              },
              {
                id: "checkout-move-3",
                eyebrow: "举措 3 · 移动端适配",
                title: "与桌面端统一体验",
                metaPills: ["移动端体验"],
                bullets: [
                  "针对小屏幕设计可折叠的订单信息，只外露需要支付的金额。",
                  "为不同输入框配置针对性的键盘，用户填写表单更丝滑。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-checkout-3.mp4"
                },
                visualPlaceholderText: "视觉：移动端结账界面适配示意。"
              }
            ],
            resultMetrics: [
              {
                label: "购买流程转化率",
                value: "35% ↑",
                description: "核心链路的重构实验中，整体转化率提升约 35%。"
              },
              {
                label: "移动端转化率",
                value: "5% → 30%",
                description: "移动端转化显著提升，贡献了接近 15% 的营收。"
              }
            ],
            contributions: {
              title: "我的贡献",
              items: [
                "与 PM、工程、法务拆解必填与可后置信息，为用户争取更好的体验。",
                "从 0 到 1 构建完整的购买流程，交付桌面端和移动端设计。",
                "搭建卡片化 / 渐进式表单的组件体系，沉淀为后续复用的样板。"
              ]
            }
          },
          {
            intro: {
              phaseNumber: 3,
              phaseLabel: "订阅管理",
              title: "订阅管理：把「看不懂、不敢改」变成「看得清、敢操作」",
              challengeTitle: "核心挑战：入口找不到，状态看不懂，权限逻辑不透明",
              problems: [
                {
                  title: "入口缺失",
                  content: [
                    "管理员后台中，各产品线设计师各自添加 Tab，订阅与计费入口深埋在二 / 三层菜单里。",
                    "绝大多数用户不知道去哪儿管理自己的订阅。"
                  ],
                  image: "/assets/zoom-billing-challenge-entry.png",
                  imageAlt: "入口缺失示意图"
                },
                {
                  title: "信息杂乱 + 权限不明",
                  content: [
                    "进入页面后字段、历史记录、状态标签混在一起，列表与详情混为一体。",
                    "权限与合约逻辑复杂，有些用户在前台不可编辑，但界面并没有解释，造成大量客诉与客服成本。"
                  ],
                  image: "/assets/zoom-billing-challenge-info.png",
                  imageAlt: "信息杂乱示意图"
                }
              ],
              userQuote: "用户很难从现有设计中获取有效信息，即便获取到了，也不知道能进行说明操作。",
              conclusionLabel: "结论",
              beforeLabel: "之前：管理面板",
              beforePlaceholderText: "入口深埋、信息堆叠、权限不明，用户既看不懂也不敢改。"
            },
            strategy: {
              title: "设计策略",
              subtitle: "入口前移 + 信息分层 + 权限表达清晰",
              userInsight: {
                content: "管理订阅时，用户只想知道：我在哪、我拥有什么、下一步能做什么。"
              },
              strategies: [
                {
                  title: "入口前移",
                  content: "把订阅管理入口放在导航与头像菜单的第一层，确保用户第一时间找到。"
                },
                {
                  title: "信息分层展示",
                  content: "列表层看「现在」——产品、周期、下一次扣费。详情层看「所有」——配置、账单、历史记录。"
                },
                {
                  title: "权限表达清晰",
                  content: "明确哪些用户可以在线修改，哪些需要人工支持，用 UI 提示告知下一步。"
                }
              ]
            },
            moves: [
              {
                id: "sub-move-1",
                eyebrow: "举措 1 · 订阅入口前移",
                title: "修改信息结构，头像一键触达",
                metaPills: ["信息架构", "可发现性"],
                subtitle: '确保"我要改订阅"这件事，在任何入口都能一键到达。',
                bullets: [
                  '用户在客服单里频繁询问"订阅在哪"，而管理后台导航随着产品线扩张被不断塞满。',
                  "在管理员后台加入一级「订阅 / 计费管理」入口。",
                  "在 Zoom 客户端与 Web 端的头像下拉里新增「订阅中心」入口。",
                  "通过 Figma 原型快速对 7 名用户做可用性测试，任务成功率 100%。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-1.mp4"
                },
                visualPlaceholderText: "视觉：新的导航菜单和头像下拉入口。"
              },
              {
                id: "sub-move-2",
                eyebrow: "举措 2 · 关键信息外露",
                title: "列表看「现在」，详情看「所有」",
                metaPills: ["信息分层", "清晰度"],
                subtitle: "折叠多余信息，仅展示当前状态",
                bullets: [
                  "列表层只展示决策当下真正需要的信息：产品名称、当前计划 / 计费周期、下一次扣费 / 到期时间、状态标签。",
                  "定义列表/详情的层级规则与状态标签系统，让新产品添加更规范。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-2.mp4"
                },
                visualPlaceholderText: "视觉：新的订阅列表和详情页设计。"
              },
              {
                id: "sub-move-3",
                eyebrow: "举措 3 · 权限一目了然",
                title: "梳理「谁能在线改、谁必须走人工」",
                metaPills: ["权限表达", "客服分流"],
                subtitle: "和 PM、研发定义清晰的权限规则，让用户知道下一步怎么做。",
                bullets: [
                  "我和 PM、研发一起，梳理出一套清晰的规则：哪些用户可以在线升级，哪些用户必须通过销售或客服修改。",
                  "对可以在线操作的场景提供明确的操作入口。",
                  "对不能在线操作的场景告知原因，给出下一步建议。"
                ],
                visual: {
                  type: "video",
                  src: "/assets/zoom-billing-3.mp4"
                },
                visualPlaceholderText: "视觉：权限提示与分流示意。"
              }
            ],
            resultMetrics: [
              {
                label: "订阅中心入口可用性测试",
                value: "100%",
                description: "所有 7 名用户都成功找到了入口。"
              },
              {
                label: "非自愿流失率",
                value: "7.2% → 5.8%",
                description: "因支付失败导致的流失显著下降。"
              }
            ],
            contributions: {
              title: "我的贡献",
              items: [
                "重构管理员后台导航与客户端头像入口，统一订阅管理入口。",
                "设计列表 / 详情分层与权限提示模式，让用户敢于在线修改。",
                "主导订阅卡片与详情展示规范，配合渐进式上线策略落地。"
              ]
            }
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
