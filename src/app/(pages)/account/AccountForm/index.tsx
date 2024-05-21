'use client'

import React, { Fragment, useCallback, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Input } from '../../../_components/Input'
import { Message } from '../../../_components/Message'
import { useAuth } from '../../../_providers/Auth'

import classes from './index.module.scss'

type FormData = {
  email: string
  name: string
  password: string
  passwordConfirm: string
}

const AccountForm: React.FC = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const { user, setUser } = useAuth()
  const [changePassword, setChangePassword] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
    reset,
    watch,
  } = useForm<FormData>()

  const password = useRef({})
  password.current = watch('password', '')

  const router = useRouter()

  const onSubmit = useCallback(
    async (data: FormData) => {
      if (user) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/users/${user.id}`, {
          // Make sure to include cookies with fetch
          credentials: 'include',
          method: 'PATCH',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const json = await response.json()
          setUser(json.doc)
          setSuccess('Cuenta actualizada correctamente.')
          setError('')
          setChangePassword(false)
          reset({
            email: json.doc.email,
            name: json.doc.name,
            password: '',
            passwordConfirm: '',
          })
        } else {
          setError('Ha habido un problema al intentar actualizar tu cuenta.')
        }
      }
    },
    [user, setUser, reset],
  )

  useEffect(() => {
    if (user === null) {
      router.push(
        `/login?error=${encodeURIComponent(
          'Necesitas estar registrado para acceder a esta pagina.',
        )}&redirect=${encodeURIComponent('/account')}`,
      )
    }

    // Once user is loaded, reset form to have default values
    if (user) {
      reset({
        email: user.email,
        name: user.name,
        password: '',
        passwordConfirm: '',
      })
    }
  }, [user, router, reset, changePassword])

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.form}>
      <Message error={error} success={success} className={classes.message} />
      {!changePassword ? (
        <Fragment>
          <Input
            name="email"
            label="Correo Electrónico"
            required
            register={register}
            error={errors.email}
            type="email"
          />
          <Input name="name" label="Nombre" register={register} error={errors.name} />

          <p>
            {'Cambia los detalles de tu cuenta abajo, o '}
            <button
              type="button"
              className={classes.changePassword}
              onClick={() => setChangePassword(!changePassword)}
            >
              dale click aquí
            </button>
            {' para cambiar tu contraseña.'}
          </p>
        </Fragment>
      ) : (
        <Fragment>
          <p>
            {'Cambia tu contraseña abajo, o '}
            <button
              type="button"
              className={classes.changePassword}
              onClick={() => setChangePassword(!changePassword)}
            >
              cancela el proceso
            </button>
            .
          </p>
          <Input
            name="password"
            type="password"
            label="Contraseña"
            required
            register={register}
            error={errors.password}
          />
          <Input
            name="passwordConfirm"
            type="password"
            label="Repite la contraseña"
            required
            register={register}
            validate={value => value === password.current || 'Las contraseñas no coinciden.'}
            error={errors.passwordConfirm}
          />
        </Fragment>
      )}
      <Button
        type="submit"
        label={isLoading ? 'Procesando' : changePassword ? 'Cambiar Contraseña' : 'Actualizar Cuenta'}
        disabled={isLoading}
        appearance="primary"
        className={classes.submit}
      />
    </form>
  )
}

export default AccountForm
