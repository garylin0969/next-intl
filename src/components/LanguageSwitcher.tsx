'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const t = useTranslations('common.navigation');

    const languages = {
        en: 'English',
        'zh-TW': '繁體中文',
        'zh-CN': '简体中文',
    };

    return (
        <div className="flex items-center gap-4">
            <span>{t('language')}:</span>
            <select
                value={locale}
                onChange={(e) => {
                    router.replace(pathname, { locale: e.target.value });
                }}
                className="border rounded p-1"
            >
                {Object.entries(languages).map(([code, name]) => (
                    <option key={code} value={code}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}
