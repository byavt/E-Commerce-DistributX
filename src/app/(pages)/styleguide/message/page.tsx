import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { Gutter } from '../../../_components/Gutter'
import { Message } from '../../../_components/Message'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function MessageComponentPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Guía de estilo</Link>
          {' / '}
          <span>Componente de Mensaje</span>
        </p>
        <h1>Componente de Mensaje</h1>
      </Gutter>
      <Gutter>
        <VerticalPadding bottom="large" top="none">
          <Message message="Esto es un mensaje" />
          <br />
          <Message error="Esto es un error" />
          <br />
          <Message success="Esto es un mensaje de completado correctamente" />
          <br />
          <Message warning="Esto es un aviso" />
        </VerticalPadding>
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Componente de Mensaje',
  description: 'Guía de estilo para Componente de Mensaje.',
  openGraph: mergeOpenGraph({
    title: 'Componente de Mensaje',
    url: '/styleguide/message',
  }),
}
