import Layout from '../../components/Layout'
import { useCallback, useEffect, useState, memo } from 'react'
import { useAppContext } from '../../hooks/appContext'
import { Restrict } from '../../components/Restrict'

type Task = {
  id: number
  title: string
  content: string
}

type DeleteButtonProps = {
  id: number
  title: string
  deletedCallback(id: number): void
}

const DeleteButton: React.FC<DeleteButtonProps> = memo((props) => {
  const { httpClient } = useAppContext()
  const handleClick = useCallback(() => {
    httpClient
      .post(`http://localhost:9000/tasks/delete/${encodeURIComponent(props.id)}`)
      .then(() => {
        props.deletedCallback(props.id)
      }).catch(err => {
        console.error(err)
      })
  }, [props.deletedCallback])

  return <li key={props.id}><button type="button" onClick={handleClick}>削除</button> {props.title}</li>
})

const Tasks: React.FC = () => {
  const { httpClient } = useAppContext()
  const [tasks, setTasks] = useState<Task[]>([])

  const deleteItem = useCallback((id: number) => {
    const next = tasks.filter(task => task.id !== id)
    setTasks(next)
  }, [tasks])

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
          return <DeleteButton key={task.id} id={task.id} title={task.title} deletedCallback={deleteItem} />
        })}
      </ul>
    </Layout>
  </Restrict>
}

export default Tasks
