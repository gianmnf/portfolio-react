import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap } from 'lucide-react';

export default function Education() {
    const { t } = useLanguage();

    return (
        <section id="education" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-12">
                        {t('education.title')}
                    </h2>

                    <Card className="border-2 border-primary">
                        <CardHeader>
                            <div className="flex items-start gap-4">
                                <GraduationCap className="text-primary flex-shrink-0 mt-1" size={32} />
                                <div className="flex-1">
                                    <CardTitle className="text-2xl">{t('education.degree')}</CardTitle>
                                    <CardDescription className="text-base mt-2">
                                        {t('education.university')}
                                    </CardDescription>
                                    <p className="text-sm text-muted-foreground mt-2">
                                        {t('education.period')}
                                    </p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {t('education.description')}
                            </p>
                        </CardContent>
                    </Card>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            {t('languages.title')}
                        </h3>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-semibold text-foreground mb-2">
                                        {t('languages.portuguese')}
                                    </p>
                                    <p className="text-primary font-semibold">{t('languages.native')}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-semibold text-foreground mb-2">
                                        {t('languages.english')}
                                    </p>
                                    <p className="text-primary font-semibold">{t('languages.advanced')}</p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="font-semibold text-foreground mb-2">
                                        {t('languages.spanish')}
                                    </p>
                                    <p className="text-primary font-semibold">{t('languages.intermediate')}</p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}