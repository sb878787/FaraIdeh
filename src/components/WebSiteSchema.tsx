import { SITE_URL } from '@/libs/siteConfig';

export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'فراایده',
    alternateName: ['FaraIdeh', 'fara-ideh'],
    url: SITE_URL,
    inLanguage: 'fa-IR',
    description: 'تیم توسعه نرم‌افزار و استارتاپی فراایده',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
