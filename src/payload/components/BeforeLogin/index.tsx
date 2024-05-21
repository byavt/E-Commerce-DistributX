import React from 'react'

const BeforeLogin: React.FC = () => {
  return (
    <div>
      <p>
        <b>Bienvenido a tu tablero!</b>
        {' Aquí es donde los administradores del sitio iniciarán sesión para administrar su tienda. Los clientes necesitarán '}
        <a href={`${process.env.PAYLOAD_PUBLIC_SERVER_URL}/login`}>inicie sesión en el sitio en su lugar</a>
        {' para acceder a su cuenta de usuario, historial de pedidos y más.'}
      </p>
    </div>
  )
}

export default BeforeLogin
