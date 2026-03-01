import Link from "next/link";
import { 
  ArrowLeft, Search, Download
} from "lucide-react";
import React from "react";
import { SKILL_DATA } from "@/data/skills";

// Hardcoded categories for now
const CATEGORIES = ["全部", "效率工具", "内容创作", "数据分析", "编程开发", "生活助手"];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-[#020204] text-white font-sans selection:bg-blue-600/30 overflow-x-hidden antialiased">
      
      {/* Backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="fixed inset-0 bg-grid -z-20 opacity-20" />
        <div className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      {/* --- Navbar (Simple) --- */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020204]/80 backdrop-blur-md h-16 flex items-center px-4 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>返回首页</span>
        </Link>
        <div className="flex-1 text-center font-bold text-lg tracking-tight">
          <span className="text-2xl mr-2">🛍️</span>
          三万技能商店
        </div>
        <div className="w-20" /> {/* Spacer */}
      </nav>

      <div className="pt-32 pb-20 px-4 md:px-8 container mx-auto max-w-7xl">
        
        {/* --- Header & Search --- */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">
            扩展三万的<span className="text-blue-400">无限能力</span>
          </h1>
          <p className="text-neutral-400 max-w-xl mx-auto mb-10 text-lg">
            就像给手机装 App 一样，给三万安装新技能。
            <br />
            所有技能经由官方安全审核，即装即用。
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto group">
            <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-full px-4 h-12 focus-within:border-blue-500/50 focus-within:bg-white/10 transition-all">
              <Search className="w-5 h-5 text-neutral-500 mr-3" />
              <input 
                type="text" 
                placeholder="搜索技能，例如：周报、绘图..." 
                className="bg-transparent border-none outline-none text-white w-full placeholder:text-neutral-600 h-full"
              />
            </div>
          </div>
        </div>

        {/* --- Categories --- */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((cat, i) => (
            <button 
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                i === 0 
                  ? "bg-white text-black hover:bg-neutral-200" 
                  : "bg-white/5 text-neutral-400 border border-white/5 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* --- Skills Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((skill) => (
            <Link href={`/skills/${skill.slug}`} key={skill.slug} className="group relative p-6 rounded-3xl bg-[#080808] border border-white/5 hover:border-white/10 transition-all duration-300 hover:translate-y-[-2px] overflow-hidden block">
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <div className="flex justify-between items-start mb-4 relative z-10">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${skill.color}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  {skill.tag === "Pro" || skill.tag === "Beta" ? (
                    <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-white/5 text-neutral-400 border border-white/10">
                      {skill.tag}
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20">
                      {skill.tag}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-200 transition-colors relative z-10">
                {skill.title}
              </h3>
              
              <p className="text-neutral-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2 relative z-10">
                {skill.desc}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/5 relative z-10">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium font-mono">
                  <Download className="w-3.5 h-3.5" />
                  {skill.stats}
                </div>
                <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white group-hover:bg-white group-hover:text-black transition-all">
                  查看
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center py-12 border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
          <h3 className="text-xl font-bold text-neutral-300 mb-2">没找到想要的技能？</h3>
          <p className="text-neutral-500 mb-6">三万支持自定义技能开发，你可以教它任何事。</p>
          <button className="px-6 py-2.5 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 text-sm font-medium hover:bg-blue-600/20 transition-colors">
            🛠️ 创建自定义技能
          </button>
        </div>

      </div>
    </main>
  );
}

// Rename the import to match usage
const SKILLS = SKILL_DATA;
