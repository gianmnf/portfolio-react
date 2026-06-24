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
    const languageCode = currentLanguage.split('-')[0];

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
        <nav className="sticky top-0 z-50 border-b-4 border-foreground bg-background">
            <div className="container mx-auto px-4 py-4">
                <div className="relative flex items-center justify-between">
                    <div className="border-4 border-foreground bg-primary px-3 py-1 text-2xl font-black text-primary-foreground neo-shadow-sm">
                        GM
                        <span className="text-accent">.</span>
                    </div>

                    <div className="hidden md:flex items-center gap-8">
                        {items.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="border-b-4 border-transparent text-sm font-black uppercase text-foreground transition-colors hover:border-primary hover:text-primary"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="absolute right-0 top-1/2 flex -translate-y-1/2 items-center gap-2 sm:gap-4 md:static md:translate-y-0">
                        <Button
                            variant="outline"
                            size="icon-sm"
                            onClick={toggleTheme}
                            aria-label="Toggle Dark Mode"
                            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
                        >
                            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                        </Button>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm" className="hidden px-2 sm:inline-flex sm:px-3">
                                    {languageCode.toUpperCase()}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {['en', 'es', 'pt'].map((lang) => (
                                    <DropdownMenuItem
                                        key={lang}
                                        onClick={() => changeLanguage(lang)} className={languageCode === lang ? 'bg-accent' : ''}
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
                                className="block border-2 border-foreground bg-background px-4 py-2 text-sm font-black uppercase text-foreground transition-colors hover:bg-accent"
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
