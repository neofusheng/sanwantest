import { 
  FileText, Search, Image as ImageIcon, Code, 
  MessageSquare, TrendingUp, Zap, Brain, 
  LayoutTemplate, Video, Music, Share2
} from "lucide-react";
import React from 'react';

export const SKILL_DATA = [
  {
    slug: "weekly-report",
    title: "智能周报生成器",
    desc: "读取你的 Git 提交记录、日历和待办事项，自动生成一份条理清晰的周报，支持 Markdown 和 PDF 导出。",
    longDesc: "每周五还在为周报发愁？三万能自动连接你的 GitHub、GitLab、飞书日历和 Jira，分析你过去一周的工作轨迹，自动归纳重点、产出成果和下周计划。你只需要审核一下，还能让它调整语气（正式/轻松）。",
    category: "效率工具",
    icon: FileText,
    stats: "12k+ 使用",
    tag: "🔥 热门",
    color: "text-blue-400",
    features: ["多源数据聚合", "智能摘要", "风格调整", "一键导出 PDF/MD"],
    author: "Sanwan Official",
    version: "2.1.0"
  },
  {
    slug: "competitor-monitor",
    title: "竞品监控雷达",
    desc: "监控指定竞品网站、公众号、Twitter，一旦有更新立即推送到飞书群，并附带 AI 摘要分析。",
    longDesc: "时刻掌握对手动态。输入竞品网址或社媒账号，三万会 24 小时巡逻。网页改版、新发文章、价格变动、甚至招聘信息更新，第一时间推送到你的飞书群。由 AI 提取核心变动点，不用自己去刷网页。",
    category: "数据分析",
    icon: Search,
    stats: "8.5k+ 使用",
    tag: "⭐ 推荐",
    color: "text-purple-400",
    features: ["网页视觉监控", "关键词触发", "多渠道推送", "历史快照对比"],
    author: "Sanwan Official",
    version: "1.5.2"
  },
  {
    slug: "logo-designer",
    title: "Logo 设计师",
    desc: "输入品牌名称和理念，基于 Nano Banana 2 模型，一键生成 4 款不同风格的 Logo 方案。",
    longDesc: "创业必备。不需要懂设计软件，只要告诉三万你的品牌叫什么、做什么业务、想要什么感觉（极简、科技、手绘等）。它会调用顶级绘图模型，生成专业水准的 Logo 及其变体，并提供配色方案建议。",
    category: "内容创作",
    icon: ImageIcon,
    stats: "20k+ 使用",
    tag: "Pro",
    color: "text-pink-400",
    features: ["多风格生成", "矢量图导出", "配色方案", "样机预览"],
    author: "Design Lab",
    version: "3.0.0"
  },
  {
    slug: "react-generator",
    title: "React 组件生成",
    desc: "描述你想要的 UI 界面，直接生成可运行的 React + Tailwind 代码，支持一键预览。",
    longDesc: "前端开发神技。截图或者手绘草图给三万，或者直接文字描述“做一个深色模式的登录页，要有玻璃拟态效果”。三万直接吐出高质量的 React + Tailwind CSS 代码，结构清晰，完全可复用。",
    category: "编程开发",
    icon: Code,
    stats: "50k+ 使用",
    tag: "🔥 热门",
    color: "text-orange-400",
    features: ["截图转代码", "Tailwind 最佳实践", "响应式适配", "暗黑模式支持"],
    author: "Sanwan Dev",
    version: "4.2.1"
  },
  {
    slug: "meeting-notes",
    title: "会议纪要整理",
    desc: "上传录音或飞书会议链接，自动区分发言人，提取 Action Items，并同步到日历。",
    category: "效率工具",
    icon: MessageSquare,
    stats: "15k+ 使用",
    tag: "必备",
    color: "text-green-400",
    features: ["声纹识别", "自动摘要", "待办提取", "多语言支持"],
    author: "Efficiency Team",
    version: "2.0.1"
  },
  {
    slug: "xhs-copywriter",
    title: "小红书爆款文案",
    desc: "分析当下热点，根据你的图片生成 5 版不同风格的小红书文案，自带 Emoji 和标签。",
    category: "内容创作",
    icon: TrendingUp,
    stats: "33k+ 使用",
    tag: "🔥 热门",
    color: "text-red-400",
    features: ["热点关联", "多种语气", "Emoji 增强", "标签推荐"],
    author: "Growth Hacking",
    version: "1.8.0"
  }
];
