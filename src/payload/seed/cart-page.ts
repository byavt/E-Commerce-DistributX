import type { Page } from '../payload-types'

export const cartPage: Partial<Page> = {
  title: 'Carrito',
  slug: 'cart',
  _status: 'published',
  meta: {
    title: 'Carrito',
    description:
      'Su carrito se sincronizará con su perfil de usuario para que pueda continuar comprando desde cualquier dispositivo.',
  },
  hero: {
    type: 'lowImpact',
    links: [],
    media: '',
    richText: [
      {
        type: 'h1',
        children: [
          {
            text: 'Carrito',
          },
        ],
      },
      {
        type: 'p',
        children: [
          {
            text: 'Este carrito se guarda en el almacenamiento local para que puedas continuar comprando más tarde. Una vez que se autentique con Payload, su carrito se sincronizará con su perfil de usuario para que pueda continuar comprando desde cualquier dispositivo. Este héroe y el contenido debajo del carrito son completamente dinámicos y ',
          },
          {
            type: 'link',
            linkType: 'custom',
            url: '/admin',
            children: [
              {
                text: 'configurado en el panel de administración',
              },
            ],
          },
        ],
      },
    ],
  },
  layout: [
    {
      blockType: 'content',
      columns: [
        {
          size: 'twoThirds',
          link: {
            type: 'reference',
            url: '',
            reference: null,
            label: '',
          },
          richText: [
            {
              children: [
                {
                  text: 'Este es un bloque de creación de diseño personalizado configurable en el CMS; puede ser cualquier cosa que desee. Productos relacionados o sugeridos, una publicación de blog, video, etc.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      richText: [
        {
          children: [
            {
              text: 'Continue shopping',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'This is a custom layout building block ',
            },
            {
              type: 'link',
              linkType: 'custom',
              url: '/admin',
              children: [
                {
                  text: 'configured in the admin dashboard',
                },
              ],
            },
            {
              text: '.',
            },
          ],
        },
      ],
      links: [
        {
          link: {
            type: 'reference',
            url: '',
            reference: {
              relationTo: 'pages',
              value: '{{PRODUCTS_PAGE_ID}}',
            },
            label: 'Continue shopping',
            appearance: 'primary',
          },
        },
      ],
      blockName: 'CTA',
      blockType: 'cta',
    },
  ],
}
