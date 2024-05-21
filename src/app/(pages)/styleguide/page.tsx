import React from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Gutter } from '../../_components/Gutter'
import { VerticalPadding } from '../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'

export default async function Typography() {
  return (
    <Gutter>
      <VerticalPadding bottom="large" top="none">
        <h1>Styleguide</h1>
        <Link href="/styleguide/typography">Tiporafía</Link>
        <br />
        <h2>Blocks</h2>
        <Link href="/styleguide/content-block">Bloque de Contenido</Link>
        <br />
        <Link href="/styleguide/media-block">Bloque de Multimedia</Link>
        <br />
        <Link href="/styleguide/call-to-action">Bloque de llamada a la acción</Link>
        <br />
        <h2>Componentes</h2>
        <Link href="/styleguide/buttons">Botones</Link>
        <br />
        <Link href="/styleguide/message">Mensajes</Link>
      </VerticalPadding>
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Guía de Estilo',
  description: 'Guía de Estilo',
  openGraph: mergeOpenGraph({
    title: 'Guía de Estilo',
    url: '/styleguide',
  }),
}
