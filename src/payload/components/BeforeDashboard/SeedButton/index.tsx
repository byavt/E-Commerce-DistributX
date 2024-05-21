import React, { Fragment, useCallback, useState } from 'react'

export const SeedButton: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [seeded, setSeeded] = useState(false)
  const [error, setError] = useState(null)

  const handleClick = useCallback(
    async e => {
      e.preventDefault()
      if (loading || seeded) return

      setLoading(true)

      setTimeout(async () => {
        try {
          await fetch('/api/seed')
          setSeeded(true)
        } catch (err) {
          setError(err)
        }
      }, 1000)
    },
    [loading, seeded],
  )

  let message = ''
  if (loading) message = ' (creando datos...)'
  if (seeded) message = ' (hecho!)'
  if (error) message = ` (error: ${error})`

  return (
    <Fragment>
      <a href="/api/seed" target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        Siembra tu base de datos
      </a>
      {message}
    </Fragment>
  )
}
