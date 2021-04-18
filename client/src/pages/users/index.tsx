import { GetStaticProps } from 'next'
import axios from 'axios'
import Link from 'next/link'
import { User } from '../../interfaces'
import { sampleUserData } from '../../utils/sample-data'
import Layout from '../../components/Layout'
import List from '../../components/List'
import React, { useCallback, useContext } from 'react'
import { AuthContext } from '../../contexts/Auth'

type Props = {
  items: User[]
}

const WithStaticProps = ({ items }: Props) => {
  const { currentUser } = useContext(AuthContext)
  const onClick = useCallback(async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (currentUser == null) return
    const token = await currentUser.getIdToken()
    axios({
      url: 'http://localhost:9000/hello',
      method: 'get',
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  return <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <button type="button" onClick={onClick}>APIリクエスト</button>
    <p>
      Example fetching data from inside <code>getStaticProps()</code>.
    </p>
    <p>You are currently on: /users</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
}

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const items: User[] = sampleUserData
  return { props: { items } }
}

export default WithStaticProps
