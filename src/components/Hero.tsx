import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
                        {t('hero.title')}
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                        {t('hero.subtitle')}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                        {t('hero.description')}
                    </p>

                    <div className="flex-flex-col sm:flex-row gap-4 justify-center mb-12">
                        <Button
                            size="lg"
                            className="text-base"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('hero.cta')}
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            {t('nav.projects')}
                        </Button>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://github.com/gianmnf"
                            target="_blank"
                            rel="noopener noreferer"
                            className="p-3 bg-accent rounded-full hover:bg-primary/20 transition-colors"
                            aria-label="Github"
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/gmichel"
                            target="_blank"
                            rel="noopener noreferer"
                            className="p-3 bg-accent rounded-full hover:bg-primary/20 transition-colors"
                            aria-label="Linkedin"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="mailto:gianmnf.dev@gmail.com"
                            className="p-3 bg-accent rounded-full hover:bg-primary/20 transition-colors"
                            aria-label="Email"
                        >
                            <Mail size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}