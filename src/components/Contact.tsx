import React from 'react';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  // Contact data
  const contactInfo = [
    {
      icon: <Mail size={20} className="text-blue-400" />,
      content: (
        <a 
          href="mailto:harshaagarwal820@gmail.com" 
          className="text-white hover:underline hover:text-blue-400 transition-colors"
        >
          harshaagarwal820@gmail.com
        </a>
      )
    },
    {
      icon: <MapPin size={20} className="text-green-400" />,
      content: <span className="text-white">Gandhinagar, Gujarat, India</span>
    },
    {
      icon: <Phone size={20} className="text-pink-400" />,
      content: (
        <a 
          href="tel:+916350589252" 
          className="text-white hover:underline hover:text-pink-400 transition-colors"
        >
          +91 6350589252
        </a>
      )
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} className="text-gray-400 group-hover:text-white transition-colors" />,
      url: "https://github.com/harshaagrawal20",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={24} className="text-gray-400 group-hover:text-white transition-colors" />,
      url: "https://www.linkedin.com/in/harsha-agrawal-a56864290/",
      label: "LinkedIn"
    },
    {
      icon: <Mail size={24} className="text-gray-400 group-hover:text-white transition-colors" />,
      url: "mailto:harshaagarwal820@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Get In <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          I'm always interested in new opportunities and collaborations. Let's connect!
        </p>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 flex-wrap mb-16">
          {contactInfo.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              {item.icon}
              {item.content}
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-6">Follow Me</h4>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;