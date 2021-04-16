import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'

export const AuthLoader: React.FC = (props) => {
  const { currentUser } = useContext(AuthContext)

  return currentUser == null
    ? <p>Loading...</p>
    : <>{props.children}</>
}
