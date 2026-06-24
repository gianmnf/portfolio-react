import { useLanguage } from "@/hooks/useLanguage";
import { Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="neo-section-title mb-12">
                        {t('about.title')}
                    </h2>

                    <div className="grid gap-8 md:grid-cols-3">
                        <div className="neo-shadow border-4 border-foreground bg-card p-6 md:col-span-2">
                            <p className="mb-6 text-lg font-semibold leading-relaxed text-foreground">
                                {t('about.description')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 border-2 border-foreground bg-accent p-3 font-black">
                                    <MapPin className="text-primary-foreground flex-shrink-0" size={20} />
                                    <span className="text-primary-foreground">{t('about.location')}</span>
                                </div>
                                <div className="flex items-center gap-3 border-2 border-foreground bg-secondary p-3 font-black">
                                    <Mail className="text-primary-foreground flex-shrink-0" size={20} />
                                    <a href="mailto:gianmnf.dev@gmail.com" className="text-primary-foreground hover:underline">
                                        {t('about.email')}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3 border-2 border-foreground bg-primary p-3 font-black text-primary-foreground">
                                    <Phone className="text-primary-foreground flex-shrink-0" size={20} />
                                    <a href="tel:+5534999905951" className="text-primary-foreground hover:underline">
                                        {t('about.phone')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="neo-shadow-sm border-4 border-foreground bg-primary p-6">
                                <div className="mb-2 text-4xl font-black text-primary-foreground">4+</div>
                                <div className="text-sm font-black uppercase text-primary-foreground">{t('experience.title')}</div>
                            </div>
                            <div className="neo-shadow-sm border-4 border-foreground bg-secondary p-6">
                                <div className="mb-2 text-4xl font-black text-secondary-foreground">10+</div>
                                <div className="text-sm font-black uppercase text-secondary-foreground">{t('nav.projects')}</div>
                            </div>
                            <div className="neo-shadow-sm border-4 border-foreground bg-accent p-6">
                                <div className="mb-2 text-4xl font-black text-accent-foreground">3</div>
                                <div className="text-sm font-black uppercase text-accent-foreground">{t('languages.title')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
