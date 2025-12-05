import { useLanguage } from '@/hooks/useLanguage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import { toast } from 'sonner';
import { sendMail } from '@/utils/resend';
import { Contact } from '@/types/contactForm';

export default function ContactForm() {
    const { t } = useLanguage();
    const [formData, setFormData] = useState<Contact>({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error(t('contact.form.fields'));
            return;
        }

        setIsLoading(true);

        try {
            await sendMail(formData);
            toast.success(t('contact.form.success'));
        } catch (err) {
            toast(`${t('contact.form.error')}: ${err}`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold text-foreground mb-4 text-center">
                        {t('contact.title')}
                    </h2>

                    <p className="text-lg text-muted-foreground mb-12 text-center">
                        {t('contact.description')}
                    </p>

                    <Card>
                        <CardHeader>
                            <CardTitle>{t('contact.title')}</CardTitle>
                            <CardDescription>{t('contact.description')}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.name')}</label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.name')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.email')}</label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="text"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.email')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.subject')}</label>
                                    <Input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.subject')}
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">{t('contact.form.message')}</label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder={t('contact.form.message')}
                                        rows={6}
                                        required
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={isLoading}
                                >
                                    {isLoading ? t('contact.form.sending') : t('contact.form.send')}
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}