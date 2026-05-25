# Modern AI/ML Portfolio 🚀

A stunning, modern portfolio showcasing Snehal Das's AI/ML projects, skills, and expertise.

## 🎨 Features

✨ **Modern Design**
- Dark mode with blue-cyan gradient theme
- Smooth animations and transitions
- Responsive design (mobile-friendly)
- Beautiful animated backgrounds

🔗 **Live GitHub Integration**
- Automatically fetches your latest projects from GitHub API
- Shows project stars, forks, and descriptions
- Direct links to GitHub repositories

📊 **Sections**
- **Hero Section** - Eye-catching introduction
- **About** - Background and expertise
- **Featured Projects** - Your best AI/ML projects
- **Skills** - Technical stack and tools
- **Contact** - Easy ways to reach out

## 🛠️ Tech Stack

- **Frontend**: React 19 + Tailwind CSS
- **Icons**: Lucide React
- **API**: GitHub API (real-time project data)
- **Animations**: CSS keyframes

## 🚀 Getting Started

### Installation
```bash
cd my-portfolio
npm install
```

### Development
```bash
npm start
```
Runs on http://localhost:3000

### Build for Production
```bash
npm run build
```

## 🎯 Customization

### Update Contact Information
Edit `src/App.js` and update:
- Email: `mailto:snehallaldas@gmail.com`
- GitHub URL: `https://github.com/Snehallaldas`
- Other social links

### Modify Featured Projects
In the `fetchProjects()` function, update the `featured` array to include/exclude projects:
```javascript
const featured = [
  'JobGenie-AI',
  'deepfake-detector',
  // ... add more projects
];
```

### Change Color Scheme
The portfolio uses Tailwind CSS colors. Key colors:
- Blue: `blue-400`, `blue-500`
- Cyan: `cyan-400`, `cyan-500`
- Background: `slate-900`, `slate-800`

Edit color classes in `src/App.js` or create custom CSS in `src/App.css`.

## 📱 Responsive Design

The portfolio is fully responsive:
- Mobile: Single column layout
- Tablet: Two column grid
- Desktop: Three column grid for projects

## ⚡ Performance

- Fast page loads with optimized images
- Smooth animations using CSS keyframes
- Efficient GitHub API calls (cached data)
- Minified production build

## 🔐 Privacy

- No backend required
- All data is public (GitHub API)
- Client-side rendering only

## 📝 License

Built with ❤️ by Snehal Das

## 🤝 Contributing

Feel free to fork and customize this portfolio for your own use!

---

**Live Demo**: Coming soon!
**GitHub**: https://github.com/Snehallaldas/Portfolio