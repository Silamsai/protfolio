import { useState, useEffect } from 'react';
import {
  ExternalLink,
  FileText,
  Mail,
  Briefcase,
  Code2,
  ArrowRight,
  Sparkles,
  Trophy,
  GraduationCap,
  Terminal,
  Database,
  Cpu,
  Menu,
  X,
} from 'lucide-react';

// Custom inline SVG icons for Github & LinkedIn
const GithubIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IDCard = () => {
  return (
    <div className="id-card-wrapper w-full max-w-[260px] mx-auto select-none">
      {/* Hanging String/Lanyard Thread */}
      <div className="id-card-thread h-16 relative">
        {/* Top Clip Pin */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-800 border border-zinc-700 shadow-inner"></div>
      </div>
      
      {/* Metallic Lanyard Hook */}
      <div className="w-6 h-6 rounded-full bg-gradient-to-b from-zinc-400 to-zinc-600 border border-zinc-500 mx-auto -mt-2 relative z-10 flex items-center justify-center shadow-md">
        <div className="w-2.5 h-2.5 rounded-full bg-black border border-zinc-700"></div>
      </div>
      
      {/* ID Badge Body */}
      <div className="bg-gradient-to-b from-zinc-900 to-black rounded-2xl border border-zinc-800 p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] relative -mt-1 overflow-hidden transition-all duration-300 hover:border-zinc-500 hover:shadow-[0_0_20px_rgba(255,255,255,0.05)]">
        {/* Background Grid Pattern Accent */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/10 via-transparent to-transparent pointer-events-none"></div>
        
        {/* Header Area */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-led-blink"></span>
            <span className="text-[9px] font-mono tracking-widest text-zinc-500 font-semibold uppercase">SYSTEMS ACTIVE</span>
          </div>
          <span className="text-[9px] font-mono text-zinc-500 font-bold uppercase tracking-wider">CUT · B.TECH</span>
        </div>
        
        {/* Badge Body Layout */}
        <div className="flex flex-col items-center">
          {/* Photo Holder Frame */}
          <div className="w-28 h-28 rounded-xl overflow-hidden relative border border-zinc-800 shadow-inner group/photo">
            <img
              src="/avatar.jpg"
              alt="Sai Manikanta"
              className="w-full h-full object-cover transition-all duration-500"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60"></div>
          </div>
          
          {/* Bio Info */}
          <div className="text-center mt-3 w-full">
            <h3 className="font-heading font-extrabold text-white text-base leading-tight tracking-wide">
              SAI MANIKANTA
            </h3>
            <p className="font-heading text-zinc-400 text-[10px] uppercase font-bold tracking-wider mt-0.5">
              Full-Stack & AI Engineer
            </p>
          </div>
          
          {/* Smart Card Chip */}
          <div className="flex justify-between items-center w-full mt-4 border-t border-zinc-800/60 pt-3">
            <div className="w-8 h-6 rounded gold-chip flex flex-col justify-between p-0.5 shadow-inner">
              <div className="border-b border-black/10 h-[2px]"></div>
              <div className="border-b border-black/10 h-[2px]"></div>
              <div className="border-b border-black/10 h-[2px]"></div>
              <div className="border-b border-black/10 h-[2px]"></div>
            </div>
            
            {/* Serial Number & Barcode Area */}
            <div className="flex flex-col items-end">
              {/* Barcode representation */}
              <div className="w-16 h-5 flex items-end justify-between overflow-hidden opacity-40">
                {[1.5, 3, 1, 2, 4, 1.5, 1, 3, 2, 1.5, 1, 3].map((w, idx) => (
                  <div key={idx} className="bg-white h-full" style={{ width: `${w}px` }}></div>
                ))}
              </div>
              <span className="text-[7px] font-mono text-zinc-600 mt-1 uppercase">SMR-73960-2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const resumeData = {
  name: 'Sai Manikanta Reddy Seelam',
  title: 'Full-Stack Developer & AI Enthusiast',
  email: 'silamsai74@gmail.com',
  phone: '+91 73960 42939',
  linkedin: 'linkedin.com/in/sai-manikanta-reddy-seelam',
  github: 'github.com/Silamsai',
  leetcode: 'https://leetcode.com/u/Sai_manikanta_74/',
  summary:
    'Full-stack developer with hands-on experience in React.js, Node.js, MongoDB, and REST APIs. Built and deployed AI-powered applications using RAG, Google Gemini API, and vector databases. Seeking a software developer role to build scalable, production-grade web applications.',
  education: {
    institution: 'Centurion University, Vizianagaram, Andhra Pradesh',
    degree: 'B.Tech in Computer Science and Engineering (CSE)',
    duration: '2022 - 2026',
    cgpa: '8.4',
    coursework: [
      'Operating Systems', 'DBMS', 'Applied Machine Learning',
      'Computer Networks', 'Software Engineering',
      'Data Structures & Algorithms', 'Android Development',
    ],
  },
  experience: {
    company: 'Tech Mahindra',
    location: 'Hyderabad, India',
    role: 'Software Trainee – Application Support',
    duration: 'Apr 2026 - May 2026',
    bullets: [
      'Analyzed application logs and incident data to identify recurring production issues, perform root cause analysis, and improve system reliability.',
      'Executed SQL queries on production databases to investigate data integrity issues and support incident resolution workflows.',
      'Collaborated with development teams on REST API behavior, software deployment, and enterprise architecture; researched CI/CD and AI-driven automation practices.',
    ],
  },
  projects: [
    {
      id: 'tom-ai',
      emoji: '🧠',
      title: 'TOM.AI – Personal AI Assistant',
      tag: 'RAG & AI',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Gemini API', 'RAG', 'OAuth 2.0'],
      desc: 'A full-stack RAG-based AI assistant using Google Gemini embeddings and MongoDB Vector Search.',
      bullets: [
        'Built full-stack RAG assistant enabling semantic search across emails, tasks, and chat history.',
        'Integrated Google OAuth 2.0 and Gmail API to automate email fetching, AI-powered summarization, and response generation.',
        'Designed persistent memory architecture using vector embeddings for context-aware conversations; built automated reminders via cron jobs.',
        'Built task and reminder management system with automated email notifications.',
      ],
      github: 'https://github.com/Silamsai/TOM.ai',
      demo: 'https://tom-ai-one.vercel.app/',
      challenges: 'Handling multi-modal context injection and response latency in real-time streaming; syncing large Gmail mailboxes securely without hitting API rate limits.',
      solutions: 'Designed a chunk-and-embed pipeline with Atlas Vector Search index. Implemented cron jobs to fetch incremental mailbox updates, and used cache-aside strategies for hot datasets.',
    },
    {
      id: 'faculty-management',
      emoji: '🏫',
      title: 'Faculty Management System',
      tag: 'MERN Stack',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT'],
      desc: 'A scalable MERN application automating faculty profile management, reducing record handling time by 60%.',
      bullets: [
        'Built secure RESTful APIs with Node.js and Express.js for complete CRUD operations.',
        'Implemented JWT-based authentication and role-based access control (RBAC) for Admin and Faculty roles.',
        'Deployed responsive React.js frontend enabling real-time updates of faculty schedules, course allocations, and performance metrics.',
      ],
      github: 'https://github.com/Silamsai/Faculty-Management',
      demo: 'https://faculty-management-gamma.vercel.app/',
      challenges: 'Enforcing fine-grained authorization (RBAC) across multiple admin/faculty CRUD endpoints and dealing with complex schedule overlaps.',
      solutions: 'Built middleware verifying JWT payload claims. Implemented database level uniqueness constraints and transaction validations to prevent double-booking of slots.',
    },
    {
      id: 'echo',
      emoji: '💬',
      title: 'Echo – Real-Time Chat Application',
      tag: 'Real-Time & WebSockets',
      tech: ['React.js', 'Node.js', 'Socket.io', 'MongoDB', 'Redis', 'Docker', 'JWT'],
      desc: 'A production-grade real-time chat application with instant messaging, online presence tracking, and scalable WebSocket infrastructure.',
      bullets: [
        'Built bi-directional real-time communication using Socket.io with room-based architecture supporting group and private chats.',
        'Implemented Redis pub/sub for horizontal scaling across multiple Node.js instances, enabling seamless multi-server WebSocket handling.',
        'Designed JWT-secured REST API with MongoDB persistence for message history, user profiles, and chat room management.',
        'Containerized the full stack with Docker and Docker Compose; set up CI/CD pipeline via GitHub Actions for automated testing and deployment.',
      ],
      github: 'https://github.com/Silamsai/Echo',
      demo: 'https://echo-real-time-chat.vercel.app/',
      challenges: 'Maintaining consistent real-time state across multiple server instances and handling WebSocket reconnection logic gracefully under network instability.',
      solutions: 'Adopted Redis pub/sub as a message broker between Socket.io server instances. Implemented exponential back-off reconnection on the client and sticky-session load balancing via Nginx upstream.',
    },
    {
      id: 'cineflow',
      emoji: '🎬',
      title: 'CineFlow – Movie Ticket Booking Platform',
      tag: 'Full-Stack & Real-Time',
      tech: ['React 18', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'Razorpay', 'Clerk Auth', 'Framer Motion', 'GSAP', 'Cloudinary'],
      desc: 'A production-grade, full-stack movie ticket booking platform with interactive seat maps, real-time seat holds, Razorpay payments, QR e-tickets, and a full admin analytics dashboard.',
      bullets: [
        'Built an interactive seat map with VIP/Premium/Standard pricing tiers and real-time seat availability using Socket.io — seats are held for 5 minutes and auto-released on timeout.',
        'Integrated Razorpay payment gateway with webhook support; generates QR code e-tickets with confetti confirmation and sends booking emails via Nodemailer.',
        'Implemented Clerk authentication supporting Email, Google, GitHub, Apple, and SMS OTP; admin role managed via Clerk publicMetadata.',
        'Built a full admin dashboard with revenue analytics (Recharts), movie/theater CRUD with Cloudinary image uploads, user management, and refund processing.',
      ],
      github: 'https://github.com/Silamsai/CineFlow',
      demo: 'https://cine-flow-gold.vercel.app/',
      challenges: 'Preventing double-booking race conditions on popular shows and keeping seat state perfectly in sync across concurrent users in real-time without stale UI.',
      solutions: 'Used Socket.io rooms per show for live seat broadcasts combined with a 5-minute server-side seat hold (TTL) backed by MongoDB. Optimistic UI updates with server reconciliation ensured zero stale seat selections.',
    },
  ],
  achievements: [
    'Solved 200+ DSA problems on LeetCode and GeeksforGeeks.',
    'Developed and deployed 2 full-stack production apps independently, live on Vercel; built AI assistant with RAG and semantic search demonstrating ML skills.',
    'Explored AI-driven automation and modern DevOps practices through enterprise collaboration at Tech Mahindra.',
  ],
  skills: {
    languages: ['JavaScript', 'Python', 'Java', 'SQL', 'C++'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Socket.io', 'NumPy', 'Pandas', 'Scikit-learn'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL', 'Atlas Vector Search', 'Redis'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'Power BI', 'Excel'],
    cloud: ['Docker', 'CI/CD', 'GitHub Actions', 'Vercel', 'REST APIs', 'JWT', 'OAuth 2.0', 'Nginx', 'Linux', 'WebSockets'],
    ai: ['RAG', 'NLP', 'Prompt Eng.', 'Gemini API', 'Semantic Search'],
  },
};

const navLinks = ['home', 'about', 'experience', 'education', 'projects', 'contact'];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Scroll handler for smooth navigation
  const handleScroll = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // IntersectionObserver to set active section during scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const sections = ['home', 'about', 'experience', 'education', 'projects', 'contact'];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

      {/* ── Frosted-glass top navigation bar ── */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 md:px-10 h-16 backdrop-blur-md bg-black/80 border-b border-white/10">
        <span className="font-extrabold text-lg tracking-tight text-white cursor-pointer" onClick={() => handleScroll('home')}>
          Sai Manikanta
        </span>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`capitalize text-xs font-semibold rounded-full px-4 py-2 transition-all ${
                activeSection === link
                  ? 'bg-white text-black font-bold'
                  : 'glass-button text-white hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1t9un5VATHZmYgg9ItQv2CZ1AwHZ0GW5X/view?usp=sharing"
            target="_blank" rel="noopener noreferrer"
            className="ml-2 flex items-center gap-1.5 bg-black text-white border border-white/20 text-xs font-bold px-4 py-2 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-black rounded-full border border-white/20 text-white"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* Mobile nav drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-30 bg-black flex flex-col items-center justify-start py-8 gap-4 border-b border-white/20 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleScroll(link)}
              className={`capitalize text-sm font-semibold rounded-full px-8 py-3 w-3/4 max-w-xs transition-all text-center ${
                activeSection === link
                  ? 'bg-white text-black font-bold'
                  : 'glass-button text-white hover:text-white'
              }`}
            >
              {link}
            </button>
          ))}
          <a
            href="https://drive.google.com/file/d/1tQS4TsAEjQJQMQ9E0F2PaxaHGUM3BLwN/view?usp=drive_link"
            target="_blank" rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-black text-white border border-white/20 text-sm font-bold w-3/4 max-w-xs py-3 rounded-full hover:bg-white hover:text-black transition-all"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
        </div>
      )}

      {/* ── Section 1: Home ── */}
      <section id="home" className="max-w-6xl mx-auto px-4 md:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* ── Card 1: Hero Intro (col-span-2) ── */}
          <div className="md:col-span-2 rounded-3xl p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 transition-all duration-500 relative card-glow">
            <div>
              <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-[1.1] mb-4 sm:mb-5">
                Hi, I'm{' '}
                <span className="text-white">
                  Sai Manikanta
                </span>
                <br />
                <span className="font-light text-white">Reddy Seelam</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed max-w-xl">
                Full-Stack Developer building scalable MERN applications, AI-powered tools with RAG & Google Gemini, and premium, production-grade web systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 mt-5 sm:mt-6">
              {['about', 'experience', 'projects', 'contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => handleScroll(link)}
                  className="flex items-center gap-2 glass-button capitalize text-xs font-semibold text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5"
                >
                  {link === 'experience' ? 'experience' : link === 'projects' ? 'projects' : link}
                  <ArrowRight className="w-3 h-3 text-white" />
                </button>
              ))}
            </div>
          </div>

          {/* ── Card 2: Profile Photo Bento Card ── */}
          <div
            className="rounded-3xl p-4 sm:p-5 flex flex-col items-center justify-center cursor-pointer group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[260px] sm:min-h-[300px] md:min-h-0 bg-gradient-to-br from-zinc-950 to-black border border-white/10 relative card-glow overflow-hidden"
            onClick={() => handleScroll('about')}
          >
            <div className="w-full h-full flex items-center justify-center py-2 relative">
              <IDCard />
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 2: About Me ── */}
      <section id="about" className="max-w-6xl mx-auto px-4 md:px-8 py-16 border-t border-white/20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-white" /> About Me
          </h2>
          <div className="h-1 w-12 bg-white mx-auto mt-3 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Detailed Bio Column */}
          <div className="lg:col-span-1 rounded-3xl p-8 space-y-6 group/bio transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 relative card-glow">
            <div className="flex flex-col items-center gap-4">
              <div className="w-36 h-36 rounded-full overflow-hidden flex-shrink-0 transition-all duration-500 group-hover/bio:scale-105" style={{ border: '2px solid rgba(255,255,255,0.4)' }}>
                <img
                  src="/avatar.jpg"
                  alt="Sai Manikanta"
                  className="w-full h-full object-cover transition-all duration-700"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80';
                  }}
                />
              </div>
              <div className="text-center">
                <h3 className="font-extrabold text-white text-lg">{resumeData.name}</h3>
                <p className="text-white/80 text-sm">{resumeData.title}</p>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/90 leading-relaxed pt-2">
              {resumeData.summary}
            </p>
          </div>

          {/* Full Technical Skills Matrix */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: 'Languages', icon: <Terminal className="w-3.5 h-3.5" />, items: resumeData.skills.languages },
              { label: 'Frameworks', icon: <Cpu className="w-3.5 h-3.5" />, items: resumeData.skills.frameworks },
              { label: 'Databases', icon: <Database className="w-3.5 h-3.5" />, items: resumeData.skills.databases },
              { label: 'AI & ML Capabilities', icon: <Sparkles className="w-3.5 h-3.5" />, items: resumeData.skills.ai },
              { label: 'Developer Tools', icon: <Code2 className="w-3.5 h-3.5" />, items: resumeData.skills.tools },
              { label: 'Cloud & System Design', icon: <ExternalLink className="w-3.5 h-3.5" />, items: resumeData.skills.cloud || ['REST APIs', 'CI/CD', 'JWT', 'OAuth 2.0'] },
            ].map(({ label, icon, items }) => (
              <div key={label} className="rounded-3xl p-6 bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 transition-all duration-300 relative card-glow">
                <p className="text-xs md:text-sm uppercase font-mono tracking-wider text-white mb-3 flex items-center gap-1.5 border-b border-white/10 pb-2">
                  {icon} {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((s) => (
                    <span key={s} className="text-xs md:text-sm font-semibold text-white/90 px-3 py-1.5 rounded bg-zinc-950/60 border border-white/5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Experience ── */}
      <section id="experience" className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <Briefcase className="w-5 h-5 text-white" /> Work Experience
          </h2>
          <div className="h-1 w-12 bg-white mx-auto mt-3 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 transition-all duration-500 relative card-glow">

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-white/10 shrink-0 mt-0.5">
                  <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base sm:text-lg md:text-xl leading-tight">{resumeData.experience.role}</h4>
                  <p className="text-white/90 text-sm sm:text-base mt-0.5">{resumeData.experience.company} · {resumeData.experience.location}</p>
                </div>
              </div>
              <span className="text-xs font-mono px-3 py-1.5 rounded-full text-white/80 shrink-0 bg-zinc-900 border border-white/10 self-start sm:self-auto">
                {resumeData.experience.duration}
              </span>
            </div>

            <ul className="space-y-3 sm:space-y-4 list-disc pl-4 sm:pl-5 marker:text-white/60 text-sm sm:text-base md:text-lg text-white/90">
              {resumeData.experience.bullets.map((b, i) => (
                <li key={i} className="leading-relaxed">{b}</li>
              ))}
            </ul>

          </div>
        </div>
      </section>

      {/* ── Section 4: Education ── */}
      <section id="education" className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <GraduationCap className="w-5 h-5 text-white" /> Education
          </h2>
          <div className="h-1 w-12 bg-white mx-auto mt-3 rounded-full opacity-50"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-5 sm:space-y-6">

          {/* Degree Card */}
          <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 transition-all duration-500 relative card-glow">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-5 sm:mb-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-zinc-900 border border-white/10 shrink-0 mt-0.5">
                  <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base sm:text-lg md:text-xl leading-snug">{resumeData.education.degree}</h4>
                  <p className="text-white/90 text-sm sm:text-base mt-0.5">{resumeData.education.institution}</p>
                </div>
              </div>
              <div className="text-left sm:text-right shrink-0 pl-10 sm:pl-0">
                <span className="text-sm sm:text-base font-mono text-white block">{resumeData.education.duration}</span>
                <span className="text-sm sm:text-base font-mono text-white/90 block mt-1">CGPA: <span className="text-white font-bold">{resumeData.education.cgpa}</span> / 10</span>
              </div>
            </div>
            <div>
              <p className="text-xs uppercase font-mono tracking-wider text-white mb-3">Relevant Coursework</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {resumeData.education.coursework.map(c => (
                  <span key={c} className="text-xs sm:text-sm font-mono px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-zinc-900 border border-white/10 text-white/90">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="rounded-3xl p-5 sm:p-8 bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/20 transition-all duration-500 relative card-glow">
            <p className="text-xs uppercase font-mono tracking-widest text-white mb-4 sm:mb-5 flex items-center gap-1.5 border-b border-white/20 pb-3">
              <Trophy className="w-3.5 h-3.5" /> Key Accomplishments
            </p>
            <div className="space-y-3 sm:space-y-4">
              {resumeData.achievements.map((a, i) => (
                <div key={i} className="flex gap-3 sm:gap-4 items-start">
                  <div className="p-1.5 sm:p-2 rounded-xl flex-shrink-0 bg-zinc-900 border border-white/10">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Section 4: Projects ── */}
      <section id="projects" className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <Code2 className="w-5 h-5 text-white" /> Featured Projects
          </h2>
          <div className="h-1 w-12 bg-white mx-auto mt-3 rounded-full opacity-50"></div>
        </div>

        {/* Projects Grid – 2 columns on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {resumeData.projects.map((proj) => {
            const imgSrc = proj.id === 'tom-ai' ? '/tom-ai.png' : proj.id === 'faculty-management' ? '/faculty.png' : proj.id === 'cineflow' ? '/cine.png' : '/echo.png';
            return (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="rounded-3xl p-5 sm:p-6 cursor-pointer bg-gradient-to-br from-zinc-950 to-black border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 relative card-glow group/card flex flex-col"
              >
                {/* Project Screenshot */}
                <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-5">
                  <img
                    src={imgSrc}
                    alt={proj.title}
                    className="w-full object-cover object-top transition-transform duration-700 group-hover/card:scale-[1.03]"
                    style={{ height: '180px' }}
                  />
                </div>

                {/* Project Details */}
                <div className="flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3 gap-2">
                    <div>
                      <h3 className="font-extrabold text-white text-base sm:text-lg group-hover/card:text-zinc-300 transition-colors leading-tight">{proj.title}</h3>
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded-full text-white/80 bg-zinc-900 border border-white/10 inline-block mt-1">
                        {proj.tag}
                      </span>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full transition-all hover:scale-110 hover:bg-white/10 bg-zinc-900 border border-white/10"
                      >
                        <GithubIcon className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-2 rounded-full transition-all hover:scale-110 hover:bg-white/10 bg-zinc-900 border border-white/10"
                      >
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  <p className="text-sm text-white/95 font-semibold mb-2">
                    {proj.desc}
                  </p>

                  <ul className="list-disc pl-4 space-y-1.5 text-sm text-white/80 marker:text-white/40 mb-3 flex-1">
                    {proj.bullets.slice(0, 3).map((b, i) => (
                      <li key={i} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>

                  <button
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(proj); }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white/60 hover:text-white mb-3 transition-all group-hover/card:translate-x-1 duration-300"
                  >
                    View Technical Deep Dive <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex flex-wrap gap-1.5">
                    {proj.tech.map((t) => (
                      <span key={t} className="text-xs font-mono px-2.5 py-1 rounded text-white/90 bg-zinc-900/60 border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* ── Section 5: Contact ── */}
      <section id="contact" className="max-w-6xl mx-auto px-4 md:px-8 py-12 sm:py-16 border-t border-white/20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            <Mail className="w-5 h-5 text-white" /> Get In Touch
          </h2>
          <div className="h-1 w-12 bg-white mx-auto mt-3 rounded-full opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          
          {/* Direct channels left intro column */}
          <div className="space-y-5 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl tracking-tight leading-tight">
                Let's build <br />something together
              </h3>
              <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
                I am interested in full-stack engineering, web development, and AI integration opportunities. If you have an exciting project, a role, or simply want to chat, get in touch through any of these channels.
              </p>
            </div>
            
            {/* Elegant Status Badge */}
            <div className="inline-flex items-center gap-3 p-3.5 sm:p-4 rounded-2xl bg-zinc-900/50 border border-white/5 w-full sm:max-w-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-led-blink shrink-0"></span>
              <p className="text-xs sm:text-sm text-zinc-300 font-medium">
                Open to Software Engineering & Application Developer roles.
              </p>
            </div>
          </div>

          {/* Large Contact Links Column */}
          <div className="space-y-3 sm:space-y-4 w-full">
            {[
              {
                href: `mailto:${resumeData.email}`,
                label: 'Email Address',
                val: resumeData.email,
                iconBg: 'rgba(234,67,53,0.18)',
                iconBorder: 'rgba(234,67,53,0.4)',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="#EA4335" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                href: `https://${resumeData.linkedin}`,
                label: 'LinkedIn Profile',
                val: 'linkedin.com/in/sai-manikanta-reddy-seelam',
                iconBg: 'rgba(10,102,194,0.18)',
                iconBorder: 'rgba(10,102,194,0.4)',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#0A66C2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
              {
                href: `https://${resumeData.github}`,
                label: 'GitHub Profile',
                val: 'github.com/Silamsai',
                iconBg: 'rgba(255,255,255,0.08)',
                iconBorder: 'rgba(255,255,255,0.2)',
                icon: (
                  <svg viewBox="0 0 98 96" width="20" height="20" fill="#ffffff">
                    <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                  </svg>
                ),
              },
              {
                href: resumeData.leetcode,
                label: 'LeetCode Profile',
                val: 'leetcode.com/u/Sai_manikanta_74',
                iconBg: 'rgba(255,161,22,0.15)',
                iconBorder: 'rgba(255,161,22,0.4)',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" fill="#FFA116"/>
                  </svg>
                ),
              },
              {
                href: `tel:${resumeData.phone.replace(/[\s+]/g, '')}`,
                label: 'Phone Number',
                val: resumeData.phone,
                iconBg: 'rgba(52,211,153,0.15)',
                iconBorder: 'rgba(52,211,153,0.35)',
                icon: (
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="#34D399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
            ].map(({ href, icon, label, val, iconBg, iconBorder }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 sm:p-5 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:scale-[1.02] hover:border-white/30 bg-gradient-to-br from-zinc-950 to-black border border-white/10 relative card-glow group no-underline">
                <div className="flex items-center gap-3 sm:gap-5 min-w-0">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: iconBg, border: `1px solid ${iconBorder}` }}>
                    {icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-white/40 uppercase tracking-widest font-mono font-bold">{label}</p>
                    <p className="text-sm sm:text-base text-white font-semibold mt-0.5 truncate max-w-[180px] xs:max-w-none sm:max-w-[260px] md:max-w-none">{val}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/20 group-hover:text-white group-hover:translate-x-1.5 transition-all duration-300 shrink-0 ml-2" />
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-6 sm:py-8 border-t border-white/20 text-center text-xs sm:text-sm text-white/40 font-mono px-4">
        <p>© 2026 Sai Manikanta Reddy Seelam. All rights reserved.</p>
        <p className="mt-1">Built with React, Tailwind CSS & Anti-Gravity Tech Stack.</p>
      </footer>

      {/* ── Project Details Modal ── */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 modal-overlay animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-zinc-950 border border-zinc-800 rounded-2xl sm:rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl animate-scale-up max-h-[92vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-900 bg-zinc-950/80 sticky top-0 z-10 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedProject.emoji}</span>
                <div>
                  <h3 className="font-heading font-extrabold text-white text-lg leading-tight">{selectedProject.title}</h3>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-500 mt-0.5 block">{selectedProject.tag}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-400 hover:text-white hover:bg-zinc-800 transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            {/* Modal Body */}
            <div className="overflow-y-auto p-6 space-y-6 custom-scrollbar">
              {/* Project Image Banner */}
              <div className="w-full rounded-2xl overflow-hidden border border-zinc-900 aspect-video relative max-h-[260px] bg-black">
                <img 
                  src={selectedProject.id === 'tom-ai' ? '/tom-ai.png' : selectedProject.id === 'faculty-management' ? '/faculty.png' : selectedProject.id === 'cineflow' ? '/cine.png' : '/echo.png'}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Description */}
              <div>
                <p className="text-sm md:text-base text-zinc-300 leading-relaxed font-semibold">
                  {selectedProject.desc}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <h4 className="text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-500 mb-2.5">Technologies Integrated</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bullet Highlights */}
              <div className="border-t border-zinc-900 pt-5">
                <h4 className="text-[10px] uppercase font-mono tracking-wider font-bold text-zinc-500 mb-3">Key Responsibilities & Scope</h4>
                <ul className="list-disc pl-4 space-y-2 text-xs md:text-sm text-zinc-300 marker:text-zinc-500">
                  {selectedProject.bullets.map((b, i) => (
                    <li key={i} className="leading-relaxed">{b}</li>
                  ))}
                </ul>
              </div>

              {/* Technical Challenges & Solutions Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-zinc-900 pt-5">
                <div className="p-4 rounded-2xl bg-zinc-900/30 border border-zinc-900">
                  <h5 className="text-xs font-mono font-bold text-zinc-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span> Technical Challenge
                  </h5>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>
                
                <div className="p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800">
                  <h5 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Implemented Solution
                  </h5>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {selectedProject.solutions}
                  </p>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col xs:flex-row justify-end gap-2 sm:gap-3 px-4 sm:px-6 py-4 border-t border-zinc-900 bg-zinc-950 sticky bottom-0">
              <a 
                href={selectedProject.github} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-zinc-800 hover:border-zinc-500 text-xs font-bold text-zinc-300 transition-all bg-zinc-900/20 w-full xs:w-auto"
              >
                <GithubIcon className="w-3.5 h-3.5" /> Codebase
              </a>
              <a 
                href={selectedProject.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-bold transition-all w-full xs:w-auto"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Launch Demo
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
