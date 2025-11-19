import React from "react";
import { cn } from "../lib/utils";
import { X, Menu } from "lucide-react";

const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return <nav className= {cn("fixed w-full z-40 transition-all duration-300", 
    isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}
    >
        <div className="container flex justify-between items-center pr-14">
            <a href="#hero" className="text-xl font-bold text-color-primary flex items-center">
                <span className="reative z-10">
                    <span className="text-glow text-foreground"> Rodri Berdomas</span> {" "}Portfolio
                </span>
            </a>

            {/* Desktop Version */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a 
                    key={key} 
                    href={item.href} 
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                        {item.name} 
                    </a>
                ))}
            </div>
            {/* Mobile Version */}

                <button 
                    onClick={() => setIsMenuOpen ((prev) => !prev)} 
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {""}
                    {isMenuOpen ? < X size={24}/> : < Menu size={24}/>} {""}
                    </button>
            <div className= {cn("fixed inset-0 bg-background/95 backdrop-blur-md flex flex-col items-center justify-center  z-40",
            "transition-transform duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col  space-x-8 text-xl items-center space-y-6">
                    {navItems.map((item, key) => (
                        <a 
                        key={key} 
                        href={item.href} 
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        onClick={() => setIsMenuOpen(false)}
                        >
                            {item.name} 
                        </a>
                    ))}
                </div>
            </div>
        </div>

    </nav>
}