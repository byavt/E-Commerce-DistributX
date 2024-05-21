import React, { Fragment } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'

import { CallToActionBlock } from '../../../_blocks/CallToAction'
import { Gutter } from '../../../_components/Gutter'
import { VerticalPadding } from '../../../_components/VerticalPadding'
import { mergeOpenGraph } from '../../../_utilities/mergeOpenGraph'

export default async function CallToActionPage() {
  return (
    <Fragment>
      <Gutter>
        <p>
          <Link href="/styleguide">Guía de estilo</Link>
          {' / '}
          <span>Bloque de llamada a la acción</span>
        </p>
        <h1>Bloque de llamada a la acción</h1>
      </Gutter>
      <VerticalPadding bottom="large" top="none">
        <CallToActionBlock
          blockType="cta"
          richText={[
            {
              type: 'h4',
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]}
          links={[
            {
              link: {
                type: 'custom',
                label: 'Lorem ipsum dolor sit amet',
                url: '#',
                reference: null,
                appearance: 'primary',
              },
            },
          ]}
        />
        <br />
        <br />
        <CallToActionBlock
          blockType="cta"
          invertBackground
          richText={[
            {
              type: 'h4',
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet',
                },
              ],
            },
            {
              children: [
                {
                  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                },
              ],
            },
          ]}
          links={[
            {
              link: {
                type: 'custom',
                label: 'Lorem ipsum dolor sit amet',
                url: '#',
                reference: null,
                appearance: 'primary',
              },
            },
          ]}
        />
      </VerticalPadding>
    </Fragment>
  )
}

export const metadata: Metadata = {
  title: 'Bloque de llamada a la acción',
  description: 'Guía de estilo para el bloque de llamada a la acción',
  openGraph: mergeOpenGraph({
    title: 'Bloque de llamada a la acción',
    url: '/styleguide/call-to-action',
  }),
}
