import React from 'react'
import { Metadata } from 'next'

import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import AccountForm from './AccountForm'

import classes from './index.module.scss'

export default async function Account() {
  return (
    <div>
      <h5 className={classes.personalInfo}>Información Personal</h5>
      <AccountForm />
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Cuenta',
  description: 'Cree una cuenta o inicie sesión en su cuenta existente.',
  openGraph: mergeOpenGraph({
    title: 'Cuenta',
    url: '/account',
  }),
}
