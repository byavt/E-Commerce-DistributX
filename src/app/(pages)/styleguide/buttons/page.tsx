import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { CallToActionBlock } from '../../../_blocks/CallToAction'
import { Button } from '../../../_components/Button'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function ButtonsPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Guía de estilos</Link>
          {' / '}
          <span>Botones</span>
        </p>
        <h1>Buttons</h1>
      </Gutter>
      <Gutter>
        <VerticalPadding bottom="large" top="none">
          <Button label="Botón por defecto" appearance="default" />
          <br /> <br />
          <Button label="Botón primario" appearance="primary" />
          <br /> <br />
          <Button label="Botón secundario" appearance="secondary" />
        </VerticalPadding>
      </Gutter>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Botones',
  description: 'Guía de estilo para botones',
  openGraph: mergeOpenGraph({
    title: 'Botones',
    url: '/styleguide/buttons',
  }),
}
