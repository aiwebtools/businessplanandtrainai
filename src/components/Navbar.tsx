
import React, { useState, useEffect, useCallback } from "react";
import { Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        scrolled || isMenuOpen
          ? "bg-black/90 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue p-[2px] animate-pulse-glow">
            <div className="absolute inset-0 rounded-full flex items-center justify-center bg-black">
              <span className="text-cyberpunk-green font-bold text-lg sm:text-xl">AI</span>
            </div>
          </div>
          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl font-bold text-gradient-green truncate">
              AI Business Tools
            </h1>
            <p className="text-[10px] sm:text-xs text-white/60">
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
        <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-white/80 hover:text-cyberpunk-green transition-colors duration-150 text-sm font-medium whitespace-nowrap"
            >
              {link.name}
            </a>
          ))}
          <AnimatedButton
            href="https://aiwebtools.lovable.app/?via=aiwebtools"
            variant="primary"
            size="sm"
          >
            Explore All Tools
          </AnimatedButton>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white hover:text-cyberpunk-green transition-colors p-2 -mr-2 touch-manipulation"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7" />
          ) : (
            <Menu className="h-6 w-6 sm:h-7 sm:w-7" />
          )}
        </button>
      </div>

      {/* Mobile Navigation - uses transform for GPU-accelerated animation */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[56px] sm:top-[64px] bottom-0 bg-black/95 backdrop-blur-lg transition-all duration-200 ease-out ${
          isMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="container mx-auto px-4 py-6 space-y-1 overflow-y-auto max-h-full">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="block py-3 px-4 text-white/80 hover:text-cyberpunk-green hover:bg-white/5 active:bg-white/10 transition-colors duration-150 text-base sm:text-lg font-medium rounded-lg touch-manipulation"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 px-4">
            <AnimatedButton
              href="https://aiwebtools.lovable.app/?via=aiwebtools"
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
