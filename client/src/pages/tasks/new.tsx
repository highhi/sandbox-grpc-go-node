import React, { useCallback } from 'react'
import Layout from '../../components/Layout'
import { Restrict } from '../../components/Restrict'
import { useAppContext } from '../../hooks/appContext'


const New: React.FC = () => {
  const { httpClient } = useAppContext()
  const onSubmit = useCallback((event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const title = form.get('title')
    const content = form.get('content')

    httpClient.post('http://localhost:9000/tasks/create', {
      title,
      content
    }).catch((err) => {
      console.error(err)
    })
  }, [])

  return <Restrict>
    <Layout title="Create Task">
      <h1>Create Task</h1>
      <main>
        <form onSubmit={onSubmit}>
          <div>
            <input type="text" name="title" />
          </div>
          <div>
            <textarea name="content" />
          </div>
          <button>送信</button>
        </form>
      </main>
    </Layout>
  </Restrict>
}

export default New

