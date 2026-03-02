import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-4 flex items-center justify-between h-18">
        {/* Logo Section */}
        <div className="flex items-center gap-4">
          <img src="/images/logo.svg" alt="Logo" className="w-[327px] h-auto" />
        </div>

        {/* Navigation Links and Social Icons */}
        <div className="flex items-center gap-12">
          <a href="#projects" className="text-gray-900 font-medium hover:text-gray-600">
            Projects
          </a>
          <a href="#about" className="text-gray-900 font-medium hover:text-gray-600">
            About
          </a>
          <a href="#contact" className="text-gray-900 font-medium hover:text-gray-600">
            Contact
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-gray-600">
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
