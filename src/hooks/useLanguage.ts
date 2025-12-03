import { useTranslation } from "react-i18next";

export function useLanguage() {
    const { i18n, t } = useTranslation();

    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang);
    }

    const currentLanguage = i18n.language;

    return {
        t,
        changeLanguage,
        currentLanguage,
        languages: ['en', 'es', 'pt']
    }
}