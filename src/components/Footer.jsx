import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-12 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* Logo and Copyright Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo.svg" alt="Logo" className="w-[327px] h-auto" />
            </div>
            <p className="text-gray-600 text-sm">© 2025. All rights reserved</p>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="text-gray-900 font-medium mb-2">Projects</p>
            <p className="text-gray-900 font-medium mb-2">About</p>
            <p className="text-gray-900 font-medium">Contact</p>
          </div>

          {/* Social Links and Legal */}
          <div className="space-y-4">
            <div className="flex gap-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-gray-600">
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-900 hover:text-gray-600">
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
            <div className="space-y-1">
              <p className="text-gray-900 font-medium">Imprint</p>
              <p className="text-gray-900 font-medium">Data Privacy</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
