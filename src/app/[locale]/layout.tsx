import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, Locale } from '@/i18n/routing';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    if (!routing.locales.includes(locale as Locale)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <header className="p-4 bg-gray-100">
                <nav className="flex justify-between items-center max-w-4xl mx-auto">
                    <LanguageSwitcher />
                </nav>
            </header>
            <main className="max-w-4xl mx-auto p-4">{children}</main>
        </NextIntlClientProvider>
    );
}
