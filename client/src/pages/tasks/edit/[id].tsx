import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useState, useReducer } from 'react'
import Layout from '../../../components/Layout'
import { Restrict } from '../../../components/Restrict'
import { useAppContext } from '../../../hooks/appContext'


const Edit: React.FC = () => {
  const router = useRouter()
  const { httpClient } = useAppContext()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')

  const pageId = router.query.id as string

  const onSubmit = useCallback((event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!title || !content) return

    httpClient.post(`http://localhost:9000/tasks/update/${encodeURIComponent(pageId)}`, {
      title,
      content,
    }).catch((err) => {
      console.error(err)
    })
  }, [title, content])

  const handleChangeTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.currentTarget.value)
  }, [])

  const handleChangeContent = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.currentTarget.value)
  }, [])

  useEffect(() => {
    httpClient.get(`http://localhost:9000/tasks/${encodeURIComponent(pageId)}`).then((res) => {
      const { title, content } = res.data.task
      setTitle(title)
      setContent(content)
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
            <input type="text" name="title" value={title} onChange={handleChangeTitle} />
          </div>
          <div>
            <textarea name="content" value={content} onChange={handleChangeContent} />
          </div>
          <button type="submit">更新</button>
        </form>
      </main>
    </Layout>
  </Restrict>
}

export default Edit

