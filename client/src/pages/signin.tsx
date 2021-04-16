import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/Auth'
import { firebase } from '../infra/firebase'

const SignIn: React.FC = () => {
  const { currentUser } = useContext(AuthContext)
  const router = useRouter()

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }, [])

  useEffect(() => {
    if (currentUser != null) {
      router.replace('/')
    }
  }, [currentUser])

  return currentUser == null ? <div>
    <button type="button" onClick={onClick}>Google Auth</button>
  </div> : null
}

export default SignIn
