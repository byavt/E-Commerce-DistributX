import type { Block } from 'payload/types'

import richText from '../../fields/richText'

export const Archive: Block = {
  slug: 'archive',
  labels: {
    singular: 'Archivo',
    plural: 'Archivos',
  },
  fields: [
    richText({
      name: 'introContent',
      label: 'Contenido de Introducción',
    }),
    {
      name: 'populateBy',
      type: 'select',
      defaultValue: 'collection',
      options: [
        {
          label: 'Colección',
          value: 'collection',
        },
        {
          label: 'Selección Individual',
          value: 'selection',
        },
      ],
    },
    {
      type: 'select',
      name: 'relationTo',
      label: 'Colecciones a Mostrar',
      defaultValue: 'products',
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
      options: [
        {
          label: 'Productos',
          value: 'products',
        },
      ],
    },
    {
      type: 'relationship',
      name: 'categories',
      label: 'Categorias a Mostrar',
      relationTo: 'categories',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'limit',
      label: 'Limite',
      defaultValue: 10,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
        step: 1,
      },
    },
    {
      type: 'relationship',
      name: 'selectedDocs',
      label: 'Selección',
      relationTo: ['products'],
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.populateBy === 'selection',
      },
    },
    {
      type: 'relationship',
      name: 'populatedDocs',
      label: 'Documentos más populares',
      relationTo: ['products'],
      hasMany: true,
      admin: {
        disabled: true,
        description: 'Este campo se completa automáticamente después de la lectura.',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
    {
      type: 'number',
      name: 'populatedDocsTotal',
      label: 'Total de documentos completos',
      admin: {
        step: 1,
        disabled: true,
        description: 'Este campo se completa automáticamente después de la lectura.',
        condition: (_, siblingData) => siblingData.populateBy === 'collection',
      },
    },
  ],
}
