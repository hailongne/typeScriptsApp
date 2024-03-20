import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const NotFound = (props: Props) => {
  return (
    <>
      <h1>404</h1>
      <h1>Not Found</h1>
      <Link to='/'>Go To Back Home</Link>
    </>
  )
}

export default NotFound
