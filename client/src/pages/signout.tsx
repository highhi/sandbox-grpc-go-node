import { useRouter } from 'next/router'
import React, { useCallback } from 'react'
import { Restrict } from '../components/Restrict'
import { firebase } from '../infra/firebase'

const SignOut: React.FC = () => {
  const router = useRouter()

  const onClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    firebase.auth().signOut()
      .then(() => {
        router.replace('/')
      })
      .catch((error) => {
        console.log(error)
      });
  }, [])

  return <Restrict>
    <div>
      <button type="button" onClick={onClick}>Sign Out</button>
    </div>
  </Restrict>
}

export default SignOut
