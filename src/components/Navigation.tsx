import { useLanguage } from "@/hooks/useLanguage";
import { useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Navigation() {
    const { t, changeLanguage, currentLanguage } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);

    const items = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.experience'), href: '#experience' },
        { label: t('nav.projects'), href: '#projects' },
        { label: t('nav.skills'), href: '#skills' },
        { label: t('nav.education'), href: '#education' },
        { label: t('nav.contact'), href: '#contact' },
    ]

    const languageNames: Record<string, string> = {
        en: 'English',
        es: 'Español',
        pt: 'Português',
    };

    return (
        <nav className="sticky top-0 z-50 bg-background border-b border-border">
            <div className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-foreground">
                        GM
                        <span className="text-primary">.</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center gap-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    {currentLanguage.toUpperCase()}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {['en', 'es', 'pt'].map((lang) => (
                                    <DropdownMenuItem
                                        key={lang}
                                        onClick={() => changeLanguage(lang)} className={currentLanguage === lang ? 'bg-accent' : ''}
                                    >
                                        {languageNames[lang]}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <button className="md:hidden p-2" onClick={() => setMobileOpen(prev => !prev)}>
                            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {mobileOpen && (
                    <div className="md:hidden mt-4 space-y-2">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-accent rounded-md transition-colors"
                                onClick={() => setMobileOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}