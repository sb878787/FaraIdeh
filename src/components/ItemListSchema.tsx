import { SITE_URL } from '@/libs/siteConfig';

interface ItemListSchemaProps {
  /** Site-relative path of the page the list appears on, e.g. `/blogs`. */
  path: string;
  /** `url` is optional: omit it for entries that have no page of their own. */
  items: { name: string; url?: string | null }[];
}

/**
 * `ItemList` for a listing page (`/blogs`, `/projects`) — tells search engines
 * the page is a collection and what is in it, in the order shown.
 */
export default function ItemListSchema({ path, items }: ItemListSchemaProps) {
  if (items.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${SITE_URL}${path}#itemlist`,
    itemListOrder: 'https://schema.org/ItemListOrderDescending',
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { url: item.url } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
