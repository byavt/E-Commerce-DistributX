import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import staticImage from '../../../../../public/static-image.jpg'
import { MediaBlock } from '../../../_blocks/MediaBlock'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function MediaBlockPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Guía de estilo</Link>
          {' / '}
          <span>Bloque de Multimedia</span>
        </p>
        <h1>Bloque de Multimedia</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <MediaBlock position="default" blockType="mediaBlock" media="" staticImage={staticImage} />
        <br />
        <br />
        <MediaBlock
          position="fullscreen"
          blockType="mediaBlock"
          media=""
          staticImage={staticImage}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Bloque de Multimedia',
  description: 'Guía de estilo para Bloque de Multimedia.',
  openGraph: mergeOpenGraph({
    title: 'Bloque de Multimedia',
    url: '/styleguide/media-block',
  }),
}
