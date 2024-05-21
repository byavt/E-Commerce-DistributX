import type { Block } from 'payload/types'

import { invertBackground } from '../../fields/invertBackground'

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  fields: [
    invertBackground,
    {
      name: 'position',
      type: 'select',
      defaultValue: 'default',
      options: [
        {
          label: 'Por defecto',
          value: 'default',
        },
        {
          label: 'Pantalla completa',
          value: 'fullscreen',
        },
      ],
    },
    {
      name: 'Multimedia',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}
