import { useTranslations } from 'next-intl';
import { Locale } from '@/i18n/routing';

// 伺服器端載入該頁面的翻譯
export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }) {
    const messages = await import(`../../../messages/${locale}/home.json`);
    return {
        messages: messages.default,
    };
}

export default function Home() {
    // 使用首頁翻譯
    const homeT = useTranslations('home');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{homeT('title')}</h1>
            <p className="text-lg">{homeT('description')}</p>
        </div>
    );
}
