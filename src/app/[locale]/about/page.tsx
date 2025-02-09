import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n/routing';

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
    const messages = await import(`../../../../messages/${locale}/about.json`);
    return {
        messages: messages.default,
    };
}

export default function About() {
    const t = useTranslations('common');
    const aboutT = useTranslations('about');

    return (
        <div>
            <h1>{aboutT('title')}</h1>
            <p>{aboutT('content')}</p>
            <footer>{t('footer')}</footer>
        </div>
    );
}
