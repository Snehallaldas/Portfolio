import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Award, ChevronRight, Terminal, Database, Cloud, Phone } from 'lucide-react';

export default function Portfolio() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Hybrid Anime Recommender System",
      description: "Built a hybrid recommender combining content-based and collaborative filtering with Flask web app. Implemented CI/CD using Jenkins and GitHub Actions, tracked experiments with Comet-ML, and deployed on GCP Kubernetes for scalable orchestration.",
      tags: ["Python", "Flask", "Docker", "Kubernetes", "GCP", "DVC", "Jenkins"],
      github: "https://github.com/Snehallaldas",
      icon: Database,
      date: "June 2025"
    },
    {
      title: "Hotel Reservation Prediction",
      description: "Developed ML model predicting hotel booking cancellations to optimize revenue. Built RESTful API with Flask, tracked experiments using MLflow, and deployed on Google Cloud Run with serverless inference and automated CI/CD pipeline.",
      tags: ["MLflow", "Flask", "Docker", "Cloud Run", "GCP", "Jenkins"],
      github: "https://github.com/Snehallaldas",
      icon: Cloud,
      date: "June - July 2025"
    },
    {
      title: "MLOps Titanic Survival Prediction",
      description: "Architected full-stack ML solution with Random Forest (86% accuracy). Orchestrated ETL with Apache Airflow, implemented Redis feature store, deployed drift detection with Alibi-Detect, and built monitoring with Prometheus and Grafana dashboards.",
      tags: ["Airflow", "Redis", "Alibi-Detect", "Prometheus", "Grafana", "Flask"],
      github: "https://github.com/Snehallaldas",
      icon: Terminal,
      date: "July 2025"
    }
  ];

  const skills = {
    "Programming & ML": ["Python", "SQL", "TensorFlow", "scikit-learn"],
    "MLOps & DevOps": ["MLflow", "DVC", "Comet-ML", "Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    "Data & Pipelines": ["Apache Airflow", "Redis", "ETL", "Alibi-Detect"],
    "Cloud & Deployment": ["GCP", "Cloud Run", "Flask", "Prometheus", "Grafana"]
  };

  const certifications = [
    { title: "AI Agent Fundamentals", org: "Hugging Face", date: "May 2025" },
    { title: "Introducing Generative AI with AWS", org: "Udacity", date: "Dec 2024" },
    { title: "AI and ML on Google Cloud", org: "Google Cloud", date: "Feb 2024" },
    { title: "Python for Data Science", org: "IBM", date: "Apr 2023" }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white shadow-sm transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-slate-900">
            Snehal Lal Das
          </div>
          <div className="flex gap-8 items-center">
            <a href="#about" className={`text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}>
              About
            </a>
            <a href="#projects" className={`text-sm font-medium transition-colors ${activeSection === 'projects' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Projects
            </a>
            <a href="#skills" className={`text-sm font-medium transition-colors ${activeSection === 'skills' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Skills
            </a>
            <a href="#certifications" className={`text-sm font-medium transition-colors ${activeSection === 'certifications' ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Certifications
            </a>
             <a href="/Snehal_Das_Resume.pdf" download  className="text-sm font-medium text-slate-600 hover:text-slate-900"> Resume
            </a>


  <a
    href="#contact"
    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors"
  >
    Get in Touch
    <ChevronRight size={20} />
  </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-full">
                Available for Opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
                Snehal Lal Das
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
                ML Engineer & Backend Developer
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Final-year Computer Science student specializing in building production-ready ML systems with MLOps pipelines and scalable cloud architectures.
              </p>
              <div className="flex gap-4 mb-8">
                <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer" 
                   className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <Github size={24} className="text-slate-700" />
                </a>
                <a href="https://www.linkedin.com/in/snehallaldas" target="_blank" rel="noopener noreferrer"
                   className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <Linkedin size={24} className="text-slate-700" />
                </a>
                <a href="mailto:snehallaldas@gmail.com"
                   className="p-3 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
                  <Mail size={24} className="text-slate-700" />
                </a>
              </div>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
                Get in Touch
                <ChevronRight size={20} />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                      <Code className="text-emerald-600" size={24} />
                      <div>
                        <div className="font-semibold text-slate-900">ML Engineering</div>
                        <div className="text-sm text-slate-600">Production ML Systems</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                      <Database className="text-blue-600" size={24} />
                      <div>
                        <div className="font-semibold text-slate-900">MLOps</div>
                        <div className="text-sm text-slate-600">CI/CD & Monitoring</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg">
                      <Cloud className="text-indigo-600" size={24} />
                      <div>
                        <div className="font-semibold text-slate-900">Cloud Architecture</div>
                        <div className="text-sm text-slate-600">GCP & Kubernetes</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-8"></div>
          
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a motivated final-year Computer Science student at Roorkee Institute of Technology specializing in AI & ML. 
              I have a strong foundation in software development, data structures, and machine learning, with hands-on experience 
              building production-ready ML systems.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              My expertise spans the entire ML lifecycle—from model development to deployment—with a focus on MLOps practices, 
              cloud infrastructure (GCP), and building robust CI/CD pipelines. I'm passionate about writing clean, maintainable 
              code and implementing monitoring solutions that ensure model reliability in production.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              I'm eager to contribute to impactful engineering teams where I can apply my skills in machine learning, backend 
              development, and cloud architecture to solve real-world problems.
            </p>
            
            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Education</h3>
              <div className="space-y-2">
                <p className="text-slate-900 font-semibold">
                  BTech in Computer Science (AI & ML Specialization)
                </p>
                <p className="text-slate-600">Roorkee Institute of Technology, Uttarakhand</p>
                <p className="text-slate-500 text-sm">2022 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-12"></div>
          
          <div className="space-y-8">
            {projects.map((project, idx) => {
              const Icon = project.icon;
              return (
                <div key={idx} 
                     className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-50 rounded-lg">
                        <Icon className="text-emerald-600" size={28} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                     className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
                    <Github size={20} />
                    View on GitHub
                    <ExternalLink size={16} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span key={i} 
                          className="px-3 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-lg border border-emerald-100">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Certifications</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-12"></div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} 
                   className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-emerald-200 transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-emerald-50 rounded-lg">
                    <Award className="text-emerald-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{cert.title}</h3>
                    <p className="text-slate-600 text-sm mb-1">{cert.org}</p>
                    <p className="text-emerald-600 text-sm font-medium">{cert.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-emerald-600 mb-8 mx-auto"></div>
          
          <p className="text-xl text-slate-700 mb-12">
            I'm actively seeking opportunities in ML Engineering and Backend Development. Let's build something amazing together!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="mailto:snehallaldas@gmail.com" 
               className="px-8 py-4 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition-colors">
              Send Email
            </a>
            <a href="https://github.com/Snehallaldas" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border-2 border-slate-200 hover:border-emerald-600 transition-colors">
              GitHub Profile
            </a>
            <a href="https://www.linkedin.com/in/snehallaldas" target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-white text-slate-900 font-medium rounded-lg border-2 border-slate-200 hover:border-emerald-600 transition-colors">
              LinkedIn
            </a>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <Mail className="text-emerald-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 mb-1">Email</p>
              <p className="text-slate-900 font-medium text-sm">snehallaldas@gmail.com</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <Github className="text-emerald-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 mb-1">GitHub</p>
              <p className="text-slate-900 font-medium text-sm">Snehallaldas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <Phone className="text-emerald-600 mx-auto mb-2" size={24} />
              <p className="text-sm text-slate-600 mb-1">Phone</p>
              <p className="text-slate-900 font-medium text-sm">+91 7678137681</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-600">© 2025 Snehal Das. All rights reserved.</p>
          <p className="text-sm text-slate-500 mt-2">Built with React & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}