
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { HorizonXLogo } from './HorizonXLogo';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const navLinks = [
  { name: 'Features', href: '#features' },
  { name: 'Tech Stack', href: '#tech-stack' },
  { name: 'Case Studies', href: '#case-studies' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Open Source', href: '#open-source' },
];

export const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scroll ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm' : ''
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <HorizonXLogo />
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="space-x-2">
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>
        </nav>
        
        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 flex flex-col space-y-2">
                <Button variant="outline">Login</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
