import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, Linkedin, Download, BookOpen, Moon, Sun } from 'lucide-react';
import { GitHubCalendar } from 'react-github-calendar';
import './App.css';

function App() {
  const [stats, setStats] = useState({ repos: 29, stars: 15, followers: 5 });
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch('https://api.github.com/users/Snehallaldas');
        const data = await res.json();
        const reposRes = await fetch('https://api.github.com/users/Snehallaldas/repos?per_page=100');
        const repos = await reposRes.json();
        const totalStars = repos.reduce((sum, repo) => sum + (repo.stargazers_count || 0), 0);
        setStats({
          repos: data.public_repos || 29,
          stars: totalStars || 15,
          followers: data.followers || 5
        });
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  // ─── Shared dark-mode class helpers ───────────────────────────────────────
  const dm = darkMode;
  const heading   = dm ? 'text-white'     : 'text-gray-900';
  const muted     = dm ? 'text-gray-400'  : 'text-gray-600';
  const body      = dm ? 'text-gray-300'  : 'text-gray-600';
  const divider   = dm ? 'border-gray-700': 'border-gray-200';
  const card      = `border rounded-lg ${dm ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`;
  const tag       = `px-3 py-1 rounded-full text-sm font-medium ${dm ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`;
  const btnPrimary   = `rounded-lg font-medium transition flex items-center justify-center gap-2 ${dm ? 'bg-white text-gray-900 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-gray-800'}`;
  const btnOutline   = `border rounded-lg font-medium transition flex items-center justify-center gap-2 ${dm ? 'border-gray-500 text-gray-200 hover:bg-gray-800' : 'border-gray-900 text-gray-900 hover:bg-gray-50'}`;

  const projects = [
    {
      id: 1,
      name: 'Codebase RAG System',
      description: 'Production-ready RAG system for querying codebases with LLMs. Implements vector embeddings, semantic search, and context retrieval for intelligent code understanding and documentation.',
      tech: ['Python', 'FastAPI', 'LLM', 'Vector DB', 'RAG'],
      github: 'https://github.com/Snehallaldas/Codebase-Rag',
      highlights: ['Semantic code search', 'LLM integration', 'Vector embeddings']
    },
    {
      id: 2,
      name: 'JobGenie AI',
      description: 'AI-powered job recommendation and matching system. Uses NLP and ML models to analyze job descriptions, user profiles, and skills for intelligent career guidance.',
      tech: ['Python', 'NLP', 'Machine Learning', 'Data Processing'],
      github: 'https://github.com/Snehallaldas/JobGenie-AI',
      highlights: ['Job matching', 'Profile analysis', 'ML pipeline']
    },
    {
      id: 3,
      name: 'Gemma-270M Implementation',
      description: "Custom implementation of Google's Gemma-270M language model. Includes training, fine-tuning, and deployment utilities for production-grade LLM inference.",
      tech: ['PyTorch', 'Transformers', 'Model Training', 'Python'],
      github: 'https://github.com/Snehallaldas',
      highlights: ['LLM from scratch', 'Fine-tuning', 'Model optimization']
    },
    {
      id: 4,
      name: 'CodeSentinel',
      description: 'AI-powered code analysis and security scanning tool. Detects vulnerabilities, code smells, and potential security issues in source code with intelligent recommendations.',
      tech: ['HTML', 'JavaScript', 'AI Analysis', 'Code Security'],
      github: 'https://github.com/Snehallaldas/CodeSentinel',
      demo: 'https://snehallaldas.github.io/CodeSentinel',
      highlights: ['Code vulnerability detection', 'Security analysis', 'Real-time scanning']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science & Engineering',
      status: 'Graduating July 2026',
      details: 'Focus: Machine Learning, LLMs, MLOps'
    }
  ];

  const learning = [
    'Advanced LLM Fine-tuning & RLHF',
    'Kubernetes for ML Systems',
    'Production ML Pipelines',
    'Vector Databases & Embeddings'
  ];

  const skills = [
    { category: 'AI & LLMs',      items: ['PyTorch', 'TensorFlow', 'Transformers', 'RAG', 'LangChain', 'Hugging Face'] },
    { category: 'Backend',         items: ['FastAPI', 'Flask', 'REST APIs', 'Python', 'Docker', 'Kubernetes'] },
    { category: 'Data & ML Ops',   items: ['Pandas', 'SQL', 'MongoDB', 'ML Pipelines', 'CI/CD', 'Jenkins'] },
    { category: 'Tools & Cloud',   items: ['Git', 'VS Code', 'GCP', 'AWS', 'Linux', 'Jupyter'] }
  ];

  return (
    <div className={`App ${dm ? 'dark-mode' : ''}`}>

      {/* ── Navigation ───────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 border-b transition ${dm ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#home" className={`logo ${dm ? 'text-white' : 'text-gray-900'}`}>
            <div className="logo-circle">SD</div>
            <span>Snehal</span>
          </a>
          <div className="hidden md:flex gap-8 items-center">
            {[['#projects','Projects'],['#contributions','Activity'],['#education','Education'],['#skills','Skills'],['#contact','Contact']].map(([href, label]) => (
              <a key={href} href={href} className={`text-sm transition ${dm ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>{label}</a>
            ))}
            <button
              onClick={() => setDarkMode(!dm)}
              className={`p-2 rounded-lg transition ml-4 ${dm ? 'bg-gray-800 hover:bg-gray-700 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
              title={dm ? 'Light Mode' : 'Dark Mode'}
            >
              {dm ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section id="home" className="pt-32 pb-20 px-4 max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <h1 className={`text-5xl md:text-6xl font-bold ${heading}`}>MLOps & AI Engineer</h1>
          <p className={`text-xl max-w-2xl mx-auto ${muted}`}>
            Final-year CS student building production ML systems. Focused on LLMs, RAG, and scalable backend architectures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 flex-wrap">
            <a href="Snehal_Lal_Das_Resume.pdf" download className={`px-6 py-3 ${btnPrimary}`}>
              <Download size={20} /> Resume
            </a>
            <a href="#projects" className={`px-6 py-3 ${btnOutline}`}>View Projects</a>
            <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 ${btnOutline}`}>GitHub</a>
          </div>
          <div className="flex justify-center gap-6 pt-8">
            {[
              ['https://github.com/Snehallaldas', <Github size={24} />],
              ['mailto:snehallaldas@gmail.com',   <Mail size={24} />],
              ['https://linkedin.com/in/snehallaldas', <Linkedin size={24} />],
            ].map(([href, icon]) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                className={`transition ${dm ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── GitHub Stats ─────────────────────────────────────────────────── */}
      <section className={`py-12 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            [stats.repos,     'Public Repositories'],
            [stats.stars,     'GitHub Stars'],
            [stats.followers, 'GitHub Followers'],
          ].map(([value, label]) => (
            <div key={label} className="text-center">
              <h3 className={`text-3xl font-bold ${heading}`}>{loading ? '—' : value}</h3>
              <p className={`mt-2 ${muted}`}>{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────────────── */}
      <section id="projects" className={`py-20 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <h2 className={`text-4xl font-bold mb-12 ${heading}`}>Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className={`${card} p-8 transition hover:border-gray-500`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className={`text-2xl font-bold ${heading}`}>{project.name}</h3>
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className={`transition ${dm ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <ExternalLink size={24} />
                </a>
              </div>
              <p className={`text-lg mb-4 ${body}`}>{project.description}</p>
              <div className="mb-4">
                <p className={`text-sm font-semibold mb-2 ${heading}`}>Key Features:</p>
                <ul className="list-disc list-inside space-y-1">
                  {project.highlights.map((h, i) => (
                    <li key={i} className={`text-sm ${muted}`}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => <span key={t} className={tag}>{t}</span>)}
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={project.github} target="_blank" rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-2 ${btnOutline}`}>
                  <Github size={18} /> GitHub
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 ${btnPrimary}`}>
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className={`text-center mt-12 pt-12 border-t ${divider}`}>
          <p className={`mb-4 ${muted}`}>See more on my GitHub</p>
          <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-6 py-3 ${btnOutline}`}>
            <Github size={20} /> View All Projects
          </a>
        </div>
      </section>

      {/* ── GitHub Activity ───────────────────────────────────────────────── */}
      <section id="contributions" className={`py-20 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <h2 className={`text-4xl font-bold mb-12 ${heading}`}>GitHub Activity</h2>
        <div className={`border rounded-lg p-8 overflow-x-auto ${dm ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-gray-50'}`}>
          <div className="mb-8">
            <h3 className={`text-xl font-bold mb-4 ${heading}`}>Contribution Calendar</h3>
            <div className={`p-6 rounded-lg border overflow-x-auto ${dm ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
              <GitHubCalendar username="Snehallaldas" colorScheme={dm ? 'dark' : 'light'} />
            </div>
            <p className={`text-sm mt-4 ${muted}`}>
              Shows my commit activity over the past year. Green squares indicate days with contributions.
            </p>
          </div>
          <div className={`mt-8 pt-8 border-t ${divider} grid md:grid-cols-2 gap-6`}>
            {[
              ['Most Active',   'Weekdays',   'Monday, Wednesday, Friday'],
              ['Commit Streak', 'Consistent', 'Regular development & contributions'],
            ].map(([label, value, sub]) => (
              <div key={label} className={`text-center p-6 rounded-lg border ${dm ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-sm font-semibold mb-2 ${muted}`}>{label}</h3>
                <p className={`text-2xl font-bold ${heading}`}>{value}</p>
                <p className={`text-sm mt-1 ${muted}`}>{sub}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 ${btnPrimary}`}>
              <Github size={20} /> View Full Profile
            </a>
          </div>
        </div>
      </section>

      {/* ── Education ────────────────────────────────────────────────────── */}
      <section id="education" className={`py-20 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <h2 className={`text-4xl font-bold mb-12 ${heading}`}>Education</h2>
        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div key={idx} className={`${card} p-8`}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className={`text-2xl font-bold ${heading}`}>{edu.degree}</h3>
                  <p className={`text-lg mt-1 ${muted}`}>{edu.field}</p>
                </div>
                <span className={`px-4 py-2 rounded-lg font-semibold text-sm ${dm ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                  {edu.status}
                </span>
              </div>
              <p className={`mt-4 ${muted}`}>{edu.details}</p>
            </div>
          ))}
        </div>
        <div className={`mt-12 pt-12 border-t ${divider}`}>
          <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${heading}`}>
            <BookOpen size={28} /> Currently Learning
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {learning.map((item, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${dm ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'}`}>
                <p className={`font-medium ${heading}`}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ───────────────────────────────────────────────────────── */}
      <section id="skills" className={`py-20 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <h2 className={`text-4xl font-bold mb-12 ${heading}`}>Skills & Technologies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((group, idx) => (
            <div key={idx} className={`${card} p-8`}>
              <h3 className={`text-xl font-bold mb-4 ${heading}`}>{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => <span key={skill} className={tag}>{skill}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────────────────────── */}
      <section id="contact" className={`py-20 px-4 max-w-6xl mx-auto border-t ${divider}`}>
        <div className="text-center space-y-8">
          <h2 className={`text-4xl font-bold ${heading}`}>Let's Connect</h2>
          <p className={`text-lg max-w-2xl mx-auto ${muted}`}>
            Interested in collaborating on AI/ML projects or discussing MLOps practices? Feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:snehallaldas@gmail.com" className={`px-8 py-4 ${btnPrimary}`}>
              <Mail size={20} /> Email
            </a>
            <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 ${btnOutline}`}>
              <Github size={20} /> GitHub
            </a>
            <a href="https://linkedin.com/in/snehallaldas" target="_blank" rel="noopener noreferrer" className={`px-8 py-4 ${btnOutline}`}>
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
          <p className={`text-sm ${muted}`}>snehallaldas@gmail.com</p>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────────────── */}
      <footer className={`border-t py-8 px-4 text-center ${divider} ${muted}`}>
        <p>© 2026 Snehal Das. Built with React & Tailwind CSS.</p>
      </footer>

    </div>
  );
}

export default App;