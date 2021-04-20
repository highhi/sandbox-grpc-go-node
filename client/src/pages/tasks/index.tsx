import Link from 'next/link'
import { User } from '../../interfaces'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { useEffect, useState } from 'react'
import { useAppContext } from '../../hooks/appContext'
import { Restrict } from '../../components/Restrict'

type Task = {
  id: number
  title: string
  content: string
}

const Tasks: React.FC = () => {
  const { httpClient } = useAppContext()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    httpClient.get<{ tasks: Task[] }>('http://localhost:9000/tasks').then((res) => {
      setTasks(res.data.tasks)
    }).catch(err => {
      console.error(err)
    })
  }, [])
  
  return <Restrict>
    <Layout title="Users List | Next.js + TypeScript Example">
      <h1>Task List</h1>
      <ul>
        {tasks.map((task) => {
          return <li key={task.id}>{task.title}</li>
        })}
      </ul>
    </Layout>
  </Restrict>
}

export default Tasks
