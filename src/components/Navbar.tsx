
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    {
      name: "Business Plan Generator GPT",
      href: "https://chatgpt.com/g/g-q7pLvlyHl-business-plan-generator-gpt",
    },
    {
      name: "Staff Training Manual Generator GPT",
      href: "https://chatgpt.com/g/g-eAjMJuHC3-training-manual-generator-gpt",
    },
    { name: "FAQ", href: "#faq" },
    { name: "Disclaimer", href: "#disclaimer" },
    { name: "More AI Tools", href: "https://aiwebtools.lovable.app/?via=aiwebtools" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue p-[2px] animate-pulse-glow">
            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black">
              <span className="text-cyberpunk-green font-bold text-xl">AI</span>
            </div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gradient-green">
              AI Business Tools
            </h1>
            <p className="text-xs text-white/60">
              Presented by{" "}
              <a
                href="https://aiwebtools.lovable.app/?via=aiwebtools"
                className="text-cyberpunk-green hover:underline"
              >
                AiWebTools.Ai
              </a>
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-cyberpunk-green transition-colors duration-200 text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <AnimatedButton
            href="https://www.aiwebtools.ai"
            variant="primary"
            size="sm"
          >
            Explore All Tools
          </AnimatedButton>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white hover:text-cyberpunk-green transition-colors"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        } transition-all duration-300 ease-in-out overflow-hidden bg-black/90 backdrop-blur-lg`}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-2 text-white/80 hover:text-cyberpunk-green transition-colors duration-200 text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <AnimatedButton
              href="https://www.aiwebtools.ai"
              className="w-full"
              variant="primary"
              size="md"
            >
              Explore All Tools
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
