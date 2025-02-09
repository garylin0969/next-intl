import { getRequestConfig } from 'next-intl/server';
import { routing, Locale } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !routing.locales.includes(locale as Locale)) {
        locale = routing.defaultLocale;
    }

    // 動態載入所有翻譯
    const common = (await import(`../../messages/${locale}/common.json`)).default;
    const home = (await import(`../../messages/${locale}/home.json`)).default;
    const about = (await import(`../../messages/${locale}/about.json`)).default;

    return {
        locale,
        messages: {
            common,
            home,
            about,
        },
    };
});
