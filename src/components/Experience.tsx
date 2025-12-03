import { useLanguage } from "@/hooks/useLanguage";
import { Badge } from "@/components/ui/badge";

export default function Experience() {
    const { t } = useLanguage();

    const experiences = [
        {
            key: 'position1',
            current: true,
        },
        {
            key: 'position2',
            current: false
        }
    ];

    return (
        <section id="experience" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-12">
                        {t('experience.title')}
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-primary pb-8 last:pb-0">
                                <div className="absolute -left-4 top-0 w-6 h-6 bg-primary rounded-full border-4 border-background" />
                                    <div className="bg-background rounded-lg p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-foreground">
                                                    {t(`experience.${exp.key}.title`)}
                                                </h3>
                                                <p className="text-lg text-primary font-semibold">
                                                    {t(`experience.${exp.key}.title`)}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start md:items-end gap-2">
                                                <p className="text-sm text-muted-foreground">
                                                    {t(`experience.${exp.key}.period`)}
                                                </p>
                                                {exp.current && (
                                                    <Badge className="bg-primary text-primary-foreground">
                                                        {t('experience.current')}
                                                    </Badge>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {t(`experience.${exp.key}.description`)}
                                        </p>
                                    </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}