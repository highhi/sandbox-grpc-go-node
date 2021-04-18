import React from 'react'
import { firebase } from '../infra/firebase'

export const AuthContext = React.createContext<{
  currentUser?: firebase.User,
  authenticating: boolean
}>({ currentUser: undefined, authenticating: false })
