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
        <section id="experience" className="neo-band py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="neo-section-title mb-12 bg-accent text-accent-foreground">
                        {t('experience.title')}
                    </h2>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative border-l-4 border-foreground pl-8 pb-8 last:pb-0">
                                <div className="absolute -left-5 top-0 h-8 w-8 border-4 border-foreground bg-primary" />
                                    <div className="neo-shadow border-4 border-foreground bg-background p-6">
                                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                            <div>
                                                <h3 className="text-2xl font-black uppercase text-foreground">
                                                    {t(`experience.${exp.key}.title`)}
                                                </h3>
                                                <p className="text-lg text-primary font-black">
                                                    {t(`experience.${exp.key}.company`)}
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-start md:items-end gap-2">
                                                <p className="border-2 border-foreground bg-accent px-3 py-1 text-sm font-black uppercase text-accent-foreground">
                                                    {t(`experience.${exp.key}.period`)}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="font-semibold leading-relaxed text-muted-foreground">
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
