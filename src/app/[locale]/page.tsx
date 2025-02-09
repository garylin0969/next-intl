import { useLocale, useTranslations } from 'next-intl';
import { getMessages } from 'next-intl/server';

// 伺服器端載入該頁面的翻譯
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const messages = await import(`../../../messages/${locale}/home.json`);
    return {
        messages: messages.default,
    };
}

export default function Home() {
    // await new Promise((resolve) => setTimeout(resolve, 5000));

    // const messages = await getMessages();
    // console.log(messages);

    const locale = useLocale();
    console.log(locale);

    // 使用首頁翻譯
    const homeT = useTranslations('home');

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">{homeT('title')}</h1>
            <p className="text-lg">{homeT('description')}</p>
        </div>
    );
}
