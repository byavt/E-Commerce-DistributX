import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Tipo',
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: 'Ninguno',
          value: 'none',
        },
        {
          label: 'Gran Impacto',
          value: 'highImpact',
        },
        {
          label: 'Medio Impacto',
          value: 'mediumImpact',
        },
        {
          label: 'Bajo Impacto',
          value: 'lowImpact',
        },
        {
          label: 'Hero Personalizado',
          value: 'customHero',
        },
      ],
    },
    richText({
      admin: {
        elements: ['h1', largeBody, label, 'link'],
        leaves: [],
      },
    }),
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) =>
          ['highImpact', 'mediumImpact', 'customHero'].includes(type),
      },
    },
  ],
}