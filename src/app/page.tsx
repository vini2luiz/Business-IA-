"use client"

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { ArrowRight, Check, Star, Code, Cpu, Menu, X, MessageCircle, ChevronRight, Sparkles, Workflow, Globe, Layers } from 'lucide-react'

// ── EmailJS ─ preencha com seus dados do emailjs.com ──
const EMAILJS_SERVICE_ID  = 'service_f6w43fq'
const EMAILJS_TEMPLATE_ID = 'template_hqbphnj'
const EMAILJS_PUBLIC_KEY  = '-vIbGd_1y4-c5rkDP'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Todos')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          phone:        formData.phone,
          service:      formData.service,
          message:      formData.message,
          to_email:     'vini2luiz@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      )
      setIsSubmitted(true)
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      }, 3000)
    } catch {
      alert('Erro ao enviar. Tente novamente ou fale pelo WhatsApp.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const navLinks = [
    { label: 'Como fazemos', href: '#services' },
    { label: 'Portfólio', href: '#projects' },
    { label: 'Resultados', href: '#testimonials' },
    { label: 'Planos', href: '#pricing' },
  ]

  const techs = ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind', 'OpenAI', 'Stripe', 'WhatsApp API', 'Figma']

  const projects = [
    { category: 'IA', title: 'ChatBot Inteligente', description: 'Atendimento automatizado com GPT-4 para e-commerce', date: 'Out 2025', from: '#3b0764', to: '#1e1b4b' },
    { category: 'Automação', title: 'AutoFlow CRM', description: 'Fluxos automáticos de vendas e follow-up', date: 'Nov 2025', from: '#052e16', to: '#042f2e' },
    { category: 'SaaS', title: 'Dashboard Analytics', description: 'Painel em tempo real com insights de negócio', date: 'Dez 2025', from: '#082f49', to: '#083344' },
    { category: 'Sites', title: 'Loja Virtual Premium', description: 'E-commerce completo com Stripe e WhatsApp', date: 'Jan 2026', from: '#431407', to: '#450a0a' },
    { category: 'IA', title: 'Agente de Prospecção', description: 'IA que qualifica leads e agenda reuniões sozinha', date: 'Fev 2026', from: '#2e1065', to: '#500724' },
    { category: 'Automação', title: 'Pipeline de Dados', description: 'ETL automatizado com notificações inteligentes', date: 'Mar 2026', from: '#082f49', to: '#172554' },
  ]

  const filters = ['Todos', 'IA', 'Automação', 'SaaS', 'Sites']
  const filteredProjects = activeFilter === 'Todos' ? projects : projects.filter(p => p.category === activeFilter)

  const testimonials = [
    { name: 'Carlos Mendes', role: 'CEO, Startup Tech', text: 'A ZeroToApp transformou completamente nosso atendimento. Reduzimos 70% do tempo de suporte com o chatbot deles.', rating: 5 },
    { name: 'Ana Lima', role: 'Diretora Comercial', text: 'O sistema de automação que desenvolveram nos economiza horas de trabalho manual todo dia. Simplesmente impressionante!', rating: 5 },
    { name: 'Pedro Souza', role: 'Fundador, E-commerce', text: 'Site entregue em tempo recorde, com design incrível e performance excepcional. Super recomendo a ZeroToApp!', rating: 5 },
    { name: 'Mariana Costa', role: 'Head de Marketing', text: 'As integrações que fizeram com nosso CRM funcionam perfeitamente. Equipe extremamente profissional e ágil.', rating: 5 },
  ]

  const plans = [
    {
      name: 'Site Institucional',
      description: 'Perfeito para pequenas empresas e profissionais autônomos',
      features: ['Design responsivo', 'Até 5 páginas', 'Otimização SEO básica', 'Formulário de contato', 'Integração com WhatsApp', 'Entrega em 7 dias'],
      cta: 'Solicitar Orçamento',
      highlighted: false,
    },
    {
      name: 'Landing Page + IA',
      description: 'Página de alta conversão com chatbot inteligente integrado',
      features: ['Design focado em conversão', 'ChatBot com GPT-4', 'Analytics e tracking', 'Integração com CRM', 'Teste A/B configurado', '1 mês de suporte incluso'],
      cta: 'Solicitar Orçamento',
      highlighted: true,
    },
    {
      name: 'Sistema Completo',
      description: 'Solução sob medida para o crescimento do seu negócio',
      features: ['Análise de requisitos', 'UI/UX personalizado', 'Banco de dados', 'Painel administrativo', 'Relatórios e dashboards', 'Suporte dedicado'],
      cta: 'Falar com Especialista',
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#060d10] text-white overflow-x-hidden">

      {/* ── Ambient Background ── */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-cyan-600/8 rounded-full blur-[130px] animate-pulse-slow" />
        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] bg-emerald-700/6 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-teal-700/5 rounded-full blur-[80px]" />
      </div>

      {/* ── Navbar ── */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
        <div className={`border-b transition-all duration-500 ${
          scrolled
            ? 'bg-[#060d10]/95 border-white/8 backdrop-blur-2xl'
            : 'bg-transparent border-transparent'
        }`}>
          <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="#" className="font-bold text-white text-sm flex items-center gap-2 flex-shrink-0">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-cyan-500/20">
                <Cpu className="w-4 h-4 text-white" />
              </div>
              ZeroToApp
            </a>
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all shadow-lg shadow-cyan-500/20"
            >
              Iniciar Projeto <ArrowRight className="w-3.5 h-3.5" />
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white p-1">
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-lg font-semibold rounded-xl"
          >
            Fale Conosco
          </a>
        </div>
      )}

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pb-0 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Accent line */}
        <div className="absolute top-[45%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/12 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-24 pb-12">
          {/* Left – text */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-cyan-500/8 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-8 tracking-wide">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              Disponível para novos projetos
            </div>

            {/* Headline */}
            <h1 className="text-[2.6rem] sm:text-5xl lg:text-[4.2rem] font-bold leading-[1.04] tracking-tight mb-6">
              <span className="text-white">Sites que vendem.</span>
              <br />
              <span className="text-shimmer">Sistemas que escalam.</span>
            </h1>

            <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
              Construímos{' '}
              <span className="text-white font-medium">landing pages</span>,{' '}
              <span className="text-white font-medium">sites institucionais</span> e{' '}
              <span className="text-white font-medium">plataformas SaaS</span>{' '}
              com foco total em resultado e performance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-12">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white text-sm font-bold rounded-lg hover:opacity-90 transition-all shadow-xl shadow-cyan-500/20 hover:scale-105 w-full sm:w-auto"
              >
                Iniciar meu projeto
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-gray-400 text-sm font-medium border border-white/8 rounded-lg hover:border-white/20 hover:text-white transition-all w-full sm:w-auto"
              >
                Ver serviços
              </a>
            </div>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center gap-6">
              {[
                { value: '50+', label: 'Projetos' },
                { value: '100%', label: 'Satisfação' },
                { value: '5★', label: 'Avaliação' },
                { value: '7 dias', label: 'Entrega' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  {i > 0 && <div className="hidden sm:block w-px h-5 bg-white/10" />}
                  <div>
                    <p className="text-base font-bold text-gradient-violet leading-none">{stat.value}</p>
                    <p className="text-[11px] text-gray-600 mt-0.5">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – code mockup */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/15 to-emerald-500/8 rounded-3xl blur-3xl scale-110" />
              <div className="relative bg-[#0a1a20] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 bg-white/3 border-b border-white/6">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
                  <div className="flex-1 mx-3 px-3 py-1 bg-white/4 rounded-md text-[10px] text-gray-500 text-center tracking-wide">
                    zerotoapp.online
                  </div>
                </div>
                {/* Code preview */}
                <div className="p-5 font-mono text-xs space-y-2 leading-relaxed">
                  <div className="text-gray-600">{'// Seu próximo projeto'}</div>
                  <div><span className="text-cyan-400">const</span> <span className="text-white">projeto</span> <span className="text-gray-500">=</span> <span className="text-emerald-400">await</span> <span className="text-white">build</span><span className="text-gray-500">(&#123;</span></div>
                  <div className="pl-4"><span className="text-cyan-300">design</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"impecável"</span><span className="text-gray-500">,</span></div>
                  <div className="pl-4"><span className="text-cyan-300">performance</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"100/100"</span><span className="text-gray-500">,</span></div>
                  <div className="pl-4"><span className="text-cyan-300">conversão</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"maximizada"</span><span className="text-gray-500">,</span></div>
                  <div className="pl-4"><span className="text-cyan-300">entrega</span><span className="text-gray-500">:</span> <span className="text-yellow-300">"7 dias"</span></div>
                  <div><span className="text-gray-500">&#125;)</span></div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-emerald-400">Pronto para lançar</span>
                  </div>
                </div>
                {/* Metrics */}
                <div className="flex border-t border-white/6">
                  {[{label:'Performance',val:'100'},{label:'SEO',val:'100'},{label:'Acesso.',val:'98'}].map((m,i)=>(
                    <div key={i} className={`flex-1 p-3 text-center ${i>0?'border-l border-white/6':''}`}>
                      <p className="text-base font-bold text-gradient-violet">{m.val}</p>
                      <p className="text-[10px] text-gray-600">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3D Globe */}
        <div className="relative w-full mt-16 flex justify-center overflow-hidden" style={{ height: '320px' }}>
          <div className="scale-[0.65] xs:scale-75 sm:scale-90 md:scale-100 origin-top">
          <div className="globe-scene">
            {/* Sphere base */}
            <div className="globe-sphere">
              {/* Meridians */}
              {[0,30,60,90,120,150].map(deg => (
                <div key={deg} className="globe-ring globe-meridian" style={{ transform: `rotateY(${deg}deg)` }} />
              ))}
              {/* Parallels */}
              {[-60,-30,0,30,60].map((deg, i) => (
                <div key={i} className="globe-ring globe-parallel" style={{
                  transform: `rotateX(90deg) translateZ(${Math.sin(deg * Math.PI / 180) * 200}px)`,
                  width: `${Math.cos(deg * Math.PI / 180) * 400}px`,
                  height: `${Math.cos(deg * Math.PI / 180) * 400}px`,
                }} />
              ))}
              {/* Glow core */}
              <div className="globe-core" />
            </div>
            {/* Shadow beneath */}
            <div className="globe-shadow" />
          </div>
          </div>
          {/* Fade bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060d10] to-transparent" />
        </div>
      </section>

      {/* ── Services – Bento Grid ── */}
      <section id="services" className="relative py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">O que fazemos</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Soluções <span className="text-shimmer-fast">completas</span><br />para seu negócio
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Do conceito à entrega, cuidamos de cada detalhe do seu projeto digital.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Hero card – Landing Pages */}
            <div className="group relative md:row-span-2 bg-[#0a1520] rounded-3xl p-8 border border-white/8 hover:border-cyan-500/30 transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              <div className="absolute top-0 right-0 w-52 h-52 bg-cyan-500/8 rounded-full blur-[70px] group-hover:bg-cyan-500/15 transition-all duration-500" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/20">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase">Landing Pages</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors">
                  Páginas que<br />convertem de verdade
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Criamos landing pages de alta performance focadas em converter visitantes em clientes — design impecável, copy persuasivo e entrega rápida.
                </p>
                <ul className="space-y-3 mt-auto">
                  {['Design focado em conversão', 'Copy persuasivo incluso', 'Otimização SEO & performance', 'Integração com WhatsApp e CRM'].map(f => (
                    <li key={f} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-cyan-400" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack card */}
            <div className="group relative bg-[#0a1520] rounded-3xl p-8 border border-white/8 hover:border-cyan-500/20 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/6 rounded-full blur-[40px]" />
              <div className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {techs.map(tech => (
                    <span key={tech} className="px-3 py-1 rounded-lg bg-white/5 border border-white/8 text-xs text-gray-300 font-medium hover:border-white/20 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <Code className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-semibold tracking-[0.15em] text-cyan-400 uppercase">Tecnologias</span>
                </div>
                <h3 className="text-xl font-bold text-white">Stack moderno e escalável</h3>
              </div>
            </div>

            {/* Sites & Availability card */}
            <div className="group relative bg-[#0a1520] rounded-3xl p-8 border border-white/8 hover:border-emerald-500/25 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/6 rounded-full blur-[40px]" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 shadow-lg shadow-emerald-500/20">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold tracking-[0.15em] text-emerald-400 uppercase">Sites & Sistemas</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Disponível para<br />novos projetos</h3>
                <p className="text-gray-400 text-sm">Sites, landing pages e sistemas SaaS com entrega ágil e qualidade premium.</p>
              </div>
            </div>
          </div>

          {/* Bottom row – 3 quick cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            {[
              { icon: Workflow, color: 'orange', label: 'Automação', title: 'Zapier, Make & APIs', desc: 'Conecte sistemas e elimine trabalho manual.' },
              { icon: Layers, color: 'pink', label: 'SaaS', title: 'Sistemas Internos', desc: 'Dashboards, CRMs e plataformas robustas.' },
              { icon: Sparkles, color: 'cyan', label: 'Consultoria', title: 'Estratégia Digital', desc: 'Definimos o melhor caminho para o crescimento online do seu negócio.' },
            ].map((item, i) => (
              <div key={i} className="group bg-[#0a1520] rounded-3xl p-6 border border-white/8 hover:border-cyan-500/20 transition-all duration-300 hover:scale-[1.02]">
                <item.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors mb-4" />
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects ── */}
      <section id="projects" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Portfólio</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">Projetos <span className="text-gradient-violet">realizados</span></h2>
            <p className="text-gray-400 text-lg">Conheça alguns dos projetos que desenvolvemos.</p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-white text-black shadow-lg shadow-white/10'
                    : 'bg-white/5 text-gray-400 hover:text-white border border-white/8 hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, i) => (
              <div
                key={i}
                className="group relative rounded-2xl overflow-hidden border border-white/8 hover:border-white/20 transition-all duration-300 hover:scale-[1.03] cursor-pointer"
                style={{ background: `linear-gradient(135deg, ${project.from}, ${project.to})` }}
              >
                <div className="p-6 min-h-[180px] flex flex-col">
                  <div className="flex items-start justify-between mb-auto">
                    <span className="px-2.5 py-1 rounded-lg bg-black/30 text-xs font-semibold text-white/80 uppercase tracking-wider border border-white/10">
                      {project.category}
                    </span>
                    <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white/70 group-hover:translate-x-0.5 transition-all duration-200" />
                  </div>
                  <div className="mt-8">
                    <h3 className="text-lg font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/55 text-sm mb-3">{project.description}</p>
                    <p className="text-white/35 text-xs">{project.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Depoimentos</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              O que nossos <span className="text-gradient-violet">clientes</span><br />dizem
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-[#0a1520] rounded-2xl p-6 border border-white/8 hover:border-cyan-500/20 transition-all duration-300 hover:scale-[1.01]">
                <div className="flex gap-1 mb-4">
                  {Array(t.rating).fill(0).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-cyan-400 text-cyan-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-emerald-600 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-28 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Investimento</p>
            <h2 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight">
              Soluções para<br /><span className="text-shimmer-fast">cada necessidade</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">Cada projeto é único. Entre em contato para um orçamento personalizado.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`relative rounded-3xl p-8 border transition-all duration-300 hover:scale-[1.02] ${
                  plan.highlighted
                    ? 'bg-gradient-to-br from-cyan-950/50 to-teal-950/50 border-cyan-500/35 shadow-2xl shadow-cyan-500/10'
                    : 'bg-[#0a1520] border-white/8 hover:border-white/15'
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 text-xs font-bold text-white shadow-lg shadow-cyan-500/25">
                    Mais Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-7 leading-relaxed">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300 text-sm">
                      <Check className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? 'text-cyan-400' : 'text-gray-600'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`block w-full py-3 text-center rounded-2xl font-semibold text-sm transition-all duration-200 hover:scale-[1.02] ${
                    plan.highlighted
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white hover:opacity-90'
                      : 'bg-white/4 text-white border border-white/10 hover:bg-white/8'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="py-28 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-cyan-400 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Contato</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight">Vamos <span className="text-gradient-violet">construir</span><br />juntos?</h2>
            <p className="text-gray-400">Conte-nos sobre seu projeto e receba um orçamento personalizado.</p>
          </div>
          <div className="bg-[#0a1520] rounded-3xl p-5 sm:p-8 border border-white/8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mx-auto mb-6">
                  <Check className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Entraremos em contato em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-widest">Nome *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0c1c28] border border-white/8 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:bg-[#0e2030] transition-all text-sm"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-widest">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0c1c28] border border-white/8 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:bg-[#0e2030] transition-all text-sm"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-widest">Telefone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0c1c28] border border-white/8 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:bg-[#0e2030] transition-all text-sm"
                      placeholder="(44) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-widest">Serviço *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-[#0c1c28] border border-white/8 rounded-xl text-white focus:border-cyan-500/50 focus:outline-none focus:bg-[#0e2030] transition-all text-sm appearance-none"
                      style={{ colorScheme: 'dark' }}
                    >
                      <option value="" className="bg-[#111]">Selecione...</option>
                      <option value="agentes-ia" className="bg-[#111]">Agentes de IA</option>
                      <option value="sites" className="bg-[#111]">Sites & Landing Pages</option>
                      <option value="sistemas" className="bg-[#111]">Sistemas & SaaS</option>
                      <option value="automacao" className="bg-[#111]">Automação</option>
                      <option value="consultoria" className="bg-[#111]">Consultoria</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-widest">Mensagem *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 bg-[#0c1c28] border border-white/8 rounded-xl text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none focus:bg-[#0e2030] transition-all resize-none text-sm"
                    placeholder="Descreva seu projeto..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all hover:scale-[1.01] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2 text-sm"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>Enviar Mensagem <ArrowRight className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-white mb-6 leading-[1.05]">
            Pronto para <span className="text-shimmer">impulsionar</span><br />seu negócio?
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Vamos transformar sua ideia em realidade. Entre em contato agora mesmo e receba um orçamento personalizado para seu projeto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5544991199530"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366]/10 border border-[#25D366]/25 text-[#25D366] font-semibold rounded-full hover:bg-[#25D366]/20 hover:border-[#25D366]/40 transition-all duration-200 hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="mailto:vini2luiz@gmail.com"
              className="flex items-center justify-center gap-2 px-8 py-4 text-gray-500 hover:text-white font-medium transition-colors text-sm"
            >
              Enviar email <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-white/6 py-12 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
              <Cpu className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="font-bold text-white">ZeroToApp</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm text-gray-600 hover:text-white transition-colors">
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-gray-700 text-sm">© 2026 ZeroToApp. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
