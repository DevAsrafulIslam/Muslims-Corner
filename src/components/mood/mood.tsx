"use client";
import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "../ui/button";
import { useTheme } from "next-themes";

export const Mood = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    // Use resolvedTheme instead of theme for more reliable detection
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    console.log("Theme toggled to:", resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-9 h-9" />;
  }

  return (
    <Button 
      variant="outline" 
      size="icon" 
      onClick={toggleTheme}
      className="relative overflow-hidden p-2 rounded-full hover:bg-gray-100"
      aria-label="Toggle theme"
    >
      <Sun className={`h-[1.2rem] w-[1.2rem] transition-all duration-300 ${
        resolvedTheme === 'dark' ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
      }`} />
      <Moon className={`absolute h-[1.2rem] w-[1.2rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        resolvedTheme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`} />
    </Button>
  );
};
