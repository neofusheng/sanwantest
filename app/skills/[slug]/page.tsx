import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Star, Shield, Clock, Globe } from "lucide-react";
import { SKILL_DATA } from "@/data/skills";
import React from 'react';

// Required for static export
export function generateStaticParams() {
  return SKILL_DATA.map((skill) => ({
    slug: skill.slug,
  }));
}

export default function SkillDetailPage({ params }: { params: { slug: string } }) {
  const skill = SKILL_DATA.find(s => s.slug === params.slug);

  if (!skill) {
    notFound();
  }

  const Icon = skill.icon;

  return (
    <main className="min-h-screen bg-[#020204] text-white font-sans selection:bg-blue-600/30 overflow-x-hidden antialiased">
      
      {/* Backgrounds */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="fixed inset-0 bg-grid -z-20 opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[600px] bg-blue-900/10 rounded-full blur-[180px] -z-10 pointer-events-none" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#020204]/80 backdrop-blur-md h-16 flex items-center px-4 md:px-8">
        <Link href="/skills" className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors group">
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span>返回商店</span>
        </Link>
      </nav>

      <div className="pt-32 pb-20 px-4 md:px-8 container mx-auto max-w-5xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row gap-8 mb-16">
          <div className={`w-32 h-32 rounded-3xl flex items-center justify-center border border-white/10 bg-[#0A0A0A] shrink-0 ${skill.color}`}>
            <Icon className="w-16 h-16" />
          </div>
          
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-white uppercase tracking-wider">
                {skill.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold text-blue-300">
                {skill.tag}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">{skill.title}</h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">{skill.desc}</p>
            
            <div className="flex items-center gap-6 mt-8 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                {skill.stats}
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                官方认证
              </div>
              <div className="flex items-center gap-2">
                v{skill.version}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-center min-w-[200px]">
            <button className="w-full h-14 bg-white text-black rounded-xl font-bold text-lg hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              安装技能
            </button>
            <button className="w-full h-14 bg-white/5 border border-white/10 text-white rounded-xl font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <Globe className="w-4 h-4" />
              在线试用
            </button>
          </div>
        </div>

        {/* Content Tabs (Simulated) */}
        <div className="border-b border-white/10 flex gap-8 mb-12">
          <button className="pb-4 text-white font-bold border-b-2 border-blue-500">概览</button>
          <button className="pb-4 text-neutral-500 hover:text-white transition-colors">如何使用</button>
          <button className="pb-4 text-neutral-500 hover:text-white transition-colors">评价 (4.9)</button>
          <button className="pb-4 text-neutral-500 hover:text-white transition-colors">版本历史</button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold mb-6">技能介绍</h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {skill.longDesc}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">核心能力</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skill.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                      <Star className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
              <h3 className="font-bold mb-4 text-neutral-300">开发者</h3>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black font-bold">S</div>
                <div>
                  <div className="font-bold text-white">{skill.author}</div>
                  <div className="text-xs text-neutral-500">官方认证开发者</div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-[#0A0A0A] border border-white/5">
              <h3 className="font-bold mb-4 text-neutral-300">信息</h3>
              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-neutral-500">上次更新</span>
                  <span className="text-white">2天前</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">分类</span>
                  <span className="text-white">{skill.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">语言</span>
                  <span className="text-white">中文, English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
