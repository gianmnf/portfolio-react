import { useLanguage } from "@/hooks/useLanguage";
import { Mail, MapPin, Phone } from 'lucide-react';

export default function About() {
    const { t } = useLanguage();

    return (
        <section id="about" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-12">
                        {t('about.title')}
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2">
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {t('about.description')}
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="text-primary flex-shrink-0" size={20} />
                                    <span className="text-foreground">{t('about.location')}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-primary flex-shrink-0" size={20} />
                                    <a href="mailto:gianmnf.dev@gmail.com" className="text-primary hover:underline">
                                        {t('about.email')}
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-primary flex-shrink-0" size={20} />
                                    <a href="tel:+5534999905951" className="text-primary hover:underline">
                                        {t('about.phone')}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-accent p-6 rounded-lg">
                                <div className="text-3xl font-bold text-primary mb-2">4+</div>
                                <div className="text-sm text-muted-foreground">{t('experience.title')}</div>
                            </div>
                            <div className="bg-accent p-6 rounded-lg">
                                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                                <div className="text-sm text-muted-foreground">{t('nav.projects')}</div>
                            </div>
                            <div className="bg-accent p-6 rounded-lg">
                                <div className="text-3xl font-bold text-primary mb-2">3</div>
                                <div className="text-sm text-muted-foreground">{t('languages.title')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}