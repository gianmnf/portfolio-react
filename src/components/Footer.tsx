import { useLanguage } from "@/hooks/useLanguage";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const quickLinks = ['home', 'about', 'projects', 'contact'];

    return (
        <footer className="bg-background border-t border-border py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div>
                            <h3 className="text-lg font-bold text-foreground mb-4">
                                Gian Michel
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {t('footer.about')}
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-foreground mb-4">
                                {t('footer.links')}
                            </h4>
                            <ul className="space-y-2">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a href={`#${link}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                            {t(`nav.${link}`)}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-sm font-semibold text-foreground mb-4">
                                {t('footer.social')}
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/gianmnf"
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Github"
                                >
                                    <Github size={20} />
                                </a>
                                <a
                                    href="https://linkedin.com/in/gmichel"
                                    target="_blank"
                                    rel="noopener noreferer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Linkedin"
                                >
                                    <Linkedin size={20} />
                                </a>
                                <a
                                    href="mailto:gianmnf.dev@gmail.com"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Email"
                                >
                                    <Mail size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-border my-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                            {t('footer.copyright')}
                            <Heart size={16} className="text-primary" />
                        </p>
                        <p className="text-sm text-muted-foreground">
                            {t('footer.built')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}