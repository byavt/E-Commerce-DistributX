import React from 'react'
import { Link } from 'react-router-dom'
import { Banner } from 'payload/components'

import { SeedButton } from './SeedButton'

import './index.scss'

const baseClass = 'before-dashboard'

const BeforeDashboard: React.FC = () => {
  return (
    <div className={baseClass}>
      <Banner className={`${baseClass}__banner`} type="success">
        <h4>Bienvenido al panel de control!</h4>
      </Banner>
      Aquí&apos;s Para continuar:
      <ul className={`${baseClass}__instructions`}>
        <li>
          <SeedButton />
          {' con algunos productos y páginas para impulsar su nuevo proyecto, luego '}
          <a href="/">Visita tu página web</a>
          {' para contemplar lo cámbios.'}
        </li>
        <li>
          {'Dirígete a '}
          <a
            href="https://dashboard.stripe.com/test/apikeys"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Stripe para obtener tus API Keys'}
          </a>
          {
            '. Cree una nueva cuenta si es necesario, luego cópiela en sus variables de entorno y reinicie su servidor. Ver el '
          }
          <a
            href="https://github.com/payloadcms/payload/blob/main/templates/ecommerce/README.md#stripe"
            target="_blank"
            rel="noopener noreferrer"
          >
            {'README'}
          </a>
          {' para más detalles.'}
        </li>
        <li>
          <Link to="/admin/collections/products">Sincroniza cada uno de tus productos</Link>
          {' a Stripe seleccionando el producto correspondiente usando el menú desplegable debajo '}
          <i>Detalles del Producto</i>.
        </li>
      </ul>
    </div>
  )
}

export default BeforeDashboard
