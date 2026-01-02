# 🤖 AI System Prompts & Models Browser - MVP

A web-based application for browsing and searching AI system prompts from various AI tools and platforms.

## 🎯 Overview

This MVP provides an interactive interface to explore system prompts used by popular AI tools including:
- **Anthropic**: Claude 3, Claude Code
- **OpenAI**: GPT-4, ChatGPT
- **Google**: Gemini Pro
- **Code Assistants**: Cursor, GitHub Copilot, Replit Ghostwriter, Windsurf, Devin AI
- **Search**: Perplexity AI
- **Productivity**: Notion AI
- And many more...

## ✨ Features

- **🔍 Real-time Search**: Search across all prompts by title, category, or content
- **🏷️ Category Filtering**: Filter by AI provider or tool category
- **📊 Statistics Dashboard**: View total prompts, tools, and current results
- **📖 Detailed View**: Click any prompt card to view the full system prompt
- **📱 Responsive Design**: Works on desktop, tablet, and mobile devices
- **🎨 Modern UI**: Beautiful gradient design with smooth animations

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/miqq27/ai-prompts-mvp.git
cd ai-prompts-mvp
```

2. Open in browser:
```bash
# Simply open index.html in your web browser
open index.html
```

**That's it!** No build process, no dependencies to install. This is a pure HTML/CSS/JavaScript application.

### Usage

1. **Browse Prompts**: Scroll through the card grid to see available AI system prompts
2. **Search**: Use the search bar to find specific prompts by keyword
3. **Filter**: Click category chips to filter by AI provider or tool type
4. **View Details**: Click any card to see the full system prompt in a modal

## 📁 Project Structure

```
ai-prompts-mvp/
├── index.html          # Main HTML structure
├── styles.css          # Styling and responsive design
├── script.js           # UI logic and interactions
├── data.js            # Prompts data collection
└── README.md          # Documentation
```

## 🛠️ Tech Stack

- **HTML5**: Semantic structure
- **CSS3**: Modern styling with gradients, animations, and flexbox/grid
- **Vanilla JavaScript**: No frameworks - pure ES6+ JavaScript
- **Responsive Design**: Mobile-first approach

## 🎨 Customization

### Adding New Prompts

Edit `data.js` and add new prompt objects:

```javascript
{
    id: 13,
    title: "New AI Tool",
    category: "Category Name",
    description: "Brief description of the tool",
    content: `Full system prompt content here...`
}
```

### Styling

Modify `styles.css` to customize:
- Color scheme (currently purple gradient)
- Card layouts
- Typography
- Animations

## 📊 Current Data

The MVP includes **12 comprehensive system prompts** from:
- Anthropic (Claude, Claude Code)
- OpenAI (GPT-4)
- Google (Gemini Pro)
- Code Assistants (Cursor, Copilot, Replit, Windsurf, Devin)
- Search (Perplexity)
- Productivity (Notion AI)
- UI Generation (v0 by Vercel)

## 🔮 Future Enhancements

- [ ] Add more AI system prompts
- [ ] Export/copy functionality for prompts
- [ ] Dark mode toggle
- [ ] Advanced filtering options
- [ ] Favorites/bookmarking system
- [ ] Prompt comparison view
- [ ] User-submitted prompts
- [ ] API for prompt data

## 🙏 Credits

Based on the comprehensive collection from:
[x1xhlol/system-prompts-and-models-of-ai-tools](https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools)

## 📄 License

GNU General Public License v3 - Open source and free to use!

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add new AI system prompts
- Improve UI/UX
- Fix bugs
- Enhance documentation

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

**Built with ❤️ for the AI community**