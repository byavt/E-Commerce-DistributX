import type { Page } from '../payload-types'

export const staticHome: Page = {
  id: '',
  title: 'Página Principal',
  slug: 'home',
  createdAt: '',
  updatedAt: '',
  meta: {
    title: 'DistributX',
    description: 'Aquí podrás encontrar productos completamente relacionados con la tecnología.',
  },
  hero: {
    type: 'lowImpact',
    richText: [
      {
        children: [
          {
            text: 'DistributX',
          },
        ],
        type: 'h1',
      },
      {
        children: [
          {
            text: '¡Bienvenido a tu tienda de comercio electrónico! ',
          },
          {
            text: 'Su base de datos está actualmente vacía.',
            bold: true,
          },
          {
            text: ' Para sembrar su base de datos con algunos productos y páginas, ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'inicie sesión en el panel de administración',
              },
            ],
          },
          {
            text: ' y haga clic en "sembrar su base de datos". Si ya ha sembrado su base de datos, ',
          },
          {
            text: 'es posible que deba actualizar esta página para borrar la solicitud almacenada en caché.',
            bold: true,
          },
        ],
      },
    ],
    media: '',
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Sembrar base de datos',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Su base de datos está actualmente vacía. Para sembrar su base de datos, ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'inicie sesión en el panel de administración',
                },
              ],
            },
            {
              text: ' y haga clic en "sembrar su base de datos".',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'custom',
            url: '/admin',
            label: 'Ir al panel de control',
            appearance: 'primary',
            reference: null,
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
