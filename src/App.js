import React, { useState, useEffect } from 'react';
import { Github, Mail, ExternalLink, ArrowRight, Code2, Brain, Zap, Star, GitFork, ChevronDown } from 'lucide-react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => setScrollY(window.scrollY));
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch('https://api.github.com/users/Snehallaldas/repos?sort=updated&per_page=20');
      const data = await response.json();
      
      const featured = [
        'JobGenie-AI',
        'deepfake-detector',
        'mini-rag-from-scratch',
        'Codebase-Rag',
        'Text_to_speech',
        'Fake-news-detection',
        'titanic-survival-prediction',
        'churn-prediction',
        'Anime-Recommendation-System',
        'Gun-detection',
        'Emotion-detection',
        'zipdeploy'
      ];

      const filtered = data.filter(repo => featured.includes(repo.name));
      setProjects(filtered);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching projects:', error);
      setLoading(false);
    }
  };

  const skills = {
    'AI/ML & Deep Learning': ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'LLM', 'RAG', 'Transformers'],
    'Backend & APIs': ['FastAPI', 'Flask', 'REST APIs', 'SQL', 'Docker', 'Kubernetes'],
    'Tools & Platforms': ['Jupyter Notebook', 'Git', 'VS Code', 'GCP', 'MLflow', 'Hugging Face'],
    'Languages': ['Python', 'JavaScript', 'Java', 'SQL']
  };

  const stats = [
    { label: 'Public Repos', value: '29+' },
    { label: 'Focus Areas', value: 'AI/ML' },
    { label: 'Years Learning', value: '2+' }
  ];

  return (
    <div className="App min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Snehal
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-sm hover:text-cyan-400 transition">About</a>
            <a href="#projects" className="text-sm hover:text-cyan-400 transition">Projects</a>
            <a href="#skills" className="text-sm hover:text-cyan-400 transition">Skills</a>
            <a href="#contact" className="text-sm hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block animate-fade-in-down">
            <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50 text-blue-300 text-sm font-semibold">
              👋 Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Snehal Das</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto animate-fade-in-up">
            AI/ML Enthusiast & Computer Science Student specializing in <span className="text-cyan-400 font-semibold">Deep Learning, LLMs & Production ML Systems</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a 
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105"
            >
              View My Work <ArrowRight size={20} />
            </a>
            <a 
              href="https://github.com/Snehallaldas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-slate-500 rounded-lg font-semibold hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/10 transition"
            >
              GitHub Profile
            </a>
          </div>

          <div className="flex justify-center gap-6 text-slate-400 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition hover:scale-110">
              <Github size={32} />
            </a>
            <a href="mailto:snehallaldas@gmail.com" className="hover:text-cyan-400 transition hover:scale-110">
              <Mail size={32} />
            </a>
          </div>

          <div className="mt-16 animate-bounce">
            <ChevronDown size={32} className="mx-auto text-cyan-400/50" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-slate-700/50 rounded-lg border border-slate-600">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </div>
            ))}
          </div>

          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm a final-year Computer Science student specializing in <span className="text-cyan-400 font-semibold">AI & Machine Learning</span>. 
            Passionate about building intelligent solutions using deep learning, transformers, and large language models.
          </p>

          <p className="text-slate-300 text-lg leading-relaxed">
            My focus is on creating production-ready ML systems with proper engineering practices, including 
            <span className="text-cyan-400 font-semibold"> CI/CD pipelines, model monitoring, and scalable cloud architectures</span>.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-400 text-lg">Innovative AI/ML solutions from my GitHub</p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-cyan-500/0 to-blue-500/0 rounded-xl opacity-0 group-hover:opacity-10 transition"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <Code2 size={32} className="text-cyan-400" />
                    <div className="flex gap-2">
                      {project.stargazers_count > 0 && (
                        <span className="flex items-center gap-1 text-yellow-400 text-sm bg-yellow-400/10 px-2 py-1 rounded-full">
                          <Star size={14} /> {project.stargazers_count}
                        </span>
                      )}
                      {project.forks_count > 0 && (
                        <span className="flex items-center gap-1 text-green-400 text-sm bg-green-400/10 px-2 py-1 rounded-full">
                          <GitFork size={14} /> {project.forks_count}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition line-clamp-2">
                    {project.name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 h-10 line-clamp-2">
                    {project.description || 'An interesting AI/ML project built with passion'}
                  </p>
                  
                  {project.language && (
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="inline-block bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                        {project.language}
                      </span>
                      <span className="inline-block bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                        ML
                      </span>
                    </div>
                  )}
                  
                  <a 
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 font-semibold text-sm hover:text-cyan-300 transition"
                  >
                    View Code <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://github.com/Snehallaldas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition"
          >
            <Github size={20} /> View All Projects
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-slate-400 text-lg">Tools and frameworks I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div 
              key={category}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-lg">
                  {category.includes('AI') && <Brain size={24} className="text-cyan-400" />}
                  {category.includes('Backend') && <Code2 size={24} className="text-cyan-400" />}
                  {category.includes('Tools') && <Zap size={24} className="text-cyan-400" />}
                  {category.includes('Languages') && <Code2 size={24} className="text-cyan-400" />}
                </div>
                <h3 className="text-xl font-bold">{category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 rounded-full text-sm font-medium hover:border-blue-400/60 hover:text-cyan-300 transition cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 max-w-4xl mx-auto relative z-10">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-12 border border-slate-700 text-center">
          <h2 className="text-4xl font-bold mb-4">Let's Connect!</h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            I'm always interested in AI/ML projects, learning opportunities, and collaborations. 
            Feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a 
              href="https://github.com/Snehallaldas"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition flex items-center justify-center gap-2"
            >
              <Github size={20} /> GitHub
            </a>
            <a 
              href="mailto:snehallaldas@gmail.com"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition flex items-center justify-center gap-2 font-semibold"
            >
              <Mail size={20} /> Email Me
            </a>
          </div>

          <p className="text-slate-500 text-sm">
            📧 snehallaldas@gmail.com | 🐙 github.com/Snehallaldas
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-4 text-center text-slate-500 relative z-10">
        <p>© 2026 Snehal Das. Built with React, Tailwind CSS & ❤️</p>
      </footer>
    </div>
  );
}

export default App;