import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { ResetPasswordForm } from './ResetPasswordForm'

import classes from './index.module.scss'

export default async function ResetPassword() {
  return (
    <Gutter className={classes.resetPassword}>
      <h1>Restablecer Contraseña</h1>
      <p>Por favor ingrese una nueva contraseña a continuación.</p>
      <ResetPasswordForm />
    </Gutter>
  )
}

export const metadata: Metadata = {
  title: 'Restablecer Contraseña',
  description: 'Proporciona una nueva contraseña.',
  openGraph: mergeOpenGraph({
    title: 'Restablecer Contraseña',
    url: '/reset-password',
  }),
}
