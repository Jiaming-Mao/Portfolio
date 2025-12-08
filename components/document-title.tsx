'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/lib/i18n';

export function DocumentTitle() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t.site.title;
  }, [t.site.title]);

  return null;
}

