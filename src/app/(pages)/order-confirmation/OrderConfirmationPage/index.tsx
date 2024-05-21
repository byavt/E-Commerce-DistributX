'use client'

import React, { Fragment, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

import { Button } from '../../../_components/Button'
import { Message } from '../../../_components/Message'
import { useCart } from '../../../_providers/Cart'

import classes from './index.module.scss'

export const OrderConfirmationPage: React.FC<{}> = () => {
  const searchParams = useSearchParams()
  const orderID = searchParams.get('order_id')
  const error = searchParams.get('error')

  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <div>
      {error ? (
        <Fragment>
          <Message error={error} />
          <p>
            {`Su pago fue exitoso pero hubo un error al procesar su pedido. Por favor contáctenos para resolver este problema.`}
          </p>
          <div className={classes.actions}>
            <Button href="/account" label="Ver cuenta" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/orders`}
              label="Ver todos los pedidos"
              appearance="secondary"
            />
          </div>
        </Fragment>
      ) : (
        <Fragment>
          <h1>Thank you for your order!</h1>
          <p>
            {`Su pedido ha sido confirmado. Recibirás una confirmación por correo electrónico en breve. Tu ID de pedido es: ${orderID}.`}
          </p>
          <div className={classes.actions}>
            <Button href={`/account/orders/${orderID}`} label="Ver pedido" appearance="primary" />
            <Button
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/account/orders`}
              label="Ver todos los pedidos"
              appearance="secondary"
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}
