import type { CollectionConfig } from 'payload'

export const Lovers: CollectionConfig = {
  slug: 'lovers',
  access: { read: () => true },
  fields: [
    {
      name: 'content',
      type: 'text',
    },
  ],
}
