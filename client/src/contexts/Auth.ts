import React from 'react'
import { firebase } from '../infra/firebase'

export const AuthContext = React.createContext<{
  currentUser: firebase.User | null,
  authenticating: boolean
}>({ currentUser: null, authenticating: false })
