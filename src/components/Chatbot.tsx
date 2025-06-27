import React, { useState, useRef, useEffect, useCallback } from "react";

// ========================
// Harsha Agarwal's Resume Data
// ========================
const harshaInfo = {
  name: "Harsha Agarwal",
  email: "harshaagarwal820@gmail.com",
  phone: "+91 63505 89252",
  linkedin: "https://www.linkedin.com/in/harsha-agrawal-a56864290/",
  github: "https://github.com/harshaagrawal20",
  summary:
    "I'm an enthusiastic and results-driven Computer Science student at IIIT Vadodara. I have a deep interest in full-stack development, machine learning, computer vision, and solving real-world problems through code. I'm a fast learner, strong team player, and always eager to explore new technologies.",
  experience: [
    {
      company: "Ernst & Young (EY)",
      position: "AI/ML Intern",
      period: "May 2025 – Present",
      description:
        "At EY, I worked as an intern and collaborated with cross-functional teams on projects involving automation, analytics, and AI tools.",
      responsibilities: [
       " Developed a news tracker that monitored over 30 websites",

       " Worked on the Rajnivesh platform",
        
       "Contributed to a fake MoU detection algorithm",
        
       " Handled documentation and data work in Excel",
        
        
      ],
      projects: [
        {
          name: "Investment News Tracker",
          description: "Developed a real-time investment news tracking system that aggregates and analyzes financial news from multiple sources using NLP techniques.",
          technologies: ["Python", "NLP", "AWS", "React"],
          impact: "Reduced research time by 40% for investment teams"
        },
        {
          name: "Rajnivesh",
          description: "Contributed to an internal knowledge management platform that uses AI to organize and retrieve enterprise documents efficiently.",
          technologies: ["Node.js", "Elasticsearch", "Machine Learning"],
          impact: "Improved document retrieval accuracy by 35%"
        },
        {
          name: "Fake MOU Detector",
          description: "Built a machine learning model to detect potentially fraudulent Memorandums of Understanding by analyzing document patterns and signatures.",
          technologies: ["Python", "Computer Vision", "Scikit-learn"],
          impact: "Identified 92% of test cases accurately"
        }
      ]
    },
  ],
  projects: [
    {
      name: "SkillSync",
      description:
        "A cutting-edge AI interview preparation tool built with Flask and React. Features include posture detection using OpenCV, resume analyzer via NLP, and real-time quizzes. Secured 2nd place among 50+ teams at the IIITV Hackathon.",
      technologies: ["Flask", "React", "OpenCV", "NLP"],
      type: "Hackathon Winner (April 2025)",
      link: "https://github.com/harshaagrawal20/skillsync"
    },
    {
      name: "SignLearn",
      description:
        "An accessible website for deaf/mute children to learn using sign language with real-time recognition via OpenCV. Features gamified lessons, progress tracking, and intuitive UI for kids. Includes separate modules for alphabet and number sign recognition.",
      technologies: ["OpenCV", "React", "Node.js"],
      type: "Individual Project (March 2024)",
      links: [
        "Alphabet Signs: https://github.com/harshaagrawal20/singlanguage-alphabets-",
        "Number Signs: https://github.com/harshaagrawal20/numbers-signlanguage-"
      ]
    },
    {
      name: "2048 Game in MATLAB",
      description:
        "Developed a fully playable version of the 2048 puzzle game using MATLAB. Applied optimized matrix transformations and game logic for enhanced performance (15% faster than standard logic).",
      technologies: ["MATLAB", "Game Development"],
      type: "Group Project (April 2025)",
      link: "https://github.com/harshaagrawal20/matlab-2048"
    },
    {
      name: "Disease Prediction System",
      description:
        "A machine learning-based health prediction app using symptom checklists. Uses SVM and Random Forest to achieve high accuracy in predicting illnesses from user input.",
      technologies: ["Python", "Scikit-Learn", "Flask"],
      type: "Individual Project (March 2025)",
      link: "https://github.com/harshaagrawal20/medicalsuggestion-ml-"
    },
    {
      name: "AirDraw Canvas",
      description:
        "An OpenCV-powered canvas where users draw in mid-air with finger tracking using MediaPipe. Achieved over 90% gesture recognition accuracy.",
      technologies: ["OpenCV", "MediaPipe", "Python"],
      type: "Individual Project (March 2025)",
      link: "https://github.com/harshaagrawal20/virtualpainting"
    },
  ],
  education: [
    {
      school: "Indian Institute of Information Technology, Vadodara",
      degree: "B.Tech in Computer Science and Engineering",
      period: "2023 – 2027",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Computer Networks",
        "Machine Learning",
        "Operating Systems",
        "Artificial Intelligence",
        "Software Engineering"
      ]
    },
    {
      school: "Higher Secondary School",
      details: "Class 10: 94% | Class 12: 83%",
    },
  ],
  technicalSkills: [
    {
      category: "Programming Languages",
      items: ["C++", "Python", "JavaScript", "SQL", "MATLAB"]
    },
    {
      category: "Web Development",
      items: ["HTML", "CSS", "React.js", "Next.js", "Firebase", "Node.js"]
    },
    {
      category: "Backend/API",
      items: ["Flask", "Express", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "MongoDB Compass", "LaTeX", "Docker", "Postman"]
    },
    {
      category: "ML/AI",
      items: ["OpenCV", "Scikit-Learn", "TensorFlow", "PyTorch", "Generative AI", "NLP"]
    },
    {
      category: "Cloud/DevOps",
      items: ["AWS", "Firebase", "CI/CD", "GitHub Actions"]
    }
  ],
  softSkills: [
    "Leadership: Guided teams during hackathons and projects",
    "Adaptability: Quickly learns and applies new tools/libraries",
    "Communication: Presented and explained projects clearly",
    "Teamwork: Collaborative in both academic and real-world teams",
    "Problem-solving: Strong analytical and debugging skills",
    "Time Management: Balances academics, projects, and extracurriculars"
  ],
  achievements: [
    "Google Girls Hackathon | Semifinalist (Feb 2025) - Chosen among 500+ participants",
    "IIITV Hackathon | 2nd Prize (April 2025) for SkillSync AI tool",
    "Winner - Sketching Competition (March 2024)",
    "Winning Team - Volleyball Tournament (Feb 2025)",
    "Core Member - Art & Dance Club (2023-2025)",
    "Active Member - Google Developer Student Club (GDSC) IIITV",
  ],
  hobbies: [
    "Sketching and digital art",
    "Playing volleyball",
    "Dancing (Bollywood and contemporary)",
    "Exploring new technologies",
    "Participating in hackathons"
  ]
};

