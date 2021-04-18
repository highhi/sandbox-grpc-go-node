import { runServer } from '../server'

runServer()

process.on('unhandledRejection', (err) => {
  console.error(err)
  process.exit(1)
})

process.on('uncaughtException', (err) => {
  console.error(err)
  process.exit(1)
})
