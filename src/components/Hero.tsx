import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "./ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const downloadCV = (lang: string) => {
    const link = document.createElement('a');
    link.href = `/Gian_Michel_Nunes_Fernandes_CV_${lang}.pdf`;
    link.download = `Gian_Michel_Nunes_Fernandes_CV_${lang}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

export default function Hero() {
    const { currentLanguage, t } = useLanguage();
    const cvLanguage = currentLanguage.split('-')[0];

    return (
        <section id="home" className="neo-band min-h-[calc(100vh-76px)] flex items-center overflow-hidden bg-accent py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="grid min-w-0 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
                    <div className="min-w-0">
                        <div className="mb-5 inline-block max-w-[20.5rem] border-4 border-foreground bg-secondary px-4 py-2 text-sm font-black uppercase text-secondary-foreground sm:max-w-[calc(100vw-2rem)] neo-shadow-sm">
                            Backend Developer / Java / React
                        </div>

                        <h1 className="mb-5 max-w-[20.5rem] break-words text-4xl font-black uppercase leading-[0.92] text-foreground sm:max-w-[calc(100vw-2rem)] sm:text-5xl md:max-w-full md:text-7xl">
                            {t('hero.title')}
                        </h1>

                        <h2 className="mb-6 inline-block max-w-[20.5rem] border-4 border-foreground bg-primary px-4 py-2 text-xl font-black uppercase text-primary-foreground sm:max-w-[calc(100vw-2rem)] sm:text-2xl md:max-w-full md:text-3xl neo-shadow-sm">
                            {t('hero.subtitle')}
                        </h2>

                        <p className="mb-8 max-w-[20.5rem] border-l-4 border-foreground bg-background p-5 text-base font-semibold leading-relaxed text-foreground sm:max-w-full sm:text-lg md:max-w-2xl">
                            {t('hero.description')}
                        </p>

                        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                            <Button
                                size="lg"
                                className="w-full max-w-[20.5rem] sm:w-auto"
                                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('hero.cta')}
                            </Button>
                            <Button
                                size="lg"
                                variant="secondary"
                                className="w-full max-w-[20.5rem] sm:w-auto"
                                onClick={() => downloadCV(cvLanguage)}
                            >
                                {t('hero.cv')}
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full max-w-[20.5rem] sm:w-auto"
                                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            >
                                {t('nav.projects')}
                            </Button>
                        </div>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/gianmnf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neo-shadow-sm border-2 border-foreground bg-background p-3 transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                                aria-label="Github"
                            >
                                <Github size={24} />
                            </a>
                            <a
                                href="https://linkedin.com/in/gmichel"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="neo-shadow-sm border-2 border-foreground bg-background p-3 transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                                aria-label="Linkedin"
                            >
                                <Linkedin size={24} />
                            </a>
                            <a
                                href="mailto:gianmnf.dev@gmail.com"
                                className="neo-shadow-sm border-2 border-foreground bg-background p-3 transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
                                aria-label="Email"
                            >
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="relative mx-auto w-full max-w-[20.5rem] min-w-0 sm:max-w-[520px]">
                        <div className="absolute -left-4 top-8 h-full w-full border-4 border-foreground bg-primary md:-left-7 md:top-10" />
                        <div className="absolute -right-4 -top-4 h-28 w-28 border-4 border-foreground bg-secondary md:-right-7" />
                        <figure className="neo-shadow relative border-4 border-foreground bg-background p-3">
                            <img
                                src="/gian-profile.png"
                                alt="Gian Michel Nunes Fernandes"
                                className="aspect-[4/5] w-full border-4 border-foreground object-cover object-top"
                            />
                            <figcaption className="mt-3 border-4 border-foreground bg-accent px-4 py-3 text-center text-sm font-black uppercase text-accent-foreground">
                                Gian Michel Nunes Fernandes
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}
