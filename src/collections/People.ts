import type { CollectionConfig } from 'payload'

export const People: CollectionConfig = {
  slug: 'people',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'contact',
      type: 'text',
      required: true,
    },
  ],
}
