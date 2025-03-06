
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  target?: string;
  rel?: string;
}

const AnimatedButton = ({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  size = "md",
  target,
  rel,
  ...props
}: AnimatedButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium transition-all duration-300 ease-in-out";
  
  const variantStyles = {
    primary: "bg-gradient-to-r from-cyberpunk-green to-cyberpunk-blue text-black shadow-neon-green hover:shadow-neon-blue",
    secondary: "bg-gradient-to-r from-cyberpunk-purple to-cyberpunk-pink text-white shadow-none hover:shadow-neon-blue",
    outline: "bg-transparent border border-cyberpunk-green text-cyberpunk-green hover:bg-cyberpunk-green/10"
  };
  
  const sizeStyles = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3.5 text-lg"
  };
  
  const buttonClasses = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );
  
  const ButtonContent = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span className="absolute inset-0 overflow-hidden rounded-full">
        <span className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500 ease-in-out group-hover:translate-x-[100%]" />
      </span>
    </>
  );
  
  if (href) {
    return (
      <a
        href={href}
        className={cn(buttonClasses, "group")}
        target={target}
        rel={rel}
        {...props}
      >
        <ButtonContent />
      </a>
    );
  }
  
  return (
    <button
      className={cn(buttonClasses, "group")}
      onClick={onClick}
      type="button"
      {...props}
    >
      <ButtonContent />
    </button>
  );
};

export default AnimatedButton;
