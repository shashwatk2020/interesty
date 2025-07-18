import React, { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-sm hover:text-green-200 transition-colors"
      >
        <Globe className="w-4 h-4" />
        <span>{currentLanguage.flag}</span>
        <span>{currentLanguage.nativeName}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white text-gray-900 rounded-lg shadow-lg border border-gray-200 min-w-48 z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => {
                setLanguage(language);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center space-x-3 ${
                currentLanguage.code === language.code ? 'bg-green-50 text-green-700' : ''
              }`}
            >
              <span className="text-lg">{language.flag}</span>
              <div>
                <div className="font-medium">{language.nativeName}</div>
                <div className="text-sm text-gray-500">{language.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;