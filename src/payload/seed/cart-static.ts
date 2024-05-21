import type { Page } from '../payload-types'

export const staticCart: Page = {
  id: '',
  title: 'Carrito',
  slug: 'cart',
  createdAt: '',
  updatedAt: '',
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
            text: 'Este carrito se guarda en el almacenamiento local para que puedas continuar comprando más tarde. ',
          },
          {
            text: 'Su base de datos aún no tiene una página de carrito.',
            bold: true,
          },
          {
            text: " Actualmente estás viendo una página de demostración. Para administrar el contenido de esta página, ",
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
  },
  layout: [
    {
      richText: [
        {
          children: [
            {
              text: 'Crear una página de carrito',
            },
          ],
          type: 'h4',
        },
        {
          children: [
            {
              text: 'Su base de datos aún no tiene una página de carrito. Para sembrar su base de datos con una página de carrito, ',
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
