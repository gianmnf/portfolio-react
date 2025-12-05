import { Contact } from '@/types/contactForm';

export async function sendMail(formData: Contact) {
    const res = await fetch('https://cloudflare-resend.gianmnf-dev.workers.dev', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    return await res.json();
}