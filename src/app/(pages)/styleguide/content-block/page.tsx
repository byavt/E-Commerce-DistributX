import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { ContentBlock } from '../../../_blocks/Content'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function ContentBlockPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Guía de estilo</Link>
          {' / '}
          <span>Bloque de Contenido</span>
        </p>
        <h1>Bloque de Contenido</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <ContentBlock
          blockType="content"
          columns={[
            {
              size: 'full',
              richText: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Bloque de Contenido',
  description: 'Guía de estilo para Bloque de Contenido',
  openGraph: mergeOpenGraph({
    title: 'Bloque de Contenido',
    url: '/styleguide/content-block',
  }),
}
