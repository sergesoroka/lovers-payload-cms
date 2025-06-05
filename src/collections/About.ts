import type { CollectionConfig } from 'payload'

export const About: CollectionConfig = {
  slug: 'About',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: true,
}
