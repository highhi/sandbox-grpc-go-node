import React from 'react'
import { User } from '../domain/user'

export const AuthContext = React.createContext<{
  currentUser?: User,
  authenticating: boolean
}>({ currentUser: undefined, authenticating: false })
