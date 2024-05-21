import React from 'react'

import classes from './index.module.scss'

const defaultLabels = {
  singular: 'Documento',
  plural: 'Documentos',
}

const defaultCollectionLabels = {
  products: {
    singular: 'Producto',
    plural: 'Productos',
  },
}

export const PageRange: React.FC<{
  className?: string
  totalDocs?: number
  currentPage?: number
  collection?: string
  limit?: number
  collectionLabels?: {
    singular?: string
    plural?: string
  }
}> = props => {
  const {
    className,
    totalDocs,
    currentPage,
    collection,
    limit,
    collectionLabels: collectionLabelsFromProps,
  } = props

  const indexStart = (currentPage ? currentPage - 1 : 1) * (limit || 1) + 1
  let indexEnd = (currentPage || 1) * (limit || 1)
  if (totalDocs && indexEnd > totalDocs) indexEnd = totalDocs

  const { singular, plural } =
    collectionLabelsFromProps || defaultCollectionLabels[collection || ''] || defaultLabels || {}

  return (
    <div className={[className, classes.pageRange].filter(Boolean).join(' ')}>
      {(typeof totalDocs === 'undefined' || totalDocs === 0) && 'La búsqueda no ha sido efectiva.'}
      {typeof totalDocs !== 'undefined' &&
        totalDocs > 0 &&
        `Mostrando ${indexStart} - ${indexEnd} de ${totalDocs} ${totalDocs > 1 ? plural : singular}`}
    </div>
  )
}
