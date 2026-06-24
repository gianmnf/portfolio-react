import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="neo-section-title mb-12">
                        {t('education.title')}
                    </h2>

                    <Card>
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <GraduationCap className="text-primary flex-shrink-0 mt-1" size={32} />
                                <div className="flex-1">
                                    <CardTitle className="text-2xl">{t('education.degree')}</CardTitle>
                                    <CardDescription className="text-base mt-2">
                                        {t('education.university')}
                                    </CardDescription>
                                    <p className="mt-2 inline-block border-2 border-foreground bg-accent px-3 py-1 text-sm font-black uppercase text-accent-foreground">
                                        {t('education.period')}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="font-semibold text-muted-foreground leading-relaxed">
                                {t('education.description')}
                            </p>
                        </CardContent>
                    </Card>

                    <div className="mt-12">
                            <h3 className="mb-6 inline-block border-4 border-foreground bg-secondary px-4 py-2 text-2xl font-black uppercase text-secondary-foreground neo-shadow-sm">
                                {t('languages.title')}
                            </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-black uppercase text-foreground mb-2">
                                        {t('languages.portuguese')}
                                    </p>
                                    <p className="text-primary font-black">{t('languages.native')}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-black uppercase text-foreground mb-2">
                                        {t('languages.english')}
                                    </p>
                                    <p className="text-primary font-black">{t('languages.advanced')}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-black uppercase text-foreground mb-2">
                                        {t('languages.spanish')}
                                    </p>
                                    <p className="text-primary font-black">{t('languages.intermediate')}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
