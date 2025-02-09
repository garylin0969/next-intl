import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const locales = ['en', 'zh-TW', 'zh-CN'] as const;
export type Locale = (typeof locales)[number];

export const routing = defineRouting({
    locales,
    defaultLocale: 'en',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
