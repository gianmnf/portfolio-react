import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            key: 'project1',
        },
        {
            key: 'project2',
        },
        {
            key: 'project3',
        },
        {
            key: 'project4',
        }
    ];

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2 className="neo-section-title mb-12">
                        {t('projects.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <Card key={index} className={index % 2 === 0 ? 'bg-card' : 'bg-accent'}>
                                <CardHeader>
                                    <CardTitle className="text-2xl">
                                        {t(`projects.${project.key}.name`)}
                                    </CardTitle>
                                    <CardDescription className="text-base text-white">
                                        {t(`projects.${project.key}.description`)}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm font-black uppercase text-foreground mb-2">Tech Stack:</p>
                                        <div className="flex flex-wrap gap-2">
                                            {t(`projects.${project.key}.tech`)
                                                .split(', ')
                                                .map((tech, idx) => (
                                                    <Badge key={idx} variant="secondary">
                                                        {tech}
                                                    </Badge>
                                                ))}
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-sm font-black uppercase text-foreground mb-2">Highlights:</p>
                                        <p className="text-sm font-semibold text-white leading-relaxed">
                                            {t(`projects.${project.key}.highlights`)}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
