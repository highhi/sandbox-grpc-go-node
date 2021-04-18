import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'

export const AuthLoader: React.FC = (props) => {
  const { authenticating } = useContext(AuthContext)

  return authenticating == null
    ? <p>Loading...</p>
    : <>{props.children}</>
}
