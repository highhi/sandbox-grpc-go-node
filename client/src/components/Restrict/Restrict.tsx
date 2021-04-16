import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../contexts/Auth'

export const Restrict: React.FC = (props) => {
  const router = useRouter()
  const { currentUser, authenticating } = useContext(AuthContext)

  useEffect(() => {
    if (currentUser == null && !authenticating) {
      console.log(currentUser)
      router.replace('/')
    }
  }, [currentUser, authenticating])

  if (currentUser == null) return null

  return <>{props.children}</>
}
