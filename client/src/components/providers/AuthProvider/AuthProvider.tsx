import React, { useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/Auth'
import { User } from '../../../domain/user'
import { firebase } from '../../../infra/firebase'

export const AuthProvider: React.FC = (props) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | undefined>(undefined)
  const [authenticating, setAuthenticating] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user != null && user.displayName != null && user.email != null) {
        setCurrentUser(user)
      }
      setAuthenticating(false)
    }, (error) => {
      console.error(error)
      setAuthenticating(false)
    })
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser, authenticating }}>
      {props.children}
    </AuthContext.Provider>
  )
}