const fallbackMessages = [
  "I'm HarshaBot 🤖! Your cosmic guide to Harsha Agarwal's professional universe.",
  "Try asking something like:",
  "- What planets (skills) are in your tech solar system?",
  "- Tell me about your work at EY",
  "- What projects have you launched?",
  "- What are your interstellar hobbies?",
  "- Can you share your GitHub constellation?",
  "- What did you work on during your EY expedition?"
];

const getRandomFallback = () => {
  return fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)];
};

function getAIResponse(input: string): string {
  const q = input.toLowerCase().trim();

  // Greetings
  if (/^(hi|hello|hey|greetings|sup|what's up)/.test(q)) {
    return `Hello ! 👋 I'm HarshaBot, your guide to Harsha's professional galaxy. What stellar information can I share today?`;
  }

  // Basic info
  if (/your name|who are you|what is your name/.test(q)) {
    return `I'm Harsha Agarwal, a tech explorer navigating the cosmos of Computer Science at IIIT Vadodara.`;
  }

  if (/contact|email|phone|linkedin|github|how to reach|get in touch/.test(q)) {
    return `📡 Communication Channels:\n\n📧 Email: ${harshaInfo.email}\n📞 Phone: ${harshaInfo.phone}\n🔗 LinkedIn: ${harshaInfo.linkedin}\n💻 GitHub: ${harshaInfo.github}`;
  }

  if (/about you|summary|describe yourself|introduction|who are you/.test(q)) {
    return harshaInfo.summary;
  }

  // Skills
  if (/skills?|languages?|frameworks?|technologies?|tools?|stack/.test(q)) {
    if (/soft|communication|leadership|teamwork|collaboration/.test(q)) {
      return `🌟 Soft Skills Constellation:\n\n• ${harshaInfo.softSkills.join("\n• ")}`;
    }
    
    if (/technical|programming|coding|framework|tool/.test(q)) {
      let response = "🛰️ Technical Skills:\n\n";
      harshaInfo.technicalSkills.forEach(skillGroup => {
        response += `• ${skillGroup.category}: ${skillGroup.items.join(", ")}\n`;
      });
      return response;
    }
    
    return `Harsha's skill universe contains:\n\n🛰️ Technical:\n${harshaInfo.technicalSkills.map(g => `• ${g.category}: ${g.items.join(", ")}`).join("\n")}\n\n🌟 Soft:\n• ${harshaInfo.softSkills.join("\n• ")}`;
  }

  // Experience
  if (/experience|work|job|ey|ernst|young|internship|professional/.test(q)) {
    const exp = harshaInfo.experience[0];
    let response = `🚀 ${exp.position} at ${exp.company} (${exp.period})\n\n${exp.description}\n\n Responsibilities:\n• ${exp.responsibilities.join("\n• ")}`;
    
    if (/project|work on|built|developed|investment|rajnivesh|fake mou|mou detector|tracker/.test(q)) {
      response += `\n\nKey Expeditions:\n${exp.projects.map(p => 
        `• ${p.name}\n  - ${p.description}\n  - Technologies: ${p.technologies.join(", ")}\n  - Impact: ${p.impact}`
      ).join("\n\n")}`;
    }
    
    return response;
  }

  // Education
  if (/education|school|college|university|study|studies|degree|courses|academics/.test(q)) {
    const edu = harshaInfo.education[0];
    return `🌌 Education Journey:\n\n• ${edu.school}\n  - ${edu.degree} (${edu.period})\n  - Coursework: ${edu.coursework.join(", ")}\n\n• ${harshaInfo.education[1].school}\n  - ${harshaInfo.education[1].details}`;
  }

  // Projects
  if (/project|hackathon|portfolio|work you did|build|developed/.test(q)) {
    if (/skill.?sync/.test(q)) {
      const proj = harshaInfo.projects[0];
      return `🛸 ${proj.name} (${proj.type})\n\n${proj.description}\n\nTechnologies: ${proj.technologies.join(", ")}\nGitHub: ${proj.link}`;
    }
    if (/sign.?learn/.test(q)) {
      const proj = harshaInfo.projects[1];
      return `🛸 ${proj.name} (${proj.type})\n\n${proj.description}\n\nTechnologies: ${proj.technologies.join(", ")}\nGitHub Repositories:\n• ${proj.links.join("\n• ")}`;
    }
    if (/2048/.test(q)) {
      const proj = harshaInfo.projects[2];
      return `🛸 ${proj.name} (${proj.type})\n\n${proj.description}\n\nTechnologies: ${proj.technologies.join(", ")}\nGitHub: ${proj.link}`;
    }
    if (/disease|health|prediction|symptom|medical/.test(q)) {
      const proj = harshaInfo.projects[3];
      return `🛸 ${proj.name} (${proj.type})\n\n${proj.description}\n\nTechnologies: ${proj.technologies.join(", ")}\nGitHub: ${proj.link}`;
    }
    if (/air.?draw|canvas|virtual.?paint/.test(q)) {
      const proj = harshaInfo.projects[4];
      return `🛸 ${proj.name} (${proj.type})\n\n${proj.description}\n\nTechnologies: ${proj.technologies.join(", ")}\nGitHub: ${proj.link}`;
    }
    
    return (
      "🌠 Project Constellations:\n\n" +
      harshaInfo.projects.map(p => 
        `• ${p.name} (${p.type})\n  - ${p.description}\n  - Technologies: ${p.technologies.join(", ")}` +
        (p.link ? `\n  - GitHub: ${p.link}` : '') +
        (p.links ? `\n  - GitHub Repositories:\n    ◦ ${p.links.join("\n    ◦ ")}` : '')
      ).join("\n\n")
    );
  }

  // Achievements
  if (/achievement|award|prize|winner|competition|extracurricular|club|hackathon/.test(q)) {
    return "🏆 Stellar Achievements:\n\n" + harshaInfo.achievements.map(a => `• ${a}`).join("\n");
  }

  // Hobbies
  if (/fun fact|hobby|hobbies|interests|free time|what do you like/.test(q)) {
    return `🎨 Cosmic Hobbies:\n\n• ${harshaInfo.hobbies.join("\n• ")}\n\nHarsha has won sketching competitions and actively participates in cultural and sports events.`;
  }

  // Default response
  return getRandomFallback();
}

const GalaxyChatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ from: "user" | "bot"; text: string }[]>([{
    from: "bot",
    text: "Greetings, space traveler! 🌌 I'm HarshaBot, your guide to Harsha Agarwal's professional universe. What stellar information shall we explore today?"
  }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Generate random stars
  const [stars] = useState(() => 
    Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 3 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5 + 3,
      opacity: Math.random() * 0.7 + 0.3
    }))
  );

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = useCallback((e?: React.FormEvent) => {
    e?.preventDefault();
    const userMsg = input.trim();
    if (!userMsg) return;
    
    setMessages(msgs => [...msgs, { from: "user", text: userMsg }]);
    setInput("");
    setIsTyping(true);
    
    setTimeout(() => {
      setMessages(msgs => [
        ...msgs,
        { from: "bot", text: getAIResponse(userMsg) },
      ]);
      setIsTyping(false);
    }, 500 + Math.random() * 1000);
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed top-4 right-4 w-full max-w-md rounded-lg flex flex-col h-[500px] galaxy-container z-[9999]">
      {/* Galaxy CSS */}
      <style >{`
        .galaxy-container {
          background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
          border: 1px solid #4e54c8;
          box-shadow: 0 0 20px rgba(78, 84, 200, 0.5),
                      0 0 40px rgba(78, 84, 200, 0.3),
                      0 0 80px rgba(78, 84, 200, 0.1);
        }
        .galaxy-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.1) 0%, transparent 20%);
          pointer-events: none;
          z-index: 1;
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          animation: twinkle var(--duration) infinite ease-in-out;
          opacity: var(--opacity);
        }
        @keyframes twinkle {
          0%, 100% { opacity: calc(var(--opacity) * 0.5); }
          50% { opacity: var(--opacity); }
        }
        .chat-area {
          background: linear-gradient(to bottom, rgba(15, 12, 41, 0.9), rgba(36, 36, 62, 0.9));
        }
      `}</style>

      {/* Stars */}
      {stars.map((star, i) => (
        <div 
          key={i}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            '--duration': `${star.delay}s`,
            '--opacity': star.opacity
          } as React.CSSProperties}
        />
      ))}

      {/* Header */}
      <div className="p-4 border-b border-indigo-700 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-t-lg relative z-10">
        <div className="flex items-center space-x-3">
          <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]"></div>
          <h2 className="font-semibold text-white">Harsha's Bot</h2>
         
        </div>
        <p className="text-xs text-indigo-200 mt-1">
          Navigate Harsha's professional universe
        </p>
      </div>
      
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 chat-area relative z-10">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-[85%] text-sm whitespace-pre-line relative z-10 ${
                msg.from === "user"
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-br-none shadow-[0_0_10px_2px_rgba(124,58,237,0.5)]"
                  : "bg-gray-800 text-gray-100 border border-indigo-900 rounded-bl-none shadow-[0_0_10px_2px_rgba(30,58,138,0.3)]"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-2xl bg-gray-800 text-gray-100 rounded-bl-none border border-indigo-900">
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce shadow-[0_0_4px_1px_rgba(34,211,238,0.6)]"></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce shadow-[0_0_4px_1px_rgba(34,211,238,0.6)]" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce shadow-[0_0_4px_1px_rgba(34,211,238,0.6)]" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {/* Input area */}
      <form
        onSubmit={handleSend}
        className="p-3 border-t border-indigo-700 bg-gradient-to-r from-indigo-900 to-purple-900 rounded-b-lg relative z-10"
      >
        <div className="flex gap-2">
          <input
            ref={inputRef}
            className="flex-1 px-4 py-2 rounded-lg border border-indigo-700 bg-indigo-950 text-white placeholder-indigo-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent shadow-[0_0_10px_1px_rgba(79,70,229,0.3)]"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Transmit your query about Harsha..."
            autoFocus
            aria-label="Type your message"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-indigo-900 disabled:opacity-50 transition shadow-[0_0_10px_2px_rgba(34,211,238,0.3)]"
            disabled={!input.trim()}
          >
            Launch
          </button>
        </div>
       
      </form>
    </div>
  );
};

export default GalaxyChatbot;