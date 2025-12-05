import { useLanguage } from '@/hooks/useLanguage';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Skills() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            title: t('skills.languages'),
            skills: [
                { key: 'java', label: t('skills.java') },
                { key: 'javascript', label: t('skills.javascript') },
                { key: 'sql', label: t('skills.sql') },
            ],
        },
        {
            title: t('skills.frameworks'),
            skills: [
                { key: 'springBoot', label: t('skills.springBoot') },
                { key: 'nestJs', label: t('skills.nestJs') },
                { key: 'nextJs', label: t('skills.nextJs') },
                { key: 'reactJs', label: t('skills.reactJs') },
            ],
        },
        {
            title: t('skills.databases'),
            skills: [
                { key: 'postgresql', label: t('skills.postgresql') },
                { key: 'mysql', label: t('skills.mysql') },
                { key: 'mongodb', label: t('skills.mongodb') },
            ],
        },
        {
            title: t('skills.tools'),
            skills: [
                { key: 'git', label: t('skills.git') },
                { key: 'github', label: t('skills.github') },
                { key: 'githubActions', label: t('skills.githubActions') },
                { key: 'docker', label: t('skills.docker') },
                { key: 'jira', label: t('skills.jira') },
            ],
        },
        {
            title: t('skills.ui'),
            skills: [
                { key: 'primeReact', label: t('skills.primeReact') },
                { key: 'tailwindCss', label: t('skills.tailwindCss') },
                { key: 'redux', label: t('skills.redux') },
            ],
        },
        {
            title: t('skills.methodologies'),
            skills: [
                { key: 'agile', label: t('skills.agile') },
                { key: 'cicd', label: t('skills.cicd') },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-12">
                        {t('skills.title')}
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {skillCategories.map((category, index) => (
                            <Card key={index}>
                                <CardHeader>
                                    <CardTitle className="text-lg">{category.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill, idx) => (
                                            <Badge key={idx} variant="secondary">
                                                {skill.label}
                                            </Badge>
                                        ))}
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